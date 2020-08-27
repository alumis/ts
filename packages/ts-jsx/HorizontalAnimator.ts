import { appendChild, bindProperties, NormalizedFunction, appendDestroyCallbackToNode, destroyDocumentFragment as destroyDocumentFragment, replaceChildNodesWithDocumentFragment, HTMLAttributes, destroyNode } from "./JSX";
import { Observable } from "@alumis/ts-observables/Observable";
import { isObservable } from "@alumis/ts-observables/isObservable";
import { co } from "@alumis/ts-observables/ComputedObservable";
import { delayAsync } from "@alumis/ts-async/delayAsync";
import { OperationCancelledError } from "@alumis/ts-async/OperationCancelledError";
import { CancellationToken } from "@alumis/ts-async/CancellationToken";
import { Semaphore } from "@alumis/ts-async/Semaphore";

export function HorizontalAnimator(properties: HorizontalAnimatorProperties) {

    let { expression, ...domProperties } = properties;

    let observable: Observable<any>, observableExpression: () => any;

    if (isObservable(expression))
        observable = expression as Observable<any>;
    else if (typeof expression === "function")
        observable = co(observableExpression = expression);

    let node = document.createElement("div");
    let anchor = document.createComment(" horizontal animator anchor ");
    let value = observable.peek();
    let documentFragment = document.createDocumentFragment();
    let semaphore = new Semaphore();

    appendChild(documentFragment, value);
    node.appendChild(documentFragment);

    let ct: CancellationToken;

    let subscription = observable.subscribeSneakInLine(async n => {

        if (ct)
            ct.cancel();

        await semaphore.waitOneAsync();

        try {

            ct = new CancellationToken();

            if (anchor.previousSibling !== node)
                anchor.parentElement.insertBefore(node, anchor);

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

                node.className = exitClassName;
                node.style.transition = "";
                node.style.opacity = "0";

                try {
                    await delayAsync(exitDuration, ct);
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

            node.className = enterClassName;

            if (currentWidth !== newWidth) {

                node.style.width = newWidth + "px";

                try { await delayAsync(enterDuration, ct); } catch (e) { if (e instanceof OperationCancelledError) return; throw e; }
            }

            node.style.width = "";
            node.style.opacity = "1";

            if (!node.childNodes.length)
                node.remove();
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

    appendDestroyCallbackToNode(anchor, () => {
        if (anchor.previousSibling !== node)
            destroyNode(node);
    });

    bindProperties(node, domProperties);

    if (node.childNodes.length) {

        let result = document.createDocumentFragment();

        result.appendChild(node);
        result.appendChild(anchor);

        return result;
    }

    else return anchor;
}

export interface HorizontalAnimatorProperties extends HTMLAttributes<HTMLDivElement> {
    expression: Observable<any> | (() => any);
}

export function installHorizontalAnimator(enterClassName_: string, enterDuration_: number, exitClassName_: string, exitDuration_: number) {

    enterClassName = enterClassName_;
    enterDuration = enterDuration_;

    exitClassName = exitClassName_;
    exitDuration = exitDuration_;
}

let enterClassName: string;
let enterDuration: number;

let exitClassName: string;
let exitDuration: number;