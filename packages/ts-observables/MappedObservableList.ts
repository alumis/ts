import { ObservableList, ObservableListNode, ObservableListModification, ObservableListModificationType } from "./ObservableList";
import { ObservableSubscription } from "./ObservableSubscription";

export class MappedObservableList<T, U> extends ObservableList<U> {

    constructor(protected sourceList: ObservableList<T>, protected callbackfn: (value: T) => U) {
        super();
        for (let node = sourceList.head.next; node !== sourceList.tail; node = node.next) {
            let mappedItem = callbackfn(node.item);
            this.append(mappedItem); // TODO: Optimize: Do not use append
            this._map.set(node.item, mappedItem);
        }
        this._sourceListSubscription = sourceList.subscribe(modifications => {
            let mappedModifications: ObservableListModification<U>[] = [];
            for (let m of modifications) {
                switch (m.type) {
                    case ObservableListModificationType.Append: {
                        let node: ObservableListNode<U>, mappedItem = this._map.get(m.item);
                        if (mappedItem) {
                            node = this.itemToNode.get(mappedItem);
                            let previous = node.previous, next = node.next;
                            previous.next = next;
                            next.previous = previous;
                        }
                        else {
                            mappedItem = this.callbackfn(m.item);
                            this.itemToNode.set(mappedItem, node = { item: mappedItem } as any);
                            this._map.set(m.item, mappedItem);
                        }
                        (node.previous = this.tail.previous).next = node;
                        (node.next = this.tail).previous = node;
                        mappedModifications.push({ type: ObservableListModificationType.Append, item: mappedItem });
                        break;
                    }
                    case ObservableListModificationType.InsertBefore: {
                        let node: ObservableListNode<U>, mappedItem = this._map.get(m.item);
                        if (mappedItem) {
                            node = this.itemToNode.get(mappedItem);
                            let previous = node.previous, next = node.next;
                            previous.next = next;
                            next.previous = previous;
                        }
                        else {
                            mappedItem = this.callbackfn(m.item);
                            this.itemToNode.set(mappedItem, node = { item: mappedItem } as any);
                            this._map.set(m.item, mappedItem);
                        }
                        let refNode: ObservableListNode<U>, refItem: U;
                        if (m.refItem !== null)
                            refNode = this.itemToNode.get(refItem = this._map.get(m.refItem));
                        else {
                            refNode = this.tail;
                            refItem = null;
                        }
                        if (refNode.previous === node)
                            return;
                        (node.previous = refNode.previous).next = node;
                        (node.next = refNode).previous = node;
                        mappedModifications.push({ type: ObservableListModificationType.InsertBefore, item: mappedItem, refItem: refItem });
                        break;
                    }
                    case ObservableListModificationType.Remove: {
                        let mappedItem = this._map.get(m.item), node = this.itemToNode.get(mappedItem);
                        this.itemToNode.delete(mappedItem);
                        let previous = node.previous, next = node.next;
                        previous.next = next;
                        next.previous = previous;
                        this._map.delete(m.item);
                        mappedModifications.push({ type: ObservableListModificationType.Remove, item: mappedItem });
                        break;
                    }
                }
            }
            this.notifySubscribers(mappedModifications);
        });
    }

    private _map = new Map<T, U>();
    private _sourceListSubscription: ObservableSubscription<(modifications: ObservableListModification<T>[]) => any>;

    dispose() {
        super.dispose();
        delete this._map;
        this._sourceListSubscription.dispose();
        delete this._sourceListSubscription;
    }
}

declare module "./ObservableList" {
    interface ObservableList<T> {
        map<U>(callbackfn: (value: T) => U): MappedObservableList<T, U>;
        mapDisposeSourceWhenDisposed<U>(callbackfn: (value: T) => U): MappedObservableList<T, U>;
    }
}

ObservableList.prototype.map = function <T, U>(callbackfn: (value: T) => U) {
    return new MappedObservableList(this, callbackfn);
};

ObservableList.prototype.mapDisposeSourceWhenDisposed = function <T, U>(callbackfn: (value: T) => U) {
    let result = new MappedObservableList(this, callbackfn), dispose = result.dispose.bind(result);
    result.dispose = () => { dispose(); this.dispose(); };
    return result;
};