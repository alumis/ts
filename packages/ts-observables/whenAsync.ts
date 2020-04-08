import { CancellationToken } from "@alumis/ts-async/CancellationToken";
import { co } from "./ComputedObservable";
import { OperationCancelledError } from "@alumis/ts-async/OperationCancelledError";

export function whenAsync(expression: () => boolean, cancellationToken?: CancellationToken) {
    if (cancellationToken) {
        return new Promise((resolve, reject) => {
            let listener: () => void, notRejected = true, observableExpression = co(() => {
                try {
                    return expression();
                }
                catch (e) {
                    if (listener)
                        cancellationToken.removeListener(listener);
                    else notRejected = false;
                    queueMicrotask(observableExpression.dispose);
                    reject(e);
                }
            });
            if (notRejected) {
                listener = () => {
                    queueMicrotask(observableExpression.dispose);
                    reject(new OperationCancelledError());
                };
                cancellationToken.addListener(listener);
                observableExpression.subscribeInvoke(n => {
                    if (n) {
                        cancellationToken.removeListener(listener);
                        queueMicrotask(observableExpression.dispose);
                        resolve(n);
                    }
                });
            }
        });
    }
    else {
        return new Promise((resolve, reject) => {
            let notRejected = true, observableExpression = co(() => {
                try {
                    return expression();
                }
                catch (e) {
                    notRejected = false;
                    queueMicrotask(observableExpression.dispose);
                    reject(e);
                }
            });
            if (notRejected) {
                observableExpression.subscribeInvoke(n => {
                    if (n) {
                        queueMicrotask(observableExpression.dispose);
                        resolve(n);
                    }
                });
            }
        });
    }
}