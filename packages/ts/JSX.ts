import { Observable } from "./Observable";
import { co, ComputedObservable } from "./ComputedObservable";
import { ModifiableObservable } from "./ModifiableObservable";
import { isObservable } from "./isObservable";
import { ObservableList, ObservableListModificationType } from "./ObservableList";

export function bootstrapJSX() {
    // @ts-ignore
    self.createNode = createNode;
}

export var globalPropertyHandlers = new Map<string, (node: Node, value, properties: { [name: string]: any }) => any>();

export abstract class Component<TNode extends Node> {

    node: TNode;

    nodeDestroyed() {
        delete this.node;
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
        let componentDisposeNode = document.createComment(" Elastic: dispose component ");
        appendDisposeCallbackToNode(componentDisposeNode, child.nodeDestroyed.bind(child));
        parentNode.appendChild(componentDisposeNode);
    }
    else if (child instanceof HTMLElement || child instanceof SVGElement || child instanceof Comment || child instanceof DocumentFragment)
        parentNode.appendChild(child);
    else if (isObservable(child))
        appendObservableChild(parentNode, child);
    else if (typeof child === "function")
        appendObservableChild(parentNode, co(child), child);
    else if (child instanceof ObservableList)
        appendObservableListChild(parentNode, child);
    else if (child instanceof Array)
        for (let c of child)
            appendChild(parentNode, c);
    else if (child !== null && child !== undefined)
        parentNode.appendChild(document.createTextNode(child));
}

function appendObservableChild(parentNode: Node, observable: Observable<any>, observableExpression?: () => any) {

    // TODO: Reuse text node

    let value = observable.peek(), head = document.createComment(" Elastic: head "), documentFragment = document.createDocumentFragment(), tail = document.createComment(" Elastic: tail ");

    documentFragment.appendChild(head);
    appendChild(documentFragment, value);
    documentFragment.appendChild(tail);
    parentNode.appendChild(documentFragment);

    let subscription = observable.subscribeSneakInLine(n => {
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
        head.parentNode.insertBefore(documentFragment, tail);
    });

    if (observableExpression) {

        if ((observableExpression as unknown as NormalizedFunction).dispose)
            appendDisposeCallbackToNode(tail, (observableExpression as unknown as NormalizedFunction).dispose);

        appendDisposeCallbackToNode(tail, observable.dispose);
    }

    else appendDisposeCallbackToNode(tail, subscription.dispose);
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
        for (let child = node.firstChild; ;) {
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
    let observableListDisposeNode = document.createComment(" Elastic: dispose list ");
    documentFragment.appendChild(observableListDisposeNode);
    parentNode.appendChild(documentFragment);

    observableList.subscribeSneakInLine(modifications => {
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
                    parentNode.insertBefore(documentFragment, m.refItem ? items.get(m.refItem).firstChild : observableListDisposeNode);
                    break;
                }
                case ObservableListModificationType.Remove: {
                    let item = items.get(m.item);
                    items.delete(m.item);
                    for (let node = item.firstChild; ;) {
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

    if (name.indexOf("-") !== -1) {
        if (isObservable(expression)) {
            let subscription = (expression as Observable<any>).subscribeInvokeSneakInLine(n => { element.setAttribute(name, n); });
            appendDisposeCallbackToNode(element, subscription.dispose);
        }
        else if (typeof expression === "function") {
            let computedObservable = co(expression);
            computedObservable.subscribeInvokeSneakInLine(n => { element.setAttribute(name, n as any); });
            if ((expression as unknown as NormalizedFunction).dispose)
                appendDisposeCallbackToNode(element, (expression as unknown as NormalizedFunction).dispose);
            appendDisposeCallbackToNode(element, computedObservable.dispose);
        }
        else element.setAttribute(name, expression);
    }

    else {

        if (isObservable(expression)) {

            let subscription = (expression as Observable<any>).subscribeInvokeSneakInLine(n => { element[name] = n; });

            appendDisposeCallbackToNode(element, subscription.dispose);

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
            computedObservable.subscribeInvokeSneakInLine(n => { element[name] = n; });
            if ((expression as unknown as NormalizedFunction).dispose)
                appendDisposeCallbackToNode(element, (expression as unknown as NormalizedFunction).dispose);
            appendDisposeCallbackToNode(element, computedObservable.dispose);
        }
        else element[name] = expression;
    }
}

globalPropertyHandlers.set("style", (element: HTMLElement, value: Partial<CSSStyleDeclaration>) => {
    Object.assign(element.style, value);
});

globalPropertyHandlers.set("role", (element: HTMLElement, value: string | Observable<string> | (() => string)) => {
    if (isObservable(value)) {
        let subscription = (value as Observable<any>).subscribeInvokeSneakInLine(n => { element.setAttribute("role", n); });
        appendDisposeCallbackToNode(element, subscription.dispose);
    }
    else if (typeof value === "function") {
        let computedObservable = co(value);
        computedObservable.subscribeInvokeSneakInLine(n => { element.setAttribute("role", n as any); });
        if ((value as unknown as NormalizedFunction).dispose)
            appendDisposeCallbackToNode(element, (value as unknown as NormalizedFunction).dispose);
        appendDisposeCallbackToNode(element, computedObservable.dispose);
    }
    else element.setAttribute("role", value as string);
});

export function toggleClass(element: HTMLElement, value: { [name: string]: boolean | Observable<boolean> | (() => boolean); }) {
    for (let p in value) {
        let expression = value[p] as boolean | Observable<boolean> | (() => boolean);
        if (isObservable(expression)) {
            let subscription = (function (p) { return (expression as Observable<any>).subscribeInvokeSneakInLine(n => { element.classList.toggle(p, n); }); })(p);
            appendDisposeCallbackToNode(element, subscription.dispose);
        }
        else if (typeof expression === "function") {
            let computedObservable = co(expression);
            (function (p) { computedObservable.subscribeInvokeSneakInLine(n => { element.classList.toggle(p, n); }); })(p);
            if ((expression as unknown as NormalizedFunction).dispose)
                appendDisposeCallbackToNode(element, (expression as unknown as NormalizedFunction).dispose);
            appendDisposeCallbackToNode(element, computedObservable.dispose);
        }
        else element.classList.toggle(p, expression as boolean);
    }
}

globalPropertyHandlers.set("toggle", toggleClass);

export function switchClass(element: HTMLElement, value: Observable<string> | (() => string) | (Observable<string> | (() => string))[]) {
    if (isObservable(value)) {
        let subscription = (value as Observable<string>).subscribeInvokeSneakInLine(n => { element.className = n; });
        appendDisposeCallbackToNode(element, subscription.dispose);
    }
    else if (typeof value === "function") {
        let computedObservable = co(value);
        computedObservable.subscribeInvokeSneakInLine(n => { element.className = n; });
        if ((value as unknown as NormalizedFunction).dispose)
            appendDisposeCallbackToNode(element, (value as unknown as NormalizedFunction).dispose);
        appendDisposeCallbackToNode(element, computedObservable.dispose);
    }
    else {
        for (let i of value as (Observable<string> | (() => string))[]) {
            if (typeof i === "string")
                element.classList.add(i);
            else if (isObservable(i)) {
                let subscription = (i as Observable<string>).subscribeInvokeSneakInLine((n, o) => {
                    if (o) element.classList.remove(o);
                    if (n) element.classList.add(n);
                });
                appendDisposeCallbackToNode(element, subscription.dispose);
            }
            else {
                let computedObservable = co(i as () => string);
                computedObservable.subscribeInvokeSneakInLine((n, o) => {
                    if (o) element.classList.remove(o);
                    if (n) element.classList.add(n);
                });
                appendDisposeCallbackToNode(element, computedObservable.dispose);
            }
        }
    }
}

globalPropertyHandlers.set("switch", switchClass);

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
    let documentFragment = document.createDocumentFragment(), comment = document.createComment(" Elastic: managed ");
    documentFragment.appendChild(comment);
    for (let c of children)
        appendChild(documentFragment, c);
    comment[LAST_MANAGED_CHILD_KEY] = documentFragment.lastChild;
    return documentFragment;
}

export function normalize<T, U>(normalizeFn: () => T, generateFn: (normalized: ComputedObservable<T>) => U) {

    let normalized = co(normalizeFn), result = () => generateFn(normalized);

    (result as unknown as NormalizedFunction).dispose = normalized.dispose;

    return result;
}

export interface NormalizedFunction {

    dispose();
}

export interface IntrinsicElements {

    a: HTMLAttributes<HTMLAnchorElement>;
    abbr: HTMLAttributes<HTMLElement>;
    address: HTMLAttributes<HTMLElement>;
    area: HTMLAttributes<HTMLAreaElement>;
    article: HTMLAttributes<HTMLElement>;
    aside: HTMLAttributes<HTMLElement>;
    audio: HTMLAttributes<HTMLAudioElement>;
    b: HTMLAttributes<HTMLElement>;
    base: HTMLAttributes<HTMLBaseElement>;
    bdi: HTMLAttributes<HTMLElement>;
    bdo: HTMLAttributes<HTMLElement>;
    big: HTMLAttributes<HTMLElement>;
    blockquote: HTMLAttributes<HTMLElement>;
    body: HTMLAttributes<HTMLBodyElement>;
    br: HTMLAttributes<HTMLBRElement>;
    button: HTMLAttributes<HTMLButtonElement>;
    canvas: HTMLAttributes<HTMLCanvasElement>;
    caption: HTMLAttributes<HTMLElement>;
    cite: HTMLAttributes<HTMLElement>;
    code: HTMLAttributes<HTMLElement>;
    col: HTMLAttributes<HTMLTableColElement>;
    colgroup: HTMLAttributes<HTMLTableColElement>;
    data: HTMLAttributes<HTMLDataElement>;
    datalist: HTMLAttributes<HTMLDataListElement>;
    dd: HTMLAttributes<HTMLElement>;
    del: HTMLAttributes<HTMLElement>;
    details: HTMLAttributes<HTMLElement>;
    dfn: HTMLAttributes<HTMLElement>;
    dialog: HTMLAttributes<HTMLDialogElement>;
    div: HTMLAttributes<HTMLDivElement>;
    dl: HTMLAttributes<HTMLDListElement>;
    dt: HTMLAttributes<HTMLElement>;
    em: HTMLAttributes<HTMLElement>;
    embed: HTMLAttributes<HTMLEmbedElement>;
    fieldset: HTMLAttributes<HTMLFieldSetElement>;
    figcaption: HTMLAttributes<HTMLElement>;
    figure: HTMLAttributes<HTMLElement>;
    footer: HTMLAttributes<HTMLElement>;
    form: HTMLAttributes<HTMLFormElement>;
    h1: HTMLAttributes<HTMLHeadingElement>;
    h2: HTMLAttributes<HTMLHeadingElement>;
    h3: HTMLAttributes<HTMLHeadingElement>;
    h4: HTMLAttributes<HTMLHeadingElement>;
    h5: HTMLAttributes<HTMLHeadingElement>;
    h6: HTMLAttributes<HTMLHeadingElement>;
    head: HTMLAttributes<HTMLElement>;
    header: HTMLAttributes<HTMLElement>;
    hgroup: HTMLAttributes<HTMLElement>;
    hr: HTMLAttributes<HTMLHRElement>;
    html: HTMLAttributes<HTMLHtmlElement>;
    i: HTMLAttributes<HTMLElement>;
    iframe: HTMLAttributes<HTMLIFrameElement>;
    img: HTMLAttributes<HTMLImageElement>;
    input: HTMLAttributes<HTMLInputElement>;
    ins: HTMLAttributes<HTMLModElement>;
    kbd: HTMLAttributes<HTMLElement>;
    keygen: HTMLAttributes<HTMLElement>;
    label: HTMLAttributes<HTMLLabelElement>;
    legend: HTMLAttributes<HTMLLegendElement>;
    li: HTMLAttributes<HTMLLIElement>;
    link: HTMLAttributes<HTMLLinkElement>;
    main: HTMLAttributes<HTMLElement>;
    map: HTMLAttributes<HTMLMapElement>;
    mark: HTMLAttributes<HTMLElement>;
    menu: HTMLAttributes<HTMLElement>;
    menuitem: HTMLAttributes<HTMLElement>;
    meta: HTMLAttributes<HTMLMetaElement>;
    meter: HTMLAttributes<HTMLElement>;
    nav: HTMLAttributes<HTMLElement>;
    noscript: HTMLAttributes<HTMLElement>;
    object: HTMLAttributes<HTMLObjectElement>;
    ol: HTMLAttributes<HTMLOListElement>;
    optgroup: HTMLAttributes<HTMLOptGroupElement>;
    option: HTMLAttributes<HTMLOptionElement>;
    output: HTMLAttributes<HTMLElement>;
    p: HTMLAttributes<HTMLParagraphElement>;
    param: HTMLAttributes<HTMLParamElement>;
    picture: HTMLAttributes<HTMLElement>;
    pre: HTMLAttributes<HTMLPreElement>;
    progress: HTMLAttributes<HTMLProgressElement>;
    q: HTMLAttributes<HTMLQuoteElement>;
    rp: HTMLAttributes<HTMLElement>;
    rt: HTMLAttributes<HTMLElement>;
    ruby: HTMLAttributes<HTMLElement>;
    s: HTMLAttributes<HTMLElement>;
    samp: HTMLAttributes<HTMLElement>;
    script: HTMLAttributes<HTMLScriptElement>;
    section: HTMLAttributes<HTMLElement>;
    select: HTMLAttributes<HTMLSelectElement>;
    small: HTMLAttributes<HTMLElement>;
    source: HTMLAttributes<HTMLSourceElement>;
    span: HTMLAttributes<HTMLSpanElement>;
    strong: HTMLAttributes<HTMLElement>;
    style: HTMLAttributes<HTMLStyleElement>;
    sub: HTMLAttributes<HTMLElement>;
    summary: HTMLAttributes<HTMLElement>;
    sup: HTMLAttributes<HTMLElement>;
    table: HTMLAttributes<HTMLTableElement>;
    template: HTMLAttributes<HTMLTemplateElement>;
    tbody: HTMLAttributes<HTMLTableSectionElement>;
    td: HTMLAttributes<HTMLTableDataCellElement>;
    textarea: HTMLAttributes<HTMLTextAreaElement>;
    tfoot: HTMLAttributes<HTMLTableSectionElement>;
    th: HTMLAttributes<HTMLTableHeaderCellElement>;
    thead: HTMLAttributes<HTMLTableSectionElement>;
    time: HTMLAttributes<HTMLElement>;
    title: HTMLAttributes<HTMLTitleElement>;
    tr: HTMLAttributes<HTMLTableRowElement>;
    track: HTMLAttributes<HTMLTrackElement>;
    u: HTMLAttributes<HTMLElement>;
    ul: HTMLAttributes<HTMLUListElement>;
    "var": HTMLAttributes<HTMLElement>;
    video: HTMLAttributes<HTMLVideoElement>;
    wbr: HTMLAttributes<HTMLElement>;
    svg: SVGAttributes<SVGElement>;
}

export type FunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? K : never }[keyof T];
export type FunctionProperties<T> = Pick<T, FunctionPropertyNames<T>>;

export type NonFunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? never : K }[keyof T];
export type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;

export type ApplicableNonFunctionProperties<T> = Omit<NonFunctionProperties<T>, "children" | "style">;

export type HTMLAttributes<T extends HTMLElement> =
    & { [P in keyof ApplicableNonFunctionProperties<T>]?: ApplicableNonFunctionProperties<T>[P] | Observable<ApplicableNonFunctionProperties<T>[P]> | (() => ApplicableNonFunctionProperties<T>[P]); }
    & { [P in keyof AriaAttributes]?: AriaAttributes[P] | Observable<AriaAttributes[P]> | (() => AriaAttributes[P]); }
    & { role?: string | Observable<string> | (() => string); }
    & { style?: Partial<CSSStyleDeclaration>; } // TODO: Support observables
    & { toggle?: { [name: string]: boolean | Observable<boolean> | (() => boolean); }; }
    & { switch?: Observable<string> | (() => string) | (Observable<string> | (() => string))[]; }
    & { [P in keyof FunctionProperties<T>]?: FunctionProperties<T>[P]; };

export type SVGAttributes<T extends SVGElement> =
    & { [P in keyof ApplicableNonFunctionProperties<T>]?: ApplicableNonFunctionProperties<T>[P] | Observable<ApplicableNonFunctionProperties<T>[P]> | (() => ApplicableNonFunctionProperties<T>[P]); }
    & { [P in keyof AriaAttributes]?: AriaAttributes[P] | Observable<AriaAttributes[P]> | (() => AriaAttributes[P]); }
    & { style?: Partial<CSSStyleDeclaration>; }
    & { toggle?: { [name: string]: boolean | Observable<boolean> | (() => boolean); }; }
    & { switch?: Observable<string> | (() => string) | (Observable<string> | (() => string))[]; }
    & { [P in keyof FunctionProperties<T>]?: FunctionProperties<T>[P]; };

// All the WAI-ARIA 1.1 attributes from https://www.w3.org/TR/wai-aria-1.1/
export interface AriaAttributes {
    /** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
    "aria-activedescendant"?: string;
    /** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
    "aria-atomic"?: boolean | "false" | "true";
    /**
     * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
     * presented if they are made.
     */
    "aria-autocomplete"?: "none" | "inline" | "list" | "both";
    /** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
    "aria-busy"?: boolean | "false" | "true";
    /**
     * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
     * @see aria-pressed @see aria-selected.
     */
    "aria-checked"?: boolean | "false" | "mixed" | "true";
    /**
     * Defines the total number of columns in a table, grid, or treegrid.
     * @see aria-colindex.
     */
    "aria-colcount"?: number;
    /**
     * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
     * @see aria-colcount @see aria-colspan.
     */
    "aria-colindex"?: number;
    /**
     * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
     * @see aria-colindex @see aria-rowspan.
     */
    "aria-colspan"?: number;
    /**
     * Identifies the element (or elements) whose contents or presence are controlled by the current element.
     * @see aria-owns.
     */
    "aria-controls"?: string;
    /** Indicates the element that represents the current item within a container or set of related elements. */
    "aria-current"?: boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time";
    /**
     * Identifies the element (or elements) that describes the object.
     * @see aria-labelledby
     */
    "aria-describedby"?: string;
    /**
     * Identifies the element that provides a detailed, extended description for the object.
     * @see aria-describedby.
     */
    "aria-details"?: string;
    /**
     * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
     * @see aria-hidden @see aria-readonly.
     */
    "aria-disabled"?: boolean | "false" | "true";
    /**
     * Indicates what functions can be performed when a dragged object is released on the drop target.
     * @deprecated in ARIA 1.1
     */
    "aria-dropeffect"?: "none" | "copy" | "execute" | "link" | "move" | "popup";
    /**
     * Identifies the element that provides an error message for the object.
     * @see aria-invalid @see aria-describedby.
     */
    "aria-errormessage"?: string;
    /** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
    "aria-expanded"?: boolean | "false" | "true";
    /**
     * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
     * allows assistive technology to override the general default of reading in document source order.
     */
    "aria-flowto"?: string;
    /**
     * Indicates an element's "grabbed" state in a drag-and-drop operation.
     * @deprecated in ARIA 1.1
     */
    "aria-grabbed"?: boolean | "false" | "true";
    /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
    "aria-haspopup"?: boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog";
    /**
     * Indicates whether the element is exposed to an accessibility API.
     * @see aria-disabled.
     */
    "aria-hidden"?: boolean | "false" | "true";
    /**
     * Indicates the entered value does not conform to the format expected by the application.
     * @see aria-errormessage.
     */
    "aria-invalid"?: boolean | "false" | "true" | "grammar" | "spelling";
    /** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
    "aria-keyshortcuts"?: string;
    /**
     * Defines a string value that labels the current element.
     * @see aria-labelledby.
     */
    "aria-label"?: string;
    /**
     * Identifies the element (or elements) that labels the current element.
     * @see aria-describedby.
     */
    "aria-labelledby"?: string;
    /** Defines the hierarchical level of an element within a structure. */
    "aria-level"?: number;
    /** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
    "aria-live"?: "off" | "assertive" | "polite";
    /** Indicates whether an element is modal when displayed. */
    "aria-modal"?: boolean | "false" | "true";
    /** Indicates whether a text box accepts multiple lines of input or only a single line. */
    "aria-multiline"?: boolean | "false" | "true";
    /** Indicates that the user may select more than one item from the current selectable descendants. */
    "aria-multiselectable"?: boolean | "false" | "true";
    /** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
    "aria-orientation"?: "horizontal" | "vertical";
    /**
     * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
     * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
     * @see aria-controls.
     */
    "aria-owns"?: string;
    /**
     * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
     * A hint could be a sample value or a brief description of the expected format.
     */
    "aria-placeholder"?: string;
    /**
     * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
     * @see aria-setsize.
     */
    "aria-posinset"?: number;
    /**
     * Indicates the current "pressed" state of toggle buttons.
     * @see aria-checked @see aria-selected.
     */
    "aria-pressed"?: boolean | "false" | "mixed" | "true";
    /**
     * Indicates that the element is not editable, but is otherwise operable.
     * @see aria-disabled.
     */
    "aria-readonly"?: boolean | "false" | "true";
    /**
     * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
     * @see aria-atomic.
     */
    "aria-relevant"?: "additions" | "additions text" | "all" | "removals" | "text";
    /** Indicates that user input is required on the element before a form may be submitted. */
    "aria-required"?: boolean | "false" | "true";
    /** Defines a human-readable, author-localized description for the role of an element. */
    "aria-roledescription"?: string;
    /**
     * Defines the total number of rows in a table, grid, or treegrid.
     * @see aria-rowindex.
     */
    "aria-rowcount"?: number;
    /**
     * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
     * @see aria-rowcount @see aria-rowspan.
     */
    "aria-rowindex"?: number;
    /**
     * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
     * @see aria-rowindex @see aria-colspan.
     */
    "aria-rowspan"?: number;
    /**
     * Indicates the current "selected" state of various widgets.
     * @see aria-checked @see aria-pressed.
     */
    "aria-selected"?: boolean | "false" | "true";
    /**
     * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
     * @see aria-posinset.
     */
    "aria-setsize"?: number;
    /** Indicates if items in a table or grid are sorted in ascending or descending order. */
    "aria-sort"?: "none" | "ascending" | "descending" | "other";
    /** Defines the maximum allowed value for a range widget. */
    "aria-valuemax"?: number;
    /** Defines the minimum allowed value for a range widget. */
    "aria-valuemin"?: number;
    /**
     * Defines the current value for a range widget.
     * @see aria-valuetext.
     */
    "aria-valuenow"?: number;
    /** Defines the human readable text alternative of aria-valuenow for a range widget. */
    "aria-valuetext"?: string;
}