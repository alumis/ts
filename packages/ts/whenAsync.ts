import { CancellationToken } from "./CancellationToken";
import { co } from "./ComputedObservable";
import { OperationCancelledError } from "./OperationCancelledError";

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
                    setTimeout(observableExpression.dispose, 0);
                    reject(e);
                }
            });
            if (notRejected) {
                listener = () => {
                    setTimeout(observableExpression.dispose, 0);
                    reject(new OperationCancelledError());
                };
                cancellationToken.addListener(listener);
                observableExpression.subscribeInvoke(n => {
                    if (n) {
                        cancellationToken.removeListener(listener);
                        setTimeout(observableExpression.dispose, 0);
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
                    setTimeout(observableExpression.dispose, 0);
                    reject(e);
                }
            });
            if (notRejected) {
                observableExpression.subscribeInvoke(n => {
                    if (n) {
                        setTimeout(observableExpression.dispose, 0);
                        resolve(n);
                    }
                });
            }
        });
    }
}