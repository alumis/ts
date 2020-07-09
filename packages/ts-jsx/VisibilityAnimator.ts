import { Component, appendChild, bindProperties, NormalizedFunction, appendDestroyCallbackToNode, destroyDocumentFragment as destroyDocumentFragment, replaceChildNodesWithDocumentFragment, HTMLAttributes } from "./JSX";
import { Observable } from "@alumis/ts-observables/Observable";
import { isObservable } from "@alumis/ts-observables/isObservable";
import { co } from "@alumis/ts-observables/ComputedObservable";
import { delayAsync } from "@alumis/ts-async/delayAsync";
import { OperationCancelledError } from "@alumis/ts-async/OperationCancelledError";
import { CancellationToken } from "@alumis/ts-async/CancellationToken";
import { Semaphore } from "@alumis/ts-async/Semaphore";

export class VisibilityAnimator extends Component<HTMLDivElement> {

    constructor(properties: VisibilityAnimatorProperties) {

        super();

        let { expression, ...domProperties } = properties;

        let observable: Observable<any>, observableExpression: () => any;

        if (isObservable(expression))
            observable = expression as Observable<any>;
        else if (typeof expression === "function")
            observable = co(observableExpression = expression);

        let node = document.createElement("div");

        let value = observable.peek(), documentFragment = document.createDocumentFragment(), semaphore = new Semaphore();

        appendChild(documentFragment, value);
        node.appendChild(documentFragment);

        let ct: CancellationToken;

        let subscription = observable.subscribeSneakInLine(async n => {

            if (ct)
                ct.cancel();

            await semaphore.waitOneAsync();

            try {

                ct = new CancellationToken();

                appendChild(documentFragment, n);

                if (node.childNodes.length && parseFloat(getComputedStyle(node).opacity)) {

                    node.className = VisibilityAnimator.exitClassName;
                    node.style.transition = "";
                    node.style.opacity = "0";

                    try {
                        await delayAsync(VisibilityAnimator.exitDuration, ct);
                    }

                    catch (e) {

                        if (e instanceof OperationCancelledError) {
                            destroyDocumentFragment(documentFragment);
                            documentFragment = document.createDocumentFragment();
                            return;
                        }

                        throw e;
                    }
                }

                else {

                    node.style.opacity = "0";
                    node.offsetWidth; // Reflow
                    node.style.transition = "";
                }

                destroyDocumentFragment(replaceChildNodesWithDocumentFragment(node, documentFragment));

                node.className = VisibilityAnimator.enterClassName;

                node.style.opacity = "1";

            }

            finally {
                semaphore.release();
            }
        });

        appendDestroyCallbackToNode(node, () => { if (ct) ct.cancel(); });

        if (observableExpression) {

            if ((observableExpression as unknown as NormalizedFunction).dispose)
                appendDestroyCallbackToNode(node, (observableExpression as unknown as NormalizedFunction).dispose);

            appendDestroyCallbackToNode(node, observable.dispose);
        }

        else appendDestroyCallbackToNode(node, subscription.dispose);

        bindProperties(node, domProperties);

        this.node = node;
    }

    static install(enterClassName: string, enterDuration: number, exitClassName: string, exitDuration: number) {

        VisibilityAnimator.enterClassName = enterClassName;
        VisibilityAnimator.enterDuration = enterDuration;

        VisibilityAnimator.exitClassName = exitClassName;
        VisibilityAnimator.exitDuration = exitDuration;
    }

    static enterClassName: string;
    static enterDuration: number;

    static exitClassName: string;
    static exitDuration: number;
}

export interface VisibilityAnimatorProperties extends HTMLAttributes<HTMLDivElement> {
    expression: Observable<any> | (() => any);
}