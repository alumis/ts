import { CancellationToken } from "./CancellationToken";
import { OperationCancelledError } from "./OperationCancelledError";

export class Semaphore {

    constructor() {
        let head = <SemaphoreQueueEntry>{}, tail = <SemaphoreQueueEntry>{};
        (head.next = tail).previous = head;
        this.head = head;
        this.tail = tail;
    }

    head: SemaphoreQueueEntry;
    tail: SemaphoreQueueEntry;

    waitOneAsync(cancellationtoken?: CancellationToken) {
        if (cancellationtoken) {
            if (cancellationtoken.isCancellationRequested)
                return Promise.reject(new OperationCancelledError());
        }
        return new Promise<void>((resolve, reject) => {
            let currentQueueEntry = <SemaphoreQueueEntry>{ resolve: resolve, previous: this.tail.previous, next: this.tail };
            currentQueueEntry.previous.next = currentQueueEntry;
            currentQueueEntry.next.previous = currentQueueEntry;
            if (this.head.next === currentQueueEntry)
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
        let head = this.head, next = head.next.next;
        (head.next = next).previous = head;
        if (next !== this.tail) {
            if (next.cancellationToken) {
                next.cancellationToken.removeListener(next.cancellationTokenListener);
                next.cancellationToken = null;
                next.cancellationTokenListener = null;
            }
            let resolve = next.resolve;
            next.resolve = null;
            resolve();
        }
    }
}

export interface SemaphoreQueueEntry {
    resolve();
    previous: SemaphoreQueueEntry;
    next: SemaphoreQueueEntry;
    cancellationToken: CancellationToken;
    cancellationTokenListener();
}