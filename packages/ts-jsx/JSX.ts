import { Observable } from "@alumis/ts-observables/Observable";
import { co } from "@alumis/ts-observables/ComputedObservable";
import { ModifiableObservable } from "@alumis/ts-observables/ModifiableObservable";
import { isObservable } from "@alumis/ts-observables/isObservable";
import { ObservableList, ObservableListModificationType } from "@alumis/ts-observables/ObservableList";

export const globalPropertyHandlers = new Map<string, (node: Node, value, properties: { [name: string]: any }) => any>();

export abstract class Component<TNode extends Node> {

    abstract render(): TNode;

    onDisconnect() {
    }
}

export function createNode(element: string | (() => any), properties: { [name: string]: any }, ...children) {
    if (typeof element === "string")
        return createHTMLElementFromTagName(element, properties, children);
    if (typeof element === "function")
        return createNodeFromFunction(element, properties, children);
    if (element === null)
        return createDocumentFragment(children);
    throw new Error(`Unable to create element of type '${typeof element}'`);
}

function createHTMLElementFromTagName(tagName: string, properties: { [name: string]: any }, children: any[]) {
    let element = document.createElement(tagName);
    for (let c of children)
        appendChild(element, c);
    if (properties)
        bindProperties(element, properties);
    return element;
}

export function appendChild(parentNode: Node, child) {

    if (child instanceof HTMLElement || child instanceof SVGElement || child instanceof Comment || child instanceof DocumentFragment)
        parentNode.appendChild(child);
    else if (child instanceof Component)
        appendComponentChild(parentNode, child);
    else if (isObservable(child))
        appendObservableChild(parentNode, child);
    else if (typeof child === "function")
        appendObservableExpressionChild(parentNode, child);
    else if (child instanceof ObservableList)
        appendObservableListChild(parentNode, child);
    else if (child instanceof Array)
        for (let c of child)
            appendChild(parentNode, c);
    else if (child !== null && child !== undefined)
        parentNode.appendChild(document.createTextNode(child));
}

function appendComponentChild(parentNode: Node, component: Component<any>) {

    // TODO: Reuse text node

    let head = document.createComment(` ${component.constructor.name} `), documentFragment = document.createDocumentFragment(), tail = document.createComment(` /${component.constructor.name} `);

    documentFragment.appendChild(head);
    documentFragment.appendChild(tail);

    parentNode.appendChild(documentFragment);

    function set(n) {
        appendChild(documentFragment, n);
        for (let child = head.nextSibling; child !== tail;) {
            let n = child;
            child = child.nextSibling;
            n.remove();
        }
        tail.parentNode.insertBefore(documentFragment, tail);
    }

    function onConnect() {
        set(component.render());
        appendDisconnectCallbackToNode(tail, component.onDisconnect.bind(component));
    }

    appendConnectCallbackToNode(tail, onConnect);
}

function appendObservableChild(parentNode: Node, observable: Observable<any>) {

    let head = document.createComment(" head "), documentFragment = document.createDocumentFragment(), tail = document.createComment(" tail ");

    documentFragment.appendChild(head);
    documentFragment.appendChild(tail);

    parentNode.appendChild(documentFragment);

    function set(n) {

        if (typeof n === "string") {
            let nextSibling = head.nextSibling;
            if (nextSibling instanceof Text && nextSibling.nextSibling === tail) {
                nextSibling.textContent = n;
                return;
            }
        }

        appendChild(documentFragment, n);

        for (let child = head.nextSibling; child !== tail;) {
            let n = child;
            child = child.nextSibling;
            n.remove();
        }

        tail.parentNode.insertBefore(documentFragment, tail);
    }

    function onConnect() {
        set(observable.peek());
        appendDisconnectCallbackToNode(tail, observable.subscribeSneakInLine(set).dispose);
    }

    appendConnectCallbackToNode(tail, onConnect);
}

function appendObservableExpressionChild(parentNode: Node, observableExpression?: () => any) {

    // TODO: Reuse text node

    let head = document.createComment(" head "), documentFragment = document.createDocumentFragment(), tail = document.createComment(" tail ");

    documentFragment.appendChild(head);
    documentFragment.appendChild(tail);

    parentNode.appendChild(documentFragment);

    function set(n) {

        if (typeof n === "string") {
            let nextSibling = head.nextSibling;
            if (nextSibling instanceof Text && nextSibling.nextSibling === tail) {
                nextSibling.textContent = n;
                return;
            }
        }
        appendChild(documentFragment, n);
        for (let child = head.nextSibling; child !== tail;) {
            let n = child;
            child = child.nextSibling;
            n.remove();
        }
        tail.parentNode.insertBefore(documentFragment, tail);
    }

    function onConnect() {
        let observable = co(observableExpression);
        set(observable.peek());
        observable.subscribeSneakInLine(set);
        appendDisconnectCallbackToNode(tail, observable.dispose);
    }

    appendConnectCallbackToNode(tail, onConnect);
}

export const CONNECT_CALLBACKS_KEY = "__connectCallbacks";

export function appendConnectCallbackToNode(node: Node, connect: () => any) {
    let connectCallbacks: (() => any)[] = node[CONNECT_CALLBACKS_KEY];
    if (connectCallbacks)
        connectCallbacks.push(connect);
    else node[CONNECT_CALLBACKS_KEY] = [connect];
}

export const DISCONNECT_CALLBACKS_KEY = "__disconnectCallbacks";

export function appendDisconnectCallbackToNode(node: Node, disconnect: () => any) {
    let disconnectCallbacks: (() => any)[] = node[DISCONNECT_CALLBACKS_KEY];
    if (disconnectCallbacks)
        disconnectCallbacks.push(disconnect);
    else node[DISCONNECT_CALLBACKS_KEY] = [disconnect];
}

export function disconnectNode(node: Node) {
    if (node.childNodes.length) { // Depth first, post-order tree traversal
        for (let child = node.lastChild; ;) {
            disconnectNode(child);
            if (!(child = child.previousSibling))
                break;
        }
    }
    let disconnectCallbacks: (() => any)[] = node[DISCONNECT_CALLBACKS_KEY];
    if (disconnectCallbacks) {
        node[DISCONNECT_CALLBACKS_KEY] = undefined;
        for (let i = disconnectCallbacks.length; 0 < i;)
            disconnectCallbacks[--i]();
    }
}

export function connectNode(node: Node) {
    let connectCallbacks: (() => any)[] = node[CONNECT_CALLBACKS_KEY];
    if (connectCallbacks) {
        for (let i = 0; i < connectCallbacks.length; ++i)
            connectCallbacks[i]();
    }
    if (node.childNodes.length) {
        for (let child = node.firstChild; ;) {
            connectNode(child);
            if (!(child = child.nextSibling))
                break;
        }
    }
}

function appendObservableListChild(parentNode: Node, observableList: ObservableList<any>) {

    let head = document.createComment(" ObservableList "), documentFragment = document.createDocumentFragment(), tail = document.createComment(" /ObservableList ");

    documentFragment.appendChild(head);
    documentFragment.appendChild(tail);

    parentNode.appendChild(documentFragment);

    function onConnect() {

        for (let child = head.nextSibling; child !== tail;) {
            let n = child;
            child = child.nextSibling;
            n.remove();
        }

        let items = new Map<any, ListItem>(), n = null;

        for (let node = observableList.head.next; node !== observableList.tail; node = node.next) {
            appendChild(documentFragment, node.item);
            let item: ListItem = { firstChild: n ? n.nextSibling : documentFragment.firstChild, lastChild: (n = documentFragment.lastChild) };
            items.set(node.item, item);
        }

        tail.parentNode.insertBefore(documentFragment, tail);

        let subscription = observableList.subscribeSneakInLine(modifications => {
            for (let m of modifications) {
                switch (m.type) {
                    case ObservableListModificationType.Append: {
                        let item = items.get(m.item);
                        if (item) {
                            if (item.lastChild.nextSibling === tail)
                                break;
                            for (let node = item.firstChild; ;) {
                                if (node === item.lastChild) {
                                    documentFragment.appendChild(node);
                                    break;
                                }
                                let n = node;
                                node = node.nextSibling;
                                documentFragment.appendChild(n);
                            }
                        }
                        else {
                            appendChild(documentFragment, m.item);
                            items.set(m.item, { firstChild: documentFragment.firstChild, lastChild: documentFragment.lastChild });
                        }
                        tail.parentNode.insertBefore(documentFragment, tail);
                        break;
                    }
                    case ObservableListModificationType.InsertBefore: {
                        let item = items.get(m.item);
                        if (item) {
                            for (let node = item.firstChild; ;) {
                                if (node === item.lastChild) {
                                    documentFragment.appendChild(node);
                                    break;
                                }
                                else {
                                    let n = node;
                                    node = node.nextSibling;
                                    documentFragment.appendChild(n);
                                }
                            }
                        }
                        else {
                            appendChild(documentFragment, m.item);
                            item = { firstChild: documentFragment.firstChild, lastChild: documentFragment.lastChild };
                            items.set(m.item, item);
                        }
                        tail.parentNode.insertBefore(documentFragment, m.refItem ? items.get(m.refItem).firstChild : tail);
                        break;
                    }
                    case ObservableListModificationType.Remove: {
                        let item = items.get(m.item);
                        items.delete(m.item);
                        for (let node = item.firstChild; ;) {
                            if (node === item.lastChild) {
                                node.remove();
                                break;
                            }
                            let n = node;
                            node = node.nextSibling;
                            n.remove();
                        }
                        break;
                    }
                }
            }
        });

        appendDisconnectCallbackToNode(tail, subscription.dispose);
    }

    appendConnectCallbackToNode(tail, onConnect);
}

interface ListItem {

    firstChild: ChildNode;
    lastChild: ChildNode;
}

export function bindProperties(node: Element, properties: { [name: string]: any }) {
    for (let n in properties) {
        let value = properties[n], globalPropertyHandler = globalPropertyHandlers.get(n);
        if (globalPropertyHandler)
            globalPropertyHandler(node, value, properties);
        else if (n.startsWith("on") && 2 < n.length)
            node[n] = value;
        else bindProperty(node, n, value);
    }
}

export function bindProperty(element: Element, name: string, expression: any | Observable<any> | (() => any)) {

    if (name.indexOf("-") !== -1) {
        if (isObservable(expression)) {
            appendConnectCallbackToNode(element, () => {
                let subscription = (expression as Observable<any>).subscribeInvokeSneakInLine(n => { element.setAttribute(name, n); });
                appendDisconnectCallbackToNode(element, subscription.dispose);
            });
        }
        else if (typeof expression === "function") {
            appendConnectCallbackToNode(element, () => {
                let computedObservable = co(expression);
                computedObservable.subscribeInvokeSneakInLine(n => { element.setAttribute(name, n as any); });
                appendDisconnectCallbackToNode(element, computedObservable.dispose);
            });
        }
        else element.setAttribute(name, expression);
    }
    else {

        if (isObservable(expression)) {

            appendConnectCallbackToNode(element, () => {

                let subscription = (expression as Observable<any>).subscribeInvokeSneakInLine(n => { element[name] = n; });

                appendDisconnectCallbackToNode(element, subscription.dispose);

                if (expression instanceof ModifiableObservable) {

                    switch (name) {
                        case "value":
                        case "valueAsDate":
                        case "valueAsNumber": {
                            let listener = (_e: Event) => { expression.setValueDontNotifySubscription(element[name], subscription); };
                            switch (element.tagName) {
                                case "INPUT":
                                case "TEXTAREA":
                                    element.addEventListener("input", listener);
                                    appendDisconnectCallbackToNode(element, () => { element.removeEventListener("input", listener) });
                                    break;
                                case "SELECT":
                                    element.addEventListener("change", listener);
                                    appendDisconnectCallbackToNode(element, () => { element.removeEventListener("change", listener) });
                                    break;
                            }
                            break;
                        }
                        case "checked": {
                            let listener = (_e: Event) => { expression.setValueDontNotifySubscription((element as HTMLInputElement).checked, subscription); };
                            element.addEventListener("change", listener);
                            appendDisconnectCallbackToNode(element, () => { element.removeEventListener("change", listener) });
                            break;
                        }
                    }
                }
            });
        }
        else if (typeof expression === "function") {
            appendConnectCallbackToNode(element, () => {
                let computedObservable = co(expression);
                computedObservable.subscribeInvokeSneakInLine(n => { element[name] = n; });
                appendDisconnectCallbackToNode(element, computedObservable.dispose);
            });
        }
        else element[name] = expression;
    }
}

globalPropertyHandlers.set("role", (node: Node, value: string | Observable<string> | (() => string)) => {
    if (isObservable(value)) {
        appendConnectCallbackToNode(node, () => {
            let subscription = (value as Observable<any>).subscribeInvokeSneakInLine(n => { (node as HTMLElement).setAttribute("role", n); });
            appendDisconnectCallbackToNode(node, subscription.dispose);
        });
    }
    else if (typeof value === "function") {
        appendConnectCallbackToNode(node, () => {
            let computedObservable = co(value);
            computedObservable.subscribeInvokeSneakInLine(n => { (node as HTMLElement).setAttribute("role", n as any); });
            appendDisconnectCallbackToNode(node, computedObservable.dispose);
        });
    }
    else (node as HTMLElement).setAttribute("role", value as string);
});

export function toggleClass(node: Node, value: { [name: string]: boolean | Observable<boolean> | (() => boolean); }) {
    appendConnectCallbackToNode(node, () => {
        for (let p in value) {
            let expression = value[p] as boolean | Observable<boolean> | (() => boolean);
            if (isObservable(expression)) {
                let subscription = (function (p) { return (expression as Observable<any>).subscribeInvokeSneakInLine(n => { (node as HTMLElement).classList.toggle(p, n); }); })(p);
                appendDisconnectCallbackToNode(node, subscription.dispose);
            }
            else if (typeof expression === "function") {
                let computedObservable = co(expression);
                (function (p) { computedObservable.subscribeInvokeSneakInLine(n => { (node as HTMLElement).classList.toggle(p, n); }); })(p);
                appendDisconnectCallbackToNode(node, computedObservable.dispose);
            }
            else (node as HTMLElement).classList.toggle(p, !!expression);
        }
    });
}

globalPropertyHandlers.set("toggle", toggleClass);

export function switchClass(node: Node, value: Observable<string> | (() => string) | (Observable<string> | (() => string))[]) {
    if (isObservable(value)) {
        appendConnectCallbackToNode(node, () => {
            let subscription = (value as Observable<string>).subscribeInvokeSneakInLine(n => { (node as HTMLElement).className = n; });
            appendDisconnectCallbackToNode(node, subscription.dispose);
        });
    }
    else if (typeof value === "function") {
        appendConnectCallbackToNode(node, () => {
            let computedObservable = co(value);
            computedObservable.subscribeInvokeSneakInLine(n => { (node as HTMLElement).className = n; });
            appendDisconnectCallbackToNode(node, computedObservable.dispose);
        });
    }
    else {
        appendConnectCallbackToNode(node, () => {
            for (let i of value as (Observable<string> | (() => string))[]) {
                if (typeof i === "string")
                    (node as HTMLElement).classList.add(i);
                else if (isObservable(i)) {
                    let subscription = (i as Observable<string>).subscribeInvokeSneakInLine((n, o) => {
                        if (o) (node as HTMLElement).classList.remove(o);
                        if (n) (node as HTMLElement).classList.add(n);
                    });
                    appendDisconnectCallbackToNode(node, subscription.dispose);
                }
                else {
                    let computedObservable = co(i as () => string);
                    computedObservable.subscribeInvokeSneakInLine((n, o) => {
                        if (o) (node as HTMLElement).classList.remove(o);
                        if (n) (node as HTMLElement).classList.add(n);
                    });
                    appendDisconnectCallbackToNode(node, computedObservable.dispose);
                }
            }
        });
    }
}

globalPropertyHandlers.set("switch", switchClass);

export function bindStyle(element: HTMLElement, value: Partial<JSX.ObservableCSSStyleDeclaration>) {
    appendConnectCallbackToNode(element, () => {
        for (let p in value) {
            let v = value[p];
            if (typeof v === "string")
                element.style[p] = v;
            else if (isObservable(v)) {
                let subscription = (v as Observable<string>).subscribeInvokeSneakInLine(n => {
                    element.style[p] = n;
                });
                appendDisconnectCallbackToNode(element, subscription.dispose);
            }
            else {
                let computedObservable = co(v as () => string);
                computedObservable.subscribeInvokeSneakInLine(n => {
                    element.style[p] = n;
                });
                appendDisconnectCallbackToNode(element, computedObservable.dispose);
            }
        }
    });
}

globalPropertyHandlers.set("style", bindStyle as any);

function createNodeFromFunction(fn, properties: { [name: string]: any }, children: any[]) {
    if (fn.prototype instanceof Component)
        return <Component<Node>>new fn(properties, children);
    else return fn(properties, children);
}

function createDocumentFragment(children: any[]) {
    let documentFragment = document.createDocumentFragment();
    for (let c of children)
        appendChild(documentFragment, c);
    return documentFragment;
}

export function replaceChildNodesWithDocumentFragment(parentNode: Node, documentFragment: DocumentFragment) {

    let oldChildNodes = document.createDocumentFragment(), firstChild: Node;

    while (firstChild = parentNode.firstChild)
        oldChildNodes.appendChild(firstChild);

    parentNode.appendChild(documentFragment);

    return oldChildNodes;
}

const bodyMutationObserver = new MutationObserver(function (mutations: MutationRecord[], observer: MutationObserver) {

    for (let m of mutations) {
        for (let n of m.removedNodes)
            disconnectNode(n);
        for (let n of m.addedNodes)
            connectNode(n);
    }
});

bodyMutationObserver.observe(document.body, { subtree: true, childList: true });