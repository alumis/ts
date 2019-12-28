
// Each observable keeps a doubly-linked list of subscriptions (callbacks to invoke when a state changes).
// It is a doubly-linked list because insertions and deletions should be fast.
// The doubly-linked list usually has a head and a tail.
// When a subscription is no longer needed, it should be recycled for later usage.
// The bin immediately below keeps references to ready-to-use subscriptions that have been recycled.

let bin: ObservableSubscription<any>[] = [], binLength = 0;

export class ObservableSubscription<T> {

    constructor() {
        this.unsubscribeAndRecycle = this.unsubscribeAndRecycle.bind(this);
    }

    /**
     * Creates or returns a recycled instance.
     * @internal
     */
    static create<T>(): ObservableSubscription<T> {
        if (binLength) {
            let existing = bin[--binLength];
            bin[binLength] = null;
            return existing;
        }
        return new ObservableSubscription();
    }

    /**
     * Creates and appends a new subscription to right before the tail.
     * @internal
     */
    static createAndPrependToTail<T>(tail: ObservableSubscription<T>, callback: T) {
        let result = ObservableSubscription.create<T>();
        (result.previous = tail.previous).next = result;
        (result.next = tail).previous = result;
        result.callback = callback;
        return result;
    }

    /**
     * Creates and prepends a new subscription to right after the head.
     * @internal
     */
    static createAndAppendToHead<T>(head: ObservableSubscription<T>, callback: T) {
        let result = ObservableSubscription.create<T>();
        (result.next = head.next).previous = result;
        (result.previous = head).next = result;
        result.callback = callback;
        return result;
    }

    callback: T;

    /**
     * The previous node in the doubly-linked list.
     * @internal
     */
    previous: ObservableSubscription<T>;

    /**
     * The next node in the doubly-linked list.
     * @internal
     */
    next: ObservableSubscription<T>;

    private _suspendedCallback: T;
    private _suspendedValue: T;

    suspend() {

    }

    /**
     * Recycles a subscription (places it in the bin) such that it may be reused.
     * @remarks
     * Use unsubscribeAndRecycle() if you instead wish to both unsubscribe and recycle.
     * @internal
     */
    recycle() {
        delete this.callback;
        delete this.previous;
        delete this.next;
        if (bin.length === binLength)
            bin.push(this);
        else bin[binLength] = this;
        ++binLength;
    }

    /**
     * Use this function if you no longer wish the callback to be invoked.
     * @remarks
     * After invocation, for long-lived scopes, you should expunge any reference you have to it to accommodate the GC.
     */
    unsubscribeAndRecycle() {
        (this.previous.next = this.next).previous = this.previous;
        this.recycle();
    };
}

function doNothingCallback() {

}