import { Component, appendChild, bindProperties, NormalizedFunction, appendDestroyCallbackToNode, destroyDocumentFragment, replaceChildNodesWithDocumentFragment, HTMLAttributes } from "./JSX";
import { Observable } from "@alumis/ts-observables/Observable";
import { isObservable } from "@alumis/ts-observables/isObservable";
import { co } from "@alumis/ts-observables/ComputedObservable";
import { delayAsync } from "@alumis/ts-async/delayAsync";
import { OperationCancelledError } from "@alumis/ts-async/OperationCancelledError";
import { CancellationToken } from "@alumis/ts-async/CancellationToken";
import { Semaphore } from "@alumis/ts-async/Semaphore";

export class VerticalAnimator extends Component<HTMLDivElement> {

    constructor(properties: VerticalAnimatorProperties) {

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

                let currentHeight = node.offsetHeight;

                node.style.transition = "none";
                node.style.height = "";

                appendChild(documentFragment, n);
                
                let oldChildNodes = replaceChildNodesWithDocumentFragment(node, documentFragment);
                let newHeight = node.offsetHeight;

                documentFragment = replaceChildNodesWithDocumentFragment(node, oldChildNodes);

                node.style.height = currentHeight + "px";
                node.offsetHeight; // Reflow

                // Measure complete. Back to original state.

                if (currentHeight) {

                    node.className = VerticalAnimator.exitClassName;
                    node.style.transition = "";
                    node.style.opacity = "0";

                    try {
                        await delayAsync(VerticalAnimator.exitDuration, ct);
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
                    node.offsetHeight; // Reflow
                    node.style.transition = "";
                }

                destroyDocumentFragment(replaceChildNodesWithDocumentFragment(node, documentFragment));

                node.className = VerticalAnimator.enterClassName;

                if (currentHeight !== newHeight) {

                    node.style.height = newHeight + "px";

                    try { await delayAsync(VerticalAnimator.enterDuration, ct); } catch (e) { if (e instanceof OperationCancelledError) return; throw e; }
                }

                node.style.height = "";
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

        VerticalAnimator.enterClassName = enterClassName;
        VerticalAnimator.enterDuration = enterDuration;

        VerticalAnimator.exitClassName = exitClassName;
        VerticalAnimator.exitDuration = exitDuration;
    }

    static enterClassName: string;
    static enterDuration: number;

    static exitClassName: string;
    static exitDuration: number;
}

export interface VerticalAnimatorProperties extends HTMLAttributes<HTMLDivElement> {
    expression: Observable<any> | (() => any);
}