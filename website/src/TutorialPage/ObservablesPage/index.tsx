import { Page, PageDirection, HttpStatusCode } from "@alumis/elastic-ts/SPA";
import { MonacoEditor } from "../../MonacoEditor";

import * as monaco from "monaco-editor";
import "../../monaco";
import { Observable } from "@alumis/elastic-ts/Observable";
import { ExternalLink } from "../../ExternalLink";

export class ObservablesPage extends Page<HTMLDivElement> {

  get title() {
    return "Observables";
  }

  async loadAsync(_parameters: URLSearchParams, _pageDirection: PageDirection, _e?: PopStateEvent) {

    if (!this.node) {
      this.node = (
        <div>
          <h1>Observables</h1>
          <p>An observable is an object which holds a value. Observers can subscribe to an observable to get notified when its value changes, and react accordingly — such as by updating the DOM. When using Elastic.js' JSX/TSX notation, observables written within curly brackets ({"{}"}) are automatically subscribed to in order to update the DOM.</p>

          <p>
            A particularly useful concept within the observable realm is the <em>computed observable</em> which value is the result of evaluating an expression which in turn depends on other observables.
            By changing the underlying observables within a computed observable's expression, the computed observable will re-evaluate itself and notify its subscribers if its value turns out to have changed.
          </p>
          <p>Elastic.js provides two types of observables: <code>ModifiableObservable&lt;T&gt;</code> and <code>ComputedObservable&lt;T&gt;</code>, both of which implement the <code>Observable&lt;T&gt;</code> interface:</p>
          <MonacoEditor model={observableModel} readOnly showPath={true} />
          <p>
            The inline documentation for the <code>Observable&lt;T&gt;</code> interface is quite shallow.
            To better understand the <code>value</code> property and the various functions, the following sections attempts to explain their usage by exemplification.
          </p>
          <h2 id="instantiating-and-subscribing-to-observables">Instantiating and subscribing to observables</h2>
          <p>Study the example below to get an impression of how observables and subscriptions are managed. If you run the example, you must open the developer tools (F12) in the newly opened window to observe the console output.</p>
          <MonacoEditor model={example1Model} />
          <h2 id="computed-observables">Computed observables</h2>
          <p>Computed observables are read-only. You may however, manipulate their values by manipulating the values of their underlying observables.</p>
          <MonacoEditor model={example2Model} />
          <h2>Asynchronous observable expressions</h2>
          <MonacoEditor model={example3Model} />
          <h2 id="memory-management">Memory management</h2>
          <p>Although disposing subscriptions (<code>ObservableSubscription&lt;T&gt;</code>) in order to unsubscribe from an observable is useful, the usefulness for disposing observables themselves seems less clear (particularly if they are never to be used again). However, there is a good reason for this pattern.</p>
        </div>
      );

      let a: Observable<string>;
    }

    return HttpStatusCode.Ok;
  }
}

let observableModel = monaco.editor.getModel(monaco.Uri.parse("file:///node_modules/@alumis/elastic-ts/Observable.ts"));

let example1Model = monaco.editor.createModel(`import { o } from "@alumis/elastic-ts/ModifiableObservable";

// Creates a ModifiableObservable<string>.
// Never call the constructor of ModifiableObservable<string>.
let surname = o("todo");

// If subscription1.dispose() is called, the callback will not
// become invoked anymore
let subscription1 = surname.subscribe((n, o) =>
  console.log(\`subscription1: surname changed from \${o} to \${n}\`));

// The below callback will become invoked immediately
// because subscribeInvoke(...) is being used instead of subscribe(...)
let subscription2 = surname.subscribeInvoke((n, o) =>
  console.log(\`subscription2: surname changed from \${o} to \${n}\`));

console.log("The current value of surname is " + surname.value);

surname.value = "Bertington"; // Triggers both subscription callbacks

// Disposes surname as well as subscription1 and subscription2
surname.dispose();`, "typescript", monaco.Uri.parse(`file:///TutorialPage/ObservablesPage/example1.tsx`));

let example2Model = monaco.editor.createModel(`import { o } from "@alumis/elastic-ts/ModifiableObservable";
import { co } from "@alumis/elastic-ts/ComputedObservable";

let givenName = o(""), surname = o("");

// Creates a ComputedObservable<string>
let fullName = co(() => {

  if (givenName.value && surname.value)
    return \`\$\{givenName.value\} \${surname.value}\`;
    
  else return givenName.value || surname.value;
});

// It is possible to engineer deeply nested ComputedObservables
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

let example3Model = monaco.editor.createModel(`import { o } from "@alumis/elastic-ts/ModifiableObservable";
import { whenAsync } from "@alumis/elastic-ts/whenAsync";

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