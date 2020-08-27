import { ObservableList, ObservableListNode, ObservableListModification, ObservableListModificationType } from "./ObservableList";
import { ObservableSet } from "./ObservableSet";
import { ComputedObservable, co } from "./ComputedObservable";
import { ObservableSubscription } from "./ObservableSubscription";
export class SortedObservableSet<T> extends ObservableList<T> {
    constructor(protected sourceSet: ObservableSet<T>, protected compareFn: (a: T, b: T) => number) {
        super();
        let sorted: T[] = [];
        for (let i of sourceSet.wrappedValue)
            sorted.push(i);
        for (let i of sorted.sort(compareFn))
            this.append(i);
        for (let node = this.head.next; node !== this.tail; node = node.next)
            this.createComparison(node);
        this._sourceSetSubscription = sourceSet.subscribe(async (addedItems, removedItems) => {
            await this.synchronizeAsync();
            let modifications: ObservableListModification<T>[] = [];
            let previousAndNext = new Set<ObservableListNode<T>>();
            if (removedItems) {
                for (let i of removedItems) {
                    let node = this.itemToNode.get(i), previous = node.previous, next = node.next;
                    previous.next = next;
                    next.previous = previous;
                    this.itemToNode.delete(i);
                    this._comparisons.get(node).dispose();
                    this._comparisons.delete(node);
                    previousAndNext.delete(node);
                    modifications.push({ type: ObservableListModificationType.Remove, item: i });
                    if (previous !== this.head)
                        previousAndNext.add(previous);
                    if (next !== this.tail)
                        previousAndNext.add(next);
                }
            }
            let newNodes: ObservableListNode<T>[] = [];
            if (addedItems) {
                for (let i of addedItems) {
                    for (let refNode = this.head.next; ; refNode = refNode.next) {
                        if (refNode === this.tail || this.compareFn(i, refNode.item) < 0) {
                            let node: ObservableListNode<any> = { item: i } as any;
                            this.itemToNode.set(i, node);
                            (node.previous = refNode.previous).next = node;
                            (node.next = refNode).previous = node;
                            if (node.next === this.tail)
                                modifications.push({ type: ObservableListModificationType.Append, item: i });
                            else modifications.push({ type: ObservableListModificationType.InsertBefore, item: i, refItem: refNode.item });
                            if (node.previous !== this.head)
                                previousAndNext.add(node.previous);
                            if (node.next !== this.tail)
                                previousAndNext.add(node.next);
                            newNodes.push(node);
                            break;
                        }
                    }
                }
            }
            for (let n of newNodes) {
                previousAndNext.delete(n);
                this.createComparison(n);
            }
            for (let n of previousAndNext) {
                this._comparisons.get(n).refresh();
            }
            this.notifySubscribers(modifications);
        });
    }
    private _comparisons = new Map<ObservableListNode<T>, ComputedObservable<string>>();
    private _sourceSetSubscription: ObservableSubscription<(addedItems: T[], removedItems: T[]) => any>;
    private createComparison(node: ObservableListNode<T>) {
        let o = co(() => {
            if (node.previous !== this.head) {
                if (node.next !== this.tail)
                    return normalizeComparison(this.compareFn(node.item, node.previous.item)) + " " + normalizeComparison(this.compareFn(node.next.item, node.item));
                else return normalizeComparison(this.compareFn(node.item, node.previous.item)) + " 1";
            }
            else if (node.next !== this.tail)
                return "1 " + normalizeComparison(this.compareFn(node.next.item, node.item));
            else return "1 1";
        });
        o.subscribe(this.reflow);
        this._comparisons.set(node, o);
    }
    private _reflowHandle: number;
    private _synchronizationPromise: Promise<void>;
    private _resolveSynchronizationPromise: () => void;
    private reflow = (n: string) => {
        if (this._reflowHandle)
            return;
        this._reflowHandle = setTimeout(() => {
            let sortedItems = Array.from(this.sourceSet.wrappedValue).sort(this.compareFn);
            let unsortedNode = this.head.next;
            let modifications: ObservableListModification<T>[] = [];
            for (let i of sortedItems) {
                let sortedNode = this.itemToNode.get(i);
                if (sortedNode !== unsortedNode) {
                    // Detach sorted node
                    let previous = sortedNode.previous, next = sortedNode.next;
                    previous.next = next;
                    next.previous = previous;
                    // Insert sorted node before unsorted node
                    (sortedNode.previous = unsortedNode.previous).next = sortedNode;
                    sortedNode.next = unsortedNode;
                    unsortedNode.previous = sortedNode;
                    modifications.push({ type: ObservableListModificationType.InsertBefore, item: sortedNode.item, refItem: unsortedNode.item });
                }
                else unsortedNode = unsortedNode.next;
                this._comparisons.get(sortedNode).wrappedValue = "1 1";
            }
            delete this._reflowHandle;
            this.notifySubscribers(modifications);
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
function normalizeComparison(n: number) {
    if (n < 0)
        return -1;
    if (n === 0)
        return 0;
    if (0 < n)
        return 1;
    return NaN;
}
declare module "./ObservableSet" {
    interface ObservableSet<T> {
        sort(compareFn: (a: T, b: T) => number): SortedObservableSet<T>;
        sortDisposeSourceWhenDisposed(compareFn: (a: T, b: T) => number): SortedObservableSet<T>;
    }
}
ObservableSet.prototype.sort = function <T>(compareFn: (a: T, b: T) => number) {
    return new SortedObservableSet(this, compareFn);
};
ObservableSet.prototype.sortDisposeSourceWhenDisposed = function <T>(compareFn: (a: T, b: T) => number) {
    let result = new SortedObservableSet(this, compareFn);
    result.dispose = () => { result.dispose(); this.dispose(); };
    return result;
};