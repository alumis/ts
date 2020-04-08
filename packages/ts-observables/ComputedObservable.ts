import { Observable } from "./Observable";
import { ObservableSubscription } from "./ObservableSubscription";
import { CancellationToken } from "@alumis/ts-async/CancellationToken";
import { o } from "./ModifiableObservable";

let bin: ComputedObservable<any>[] = [], binLength = 0;

export var evaluationStack: ComputedObservable<any>[] = [];

export class ComputedObservable<T> implements Observable<T> {

    constructor() {
        this.refresh = this.refresh.bind(this);
        this.dispose = this.dispose.bind(this);
        (this._subscriptionHead.next = this._subscriptionTail).previous = this._subscriptionHead;
    }

    wrappedValue: T;

    private _subscriptionHead = ObservableSubscription.create<(newValue: T, oldValue: T, errorReason?) => any>();
    private _subscriptionTail = ObservableSubscription.create<(newValue: T, oldValue: T, errorReason?) => any>();

    expression: () => T;
    errorReason;

    observables: Map<any, ObservableSubscription<(newValue: T, oldValue: T, errorReason?) => any>> = new Map();

    get value() {
        if (evaluationStack.length) {
            let co = evaluationStack[evaluationStack.length - 1];
            if (!co.observables.has(this))
                co.observables.set(this, this.subscribeSneakInLine(co.refresh));
        }
        let errorReason = this.errorReason;
        if (errorReason)
            throw errorReason;
        return this.wrappedValue;
    }

    peek() {
        return this.wrappedValue;
    }

    subscribe(callback: (newValue: T, oldValue: T, errorReason?) => any) {
        return ObservableSubscription.createAndPrependToTail(this._subscriptionTail, callback);
    }

    subscribeInvoke(callback: (newValue: T, oldValue: T, errorReason?) => any) {
        callback(this.wrappedValue, undefined, this.errorReason);
        let subscription = ObservableSubscription.createAndPrependToTail(this._subscriptionTail, callback);
        return subscription;
    }

    subscribeSneakInLine(callback: (newValue: T, oldValue: T, errorReason?) => any) {
        return ObservableSubscription.createAndAppendToHead(this._subscriptionHead, callback);
    }

    subscribeInvokeSneakInLine(callback: (newValue: T, oldValue: T, errorReason?) => any) {
        callback(this.wrappedValue, undefined, this.errorReason);
        let subscription = ObservableSubscription.createAndAppendToHead(this._subscriptionHead, callback);
        return subscription;
    }

    private notifySubscribers(newValue: T, oldValue: T, errorReason?) {
        for (let node = this._subscriptionHead.next; node !== this._subscriptionTail;) {
            let currentNode = node;
            node = node.next;
            currentNode.callback(newValue, oldValue, errorReason);
        }
    }

    invalidate() {
        let value = this.wrappedValue;
        this.notifySubscribers(value, value);
    }

    chain<U>(expression: (input: ComputedObservable<T>) => U) {

        let result = co(() => expression(this)), dispose = result.dispose;

        result.dispose = () => {
            (result.dispose = dispose)();
            this.dispose();
        };

        return result;
    }

    dispose() {
        this.wrappedValue = undefined;
        this.expression = undefined;
        this.errorReason = undefined;
        let observables = this.observables;
        observables.forEach(s => { s.dispose(); });
        observables.clear();
        for (let node = this._subscriptionHead.next; node !== this._subscriptionTail;) {
            let currentNode = node;
            node = node.next;
            currentNode.recycle();
        }
        (this._subscriptionHead.next = this._subscriptionTail).previous = this._subscriptionHead;
        if (bin.length === binLength)
            bin.push(this);
        else bin[binLength] = this;
        ++binLength;
    }

    initialize() {
        try {
            evaluationStack.push(this);
            try { var result = this.expression(); }
            finally { evaluationStack.pop(); }
        }
        catch (e) { this.setValueAndErrorAndNotifySubscribers(undefined, e); return; }
        this.setValueAndErrorAndNotifySubscribers(result, null);
    }

    private setValueAndErrorAndNotifySubscribers(value: T, errorReason) {
        let oldValue = this.wrappedValue, oldError = this.errorReason;
        if (value !== oldValue || errorReason !== oldError) {
            this.wrappedValue = value;
            this.errorReason = errorReason;
            this.notifySubscribers(value, oldValue, errorReason);
        }
    }

    refresh() {
        let observables = this.observables;
        observables.forEach(s => { s.dispose(); });
        observables.clear();
        this.initialize();
    }
}

export function co<T>(expression: () => T, evaluateAtOnce = true): ComputedObservable<T> {
    if (binLength) {
        var result = <ComputedObservable<T>>bin[--binLength];
        bin[binLength] = null;
    }
    else var result = new ComputedObservable<T>();
    result.expression = expression;
    if (evaluateAtOnce)
        result.initialize();
    return result;
}

export function coa<T>(expression: (cancellationToken: CancellationToken) => Promise<T>) {

    let cancellationToken = new CancellationToken(), errorReason = o<{ reason: any }>(), result = o<T>(), computedObservable = co(() => {

        let errorReasonValue = errorReason.value;

        if (errorReasonValue)
            throw errorReasonValue.reason;
            
        return result.value;
    });

    let dispose = computedObservable.dispose;

    computedObservable.dispose = () => {
        cancellationToken.cancel();
        queueMicrotask(() => (computedObservable.dispose = dispose)());
    };

    expression(cancellationToken).then(r => result.value = r).catch(r => errorReason.value = { reason: r });

    return computedObservable;
}