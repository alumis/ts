import { co } from "@alumis/ts-observables/ComputedObservable";
import { isObservable } from "@alumis/ts-observables/isObservable";
import { Observable } from "@alumis/ts-observables/Observable";
import { appendConnectCallbackToNode, appendDisconnectCallbackToNode } from "./JSX";

export function bindCssVariable(element: HTMLElement, name: string, expression: any | Observable<any> | (() => any)) {

    if (isObservable(expression)) {
        appendConnectCallbackToNode(element, () => {
            let subscription = (expression as Observable<any>).subscribeInvokeSneakInLine(n => { element.style.setProperty(name, n); });
            appendDisconnectCallbackToNode(element, subscription.dispose);
        });
    }
    else if (typeof expression === "function") {
        appendConnectCallbackToNode(element, () => {
            let computedObservable = co(expression);
            computedObservable.subscribeInvokeSneakInLine(n => { element.style.setProperty(name, n as any); });
            appendDisconnectCallbackToNode(element, computedObservable.dispose);
        });
    }
    else element.style.setProperty(name, expression);
}