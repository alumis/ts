import { co, ComputedObservable } from "./ComputedObservable";
import { ObservableSet } from "./ObservableSet";
import { ObservableSubscription } from "./ObservableSubscription";

export class FilteredObservableSet<T> extends ObservableSet<T> {

    constructor(protected sourceSet: ObservableSet<T>, protected compareFn: (item: T) => boolean) {

        super();

        for (let i of sourceSet) {
            if (this.createComparison(i).peek())
                this.wrappedValue.add(i);
        }

        this._sourceSetSubscription = sourceSet.subscribe(async (addedItems, removedItems) => {

            await this.synchronizeAsync();

            if (addedItems) {

                var addedItems: T[] = [];

                for (let i of addedItems) {
                    if (!this.wrappedValue.has(i)) {
                        if (this.createComparison(i).peek()) {
                            this.wrappedValue.add(i);
                            addedItems.push(i);
                        }
                    }
                }
            }

            if (removedItems) {

                var removedItems: T[] = [];

                for (let i of removedItems) {

                    if (this.wrappedValue.has(i)) {

                        this._comparisons.get(i).dispose();
                        this._comparisons.delete(i);

                        if (this.wrappedValue.delete(i))
                            removedItems.push(i);
                    }
                }
            }

            if (addedItems && addedItems.length || removedItems && removedItems.length)
                this.notifySubscribers(addedItems, removedItems);
        });
    }

    private _comparisons = new Map<T, ComputedObservable<boolean>>();
    private _sourceSetSubscription: ObservableSubscription<(addedItems: T[], removedItems: T[]) => any>;

    private createComparison(node: T) {
        let o = co(() => this.compareFn(node));
        o.subscribe(this.reflow);
        this._comparisons.set(node, o);
        return o;
    }

    private _reflowHandle: number;
    private _synchronizationPromise: Promise<void>;
    private _resolveSynchronizationPromise: () => void;

    private reflow = (n: boolean) => {

        if (this._reflowHandle)
            return;

        this._reflowHandle = setTimeout(() => {

            let addedItems: T[] = [], removedItems: T[] = [];

            for (let i of this.sourceSet) {
                if (this._comparisons.get(i).peek()) {
                    if (!this.wrappedValue.has(i)) {
                        this.wrappedValue.add(i);
                        addedItems.push(i);
                    }
                }
                else if (this.wrappedValue.has(i)) {
                    this.wrappedValue.delete(i);
                    removedItems.push(i);
                }
            }

            delete this._reflowHandle;

            if (addedItems.length || removedItems.length)
                this.notifySubscribers(addedItems, removedItems);

            if (this._synchronizationPromise) {
                let resolve = this._resolveSynchronizationPromise;
                delete this._synchronizationPromise;
                delete this._resolveSynchronizationPromise;
                resolve();
            }
        }, 0) as any;
    };

    synchronizeAsync() {

        if (this._reflowHandle)
            return this._synchronizationPromise || (this._synchronizationPromise = new Promise((resolve, reject) => { this._resolveSynchronizationPromise = resolve; }));

        else return Promise.resolve();
    }

    dispose() {
        super.dispose();
        this._comparisons.forEach(o => { o.dispose(); });
        delete this._comparisons;
        this._sourceSetSubscription.dispose();
        delete this._sourceSetSubscription;
    }
}

declare module "./ObservableSet" {
    interface ObservableSet<T> {
        filer(compareFn: (i: T) => boolean): FilteredObservableSet<T>;
        filterDisposeSourceWhenDisposed(compareFn: (i: T) => boolean): FilteredObservableSet<T>;
    }
}
ObservableSet.prototype.filer = function <T>(compareFn: (i: T) => boolean) {
    return new FilteredObservableSet(this, compareFn);
};
ObservableSet.prototype.filterDisposeSourceWhenDisposed = function <T>(compareFn: (i: T) => boolean) {
    let result = new FilteredObservableSet(this, compareFn), dispose = result.dispose.bind(result);
    result.dispose = () => { dispose(); this.dispose(); };
    return result;
};