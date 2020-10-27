import { ObservableSubscription } from "./ObservableSubscription";
import { evaluationStack } from "./ComputedObservable";

export class ObservableSet<T> {

    constructor(iterable?: Iterable<T>) {
        this.dispose = this.dispose.bind(this);
        (this._subscriptionHead.next = this._subscriptionTail).previous = this._subscriptionHead;
        this.wrappedValue = new Set(iterable);
    }

    wrappedValue: Set<T>;

    private _subscriptionHead = ObservableSubscription.create<(addedItems: T[], removedItems: T[]) => any>();
    private _subscriptionTail = ObservableSubscription.create<(addedItems: T[], removedItems: T[]) => any>();

    get value() {
        if (evaluationStack.length) {
            let co = evaluationStack[evaluationStack.length - 1];
            if (!co.observables.has(this))
                co.observables.set(this, this.subscribeSneakInLine(co.refresh));
        }
        return this.wrappedValue;
    }

    add(value: T) {
        if (!this.wrappedValue.has(value)) {
            this.wrappedValue.add(value);
            this.notifySubscribers([value], null);
            return true;
        }
        return false;
    }

    addItems(items: Iterable<T>) {
        let addedItems: T[] = [];
        for (let i of items) {
            if (!this.wrappedValue.has(i)) {
                this.wrappedValue.add(i);
                addedItems.push(i);
            }
        }
        if (addedItems.length)
            this.notifySubscribers(addedItems, null);
    }

    clear() {
        let removedItems: T[] = [];
        for (let i of this.wrappedValue)
            removedItems.push(i);
        if (removedItems.length) {
            this.wrappedValue.clear();
            this.notifySubscribers(null, removedItems);
        }
    }

    remove(value: T) {
        if (this.wrappedValue.has(value)) {
            this.wrappedValue.delete(value);
            this.notifySubscribers(null, [value]);
            return true;
        }
        return false;
    }

    removeItems(items: Iterable<T>) {
        let removedItems: T[] = [];
        for (let i of items) {
            if (this.wrappedValue.has(i)) {
                this.wrappedValue.delete(i);
                removedItems.push(i);
            }
        }
        if (removedItems.length)
            this.notifySubscribers(null, removedItems);
    }

    has(value: T) {
        if (evaluationStack.length) {
            let co = evaluationStack[evaluationStack.length - 1];
            if (!co.observables.has(this))
                co.observables.set(this, this.subscribeSneakInLine(co.refresh));
        }
        return this.wrappedValue.has(value);
    }

    [Symbol.iterator]() {
        if (evaluationStack.length) {
            let co = evaluationStack[evaluationStack.length - 1];
            if (!co.observables.has(this))
                co.observables.set(this, this.subscribeSneakInLine(co.refresh));
        }
        return this.value[Symbol.iterator]();
    }

    entries() {
        if (evaluationStack.length) {
            let co = evaluationStack[evaluationStack.length - 1];
            if (!co.observables.has(this))
                co.observables.set(this, this.subscribeSneakInLine(co.refresh));
        }
        return this.value.entries();
    }

    keys() {
        if (evaluationStack.length) {
            let co = evaluationStack[evaluationStack.length - 1];
            if (!co.observables.has(this))
                co.observables.set(this, this.subscribeSneakInLine(co.refresh));
        }
        return this.value.keys();
    }

    values() {
        if (evaluationStack.length) {
            let co = evaluationStack[evaluationStack.length - 1];
            if (!co.observables.has(this))
                co.observables.set(this, this.subscribeSneakInLine(co.refresh));
        }
        return this.value.values();
    }

    reconcile(items: Iterable<T>) {
        if (!(items instanceof Set))
            items = new Set(items);
        let removedItems: T[] = [];
        for (let i of this.wrappedValue)
            if (!(items as Set<T>).has(i))
                removedItems.push(i);
        if (removedItems.length) {
            for (let i of removedItems)
                this.wrappedValue.delete(i);
            this.notifySubscribers(null, removedItems);
        }
        let addedItems: T[] = [];
        for (let i of items) {
            if (!this.wrappedValue.has(i)) {
                this.wrappedValue.add(i);
                addedItems.push(i);
            }
        }
        if (addedItems.length)
            this.notifySubscribers(addedItems, null);
    }

    subscribe(action: (addedItems: T[], removedItems: T[]) => any) {
        return ObservableSubscription.createAndPrependToTail(this._subscriptionTail, action);
    }

    subscribeSneakInLine(action: (addedItems: T[], removedItems: T[]) => any) {
        return ObservableSubscription.createAndAppendToHead(this._subscriptionHead, action);
    }

    protected notifySubscribers(addedItems: T[], removedItems: T[]) {
        for (let node = this._subscriptionHead.next; node != this._subscriptionTail;) {
            let currentNode = node;
            node = node.next;
            currentNode.callback(addedItems, removedItems);
        }
    }

    dispose() {
        delete this.wrappedValue;
        for (let node = this._subscriptionHead.next; node != this._subscriptionTail;)
            (node = node.next).previous.recycle();
        this._subscriptionHead.recycle();
        delete this._subscriptionHead;
        this._subscriptionTail.recycle();
        delete this._subscriptionTail;
    }
}