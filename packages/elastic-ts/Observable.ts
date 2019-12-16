import { ObservableSubscription } from "./ObservableSubscription";

export interface Observable<T> {

    value: T;
    peek(): T;
    subscribe(callback: (newValue: T, oldValue: T) => any): ObservableSubscription<(newValue: T, oldValue: T) => any>;
    subscribeInvoke(callback: (newValue: T, oldValue: T) => any): ObservableSubscription<(newValue: T, oldValue: T) => any>;
    invalidate(): void;
    dispose(): void;
}