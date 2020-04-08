import { Observable } from "./Observable";
import { ObservableSubscription } from "./ObservableSubscription";

let bin: ComputedObservable<any>[] = [], binLength = 0;

export var evaluationStack: ComputedObservable<any>[] = [];

export class ComputedObservable<T> implements Observable<T> {

    constructor() {
        this.refresh = this.refresh.bind(this);
        this.dispose = this.dispose.bind(this);
        (this._subscriptionHead.next = this._subscriptionTail).previous = this._subscriptionHead;
    }

    wrappedValue: T;

    private _subscriptionHead = ObservableSubscription.create<(newValue: T, oldValue: T, error?) => any>();
    private _subscriptionTail = ObservableSubscription.create<(newValue: T, oldValue: T, error?) => any>();

    expression: () => T;
    error;

    observables: Map<any, ObservableSubscription<(newValue: T, oldValue: T, error?) => any>> = new Map();

    get value() {
        if (evaluationStack.length) {
            let co = evaluationStack[evaluationStack.length - 1];
            if (!co.observables.has(this))
                co.observables.set(this, this.subscribeSneakInLine(co.refresh));
        }
        let error = this.error;
        if (error)
            throw error;
        return this.wrappedValue;
    }

    peek() {
        return this.wrappedValue;
    }

    subscribe(callback: (newValue: T, oldValue: T, error?) => any) {
        return ObservableSubscription.createAndPrependToTail(this._subscriptionTail, callback);
    }

    subscribeInvoke(callback: (newValue: T, oldValue: T, error?) => any) {
        callback(this.wrappedValue, undefined, this.error);
        let subscription = ObservableSubscription.createAndPrependToTail(this._subscriptionTail, callback);
        return subscription;
    }

    subscribeSneakInLine(callback: (newValue: T, oldValue: T, error?) => any) {
        return ObservableSubscription.createAndAppendToHead(this._subscriptionHead, callback);
    }

    subscribeInvokeSneakInLine(callback: (newValue: T, oldValue: T, error?) => any) {
        callback(this.wrappedValue, undefined, this.error);
        let subscription = ObservableSubscription.createAndAppendToHead(this._subscriptionHead, callback);
        return subscription;
    }

    private notifySubscribers(newValue: T, oldValue: T, error?) {
        for (let node = this._subscriptionHead.next; node !== this._subscriptionTail;) {
            let currentNode = node;
            node = node.next;
            currentNode.callback(newValue, oldValue, error);
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
        this.error = undefined;
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

    private setValueAndErrorAndNotifySubscribers(value: T, error) {
        let oldValue = this.wrappedValue, oldError = this.error;
        if (value !== oldValue || error !== oldError) {
            this.wrappedValue = value;
            this.error = error;
            this.notifySubscribers(value, oldValue, error);
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