import { Page, PageDirection, HttpStatusCode } from "@alumis/ts/SPA";

import { ExternalLink } from "../../ExternalLink";
import { MonacoEditor } from "../../MonacoEditor";
import { ShellCommand } from "../../ShellCommand";
import { ListStyleType } from "../../list-style-type";

import * as monaco from "monaco-editor";
import { INTRODUCTION_PAGE_TITLE, INTRODUCTION_PAGE_SETUP_ID, INTRODUCTION_PAGE_SETUP_TITLE, INTRODUCTION_PAGE_EXAMPLE_ID, INTRODUCTION_PAGE_EXAMPLE_TITLE } from "./metadata";

export class IntroductionPage extends Page<HTMLDivElement> {

  get title() {
    return INTRODUCTION_PAGE_TITLE;
  }

  async loadAsync(path: string[], pathIndex: number, _parameters: URLSearchParams, _pageDirection: PageDirection, _e?: PopStateEvent) {

    if (!this.node) {
      this.node = (
        <div>
          <h1>{INTRODUCTION_PAGE_TITLE}</h1>
          <p>
            Alumis is a TypeScript front-end web framework that combines JSX with an observer pattern to generate and update DOM elements.
            JSX is an extension to the JavaScript language that allows embedding XML/HTML-like text, which greatly simplifies the dynamic generation of user interfaces.
          </p>
          <p>
            Only the TypeScript files are packaged (npm), and the developer must perform the compilation him or herself using e.g. Webpack or Parcel + Babel.
          </p>
          <h2 id={INTRODUCTION_PAGE_SETUP_ID}>{INTRODUCTION_PAGE_SETUP_TITLE}</h2>
          <p>In order to start using Alumis, you first need to set up a working environment. Follow the instructions below to download a pre-configured template that, among other things, uses Webpack and Babel to compile JavaScript.</p>
          <ol list-style-type={ListStyleType.Decimal}>
            <li>Make sure Node.js is installed</li>
            <li>Run <ShellCommand>npx @alumis/ts-create ./new-project-folder-name</ShellCommand></li>
          </ol>
          <p>
            The template includes a small Single Page Application.
          </p>
          <h2 id={INTRODUCTION_PAGE_EXAMPLE_ID}>{INTRODUCTION_PAGE_EXAMPLE_TITLE}</h2>
          <p>A simple observer pattern lays the foundation for most of the framework. This simple pattern features an object, called an <em>observable</em>, which maintains a list of its dependents, called <em>subscribers</em>. Different types of observables exist. Consider the following working example:</p>
          <MonacoEditor model={exampleModel} />
          <p>The above example illustrates some important principles:</p>
          <ul list-style-type={ListStyleType.Disc}>
            <li>Tags written in JSX notation return actual <ExternalLink href="https://developer.mozilla.org/en-US/docs/Web/API/Node">DOM Nodes</ExternalLink> (otherwise document.body.appendChild(...) would not have worked)</li>
            <li>Observables written within curly brackets ({"{}"}) are automatically subscribed to</li>
            <li>Functions written within curly brackets are automatically converted to computed observables and subsequently subscribed to</li>
          </ul>
        </div>
      );
    }

    return HttpStatusCode.Ok;
  }
}

let exampleModel = monaco.editor.createModel(`import { bootstrapJSX } from "@alumis/ts/JSX";
import { o } from "@alumis/ts/ModifiableObservable";

bootstrapJSX(); // When using JSX, you need to call this function at the beginning of your app

let givenName = o("todo"); // Creates a ModifiableObservable<string>

document.body.appendChild(
  <p>givenName is {givenName} and
  it is {() => givenName.value.length} characters long.</p>
);

givenName.value = "Ada"; // The DOM will automatically reflect the changes`, "typescript", monaco.Uri.parse(`file:///TutorialPage/IntroductionPage/example.tsx`));