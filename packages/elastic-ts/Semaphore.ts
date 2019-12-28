import { CancellationToken } from "./CancellationToken";
import { OperationCancelledError } from "./OperationCancelledError";

export class Semaphore {

    constructor() {
        let head = <SemaphoreQueueEntry>{}, tail = <SemaphoreQueueEntry>{};
        (head.next = tail).previous = head;
        this._head = head;
        this._tail = tail;
    }

    private _head: SemaphoreQueueEntry;
    private _tail: SemaphoreQueueEntry;

    waitOneAsync(cancellationtoken?: CancellationToken) {
        if (cancellationtoken) {
            if (cancellationtoken.isCancellationRequested)
                return Promise.reject(new OperationCancelledError());
        }
        return new Promise<void>((resolve, reject) => {
            let currentQueueEntry = <SemaphoreQueueEntry>{ resolve: resolve, previous: this._tail.previous, next: this._tail };
            currentQueueEntry.previous.next = currentQueueEntry;
            currentQueueEntry.next.previous = currentQueueEntry;
            if (this._head.next === currentQueueEntry)
                resolve();
            else if (cancellationtoken) {
                currentQueueEntry.cancellationToken = cancellationtoken;
                cancellationtoken.addListener(currentQueueEntry.cancellationTokenListener = () => {
                    (currentQueueEntry.previous.next = currentQueueEntry.next).previous = currentQueueEntry.previous;
                    reject(new OperationCancelledError());
                });
            }
        });
    }

    release() {
        let head = this._head, next = head.next.next;
        (head.next = next).previous = head;
        if (next !== this._tail) {
            if (next.cancellationToken) {
                next.cancellationToken.removeListener(next.cancellationTokenListener);
                delete next.cancellationToken;
                delete next.cancellationTokenListener;
            }
            let resolve = next.resolve;
            delete next.resolve;
            resolve();
        }
    }
}

interface SemaphoreQueueEntry {
    resolve: () => void;
    previous: SemaphoreQueueEntry;
    next: SemaphoreQueueEntry;
    cancellationToken: CancellationToken;
    cancellationTokenListener: () => void;
}