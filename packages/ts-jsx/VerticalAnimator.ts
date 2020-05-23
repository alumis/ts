import { Component, appendChild, bindProperties, NormalizedFunction, appendDisposeCallbackToNode, disposeDocumentFragment, replaceChildNodesWithDocumentFragment, HTMLAttributes } from "./JSX";
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

        let { expression, ...otherProperties } = properties;

        let observable: Observable<any>, observableExpression: () => any;

        if (isObservable(expression))
            observable = expression as Observable<any>;
        else if (typeof expression === "function")
            observable = co(observableExpression = expression);

        this.node = document.createElement("div");

        let value = observable.peek(), documentFragment = document.createDocumentFragment(), semaphore = new Semaphore();

        appendChild(documentFragment, value);
        this.node.appendChild(documentFragment);

        let ct: CancellationToken;

        let subscription = observable.subscribeSneakInLine(async n => {

            if (ct)
                ct.cancel();

            await semaphore.waitOneAsync();

            try {

                ct = new CancellationToken();

                let currentHeight = this.node.offsetHeight;

                this.node.style.transition = "none";
                this.node.style.height = "";

                appendChild(documentFragment, n);
                
                let oldChildNodes = replaceChildNodesWithDocumentFragment(this.node, documentFragment);
                let newHeight = this.node.offsetHeight;

                documentFragment = replaceChildNodesWithDocumentFragment(this.node, oldChildNodes);

                this.node.style.height = currentHeight + "px";
                this.node.offsetHeight; // Reflow

                // Measure complete. Back to original state.

                if (currentHeight) {

                    this.node.className = VerticalAnimator.exitClassName;
                    this.node.style.transition = "";
                    this.node.style.opacity = "0";

                    try {
                        await delayAsync(VerticalAnimator.exitDuration, ct);
                    }

                    catch (e) {

                        if (e instanceof OperationCancelledError) {
                            disposeDocumentFragment(documentFragment);
                            documentFragment = document.createDocumentFragment();
                            return;
                        }

                        throw e;
                    }
                }

                else {

                    this.node.style.opacity = "0";
                    this.node.offsetHeight; // Reflow
                    this.node.style.transition = "";
                }

                disposeDocumentFragment(replaceChildNodesWithDocumentFragment(this.node, documentFragment));

                this.node.className = VerticalAnimator.enterClassName;

                if (currentHeight !== newHeight) {

                    this.node.style.height = newHeight + "px";

                    try { await delayAsync(VerticalAnimator.enterDuration, ct); } catch (e) { if (e instanceof OperationCancelledError) return; throw e; }
                }

                this.node.style.height = "";
                this.node.style.opacity = "1";
            }

            finally {
                semaphore.release();
            }
        });

        appendDisposeCallbackToNode(this.node, () => { if (ct) ct.cancel(); });

        if (observableExpression) {

            if ((observableExpression as unknown as NormalizedFunction).dispose)
                appendDisposeCallbackToNode(this.node, (observableExpression as unknown as NormalizedFunction).dispose);

            appendDisposeCallbackToNode(this.node, observable.dispose);
        }

        else appendDisposeCallbackToNode(this.node, subscription.dispose);

        bindProperties(this.node, otherProperties);
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