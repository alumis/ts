import snackbarStyles from "./index.scss";
import { Component, disposeNode } from "@alumis/ts/JSX";
import { CancellationToken, LinkedCancellationToken } from "@alumis/ts/CancellationToken";
import { Semaphore } from "@alumis/ts/Semaphore";
import { OperationCancelledError } from "@alumis/ts/OperationCancelledError";
import { delayAsync } from "@alumis/ts/delayAsync";

export class Snack extends Component<HTMLDivElement> {

    constructor(properties: SnackProperties, children: any[]) {

        super();

        let { dismissable, ...otherProperties } = { ...properties };

        this.node = (
            <div {...otherProperties}>
                <div className={snackbarStyles.snack}>
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        );

        this.node.classList.add(snackbarStyles.snackbar);
    }

    private _showCancellationToken: CancellationToken;
    private _isShown: boolean;
    private _dismissTimeoutHandle: number;

    show(autoDismissTimeout = 3000) {

        if (this._showCancellationToken)
            return;

        this._showCancellationToken = new CancellationToken();

        (async () => {

            try {
                await semaphore.waitOneAsync(this._showCancellationToken);
            }

            catch (e) {
                if (e instanceof OperationCancelledError)
                    return;
            }

            this._showCancellationToken = null;

            document.body.appendChild(this.node);

            this._isShown = true;

            this.node.offsetWidth;
            this.node.classList.add(snackbarStyles.snackbarShow);

            if (autoDismissTimeout)
                this._dismissTimeoutHandle = setTimeout(() => { this._dismissTimeoutHandle = null; this.dismiss(); }, autoDismissTimeout) as any;
        })();
    }

    showIfNothingElse(autoDismissTimeout = 3000) {
        if (semaphore.head.next === semaphore.tail)
            this.show(autoDismissTimeout);
    }

    dismiss() {

        if (this._showCancellationToken) {
            this._showCancellationToken.cancel();
            this._showCancellationToken = null;
        }

        if (this._isShown) {

            if (this._dismissTimeoutHandle) {
                clearTimeout(this._dismissTimeoutHandle);
                this._dismissTimeoutHandle = null;
            }

            this.node.classList.add(snackbarStyles.snackbarHide);
            this._isShown = false;

            (async () => {

                try {
                    await delayAsync(75);
                    this.node.remove();
                    disposeNode(this.node);
                }
                finally {
                    semaphore.release();
                }
            })();
        }
    }
}

let semaphore = new Semaphore();

export type SnackProperties =
    & JSX.HTMLAttributes<HTMLDivElement>
    & { dismissable?: boolean; };

