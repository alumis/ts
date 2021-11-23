// import { Component, appendChild, bindProperties, NormalizedFunction, appendDestroyCallbackToNode, destroyDocumentFragment, replaceChildNodesWithDocumentFragment, HTMLAttributes, destroyNode } from "./JSX";
// import { Observable } from "@alumis/ts-observables/Observable";
// import { isObservable } from "@alumis/ts-observables/isObservable";
// import { co } from "@alumis/ts-observables/ComputedObservable";
// import { delayAsync } from "@alumis/ts-async/delayAsync";
// import { OperationCancelledError } from "@alumis/ts-async/OperationCancelledError";
// import { CancellationToken } from "@alumis/ts-async/CancellationToken";
// import { Semaphore } from "@alumis/ts-async/Semaphore";

// export function VerticalAnimator(properties: VerticalAnimatorProperties) {

//     let { expression, ...domProperties } = properties;

//     let observable: Observable<any>, observableExpression: () => any;

//     if (isObservable(expression))
//         observable = expression as Observable<any>;
//     else if (typeof expression === "function")
//         observable = co(observableExpression = expression);

//     let node = document.createElement("div");
//     let anchor = document.createComment(" vertical animator anchor ");
//     let value = observable.peek();
//     let documentFragment = document.createDocumentFragment();
//     let semaphore = new Semaphore();

//     appendChild(documentFragment, value);
//     node.appendChild(documentFragment);

//     let ct: CancellationToken;

//     let subscription = observable.subscribeSneakInLine(async n => {

//         if (ct)
//             ct.cancel();

//         await semaphore.waitOneAsync();

//         try {

//             ct = new CancellationToken();

//             if (anchor.previousSibling !== node)
//                 anchor.parentElement.insertBefore(node, anchor);

//             let currentHeight = node.offsetHeight;

//             node.style.transition = "none";
//             node.style.height = "";

//             appendChild(documentFragment, n);

//             let oldChildNodes = replaceChildNodesWithDocumentFragment(node, documentFragment);
//             let newHeight = node.offsetHeight;

//             documentFragment = replaceChildNodesWithDocumentFragment(node, oldChildNodes);

//             node.style.height = currentHeight + "px";
//             node.offsetHeight; // Reflow

//             // Measure complete. Back to original state.

//             if (currentHeight) {

//                 node.className = exitClassName;
//                 node.style.transition = "";
//                 node.style.opacity = "0";

//                 try {
//                     await delayAsync(exitDuration, ct);
//                 }

//                 catch (e) {

//                     if (e instanceof OperationCancelledError) {
//                         destroyDocumentFragment(documentFragment);
//                         documentFragment = document.createDocumentFragment();
//                         return;
//                     }

//                     throw e;
//                 }
//             }

//             else {

//                 node.style.opacity = "0";
//                 node.offsetHeight; // Reflow
//                 node.style.transition = "";
//             }

//             destroyDocumentFragment(replaceChildNodesWithDocumentFragment(node, documentFragment));

//             node.className = enterClassName;

//             if (currentHeight !== newHeight) {

//                 node.style.height = newHeight + "px";

//                 try { await delayAsync(enterDuration, ct); } catch (e) { if (e instanceof OperationCancelledError) return; throw e; }
//             }

//             node.style.height = "";
//             node.style.opacity = "1";

//             if (!node.childNodes.length)
//                 node.remove();
//         }

//         finally {
//             semaphore.release();
//         }
//     });

//     appendDestroyCallbackToNode(node, () => { if (ct) ct.cancel(); });

//     if (observableExpression) {

//         if ((observableExpression as unknown as NormalizedFunction).dispose)
//             appendDestroyCallbackToNode(node, (observableExpression as unknown as NormalizedFunction).dispose);

//         appendDestroyCallbackToNode(node, observable.dispose);
//     }

//     else appendDestroyCallbackToNode(node, subscription.dispose);

//     appendDestroyCallbackToNode(anchor, () => {
//         if (anchor.previousSibling !== node)
//             destroyNode(node);
//     });

//     bindProperties(node, domProperties);

//     if (node.childNodes.length) {

//         let result = document.createDocumentFragment();

//         result.appendChild(node);
//         result.appendChild(anchor);

//         return result;
//     }

//     else return anchor;
// }

// export interface VerticalAnimatorProperties extends HTMLAttributes<HTMLDivElement> {
//     expression: Observable<any> | (() => any);
// }

// export function installVerticalAnimator(enterClassName_: string, enterDuration_: number, exitClassName_: string, exitDuration_: number) {

//     enterClassName = enterClassName_;
//     enterDuration = enterDuration_;

//     exitClassName = exitClassName_;
//     exitDuration = exitDuration_;
// }

// let enterClassName: string;
// let enterDuration: number;

// let exitClassName: string;
// let exitDuration: number;