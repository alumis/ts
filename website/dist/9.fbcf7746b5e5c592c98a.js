(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[9],{

/***/ "./src/TutorialPage/IntroductionToObservablesPage/index.tsx":
/*!******************************************************************!*\
  !*** ./src/TutorialPage/IntroductionToObservablesPage/index.tsx ***!
  \******************************************************************/
/*! exports provided: IntroductionToObservablesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionToObservablesPage", function() { return IntroductionToObservablesPage; });
/* harmony import */ var _alumis_ts_JSX__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @alumis/ts/JSX */ "./node_modules/@alumis/ts/JSX.ts");
/* harmony import */ var _alumis_ts_SPA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @alumis/ts/SPA */ "./node_modules/@alumis/ts/SPA.ts");
/* harmony import */ var _MonacoEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../MonacoEditor */ "./src/MonacoEditor/index.tsx");
/* harmony import */ var monaco_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! monaco-editor */ "./node_modules/monaco-editor/esm/vs/editor/editor.main.js");
/* harmony import */ var _monaco__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../monaco */ "./src/monaco.ts");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./metadata */ "./src/TutorialPage/IntroductionToObservablesPage/metadata.ts");






class IntroductionToObservablesPage extends _alumis_ts_SPA__WEBPACK_IMPORTED_MODULE_1__["Page"] {
  get title() {
    return _metadata__WEBPACK_IMPORTED_MODULE_5__["INTRODUCTION_TO_OBSERVABLES_PAGE_TITLE"];
  }

  async loadAsync(path, pathIndex, _parameters, _pageDirection, _e) {
    if (!this.node) {
      this.node = Object(_alumis_ts_JSX__WEBPACK_IMPORTED_MODULE_0__["createNode"])("div", null, Object(_alumis_ts_JSX__WEBPACK_IMPORTED_MODULE_0__["createNode"])("h1", null, _metadata__WEBPACK_IMPORTED_MODULE_5__["INTRODUCTION_TO_OBSERVABLES_PAGE_TITLE"]), Object(_alumis_ts_JSX__WEBPACK_IMPORTED_MODULE_0__["createNode"])("p", null, "An observable is an object which holds a value. Observers can subscribe to an observable to get notified when its value changes, and react accordingly \u2014 e.g. by updating the DOM. When using Alumis' JSX notation, observables written within curly brackets (", "{}", ") are automatically subscribed to, and the logic to update the DOM is automatically implemented."), Object(_alumis_ts_JSX__WEBPACK_IMPORTED_MODULE_0__["createNode"])("p", null, "A particularly useful concept within the observable realm is the ", Object(_alumis_ts_JSX__WEBPACK_IMPORTED_MODULE_0__["createNode"])("em", null, "computed observable"), " which value is the result of evaluating an expression which in turn depends on other observables. By changing the underlying observables within a computed observable's expression, the computed observable will re-evaluate itself and notify its subscribers if its value turns out to have changed."), Object(_alumis_ts_JSX__WEBPACK_IMPORTED_MODULE_0__["createNode"])("h2", {
        id: _metadata__WEBPACK_IMPORTED_MODULE_5__["INTRODUCTION_TO_OBSERVABLES_PAGE_OBSERVABLE_INTERFACE_ID"]
      }, _metadata__WEBPACK_IMPORTED_MODULE_5__["INTRODUCTION_TO_OBSERVABLES_PAGE_OBSERVABLE_INTERFACE_TITLE"]), Object(_alumis_ts_JSX__WEBPACK_IMPORTED_MODULE_0__["createNode"])("p", null, "All observable types must implement the ", Object(_alumis_ts_JSX__WEBPACK_IMPORTED_MODULE_0__["createNode"])("code", null, "Observable<T>"), " interface:"), Object(_alumis_ts_JSX__WEBPACK_IMPORTED_MODULE_0__["createNode"])(_MonacoEditor__WEBPACK_IMPORTED_MODULE_2__["MonacoEditor"], {
        model: observableModel,
        readOnly: true,
        showPath: true
      }), Object(_alumis_ts_JSX__WEBPACK_IMPORTED_MODULE_0__["createNode"])("p", null, "The inline documentation for the ", Object(_alumis_ts_JSX__WEBPACK_IMPORTED_MODULE_0__["createNode"])("code", null, "Observable<T>"), " interface is quite shallow. To better understand the ", Object(_alumis_ts_JSX__WEBPACK_IMPORTED_MODULE_0__["createNode"])("code", null, "value"), " property and the various functions, the sections below attempt to explain their usage by exemplification."), Object(_alumis_ts_JSX__WEBPACK_IMPORTED_MODULE_0__["createNode"])("h2", {
        id: _metadata__WEBPACK_IMPORTED_MODULE_5__["INTRODUCTION_TO_OBSERVABLES_PAGE_MODIFIABLE_OBSERVABLES_ID"]
      }, _metadata__WEBPACK_IMPORTED_MODULE_5__["INTRODUCTION_TO_OBSERVABLES_PAGE_MODIFIABLE_OBSERVABLES_TITLE"]), Object(_alumis_ts_JSX__WEBPACK_IMPORTED_MODULE_0__["createNode"])("p", null, "Study the example below to get an impression of how modifiable observables and subscriptions are managed. If you run the example, you must open the developer tools (F12) in the newly opened window to observe the console output."), Object(_alumis_ts_JSX__WEBPACK_IMPORTED_MODULE_0__["createNode"])(_MonacoEditor__WEBPACK_IMPORTED_MODULE_2__["MonacoEditor"], {
        model: example1Model
      }), Object(_alumis_ts_JSX__WEBPACK_IMPORTED_MODULE_0__["createNode"])("p", null, "Note how the observable was disposed of at the end. The disposing of an observable renders it defunct and it must not be referred again. Although it is not strictly necessary to dispose of an observable, it will most assuredly lead to better performance in larger applications."), Object(_alumis_ts_JSX__WEBPACK_IMPORTED_MODULE_0__["createNode"])("h2", {
        id: _metadata__WEBPACK_IMPORTED_MODULE_5__["INTRODUCTION_TO_OBSERVABLES_PAGE_COMPUTED_OBSERVABLES_ID"]
      }, _metadata__WEBPACK_IMPORTED_MODULE_5__["INTRODUCTION_TO_OBSERVABLES_PAGE_COMPUTED_OBSERVABLES_TITLE"]), Object(_alumis_ts_JSX__WEBPACK_IMPORTED_MODULE_0__["createNode"])("p", null, "Computed observables are read-only. You may however, manipulate their values by manipulating the values of their underlying observables."), Object(_alumis_ts_JSX__WEBPACK_IMPORTED_MODULE_0__["createNode"])(_MonacoEditor__WEBPACK_IMPORTED_MODULE_2__["MonacoEditor"], {
        model: example2Model
      }), Object(_alumis_ts_JSX__WEBPACK_IMPORTED_MODULE_0__["createNode"])("h2", {
        id: _metadata__WEBPACK_IMPORTED_MODULE_5__["INTRODUCTION_TO_OBSERVABLES_PAGE_WHENASYNC_ID"]
      }, _metadata__WEBPACK_IMPORTED_MODULE_5__["INTRODUCTION_TO_OBSERVABLES_PAGE_WHENASYNC_TITLE"]), Object(_alumis_ts_JSX__WEBPACK_IMPORTED_MODULE_0__["createNode"])("p", null, "Computed observables can also become a powerful tool when programming asynchronously:"), Object(_alumis_ts_JSX__WEBPACK_IMPORTED_MODULE_0__["createNode"])(_MonacoEditor__WEBPACK_IMPORTED_MODULE_2__["MonacoEditor"], {
        model: example3Model
      }));
      let a;
    }

    return _alumis_ts_SPA__WEBPACK_IMPORTED_MODULE_1__["HttpStatusCode"].Ok;
  }

}
let observableModel = monaco_editor__WEBPACK_IMPORTED_MODULE_3__["editor"].getModel(monaco_editor__WEBPACK_IMPORTED_MODULE_3__["Uri"].parse("file:///node_modules/@alumis/ts/Observable.ts"));
let example1Model = monaco_editor__WEBPACK_IMPORTED_MODULE_3__["editor"].createModel(`import { o } from "@alumis/ts/ModifiableObservable";

// Creates a ModifiableObservable<string>.
// Never call the constructor of ModifiableObservable<string>.
let surname = o("todo");

// To unsubscribe, call subscription.dispose()
let subscription = surname.subscribe((n, o) =>
  console.log(\`The surname changed its value from \${o} to \${n}\`));

console.log("The current value of surname is " + surname.value);

surname.value = "Bertington"; // Triggers the subscription callback

// Disposes surname along with all the subscriptions associated with it
surname.dispose();`, "typescript", monaco_editor__WEBPACK_IMPORTED_MODULE_3__["Uri"].parse(`file:///TutorialPage/ObservablesPage/example1.tsx`));
let example2Model = monaco_editor__WEBPACK_IMPORTED_MODULE_3__["editor"].createModel(`import { o } from "@alumis/ts/ModifiableObservable";
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
surname.dispose();`, "typescript", monaco_editor__WEBPACK_IMPORTED_MODULE_3__["Uri"].parse(`file:///TutorialPage/ObservablesPage/example2.tsx`));
let example3Model = monaco_editor__WEBPACK_IMPORTED_MODULE_3__["editor"].createModel(`import { o } from "@alumis/ts/ModifiableObservable";
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
b.value = 2;`, "typescript", monaco_editor__WEBPACK_IMPORTED_MODULE_3__["Uri"].parse(`file:///TutorialPage/ObservablesPage/example3.tsx`));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvVHV0b3JpYWxQYWdlL0ludHJvZHVjdGlvblRvT2JzZXJ2YWJsZXNQYWdlL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJJbnRyb2R1Y3Rpb25Ub09ic2VydmFibGVzUGFnZSIsIlBhZ2UiLCJ0aXRsZSIsIklOVFJPRFVDVElPTl9UT19PQlNFUlZBQkxFU19QQUdFX1RJVExFIiwibG9hZEFzeW5jIiwicGF0aCIsInBhdGhJbmRleCIsIl9wYXJhbWV0ZXJzIiwiX3BhZ2VEaXJlY3Rpb24iLCJfZSIsIm5vZGUiLCJJTlRST0RVQ1RJT05fVE9fT0JTRVJWQUJMRVNfUEFHRV9PQlNFUlZBQkxFX0lOVEVSRkFDRV9JRCIsIklOVFJPRFVDVElPTl9UT19PQlNFUlZBQkxFU19QQUdFX09CU0VSVkFCTEVfSU5URVJGQUNFX1RJVExFIiwib2JzZXJ2YWJsZU1vZGVsIiwiSU5UUk9EVUNUSU9OX1RPX09CU0VSVkFCTEVTX1BBR0VfTU9ESUZJQUJMRV9PQlNFUlZBQkxFU19JRCIsIklOVFJPRFVDVElPTl9UT19PQlNFUlZBQkxFU19QQUdFX01PRElGSUFCTEVfT0JTRVJWQUJMRVNfVElUTEUiLCJleGFtcGxlMU1vZGVsIiwiSU5UUk9EVUNUSU9OX1RPX09CU0VSVkFCTEVTX1BBR0VfQ09NUFVURURfT0JTRVJWQUJMRVNfSUQiLCJJTlRST0RVQ1RJT05fVE9fT0JTRVJWQUJMRVNfUEFHRV9DT01QVVRFRF9PQlNFUlZBQkxFU19USVRMRSIsImV4YW1wbGUyTW9kZWwiLCJJTlRST0RVQ1RJT05fVE9fT0JTRVJWQUJMRVNfUEFHRV9XSEVOQVNZTkNfSUQiLCJJTlRST0RVQ1RJT05fVE9fT0JTRVJWQUJMRVNfUEFHRV9XSEVOQVNZTkNfVElUTEUiLCJleGFtcGxlM01vZGVsIiwiYSIsIkh0dHBTdGF0dXNDb2RlIiwiT2siLCJtb25hY28iLCJnZXRNb2RlbCIsInBhcnNlIiwiY3JlYXRlTW9kZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRU8sTUFBTUEsNkJBQU4sU0FBNENDLG1EQUE1QyxDQUFpRTtBQUV0RSxNQUFJQyxLQUFKLEdBQVk7QUFDVixXQUFPQyxnRkFBUDtBQUNEOztBQUVELFFBQU1DLFNBQU4sQ0FBZ0JDLElBQWhCLEVBQWdDQyxTQUFoQyxFQUFtREMsV0FBbkQsRUFBaUZDLGNBQWpGLEVBQWdIQyxFQUFoSCxFQUFvSTtBQUVsSSxRQUFJLENBQUMsS0FBS0MsSUFBVixFQUFnQjtBQUNkLFdBQUtBLElBQUwsR0FDRSwrRUFDRSw4RUFBS1AsZ0ZBQUwsQ0FERixFQUVFLHFWQUFtUSxJQUFuUSxxR0FGRixFQUdFLGtKQUNtRSxvR0FEbkUsNFNBSEYsRUFPRTtBQUFJLFVBQUUsRUFBRVEsa0dBQXdEQTtBQUFoRSxTQUFtRUMscUdBQW5FLENBUEYsRUFRRSx5SEFBMkMsZ0dBQTNDLGdCQVJGLEVBU0Usa0VBQUMsMERBQUQ7QUFBYyxhQUFLLEVBQUVDLGVBQXJCO0FBQXNDLGdCQUFRLE1BQTlDO0FBQStDLGdCQUFRLEVBQUU7QUFBekQsUUFURixFQVVFLGtIQUNtQyxnR0FEbkMsNERBRTJCLHdGQUYzQiwrR0FWRixFQWNFO0FBQUksVUFBRSxFQUFFQyxvR0FBMERBO0FBQWxFLFNBQXFFQyx1R0FBckUsQ0FkRixFQWVFLG1UQWZGLEVBZ0JFLGtFQUFDLDBEQUFEO0FBQWMsYUFBSyxFQUFFQztBQUFyQixRQWhCRixFQWlCRSxxV0FqQkYsRUFrQkU7QUFBSSxVQUFFLEVBQUVDLGtHQUF3REE7QUFBaEUsU0FBbUVDLHFHQUFuRSxDQWxCRixFQW1CRSx3TkFuQkYsRUFvQkUsa0VBQUMsMERBQUQ7QUFBYyxhQUFLLEVBQUVDO0FBQXJCLFFBcEJGLEVBcUJFO0FBQUksVUFBRSxFQUFFQyx1RkFBNkNBO0FBQXJELFNBQXdEQywwRkFBeEQsQ0FyQkYsRUFzQkUscUtBdEJGLEVBdUJFLGtFQUFDLDBEQUFEO0FBQWMsYUFBSyxFQUFFQztBQUFyQixRQXZCRixDQURGO0FBNEJBLFVBQUlDLENBQUo7QUFDRDs7QUFFRCxXQUFPQyw2REFBYyxDQUFDQyxFQUF0QjtBQUNEOztBQXpDcUU7QUE0Q3hFLElBQUlaLGVBQWUsR0FBR2Esb0RBQUEsQ0FBY0MsUUFBZCxDQUF1QkQsaURBQUEsQ0FBV0UsS0FBWCxDQUFpQiwrQ0FBakIsQ0FBdkIsQ0FBdEI7QUFFQSxJQUFJWixhQUFhLEdBQUdVLG9EQUFBLENBQWNHLFdBQWQsQ0FBMkI7Ozs7Ozs7Ozs7Ozs7OzttQkFBM0IsRUFlQyxZQWZELEVBZWVILGlEQUFBLENBQVdFLEtBQVgsQ0FBa0IsbURBQWxCLENBZmYsQ0FBcEI7QUFpQkEsSUFBSVQsYUFBYSxHQUFHTyxvREFBQSxDQUFjRyxXQUFkLENBQTJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBQTNCLEVBOEJDLFlBOUJELEVBOEJlSCxpREFBQSxDQUFXRSxLQUFYLENBQWtCLG1EQUFsQixDQTlCZixDQUFwQjtBQWdDQSxJQUFJTixhQUFhLEdBQUdJLG9EQUFBLENBQWNHLFdBQWQsQ0FBMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7YUFBM0IsRUFtQkwsWUFuQkssRUFtQlNILGlEQUFBLENBQVdFLEtBQVgsQ0FBa0IsbURBQWxCLENBbkJULENBQXBCLEMiLCJmaWxlIjoiOS5mYmNmNzc0NmI1ZTVjNTkyYzk4YS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2UsIFBhZ2VEaXJlY3Rpb24sIEh0dHBTdGF0dXNDb2RlIH0gZnJvbSBcIkBhbHVtaXMvdHMvU1BBXCI7XG5pbXBvcnQgeyBNb25hY29FZGl0b3IgfSBmcm9tIFwiLi4vLi4vTW9uYWNvRWRpdG9yXCI7XG5cbmltcG9ydCAqIGFzIG1vbmFjbyBmcm9tIFwibW9uYWNvLWVkaXRvclwiO1xuaW1wb3J0IFwiLi4vLi4vbW9uYWNvXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcIkBhbHVtaXMvdHMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgRXh0ZXJuYWxMaW5rIH0gZnJvbSBcIi4uLy4uL0V4dGVybmFsTGlua1wiO1xuaW1wb3J0IHsgSU5UUk9EVUNUSU9OX1RPX09CU0VSVkFCTEVTX1BBR0VfVElUTEUsIElOVFJPRFVDVElPTl9UT19PQlNFUlZBQkxFU19QQUdFX09CU0VSVkFCTEVfSU5URVJGQUNFX0lELCBJTlRST0RVQ1RJT05fVE9fT0JTRVJWQUJMRVNfUEFHRV9PQlNFUlZBQkxFX0lOVEVSRkFDRV9USVRMRSwgSU5UUk9EVUNUSU9OX1RPX09CU0VSVkFCTEVTX1BBR0VfTU9ESUZJQUJMRV9PQlNFUlZBQkxFU19JRCwgSU5UUk9EVUNUSU9OX1RPX09CU0VSVkFCTEVTX1BBR0VfTU9ESUZJQUJMRV9PQlNFUlZBQkxFU19USVRMRSwgSU5UUk9EVUNUSU9OX1RPX09CU0VSVkFCTEVTX1BBR0VfQ09NUFVURURfT0JTRVJWQUJMRVNfSUQsIElOVFJPRFVDVElPTl9UT19PQlNFUlZBQkxFU19QQUdFX0NPTVBVVEVEX09CU0VSVkFCTEVTX1RJVExFLCBJTlRST0RVQ1RJT05fVE9fT0JTRVJWQUJMRVNfUEFHRV9XSEVOQVNZTkNfSUQsIElOVFJPRFVDVElPTl9UT19PQlNFUlZBQkxFU19QQUdFX1dIRU5BU1lOQ19USVRMRSB9IGZyb20gXCIuL21ldGFkYXRhXCI7XG5cbmV4cG9ydCBjbGFzcyBJbnRyb2R1Y3Rpb25Ub09ic2VydmFibGVzUGFnZSBleHRlbmRzIFBhZ2U8SFRNTERpdkVsZW1lbnQ+IHtcblxuICBnZXQgdGl0bGUoKSB7XG4gICAgcmV0dXJuIElOVFJPRFVDVElPTl9UT19PQlNFUlZBQkxFU19QQUdFX1RJVExFO1xuICB9XG5cbiAgYXN5bmMgbG9hZEFzeW5jKHBhdGg6IHN0cmluZ1tdLCBwYXRoSW5kZXg6IG51bWJlciwgX3BhcmFtZXRlcnM6IFVSTFNlYXJjaFBhcmFtcywgX3BhZ2VEaXJlY3Rpb246IFBhZ2VEaXJlY3Rpb24sIF9lPzogUG9wU3RhdGVFdmVudCkge1xuXG4gICAgaWYgKCF0aGlzLm5vZGUpIHtcbiAgICAgIHRoaXMubm9kZSA9IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDE+e0lOVFJPRFVDVElPTl9UT19PQlNFUlZBQkxFU19QQUdFX1RJVExFfTwvaDE+XG4gICAgICAgICAgPHA+QW4gb2JzZXJ2YWJsZSBpcyBhbiBvYmplY3Qgd2hpY2ggaG9sZHMgYSB2YWx1ZS4gT2JzZXJ2ZXJzIGNhbiBzdWJzY3JpYmUgdG8gYW4gb2JzZXJ2YWJsZSB0byBnZXQgbm90aWZpZWQgd2hlbiBpdHMgdmFsdWUgY2hhbmdlcywgYW5kIHJlYWN0IGFjY29yZGluZ2x5IOKAlCBlLmcuIGJ5IHVwZGF0aW5nIHRoZSBET00uIFdoZW4gdXNpbmcgQWx1bWlzJyBKU1ggbm90YXRpb24sIG9ic2VydmFibGVzIHdyaXR0ZW4gd2l0aGluIGN1cmx5IGJyYWNrZXRzICh7XCJ7fVwifSkgYXJlIGF1dG9tYXRpY2FsbHkgc3Vic2NyaWJlZCB0bywgYW5kIHRoZSBsb2dpYyB0byB1cGRhdGUgdGhlIERPTSBpcyBhdXRvbWF0aWNhbGx5IGltcGxlbWVudGVkLjwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEEgcGFydGljdWxhcmx5IHVzZWZ1bCBjb25jZXB0IHdpdGhpbiB0aGUgb2JzZXJ2YWJsZSByZWFsbSBpcyB0aGUgPGVtPmNvbXB1dGVkIG9ic2VydmFibGU8L2VtPiB3aGljaCB2YWx1ZSBpcyB0aGUgcmVzdWx0IG9mIGV2YWx1YXRpbmcgYW4gZXhwcmVzc2lvbiB3aGljaCBpbiB0dXJuIGRlcGVuZHMgb24gb3RoZXIgb2JzZXJ2YWJsZXMuXG4gICAgICAgICAgICBCeSBjaGFuZ2luZyB0aGUgdW5kZXJseWluZyBvYnNlcnZhYmxlcyB3aXRoaW4gYSBjb21wdXRlZCBvYnNlcnZhYmxlJ3MgZXhwcmVzc2lvbiwgdGhlIGNvbXB1dGVkIG9ic2VydmFibGUgd2lsbCByZS1ldmFsdWF0ZSBpdHNlbGYgYW5kIG5vdGlmeSBpdHMgc3Vic2NyaWJlcnMgaWYgaXRzIHZhbHVlIHR1cm5zIG91dCB0byBoYXZlIGNoYW5nZWQuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxoMiBpZD17SU5UUk9EVUNUSU9OX1RPX09CU0VSVkFCTEVTX1BBR0VfT0JTRVJWQUJMRV9JTlRFUkZBQ0VfSUR9PntJTlRST0RVQ1RJT05fVE9fT0JTRVJWQUJMRVNfUEFHRV9PQlNFUlZBQkxFX0lOVEVSRkFDRV9USVRMRX08L2gyPlxuICAgICAgICAgIDxwPkFsbCBvYnNlcnZhYmxlIHR5cGVzIG11c3QgaW1wbGVtZW50IHRoZSA8Y29kZT5PYnNlcnZhYmxlJmx0O1QmZ3Q7PC9jb2RlPiBpbnRlcmZhY2U6PC9wPlxuICAgICAgICAgIDxNb25hY29FZGl0b3IgbW9kZWw9e29ic2VydmFibGVNb2RlbH0gcmVhZE9ubHkgc2hvd1BhdGg9e3RydWV9IC8+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBUaGUgaW5saW5lIGRvY3VtZW50YXRpb24gZm9yIHRoZSA8Y29kZT5PYnNlcnZhYmxlJmx0O1QmZ3Q7PC9jb2RlPiBpbnRlcmZhY2UgaXMgcXVpdGUgc2hhbGxvdy5cbiAgICAgICAgICAgIFRvIGJldHRlciB1bmRlcnN0YW5kIHRoZSA8Y29kZT52YWx1ZTwvY29kZT4gcHJvcGVydHkgYW5kIHRoZSB2YXJpb3VzIGZ1bmN0aW9ucywgdGhlIHNlY3Rpb25zIGJlbG93IGF0dGVtcHQgdG8gZXhwbGFpbiB0aGVpciB1c2FnZSBieSBleGVtcGxpZmljYXRpb24uXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxoMiBpZD17SU5UUk9EVUNUSU9OX1RPX09CU0VSVkFCTEVTX1BBR0VfTU9ESUZJQUJMRV9PQlNFUlZBQkxFU19JRH0+e0lOVFJPRFVDVElPTl9UT19PQlNFUlZBQkxFU19QQUdFX01PRElGSUFCTEVfT0JTRVJWQUJMRVNfVElUTEV9PC9oMj5cbiAgICAgICAgICA8cD5TdHVkeSB0aGUgZXhhbXBsZSBiZWxvdyB0byBnZXQgYW4gaW1wcmVzc2lvbiBvZiBob3cgbW9kaWZpYWJsZSBvYnNlcnZhYmxlcyBhbmQgc3Vic2NyaXB0aW9ucyBhcmUgbWFuYWdlZC4gSWYgeW91IHJ1biB0aGUgZXhhbXBsZSwgeW91IG11c3Qgb3BlbiB0aGUgZGV2ZWxvcGVyIHRvb2xzIChGMTIpIGluIHRoZSBuZXdseSBvcGVuZWQgd2luZG93IHRvIG9ic2VydmUgdGhlIGNvbnNvbGUgb3V0cHV0LjwvcD5cbiAgICAgICAgICA8TW9uYWNvRWRpdG9yIG1vZGVsPXtleGFtcGxlMU1vZGVsfSAvPlxuICAgICAgICAgIDxwPk5vdGUgaG93IHRoZSBvYnNlcnZhYmxlIHdhcyBkaXNwb3NlZCBvZiBhdCB0aGUgZW5kLiBUaGUgZGlzcG9zaW5nIG9mIGFuIG9ic2VydmFibGUgcmVuZGVycyBpdCBkZWZ1bmN0IGFuZCBpdCBtdXN0IG5vdCBiZSByZWZlcnJlZCBhZ2Fpbi4gQWx0aG91Z2ggaXQgaXMgbm90IHN0cmljdGx5IG5lY2Vzc2FyeSB0byBkaXNwb3NlIG9mIGFuIG9ic2VydmFibGUsIGl0IHdpbGwgbW9zdCBhc3N1cmVkbHkgbGVhZCB0byBiZXR0ZXIgcGVyZm9ybWFuY2UgaW4gbGFyZ2VyIGFwcGxpY2F0aW9ucy48L3A+XG4gICAgICAgICAgPGgyIGlkPXtJTlRST0RVQ1RJT05fVE9fT0JTRVJWQUJMRVNfUEFHRV9DT01QVVRFRF9PQlNFUlZBQkxFU19JRH0+e0lOVFJPRFVDVElPTl9UT19PQlNFUlZBQkxFU19QQUdFX0NPTVBVVEVEX09CU0VSVkFCTEVTX1RJVExFfTwvaDI+XG4gICAgICAgICAgPHA+Q29tcHV0ZWQgb2JzZXJ2YWJsZXMgYXJlIHJlYWQtb25seS4gWW91IG1heSBob3dldmVyLCBtYW5pcHVsYXRlIHRoZWlyIHZhbHVlcyBieSBtYW5pcHVsYXRpbmcgdGhlIHZhbHVlcyBvZiB0aGVpciB1bmRlcmx5aW5nIG9ic2VydmFibGVzLjwvcD5cbiAgICAgICAgICA8TW9uYWNvRWRpdG9yIG1vZGVsPXtleGFtcGxlMk1vZGVsfSAvPlxuICAgICAgICAgIDxoMiBpZD17SU5UUk9EVUNUSU9OX1RPX09CU0VSVkFCTEVTX1BBR0VfV0hFTkFTWU5DX0lEfT57SU5UUk9EVUNUSU9OX1RPX09CU0VSVkFCTEVTX1BBR0VfV0hFTkFTWU5DX1RJVExFfTwvaDI+XG4gICAgICAgICAgPHA+Q29tcHV0ZWQgb2JzZXJ2YWJsZXMgY2FuIGFsc28gYmVjb21lIGEgcG93ZXJmdWwgdG9vbCB3aGVuIHByb2dyYW1taW5nIGFzeW5jaHJvbm91c2x5OjwvcD5cbiAgICAgICAgICA8TW9uYWNvRWRpdG9yIG1vZGVsPXtleGFtcGxlM01vZGVsfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG5cbiAgICAgIGxldCBhOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gICAgfVxuXG4gICAgcmV0dXJuIEh0dHBTdGF0dXNDb2RlLk9rO1xuICB9XG59XG5cbmxldCBvYnNlcnZhYmxlTW9kZWwgPSBtb25hY28uZWRpdG9yLmdldE1vZGVsKG1vbmFjby5VcmkucGFyc2UoXCJmaWxlOi8vL25vZGVfbW9kdWxlcy9AYWx1bWlzL3RzL09ic2VydmFibGUudHNcIikpO1xuXG5sZXQgZXhhbXBsZTFNb2RlbCA9IG1vbmFjby5lZGl0b3IuY3JlYXRlTW9kZWwoYGltcG9ydCB7IG8gfSBmcm9tIFwiQGFsdW1pcy90cy9Nb2RpZmlhYmxlT2JzZXJ2YWJsZVwiO1xuXG4vLyBDcmVhdGVzIGEgTW9kaWZpYWJsZU9ic2VydmFibGU8c3RyaW5nPi5cbi8vIE5ldmVyIGNhbGwgdGhlIGNvbnN0cnVjdG9yIG9mIE1vZGlmaWFibGVPYnNlcnZhYmxlPHN0cmluZz4uXG5sZXQgc3VybmFtZSA9IG8oXCJ0b2RvXCIpO1xuXG4vLyBUbyB1bnN1YnNjcmliZSwgY2FsbCBzdWJzY3JpcHRpb24uZGlzcG9zZSgpXG5sZXQgc3Vic2NyaXB0aW9uID0gc3VybmFtZS5zdWJzY3JpYmUoKG4sIG8pID0+XG4gIGNvbnNvbGUubG9nKFxcYFRoZSBzdXJuYW1lIGNoYW5nZWQgaXRzIHZhbHVlIGZyb20gXFwke299IHRvIFxcJHtufVxcYCkpO1xuXG5jb25zb2xlLmxvZyhcIlRoZSBjdXJyZW50IHZhbHVlIG9mIHN1cm5hbWUgaXMgXCIgKyBzdXJuYW1lLnZhbHVlKTtcblxuc3VybmFtZS52YWx1ZSA9IFwiQmVydGluZ3RvblwiOyAvLyBUcmlnZ2VycyB0aGUgc3Vic2NyaXB0aW9uIGNhbGxiYWNrXG5cbi8vIERpc3Bvc2VzIHN1cm5hbWUgYWxvbmcgd2l0aCBhbGwgdGhlIHN1YnNjcmlwdGlvbnMgYXNzb2NpYXRlZCB3aXRoIGl0XG5zdXJuYW1lLmRpc3Bvc2UoKTtgLCBcInR5cGVzY3JpcHRcIiwgbW9uYWNvLlVyaS5wYXJzZShgZmlsZTovLy9UdXRvcmlhbFBhZ2UvT2JzZXJ2YWJsZXNQYWdlL2V4YW1wbGUxLnRzeGApKTtcblxubGV0IGV4YW1wbGUyTW9kZWwgPSBtb25hY28uZWRpdG9yLmNyZWF0ZU1vZGVsKGBpbXBvcnQgeyBvIH0gZnJvbSBcIkBhbHVtaXMvdHMvTW9kaWZpYWJsZU9ic2VydmFibGVcIjtcbmltcG9ydCB7IGNvIH0gZnJvbSBcIkBhbHVtaXMvdHMvQ29tcHV0ZWRPYnNlcnZhYmxlXCI7XG5cbmxldCBnaXZlbk5hbWUgPSBvKFwidG9kb1wiKSwgc3VybmFtZSA9IG8oXCJ0b2RvXCIpO1xuXG4vLyBDcmVhdGVzIGEgQ29tcHV0ZWRPYnNlcnZhYmxlPHN0cmluZz4gdGhhdCBkZXBlbmRzIG9uIGdpdmVuTmFtZSBhbmQgc3VybmFtZVxubGV0IGZ1bGxOYW1lID0gY28oKCkgPT4ge1xuXG4gIGlmIChnaXZlbk5hbWUudmFsdWUgJiYgc3VybmFtZS52YWx1ZSlcbiAgICByZXR1cm4gXFxgXFwkXFx7Z2l2ZW5OYW1lLnZhbHVlXFx9IFxcJHtzdXJuYW1lLnZhbHVlfVxcYDtcbiAgICBcbiAgZWxzZSByZXR1cm4gZ2l2ZW5OYW1lLnZhbHVlIHx8IHN1cm5hbWUudmFsdWU7XG59KTtcblxuLy8gSXQgaXMgcG9zc2libGUgdG8gZW5naW5lZXIgZGVlcGx5IG5lc3RlZCBjb21wdXRlZCBvYnNlcnZhYmxlc1xubGV0IGZ1bGxOYW1lV2l0aFRpdGxlID0gY28oKCkgPT4gZnVsbE5hbWUudmFsdWUgJiYgKFwiTXIgb3IgTXMgXCIgKyBmdWxsTmFtZS52YWx1ZSkpO1xuXG5mdWxsTmFtZVdpdGhUaXRsZS5zdWJzY3JpYmUobiA9PiBjb25zb2xlLmxvZyhcIlRoZSBmdWxsIG5hbWUgd2l0aCB0aXRsZSBpcyBub3cgXCIgKyBuKSk7XG5cbi8vIFRyaWdnZXJzIHRoZSBzdWJzY3JpcHRpb25cbmdpdmVuTmFtZS52YWx1ZSA9IFwiQmVydFwiO1xuXG4vLyBBbHNvIHRyaWdnZXJzIHRoZSBzdWJzY3JpcHRpb25cbnN1cm5hbWUudmFsdWUgPSBcIkJlcnRpbmd0b25cIjtcblxuLy8gQWx0aG91Z2ggbm90IHN0cmljdGx5IG5lY2Vzc2FyeSwgeW91ciBhcHBsaWNhdGlvbiB3aWxsIHByb2JhYmx5IGJlY29tZVxuLy8gbW9yZSBlZmZpY2llbnQgaWYgeW91IGRpc3Bvc2Ugb2JzZXJ2YWJsZXMgdGhhdCBhcmUgbm8gbG9uZ2VyIG5lZWRlZC5cbmZ1bGxOYW1lV2l0aFRpdGxlLmRpc3Bvc2UoKTtcbmZ1bGxOYW1lLmRpc3Bvc2UoKTtcbmdpdmVuTmFtZS5kaXNwb3NlKCk7XG5zdXJuYW1lLmRpc3Bvc2UoKTtgLCBcInR5cGVzY3JpcHRcIiwgbW9uYWNvLlVyaS5wYXJzZShgZmlsZTovLy9UdXRvcmlhbFBhZ2UvT2JzZXJ2YWJsZXNQYWdlL2V4YW1wbGUyLnRzeGApKTtcblxubGV0IGV4YW1wbGUzTW9kZWwgPSBtb25hY28uZWRpdG9yLmNyZWF0ZU1vZGVsKGBpbXBvcnQgeyBvIH0gZnJvbSBcIkBhbHVtaXMvdHMvTW9kaWZpYWJsZU9ic2VydmFibGVcIjtcbmltcG9ydCB7IHdoZW5Bc3luYyB9IGZyb20gXCJAYWx1bWlzL3RzL3doZW5Bc3luY1wiO1xuXG5sZXQgYSA9IG8oMCksIGIgPSBvKDApO1xuXG4oYXN5bmMgKCkgPT4ge1xuXG4gIC8vIEluc3RhbnRpYXRlcyBhIENvbXB1dGVkT2JzZXJ2YWJsZTxib29sZWFuPiBpbnRlcm5hbGx5LFxuICAvLyBhbmQgd2hlbiB0aGUgdmFsdWUgYmVjb21lcyB0cnVldGh5LCB0aGUgUHJvbWlzZSBiZWNvbWVzIHJlc29sdmVkLlxuICAvLyBJZiB0aGUgZXhwcmVzc2lvbiB0aHJvd3MgYW4gZXJyb3IsIHRoZSBQcm9taXNlIGJlY29tZXMgcmVqZWN0ZWQuXG4gIGF3YWl0IHdoZW5Bc3luYygoKSA9PiBhLnZhbHVlICsgYi52YWx1ZSA9PT0gMyk7XG5cbiAgY29uc29sZS5sb2coXCJhICsgYiA9IDNcIik7XG5cbn0pKCk7XG5cbmNvbnNvbGUubG9nKFwiQ2hhbmdpbmcgYSB0byAxLi4uXCIpO1xuYS52YWx1ZSA9IDE7XG5jb25zb2xlLmxvZyhcIkNoYW5naW5nIGIgdG8gMi4uLlwiKTtcbmIudmFsdWUgPSAyO2AsIFwidHlwZXNjcmlwdFwiLCBtb25hY28uVXJpLnBhcnNlKGBmaWxlOi8vL1R1dG9yaWFsUGFnZS9PYnNlcnZhYmxlc1BhZ2UvZXhhbXBsZTMudHN4YCkpOyJdLCJzb3VyY2VSb290IjoiIn0=