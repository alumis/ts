import { CancellationToken } from "@alumis/ts-async/CancellationToken";
import { OperationCancelledError } from "@alumis/ts-async/OperationCancelledError";
import { o } from "./ModifiableObservable";
import { ObservableSet } from "./ObservableSet";

export class AsyncObservableSet<T> extends ObservableSet<T> {

    constructor(private loadAsyncFn: (cancellationToken: CancellationToken) => Promise<Iterable<T>>) {
        super();
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
                        if (this._loadPromise === loadPromise) {
                            this._cancellationToken = cancellationToken = new CancellationToken();
                            continue;
                        }
                        else throw new OperationCancelledError();
                    }
                }
                catch (e) {
                    if (this._loadPromise === loadPromise) {
                        this._loadFinished = true;
                        this._loadPromise = null;
                        this._cancellationToken = null;
                        this.error.value = { error: e };
                    }
                    return;
                }
                if (this._loadPromise === loadPromise) {
                    this._loadFinished = true;
                    this._loadPromise = null;
                    this._cancellationToken = null;
                    this.reconcile(value);
                    this.error.value = null;
                }
                return;
            }
        })();
        this._loadPromise = loadPromise;
        releaseSemaphore();
        return loadPromise;
    }

    error = o<{ error; }>();

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
        this.error.dispose();

        super.dispose();
    }

    restartIfLoadIsOngoingOrFinished() {
        this.error.value = null;
        if (this._loadPromise)
            this._cancellationToken.cancel();
        else if (this._loadFinished) {
            this._loadFinished = false;
            this.ensureLoadFinishedAsync();
        }
    }

    update(loadAsyncFn: (cancellationToken: CancellationToken) => Promise<Iterable<T>>) {
        if (this.loadAsyncFn !== loadAsyncFn) {
            this.loadAsyncFn = loadAsyncFn;
            this.error.value = null;
            if (this._loadPromise)
                this._cancellationToken.cancel();
            else if (this._loadFinished) {
                this._loadFinished = false;
                this.ensureLoadFinishedAsync();
            }
        }
    }
}