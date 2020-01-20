import { ObservableSubscription } from "./ObservableSubscription";

export interface Observable<T> {

  /** Gets or sets the value. */
  value: T;
  /** Gets the value without affecting the current evaluation scope. */
  peek(): T;
  /**
   * Subscribes to the observable.
   * @param callback A function that gets called when the value changes
   */
  subscribe(callback: (newValue: T, oldValue: T) => any): ObservableSubscription<(newValue: T, oldValue: T) => any>;
  /**
   * Same as subscribe(), but invokes the callback immediately upon invocation.
   * @param callback A function that gets called when the value changes
   */
  subscribeInvoke(callback: (newValue: T, oldValue: T) => any): ObservableSubscription<(newValue: T, oldValue: T) => any>;
  /** Forces all subscribers to get notified that the value changed. */
  invalidate(): void;
  /** Disposes the observable along with all subscriptions associated with it. */
  dispose(): void;
}