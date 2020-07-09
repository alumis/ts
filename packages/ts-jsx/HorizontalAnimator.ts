import { Component, appendChild, bindProperties, NormalizedFunction, appendDestroyCallbackToNode, destroyDocumentFragment as destroyDocumentFragment, replaceChildNodesWithDocumentFragment, HTMLAttributes } from "./JSX";
import { Observable } from "@alumis/ts-observables/Observable";
import { isObservable } from "@alumis/ts-observables/isObservable";
import { co } from "@alumis/ts-observables/ComputedObservable";
import { delayAsync } from "@alumis/ts-async/delayAsync";
import { OperationCancelledError } from "@alumis/ts-async/OperationCancelledError";
import { CancellationToken } from "@alumis/ts-async/CancellationToken";
import { Semaphore } from "@alumis/ts-async/Semaphore";

export class HorizontalAnimator extends Component<HTMLDivElement> {

    constructor(properties: HorizontalAnimatorProperties) {

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

                let currentWidth = node.offsetWidth;

                node.style.transition = "none";
                node.style.width = "";

                appendChild(documentFragment, n);
                
                let oldChildNodes = replaceChildNodesWithDocumentFragment(node, documentFragment);
                let newWidth = node.offsetWidth;

                documentFragment = replaceChildNodesWithDocumentFragment(node, oldChildNodes);

                node.style.width = currentWidth + "px";
                node.offsetWidth; // Reflow

                // Measure complete. Back to original state.

                if (currentWidth) {

                    node.className = HorizontalAnimator.exitClassName;
                    node.style.transition = "";
                    node.style.opacity = "0";

                    try {
                        await delayAsync(HorizontalAnimator.exitDuration, ct);
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

                node.className = HorizontalAnimator.enterClassName;

                if (currentWidth !== newWidth) {

                    node.style.width = newWidth + "px";

                    try { await delayAsync(HorizontalAnimator.enterDuration, ct); } catch (e) { if (e instanceof OperationCancelledError) return; throw e; }
                }

                node.style.width = "";
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

        HorizontalAnimator.enterClassName = enterClassName;
        HorizontalAnimator.enterDuration = enterDuration;

        HorizontalAnimator.exitClassName = exitClassName;
        HorizontalAnimator.exitDuration = exitDuration;
    }

    static enterClassName: string;
    static enterDuration: number;

    static exitClassName: string;
    static exitDuration: number;
}

export interface HorizontalAnimatorProperties extends HTMLAttributes<HTMLDivElement> {
    expression: Observable<any> | (() => any);
}