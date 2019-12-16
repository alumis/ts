import { Observable } from "./Observable";
import { co } from "./ComputedObservable";
import { ModifiableObservable } from "./ModifiableObservable";
import { isObservable } from "./isObservable";
import { ObservableList, ObservableListModificationType } from "./ObservableList";

export function initialize() {
    window["createNode"] = createNode;
}

export var globalPropertyHandlers = new Map<string, (node: Node, value, properties: { [name: string]: any }) => any>();

export abstract class Component<TNode extends Node> {

    node: TNode;

    dispose() {

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

function appendChild(parentNode: Node, child) {
    if (child instanceof Component) {
        appendChild(parentNode, child.node);
        let componentDisposeNode = document.createComment("elastic");
        appendDisposeCallbackToNode(componentDisposeNode, child.dispose.bind(child));
        parentNode.appendChild(componentDisposeNode);
    }
    else if (child instanceof HTMLElement || child instanceof SVGElement || child instanceof Comment || child instanceof DocumentFragment)
        parentNode.appendChild(child);
    else if (isObservable(child))
        appendObservableChild(parentNode, child, false);
    else if (typeof child === "function")
        appendObservableChild(parentNode, co(child), true);
    else if (child instanceof ObservableList)
        appendObservableListChild(parentNode, child);
    else if (child instanceof Array)
        for (let c of child)
            appendChild(parentNode, c);
    else if (child !== null && child !== undefined)
        parentNode.appendChild(document.createTextNode(child));
}

function appendObservableChild(parentNode: Node, observable: Observable<any>, ownsObservable: boolean) {

    // TODO: Reuse text node

    let value = observable.value, head = document.createComment("head"), documentFragment = document.createDocumentFragment(), tail = document.createComment("dispose");

    documentFragment.appendChild(head);
    appendChild(documentFragment, value);
    documentFragment.appendChild(tail);
    parentNode.appendChild(documentFragment);

    let subscription = observable.subscribe(n => {
        appendChild(documentFragment, n);
        for (let child = head.nextSibling; child !== tail;) {
            let lastManagedChild: ChildNode = child[LAST_MANAGED_CHILD_KEY];
            if (lastManagedChild) {
                let n = child;
                child = child.nextSibling;
                n.remove();
                while (n !== lastManagedChild) {
                    n = child;
                    child = child.nextSibling;
                    n.remove();
                }
            }
            else {
                disposeNode(child);
                let n = child;
                child = child.nextSibling;
                n.remove();
            }
        }
        parentNode.insertBefore(documentFragment, tail);
    });

    appendDisposeCallbackToNode(tail, ownsObservable ? observable.dispose : subscription.unsubscribeAndRecycle);
}

const DISPOSE_CALLBACKS_KEY = "__disposeCallbacks";
const LAST_MANAGED_CHILD_KEY = "__lastManagedChild";

export function appendDisposeCallbackToNode(node: Node, dispose: () => any) {
    let disposeCallbacks: (() => any)[] = node[DISPOSE_CALLBACKS_KEY];
    if (disposeCallbacks)
        disposeCallbacks.push(dispose);
    else node[DISPOSE_CALLBACKS_KEY] = [dispose];
}

export function disposeNode(node: Node) {
    if (node.childNodes.length) { // Depth first, post-order tree traversal
        for (let child = node.firstChild;;) {
            let lastManagedChild: ChildNode = child[LAST_MANAGED_CHILD_KEY];
            if (lastManagedChild) {
                while (child !== lastManagedChild)
                    child = child.nextSibling;
            }
            else disposeNode(child);
            if (!(child = child.nextSibling))
                break;
        }
    }
    let disposeCallbacks: (() => any)[] = node[DISPOSE_CALLBACKS_KEY];
    if (disposeCallbacks) {
        delete node[DISPOSE_CALLBACKS_KEY];
        for (let i = disposeCallbacks.length; 0 < i;)
            disposeCallbacks[--i]();
    }
}

function appendObservableListChild(parentNode: Node, observableList: ObservableList<any>) {

    let documentFragment = document.createDocumentFragment(), items = new Map<any, ListItem>();

    let n = null;
    for (let node = observableList.head.next; node !== observableList.tail; node = node.next) {
        appendChild(documentFragment, node.item);
        let item: ListItem = { firstChild: n ? n.nextSibling : documentFragment.firstChild, lastChild: (n = documentFragment.lastChild) };
        items.set(node.item, item);
    }
    let observableListDisposeNode = document.createComment("dispose");
    documentFragment.appendChild(observableListDisposeNode);
    parentNode.appendChild(documentFragment);

    observableList.subscribe(modifications => {
        for (let m of modifications) {
            switch (m.type) {
                case ObservableListModificationType.Append: {
                    appendChild(documentFragment, m.item);
                    let item: ListItem = { firstChild: documentFragment.firstChild, lastChild: documentFragment.lastChild };
                    items.set(m.item, item);
                    parentNode.insertBefore(documentFragment, observableListDisposeNode);
                    break;
                }
                case ObservableListModificationType.InsertBefore: {
                    let item = items.get(m.item);
                    if (item) {
                        for (let node = item.firstChild;;) {
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
                    parentNode.insertBefore(documentFragment, m.refItem ? items.get(m.refItem).firstChild : observableListDisposeNode);
                    break;
                }
                case ObservableListModificationType.Remove: {
                    let item = items.get(m.item);
                    items.delete(m.item);
                    for (let node = item.firstChild;;) {
                        disposeNode(node);
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

    appendDisposeCallbackToNode(observableListDisposeNode, observableList.dispose);
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

    if (name.startsWith("aria-")) {
        if (isObservable(expression)) {
            let subscription = (expression as Observable<any>).subscribeInvoke(n => { element.setAttribute(name, n); });
            appendDisposeCallbackToNode(element, subscription.unsubscribeAndRecycle);
        }
        else if (typeof expression === "function") {
            let computedObservable = co(expression);
            computedObservable.subscribeInvoke(n => { element.setAttribute(name, n as any); });
            appendDisposeCallbackToNode(element, computedObservable.dispose);
        }
        else element.setAttribute(name, expression);
    }

    else {

        if (isObservable(expression)) {

            let subscription = (expression as Observable<any>).subscribeInvoke(n => { element[name] = n; });

            appendDisposeCallbackToNode(element, subscription.unsubscribeAndRecycle);

            if (expression instanceof ModifiableObservable) {

                switch (name) {
                    case "value":
                    case "valueAsDate":
                    case "valueAsNumber": {
                        let listener = (_e: Event) => { expression.setValueDontNotifySubscription(element[name], subscription); };
                        element.addEventListener("input", listener);
                        appendDisposeCallbackToNode(element, () => { element.removeEventListener("input", listener) });
                        break;
                    }
                    case "checked": {
                        let listener = (_e: Event) => { expression.setValueDontNotifySubscription((element as HTMLInputElement).checked, subscription); };
                        element.addEventListener("change", listener);
                        appendDisposeCallbackToNode(element, () => { element.removeEventListener("change", listener) });
                        break;
                    }
                }
            }
        }
        else if (typeof expression === "function") {
            let computedObservable = co(expression);
            computedObservable.subscribeInvoke(n => { element[name] = n; });
            appendDisposeCallbackToNode(element, computedObservable.dispose);
        }
        else element[name] = expression;
    }
}

globalPropertyHandlers.set("class", (element: HTMLElement, value: { [name: string]: boolean | Observable<boolean> | (() => boolean); }) => {
    for (let p in value) {
        let expression = value[p];
        if (isObservable(expression)) {
            let subscription = (function (p) { return (expression as Observable<any>).subscribeInvoke(n => { element.classList.toggle(p, n); }); })(p);
            appendDisposeCallbackToNode(element, subscription.unsubscribeAndRecycle);
        }
        else if (typeof expression === "function") {
            let computedObservable = co(expression);
            (function (p) { computedObservable.subscribeInvoke(n => { element.classList.toggle(p, n); }); })(p);
            appendDisposeCallbackToNode(element, computedObservable.dispose);
        }
        else element.classList.toggle(p, expression as boolean);
    }
});

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

export function Managed(_attributes: {}, children: any[]) {
    let documentFragment = document.createDocumentFragment(), comment = document.createComment("elastic: managed");
    documentFragment.appendChild(comment);
    for (let c of children)
        appendChild(documentFragment, c);
    comment[LAST_MANAGED_CHILD_KEY] = documentFragment.lastChild;        
    return documentFragment;
}