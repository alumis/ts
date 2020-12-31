import { CancellationToken } from "@alumis/ts-async/CancellationToken";
import { OperationCancelledError } from "@alumis/ts-async/OperationCancelledError";
import { co } from "./ComputedObservable";
import { o } from "./ModifiableObservable";
import { Observable } from "./Observable";

export class AsyncObservable<T> implements Observable<T> {

    constructor(private loadAsyncFn: (cancellationToken: CancellationToken) => T) {
    }

    private _loadFinished: boolean;
    private _loadPromise: Promise<void>;
    private _cancellationToken: CancellationToken;

    ensureLoadFinishedAsync() {
        if (this._loadFinished)
            return Promise.resolve();
        if (this._loadPromise)
            return this._loadPromise;
        let cancellationToken = new CancellationToken();
        this._cancellationToken = cancellationToken;
        let releaseSemaphore: (value?: void | PromiseLike<void>) => void, semaphore = new Promise<void>(r => { releaseSemaphore = r; });
        let loadPromise = (async () => {
            await semaphore;
            for (; ;) {
                try {
                    var value = await this.loadAsyncFn(cancellationToken);
                    if (cancellationToken.isCancellationRequested) {
                        if (this._loadPromise === loadPromise)
                            continue;
                        else throw new OperationCancelledError();
                    }
                }
                catch (e) {
                    if (this._loadPromise === loadPromise) {
                        this._loadFinished = true;
                        this._loadPromise = null;
                        this._cancellationToken = null;
                        this._state.value = { error: { error: e } };
                    }
                    return;
                }
                if (this._loadPromise === loadPromise) {
                    this._loadFinished = true;
                    this._loadPromise = null;
                    this._cancellationToken = null;
                    this._state.value = { value };
                }
                return;
            }
        })();
        this._loadPromise = loadPromise;
        releaseSemaphore();
        return loadPromise;
    }

    private _state = o<{ value?: T; error?: { error; }; }>();

    private _computedValue = co(() => {
        let value = this._state.value;
        if (!value)
            return undefined;
        if (value.error)
            throw value.error.error;
        return value.value;
    });
    
    get value() {
        return this._computedValue.value;
    }

    peek() {
        return this._computedValue.peek();
    }

    subscribe(callback: (newValue: T, oldValue: T) => any) {
        return this._computedValue.subscribe(callback);
    }

    subscribeSneakInLine(callback: (newValue: T, oldValue: T) => any) {
        return this._computedValue.subscribeSneakInLine(callback);
    }

    subscribeInvoke(callback: (newValue: T, oldValue: T) => any) {
        return this._computedValue.subscribeInvoke(callback);
    }

    subscribeInvokeSneakInLine(callback: (newValue: T, oldValue: T) => any) {
        return this._computedValue.subscribeInvokeSneakInLine(callback);
    }

    invalidate() {
        this._computedValue.invalidate();
    }

    cancelGracefully() {
        if (this._loadPromise) {
            let cancellationToken = this._cancellationToken;
            this._loadPromise = null;
            this._cancellationToken = null;
            cancellationToken.cancel();
        }
    }

    dispose() {
        this.cancelGracefully();
        this._computedValue.dispose();
        this._state.dispose();
    }
    
    update(loadAsyncFn: (cancellationToken: CancellationToken) => T) {
        if (this.loadAsyncFn !== loadAsyncFn) {
            this.loadAsyncFn = loadAsyncFn;
            this._state.value = null;
            if (this._loadPromise)
                this._cancellationToken.cancel();
            else if (this._loadFinished) {
                this._loadFinished = false;
                this.ensureLoadFinishedAsync();
            }
        }
    }
}