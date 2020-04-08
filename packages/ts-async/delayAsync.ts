import { CancellationToken } from "./CancellationToken";
import { OperationCancelledError } from "./OperationCancelledError";

export function delayAsync(timeout: number, cancellationToken?: CancellationToken) {
    if (cancellationToken) {
        return new Promise((resolve, reject) => {
            let listener = () => {
                clearTimeout(handle);
                reject(new OperationCancelledError());
            };
            cancellationToken.addListener(listener);
            let handle = setTimeout(() => {
                cancellationToken.removeListener(listener);
                resolve();
            }, timeout);
        });
    }
    else return new Promise(r => { setTimeout(r, timeout); });
}