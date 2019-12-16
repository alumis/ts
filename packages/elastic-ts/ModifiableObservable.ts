import { Observable } from "./Observable";
import { ObservableSubscription } from "./ObservableSubscription";
import { evaluationStack } from "./ComputedObservable";

let bin: ModifiableObservable<any>[] = [], binLength = 0;

export class ModifiableObservable<T> implements Observable<T> {

    constructor() {
        this.dispose = this.dispose.bind(this);
        (this._subscriptionHead.next = this._subscriptionTail).previous = this._subscriptionHead;
    }

    wrappedValue: T;

    private _subscriptionHead = ObservableSubscription.create<(newValue: T, oldValue: T) => any>();
    private _subscriptionTail = ObservableSubscription.create<(newValue: T, oldValue: T) => any>();

    get value() {
        if (evaluationStack.length) {
            let co = evaluationStack[evaluationStack.length - 1];
            if (!co.observables.has(this))
                co.observables.set(this, this.subscribeSneakInLine(co.refresh));
        }
        return this.wrappedValue;
    }

    set value(newValue: T) {
        let oldValue = this.wrappedValue;
        if (newValue !== oldValue) {
            this.wrappedValue = newValue;
            this.notifySubscribers(newValue, oldValue);
        }
    }

    peek() {
        return this.wrappedValue;
    }

    subscribe(callback: (newValue: T, oldValue: T) => any) {
        return ObservableSubscription.createAndPrependToTail(this._subscriptionTail, callback);
    }

    subscribeInvoke(callback: (newValue: T, oldValue: T) => any) {
        callback(this.wrappedValue, undefined);
        let subscription = ObservableSubscription.createAndPrependToTail(this._subscriptionTail, callback);
        return subscription;
    }

    private subscribeSneakInLine(callback: (newValue: T, oldValue: T) => any) {
        return ObservableSubscription.createAndAppendToHead(this._subscriptionHead, callback);
    }

    private notifySubscribers(newValue: T, oldValue: T) {
        for (let node = this._subscriptionHead.next; node !== this._subscriptionTail;) {
            let currentNode = node;
            node = node.next;
            currentNode.callback(newValue, oldValue);
        }
    }

    private notifySubscribersExcept(newValue: T, oldValue: T, exemptedObservableSubscription: ObservableSubscription<(newValue: T, oldValue: T) => any>) {
        for (let node = this._subscriptionHead.next; node !== this._subscriptionTail;) {
            let currentNode = node;
            node = node.next;
            if (currentNode !== exemptedObservableSubscription)
                currentNode.callback(newValue, oldValue);
        }
    }

    setValueDontNotifySubscription(newValue: T, exemptedObservableSubscription: ObservableSubscription<(newValue: T, oldValue: T) => any>) {
        let oldValue = this.wrappedValue;
        if (newValue !== oldValue) {
            this.wrappedValue = newValue;
            this.notifySubscribersExcept(newValue, oldValue, exemptedObservableSubscription);
        }
    }

    invalidate() {
        let value = this.wrappedValue;
        this.notifySubscribers(value, value);
    }

    dispose() {
        delete this.wrappedValue;
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
}

export function mo<T>(value?: T): ModifiableObservable<T> {
    if (binLength) {
        var result = <ModifiableObservable<T>>bin[--binLength];
        bin[binLength] = null;
    }
    else var result = new ModifiableObservable<T>();
    result.wrappedValue = value;
    return result;
}
