import { Website } from "./Website";

import "./grid";

// @ts-ignore
self.MonacoEnvironment = {
    getWorkerUrl: function (_moduleId, label) {
        if (label === "json") {
            return "/json.worker.bundle.js";
        }
        if (label === "css") {
            return "/css.worker.bundle.js";
        }
        if (label === "html") {
            return "/html.worker.bundle.js";
        }
        if (label === "typescript" || label === "javascript") {
            return "/ts.worker.bundle.js";
        }
        return "/editor.worker.bundle.js";
    }
};

let spa = new Website();

spa.invalidateLocationAsync();
document.body.appendChild(spa.node);




// (() => {

//     let givenName = o("todo"); // Creates a ModifiableObservable<string>
//     let test = o(0);

//     document.body.appendChild(
//         <p>givenName is {givenName} and
//             it is {() => givenName.value.length} characters long.
//             {normalize(() => test.value < 10, (b) => {
//                 console.log("genererer...");
//                 console.log(b.value);
//                 return b.value ? <span>mindre enn 10</span> : <span>ti eller høyere {test}</span>;
//             })}
//         </p>
//     );

//     for (let i = 0; i < 15; ++i)
//         test.value = i;

//     console.log(test.value)

//     givenName.value = "ljkdfjhsdfdfsdsf";

// })();