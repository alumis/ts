import { Page, PageDirection, HttpStatusCode } from "@alumis/elastic-ts/SPA";

import { ExternalLink } from "../../ExternalLink";
import { MonacoEditor } from "../../MonacoEditor";
import { ShellCommand } from "../../ShellCommand";
import { ListStyleType } from "../../list-style-type";

import * as monaco from "monaco-editor";

export class IntroductionPage extends Page<HTMLDivElement> {

  get title() {
    return "Introduction";
  }

  async loadAsync(_parameters: URLSearchParams, _pageDirection: PageDirection, _e?: PopStateEvent) {

    if (!this.node) {
      this.node = (
        <div>
          <h1>Introduction</h1>
          <p>
            Elastic.js is a TypeScript front-end web framework that combines JSX/TSX with an observer pattern to generate and update DOM elements.
            JSX is an extension to the JavaScript language that allows embedding XML/HTML-like text, which greatly simplifies the dynamic generation of user interfaces.
              </p>
          <p>
            Only the TypeScript files are packaged, and the developer must perform the compilation him or herself using e.g. Webpack or Parcel + Babel.
                Please refer to the <em>Getting started</em> section below to quickly get up and running using a pre-configured template that can be downloaded using npm.
              </p>
          <h2 id="setting-up-your-environment">Setting up your environment</h2>
          <p>In order to start using Elastic.js, you first need to set up a working environment:</p>
          <ol list-style-type={ListStyleType.Decimal}>
            <li>Make sure Node.js is installed</li>
            <li>Run <ShellCommand>npx @alumis/create-elastic-app ./new-project-folder-name</ShellCommand></li>
          </ol>
          <p>TODO: Describe project</p>
          <h2 id="example">Example</h2>
          <p>A simple observer pattern lays the foundation for most of the framework. This simple pattern features an object, called an <em>observable</em>, which maintains a list of its dependents, called <em>subscribers</em>. Different types of observables exist. Consider the following working example:</p>
          <MonacoEditor model={exampleModel} />
          <p>The above example illustrates some important principles:</p>
          <ul list-style-type={ListStyleType.Disc}>
            <li>Tags written in JSX/TSX notation return actual <ExternalLink href="https://developer.mozilla.org/en-US/docs/Web/API/Node">DOM Nodes</ExternalLink> (otherwise document.body.appendChild(...) would not have worked)</li>
            <li>Observables written within curly brackets ({"{}"}) are automatically subscribed to</li>
            <li>Functions written within curly brackets are automatically converted to computed observables and are subsequently subscribed to</li>
          </ul>
        </div>
      );
    }

    return HttpStatusCode.Ok;
  }
}

let exampleModel = monaco.editor.createModel(`import { bootstrap } from "@alumis/elastic-ts/JSX";
import { o } from "@alumis/elastic-ts/ModifiableObservable";

bootstrap(); // Initialize the framework at the beginning of your app

let givenName = o("todo"); // Creates a ModifiableObservable<string>

document.body.appendChild(
  <p>My given name is {givenName} and
  it is {() => givenName.value.length} characters long.</p>
);

givenName.value = "Bert"; // The DOM will automatically reflect the changes`, "typescript", monaco.Uri.parse(`file:///TutorialPage/IntroductionPage/example.tsx`));