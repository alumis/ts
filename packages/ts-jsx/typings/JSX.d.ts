declare namespace JSX {

    type FilteredKeys<T, U> = {
        [K in keyof T]: T[K] extends U ? K : never
    }[keyof T];

    type FunctionKeys<T> = {
        [K in keyof T]: T[K] extends Function ? K : never
    }[keyof T];

    // https://stackoverflow.com/questions/49579094/typescript-conditional-types-filter-out-readonly-properties-pick-only-requir

    type IfEquals<X, Y, A = X, B = never> =
        (<T>() => T extends X ? 1 : 2) extends
        (<T>() => T extends Y ? 1 : 2) ? A : B;

    type ReadonlyKeys<T> = {
        [P in keyof T]-?: IfEquals<{ [Q in P]: T[P] }, { -readonly [Q in P]: T[P] }, never, P>
    }[keyof T];

    type Observable<T> = import("@alumis/ts-observables/Observable").Observable<T>;

    type BaseProperties<T> = Omit<T, FunctionKeys<T> | ReadonlyKeys<T>>;

    type HTMLAttributes<T extends HTMLElement> =
        & { [P in keyof BaseProperties<T>]?: BaseProperties<T>[P] | Observable<BaseProperties<T>[P]> | (() => BaseProperties<T>[P]); }
        & { [P in keyof AriaAttributes]?: AriaAttributes[P] | Observable<AriaAttributes[P]> | (() => AriaAttributes[P]); }
        & Partial<GlobalEventHandlers>
        & { role?: string | Observable<string> | (() => string); }
        & { style?: Partial<ObservableCSSStyleDeclaration>; }
        & { toggle?: { [name: string]: boolean | Observable<boolean> | (() => boolean); }; }
        & { switch?: Observable<string> | (() => string) | (Observable<string> | (() => string))[]; };

    type SVGAttributes<T extends SVGElement> = // TODO: Currently identical as above. Fix.
        & { [P in keyof BaseProperties<T>]?: BaseProperties<T>[P] | Observable<BaseProperties<T>[P]> | (() => BaseProperties<T>[P]); }
        & { [P in keyof AriaAttributes]?: AriaAttributes[P] | Observable<AriaAttributes[P]> | (() => AriaAttributes[P]); }
        & Partial<GlobalEventHandlers>
        & { role?: string | Observable<string> | (() => string); }
        & { style?: Partial<ObservableCSSStyleDeclaration>; }
        & { toggle?: { [name: string]: boolean | Observable<boolean> | (() => boolean); }; }
        & { switch?: Observable<string> | (() => string) | (Observable<string> | (() => string))[]; };

    interface AriaAttributes {
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

    type ObservableCSSStyleDeclaration = {
        [P in keyof BaseProperties<CSSStyleDeclaration>]?: BaseProperties<CSSStyleDeclaration>[P] | Observable<BaseProperties<CSSStyleDeclaration>[P]> | (() => BaseProperties<CSSStyleDeclaration>[P]);
    };

    interface IntrinsicElements {
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
}