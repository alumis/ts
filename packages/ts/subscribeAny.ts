import { Observable } from "./Observable";
import { ObservableSubscription } from "./ObservableSubscription";

export function subscribeAny<T>(observables: Iterable<Observable<T>>, callback: () => any) {

  let hasQueuedMicrotask = false, subscriptions: (ObservableSubscription<(newValue: T, oldValue: T) => any>)[] = [], isDisposed: boolean;

  for (let o of observables) {
    subscriptions.push(
      o.subscribe(() => {
        if (hasQueuedMicrotask)
          return;
        hasQueuedMicrotask = true;
        queueMicrotask(() => {
          if (isDisposed)
            return;
          hasQueuedMicrotask = false;
          callback();
        });
      })
    );
  }

  return () => {
    isDisposed = true;
    for (let s of subscriptions)
      s.dispose();
  };
}