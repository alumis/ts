import { Page, PageDirection, HttpStatusCode } from "@alumis/ts/SPA";
import { MonacoEditor } from "../../MonacoEditor";

import * as monaco from "monaco-editor";
import "../../monaco";
import { Observable } from "@alumis/ts/Observable";
import { ExternalLink } from "../../ExternalLink";
import { INTRODUCTION_TO_JSX_PLUS_OBSERVABLES_PAGE_TITLE } from "./metadata";
import { Callout } from "../../Callout";

export class IntroductionToJSXPlusObservablesPage extends Page<HTMLDivElement> {

  get title() {
    return INTRODUCTION_TO_JSX_PLUS_OBSERVABLES_PAGE_TITLE;
  }

  async loadAsync(path: string[], pathIndex: number, _parameters: URLSearchParams, _pageDirection: PageDirection, _e?: PopStateEvent) {

    if (!this.node) {
      this.node = (
        <div>
          <h1>{INTRODUCTION_TO_JSX_PLUS_OBSERVABLES_PAGE_TITLE}</h1>
          <p>
            JSX is an extension to the JavaScript language that allows embedding XML/HTML-like text, which greatly simplifies the dynamic generation of user interfaces.
          </p>
          <Callout>
            <h5>Coming from React?</h5>
            The JSX attribute naming convention in Alumis is different from React's naming convention.
            In Alumis, attribute names directly correspond with the Node's property names. For example, to subscribe to the <ExternalLink href="https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick">click event</ExternalLink>, the attribute name is <em>onclick</em> and not <em>onClick</em>.
          </Callout>
          <h2>Binding to attributes</h2>
          <p>In addition to binding to content, attributes can be bound as well:</p>
          <MonacoEditor model={bindingToAttributesExampleModel} />
        </div>
      );

      let a: Observable<string>;
    }

    return HttpStatusCode.Ok;
  }
}

let bindingToAttributesExampleModel = monaco.editor.createModel(`import { bootstrapJSX } from "@alumis/ts/JSX";
import { o } from "@alumis/ts/ModifiableObservable";

bootstrapJSX(); // When using JSX, you need to call this function at the beginning of your app

let surname = o("Lovelace");
let isSubmittingForm = o(false);

document.body.appendChild(

  <form onsubmit={e => { e.preventDefault(); isSubmittingForm.value = true; }}>
  
    <label>Surname: <input type="text" value={surname} disabled={isSubmittingForm} /></label>
    <p>Current input value: {surname}</p>

    { /* Disable the button if the form is submitting, or if the surname field is empty */}
    <button type="submit" disabled={() => isSubmittingForm.value || !surname.value.trim()}>Submit</button>

  </form>
);`, "typescript", monaco.Uri.parse(`file:///TutorialPage/IntroductionToJSXPlusObservablesPage/bindingToAttributesExample.tsx`));