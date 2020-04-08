import { CancellationToken } from "./CancellationToken";
import { OperationCancelledError } from "./OperationCancelledError";

export function fetchAsync(input: RequestInfo, init?: Omit<RequestInit, "signal">, cancellationToken?: CancellationToken) {

    if (cancellationToken) {

        return new Promise<Response>((resolve, reject) => {

            let controller = new AbortController(), listener = () => {
                reject(new OperationCancelledError());
                controller.abort();
            };

            cancellationToken.addListener(listener);

            fetch(input, { signal: controller.signal, ...init })
                .then(r => {
                    cancellationToken.removeListener(listener);
                    resolve(r);
                })
                .catch(r => {
                    cancellationToken.removeListener(listener);
                    reject(r);
                });
        });
    }

    else return fetch(input, init);
}