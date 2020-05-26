import { Component, appendChild, bindProperties, NormalizedFunction, appendDisposeCallbackToNode, disposeDocumentFragment, replaceChildNodesWithDocumentFragment, HTMLAttributes } from "./JSX";
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

                let currentWidth = this.node.offsetWidth;

                this.node.style.transition = "none";
                this.node.style.width = "";

                appendChild(documentFragment, n);
                
                let oldChildNodes = replaceChildNodesWithDocumentFragment(this.node, documentFragment);
                let newWidth = this.node.offsetWidth;

                documentFragment = replaceChildNodesWithDocumentFragment(this.node, oldChildNodes);

                this.node.style.width = currentWidth + "px";
                this.node.offsetWidth; // Reflow

                // Measure complete. Back to original state.

                if (currentWidth) {

                    this.node.className = HorizontalAnimator.exitClassName;
                    this.node.style.transition = "";
                    this.node.style.opacity = "0";

                    try {
                        await delayAsync(HorizontalAnimator.exitDuration, ct);
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
                    this.node.offsetWidth; // Reflow
                    this.node.style.transition = "";
                }

                disposeDocumentFragment(replaceChildNodesWithDocumentFragment(this.node, documentFragment));

                this.node.className = HorizontalAnimator.enterClassName;

                if (currentWidth !== newWidth) {

                    this.node.style.width = newWidth + "px";

                    try { await delayAsync(HorizontalAnimator.enterDuration, ct); } catch (e) { if (e instanceof OperationCancelledError) return; throw e; }
                }

                this.node.style.width = "";
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