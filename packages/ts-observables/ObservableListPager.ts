import { CancellationToken } from "@alumis/ts-async/CancellationToken";
import { OperationCancelledError } from "@alumis/ts-async/OperationCancelledError";
import { ObservableList } from "./ObservableList";

export class ObservableListPager<T> extends ObservableList<T> {
    constructor(private loadPageAsync: (page: number, cancellationToken: CancellationToken) => Promise<T[]>, private pageSize: number) {
        super();
    }

    private _currentPage = 1;
    private _isComplete = false;
    private _loadMorePromise: Promise<void>;
    private _cancellationToken: CancellationToken;

    loadMoreAsync() {

        if (this._isComplete)
            return Promise.resolve();

        if (this._loadMorePromise)
            return this._loadMorePromise;

        let cancellationToken = new CancellationToken();

        this._cancellationToken = cancellationToken;

        let releaseSemaphore: (value?: void | PromiseLike<void>) => void;
        let semaphore = new Promise<void>(r => releaseSemaphore = r);

        let loadMorePromise = (async () => {

            await semaphore;

            try {

                let items = await this.loadPageAsync(this._currentPage, cancellationToken);

                cancellationToken.throwIfCancellationRequested();

                let currentPage = this._currentPage;

                if (items.length < this.pageSize)
                    this._isComplete = true;

                else ++this._currentPage;

                if (currentPage === 1)
                    this.reconcile(items);

                else {
                    for (let i of items)
                        this.append(i);
                }
            }

            catch (e) {

                if (e instanceof OperationCancelledError)
                    return;

                throw e;
            }

            finally {

                if (this._loadMorePromise === loadMorePromise)
                    this._loadMorePromise = null;

                if (this._cancellationToken === cancellationToken)
                    this._cancellationToken = null;
            }

        })();

        this._loadMorePromise = loadMorePromise;

        releaseSemaphore();

        return loadMorePromise;
    }

    cancelLoadMore() {

        if (this._cancellationToken) {

            this._cancellationToken.cancel();

            this._loadMorePromise = null;
            this._cancellationToken = null;
        }
    }

    reset(loadPageAsync: (page: number, cancellationToken: CancellationToken) => Promise<T[]>, pageSize: number) {

        this.cancelLoadMore();
        this.loadPageAsync = loadPageAsync;

        this.pageSize = pageSize;

        this._currentPage = 1;
        this._isComplete = false;
    }

    dispose() {
        super.dispose();
        this.cancelLoadMore();
    }
}