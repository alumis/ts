import tutorialPageStyles from "./index.scss";

import { Page, PageDirection, HttpStatusCode } from "@alumis/elastic-ts/SPA";
import { Component } from "@alumis/elastic-ts/JSX";
import ExternalLink from "../ExternalLink";
import Callout from "../Callout";
import InlineMonacoEditor from "../SimpleMonacoEditor";

export class TutorialPage extends Page<HTMLDivElement> {

     get title() {
        return "Tutorial";
    }
    
    async loadAsync(parameters: URLSearchParams, pageDirection: PageDirection, e?: PopStateEvent) {

        if (!this.node) {
            this.node = (
                <div className={tutorialPageStyles.tutorialPage} responsiveContainerWithNoRightMargin>
                    <article className={tutorialPageStyles.tutorialPageBody}>
                        <div className={tutorialPageStyles.tutorialPagePaper}>
                            <h1>Tutorial</h1>
                                <p>
                                    Elastic.js is a TypeScript front-end web framework that combines JSX/TSX with an observer pattern to generate and update DOM elements.
                                    JSX is an extension to the JavaScript language that allows embedding XML/HTML-like text, which greatly simplifies the dynamic generation of user interfaces.
                                </p>
                                <Callout>
                                    <h1>Coming from <span style={{ fontFamily: "Arial" }}>&#x269B;</span> React?</h1>
                                    <p>If you already know React and JSX, you should read <a href="/tutorial/getting-started-for-react-developers">Getting started for React developers</a>.</p>
                                </Callout>
                                <p>A general philosophy of the framework is to provide the developer with as much control as possible, and; as such, it is left to the developer to decide for which browsers should be targeted. Only the TypeScript files are packaged, and the developer must perform the compilation/transpilation him or herself using e.g. Webpack or Parcel + Babel.</p>
                            <h2>Getting started</h2>
                                <p>In order to start using Elastic.js, you first need to set up a working environment:</p>
                                <ol numbered>
                                    <li>Make sure Node.js is installed</li>
                                    <li>Run <code>npx @alumis/create-elastic-app ./new-project-folder-name</code></li>
                                </ol>
                            <h3>Observables and the DOM</h3>
                                <p>One basic pattern lays the foundation for the entire framework; namely the <em>observer pattern</em>. This simple pattern features an object, called an <em>observable</em>, which maintains a list of its dependents, called <em>subscribers</em>. Different types of observables exist. Consider the following working example:</p>
                                <InlineMonacoEditor rows={13} code={`import { bootstrap } from "@alumis/elastic-ts/JSX";
import { mo } from "@alumis/elastic-ts/ModifiableObservable";

bootstrap(); // Initialize the framework at the beginning of your app

let givenName = mo("todo"); // Creates a ModifiableObservable<string>

document.appendChild(
    <div>My given name is: {givenName}</div>
);

givenName.value = "Bert"; // The DOM will automatically reflect the changes`} />
                                <p>The above example illustrates two important principles: That elements written in JSX/TSX notation return actual <ExternalLink href="https://developer.mozilla.org/en-US/docs/Web/API/Node">DOM Nodes</ExternalLink> (otherwise document.appendChild(...) would not have worked), and that the generated DOM Nodes automatically subscribes to observables.</p>
                        </div>
                    </article>
                    <nav className={tutorialPageStyles.tutorialPageToc}>
                        <h1>Table of Contents</h1>
                    </nav>
                </div>
            );
        }

        return HttpStatusCode.Ok;
    }
}

class TestComponent extends Component<HTMLDivElement> {
    /**
     *
     */
    constructor(props, children) {
        super();
        this.node = <span>{children}</span>;
    }
}