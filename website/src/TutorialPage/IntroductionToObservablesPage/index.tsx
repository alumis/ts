import { Page, PageDirection, HttpStatusCode } from "@alumis/ts/SPA";
import { MonacoEditor } from "../../MonacoEditor";

import * as monaco from "monaco-editor";
import "../../monaco";
import { Observable } from "@alumis/ts/Observable";
import { ExternalLink } from "../../ExternalLink";
import { INTRODUCTION_TO_OBSERVABLES_PAGE_TITLE, INTRODUCTION_TO_OBSERVABLES_PAGE_OBSERVABLE_INTERFACE_ID, INTRODUCTION_TO_OBSERVABLES_PAGE_OBSERVABLE_INTERFACE_TITLE, INTRODUCTION_TO_OBSERVABLES_PAGE_MODIFIABLE_OBSERVABLES_ID, INTRODUCTION_TO_OBSERVABLES_PAGE_MODIFIABLE_OBSERVABLES_TITLE, INTRODUCTION_TO_OBSERVABLES_PAGE_COMPUTED_OBSERVABLES_ID, INTRODUCTION_TO_OBSERVABLES_PAGE_COMPUTED_OBSERVABLES_TITLE, INTRODUCTION_TO_OBSERVABLES_PAGE_WHENASYNC_ID, INTRODUCTION_TO_OBSERVABLES_PAGE_WHENASYNC_TITLE } from "./metadata";

export class IntroductionToObservablesPage extends Page<HTMLDivElement> {

  get title() {
    return INTRODUCTION_TO_OBSERVABLES_PAGE_TITLE;
  }

  async loadAsync(path: string[], pathIndex: number, _parameters: URLSearchParams, _pageDirection: PageDirection, _e?: PopStateEvent) {

    if (!this.node) {
      this.node = (
        <div>
          <h1>{INTRODUCTION_TO_OBSERVABLES_PAGE_TITLE}</h1>
          <p>An observable is an object which holds a value. Observers can subscribe to an observable to get notified when its value changes, and react accordingly — e.g. by updating the DOM. When using Alumis' JSX notation, observables written within curly brackets ({"{}"}) are automatically subscribed to, and the logic to update the DOM is automatically implemented.</p>
          <p>
            A particularly useful concept within the observable realm is the <em>computed observable</em> which value is the result of evaluating an expression which in turn depends on other observables.
            By changing the underlying observables within a computed observable's expression, the computed observable will re-evaluate itself and notify its subscribers if its value turns out to have changed.
          </p>
          <h2 id={INTRODUCTION_TO_OBSERVABLES_PAGE_OBSERVABLE_INTERFACE_ID}>{INTRODUCTION_TO_OBSERVABLES_PAGE_OBSERVABLE_INTERFACE_TITLE}</h2>
          <p>All observable types must implement the <code>Observable&lt;T&gt;</code> interface:</p>
          <MonacoEditor model={observableModel} readOnly showPath={true} />
          <p>
            The inline documentation for the <code>Observable&lt;T&gt;</code> interface is quite shallow.
            To better understand the <code>value</code> property and the various functions, the sections below attempt to explain their usage by exemplification.
          </p>
          <h2 id={INTRODUCTION_TO_OBSERVABLES_PAGE_MODIFIABLE_OBSERVABLES_ID}>{INTRODUCTION_TO_OBSERVABLES_PAGE_MODIFIABLE_OBSERVABLES_TITLE}</h2>
          <p>Study the example below to get an impression of how modifiable observables and subscriptions are managed. If you run the example, you must open the developer tools (F12) in the newly opened window to observe the console output.</p>
          <MonacoEditor model={example1Model} />
          <p>Note how the observable was disposed of at the end. The disposing of an observable renders it defunct and it must not be referred again. Although it is not strictly necessary to dispose of an observable, it will most assuredly lead to better performance in larger applications.</p>
          <h2 id={INTRODUCTION_TO_OBSERVABLES_PAGE_COMPUTED_OBSERVABLES_ID}>{INTRODUCTION_TO_OBSERVABLES_PAGE_COMPUTED_OBSERVABLES_TITLE}</h2>
          <p>Computed observables are read-only. You may however, manipulate their values by manipulating the values of their underlying observables.</p>
          <MonacoEditor model={example2Model} />
          <h2 id={INTRODUCTION_TO_OBSERVABLES_PAGE_WHENASYNC_ID}>{INTRODUCTION_TO_OBSERVABLES_PAGE_WHENASYNC_TITLE}</h2>
          <p>Computed observables can also become a powerful tool when programming asynchronously:</p>
          <MonacoEditor model={example3Model} />
        </div>
      );

      let a: Observable<string>;
    }

    return HttpStatusCode.Ok;
  }
}

let observableModel = monaco.editor.getModel(monaco.Uri.parse("file:///node_modules/@alumis/ts/Observable.ts"));

let example1Model = monaco.editor.createModel(`import { o } from "@alumis/ts/ModifiableObservable";

// Creates a ModifiableObservable<string>.
// Never call the constructor of ModifiableObservable<string>.
let surname = o("todo");

// To unsubscribe, call subscription.dispose()
let subscription = surname.subscribe((n, o) =>
  console.log(\`The surname changed its value from \${o} to \${n}\`));

console.log("The current value of surname is " + surname.value);

surname.value = "Bertington"; // Triggers the subscription callback

// Disposes surname along with all the subscriptions associated with it
surname.dispose();`, "typescript", monaco.Uri.parse(`file:///TutorialPage/ObservablesPage/example1.tsx`));

let example2Model = monaco.editor.createModel(`import { o } from "@alumis/ts/ModifiableObservable";
import { co } from "@alumis/ts/ComputedObservable";

let givenName = o("todo"), surname = o("todo");

// Creates a ComputedObservable<string> that depends on givenName and surname
let fullName = co(() => {

  if (givenName.value && surname.value)
    return \`\$\{givenName.value\} \${surname.value}\`;
    
  else return givenName.value || surname.value;
});

// It is possible to engineer deeply nested computed observables
let fullNameWithTitle = co(() => fullName.value && ("Mr or Ms " + fullName.value));

fullNameWithTitle.subscribe(n => console.log("The full name with title is now " + n));

// Triggers the subscription
givenName.value = "Bert";

// Also triggers the subscription
surname.value = "Bertington";

// Although not strictly necessary, your application will probably become
// more efficient if you dispose observables that are no longer needed.
fullNameWithTitle.dispose();
fullName.dispose();
givenName.dispose();
surname.dispose();`, "typescript", monaco.Uri.parse(`file:///TutorialPage/ObservablesPage/example2.tsx`));

let example3Model = monaco.editor.createModel(`import { o } from "@alumis/ts/ModifiableObservable";
import { whenAsync } from "@alumis/ts/whenAsync";

let a = o(0), b = o(0);

(async () => {

  // Instantiates a ComputedObservable<boolean> internally,
  // and when the value becomes truethy, the Promise becomes resolved.
  // If the expression throws an error, the Promise becomes rejected.
  await whenAsync(() => a.value + b.value === 3);

  console.log("a + b = 3");

})();

console.log("Changing a to 1...");
a.value = 1;
console.log("Changing b to 2...");
b.value = 2;`, "typescript", monaco.Uri.parse(`file:///TutorialPage/ObservablesPage/example3.tsx`));