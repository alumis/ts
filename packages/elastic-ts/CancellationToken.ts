import { OperationCancelledError } from "./OperationCancelledError";

export class CancellationToken {

    isCancellationRequested: boolean;
    listeners = new Set<() => any>();

    addListener(listener: () => any) {
        if (this.isCancellationRequested)
            listener();
        else this.listeners.add(listener);
    }

    cancel() {
        if (!this.isCancellationRequested) {
            this.isCancellationRequested = true;
            for (var f of this.listeners)
                f();
            delete this.listeners;
        }
    }

    removeListener(listener: () => any) {
        if (this.listeners)
            this.listeners.delete(listener);
    }

    link(token: CancellationToken) {
        return new LinkedCancellationToken([this, token]);
    }

    throwIfCancellationRequested() {
        if (this.isCancellationRequested)
            throw new OperationCancelledError();
    }
}

export class CancellationTokenNone extends CancellationToken {

    addListener(_listener: () => any) {
    }

    removeListener(_listener: () => any) {
    }

    cancel() {
        throw new Error();
    }

    static get singleton() {
        return CancellationTokenNone._singleton || (CancellationTokenNone._singleton = new CancellationTokenNone());
    }

    private static _singleton: CancellationTokenNone;
}

export class LinkedCancellationToken extends CancellationToken {

    constructor(protected tokens: Iterable<CancellationToken>) {
        super();
        this.cancel = this.cancel.bind(this);
        for (let t of tokens)
            t.addListener(this.cancel);
    }

    dispose() {
        for (var t of this.tokens)
            t.removeListener(this.cancel);
    }
}