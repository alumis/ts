/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + "." + {"0":"c665a5f6d21bef5acc97","1":"b857b5063dc55a050396","2":"d1c5844e422a70640b2a","3":"f6c0ed699a5d06d8805c","4":"7d1dbca7b36eec3c0639","5":"8d16600657f575539f2a","6":"2a8264a3566efffccfdf","7":"404da50d16b304f82156","8":"55edd4ba9527d6c62923","9":"fbcf7746b5e5c592c98a","10":"57a33a8f24d3cf7c5b38","11":"caa282766aecd0d7165c","12":"ff1fc36366dba146b2a5","13":"3ef37fc45fda78ba14b6","14":"050299ba812c7a0d8095","15":"5798d4acffcfc55cee81","16":"e6f9dd11d24727852b23","17":"58a829f487214c6b9bf4","18":"25235c9527c5b1318848","19":"0046f98d1d5fecd0ccad","20":"0c194bbc055dabe76229","21":"0abd23686e04b335a251","22":"3a1f26117b04614fe160","23":"d2c9b7952956a6e6b2a2","24":"5011a7aae7da8eb5b79a","25":"869eb9e5142f2686cb35","26":"60561098b837ed0356ed","27":"a11d1825f916df2130e5","28":"8e875830e4cb752b2fab","29":"90209ef0d06060a53e3a","30":"7ab2a0148f6daa472ab4","31":"a2c09c3182d69a195438","32":"5663d77a98ec5a62042a","33":"0d943a3091ccbb608da8","34":"80edf935b67e18de48a4","35":"6be248c6aa75ad103d4e","36":"1fa619f39b0d93b837b8","37":"678ca2f3c01629845783","38":"121c6c22830b86fadaa8","39":"a1666971941f6ce9ee66","40":"99ca7280af0482dd893d","41":"b6a65be3eef1b4799557","42":"038bf0336de2404edac7","43":"8dab2e95d65294d576b9","44":"1aba93d3c5cf3912806f","45":"b2df10f02d6fd6ab5aee","46":"7c9bf05be1275cbae6a9","47":"2eed23b812fd165d8792","48":"3cff1712d92dac5c8e36","49":"de8f529a34591548c10f","50":"fcc18d889b283b6039e6","51":"4bd340a6d5a178a94602","52":"c49bbd5e4b8ab16ff22f","53":"9a37524a24b1b78461f8","54":"18d4632fd0b5c3246fcd","55":"ae3df140dcbe5ea7c8ed","56":"4ee57296e6cde9060d04","57":"b909a2a440414c87754d","58":"c73e2dedaff4df5d286c","59":"c499c248ec14f94df0ed","60":"752a580e7de1d4c5a0f1","61":"edd5c8f6cbb29e0841c2","62":"e352e85360c29d0b83be","63":"e2670349e5f8e3c8e464","64":"055e17df07d5c26772ed","65":"cc7c8db5d6c08f81c259","66":"ff8e68a067e2da34b238"}[chunkId] + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = self["webpackJsonp"] = self["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@alumis/ts/ComputedObservable.ts":
/*!*******************************************************!*\
  !*** ./node_modules/@alumis/ts/ComputedObservable.ts ***!
  \*******************************************************/
/*! exports provided: evaluationStack, ComputedObservable, co */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "evaluationStack", function() { return evaluationStack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComputedObservable", function() { return ComputedObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "co", function() { return co; });
/* harmony import */ var _ObservableSubscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ObservableSubscription */ "./node_modules/@alumis/ts/ObservableSubscription.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


let bin = [],
    binLength = 0;
var evaluationStack = [];
class ComputedObservable {
  constructor() {
    _defineProperty(this, "wrappedValue", void 0);

    _defineProperty(this, "_subscriptionHead", _ObservableSubscription__WEBPACK_IMPORTED_MODULE_0__["ObservableSubscription"].create());

    _defineProperty(this, "_subscriptionTail", _ObservableSubscription__WEBPACK_IMPORTED_MODULE_0__["ObservableSubscription"].create());

    _defineProperty(this, "expression", void 0);

    _defineProperty(this, "error", void 0);

    _defineProperty(this, "observables", new Map());

    this.refresh = this.refresh.bind(this);
    this.dispose = this.dispose.bind(this);
    (this._subscriptionHead.next = this._subscriptionTail).previous = this._subscriptionHead;
  }

  get value() {
    if (evaluationStack.length) {
      let co = evaluationStack[evaluationStack.length - 1];
      if (!co.observables.has(this)) co.observables.set(this, this.subscribeSneakInLine(co.refresh));
    }

    let error = this.error;
    if (error) throw error;
    return this.wrappedValue;
  }

  peek() {
    return this.wrappedValue;
  }

  subscribe(callback) {
    return _ObservableSubscription__WEBPACK_IMPORTED_MODULE_0__["ObservableSubscription"].createAndPrependToTail(this._subscriptionTail, callback);
  }

  subscribeInvoke(callback) {
    callback(this.wrappedValue, undefined, this.error);
    let subscription = _ObservableSubscription__WEBPACK_IMPORTED_MODULE_0__["ObservableSubscription"].createAndPrependToTail(this._subscriptionTail, callback);
    return subscription;
  }

  subscribeSneakInLine(callback) {
    return _ObservableSubscription__WEBPACK_IMPORTED_MODULE_0__["ObservableSubscription"].createAndAppendToHead(this._subscriptionHead, callback);
  }

  subscribeInvokeSneakInLine(callback) {
    callback(this.wrappedValue, undefined, this.error);
    let subscription = _ObservableSubscription__WEBPACK_IMPORTED_MODULE_0__["ObservableSubscription"].createAndAppendToHead(this._subscriptionHead, callback);
    return subscription;
  }

  notifySubscribers(newValue, oldValue, error) {
    for (let node = this._subscriptionHead.next; node !== this._subscriptionTail;) {
      let currentNode = node;
      node = node.next;
      currentNode.callback(newValue, oldValue, error);
    }
  }

  invalidate() {
    let value = this.wrappedValue;
    this.notifySubscribers(value, value);
  }

  chain(expression) {
    let result = co(() => expression(this)),
        dispose = result.dispose;

    result.dispose = () => {
      (result.dispose = dispose)();
      this.dispose();
    };

    return result;
  }

  dispose() {
    this.wrappedValue = undefined;
    this.expression = undefined;
    this.error = undefined;
    let observables = this.observables;
    observables.forEach(s => {
      s.dispose();
    });
    observables.clear();

    for (let node = this._subscriptionHead.next; node !== this._subscriptionTail;) {
      let currentNode = node;
      node = node.next;
      currentNode.recycle();
    }

    (this._subscriptionHead.next = this._subscriptionTail).previous = this._subscriptionHead;
    if (bin.length === binLength) bin.push(this);else bin[binLength] = this;
    ++binLength;
  }

  initialize() {
    try {
      evaluationStack.push(this);

      try {
        var result = this.expression();
      } finally {
        evaluationStack.pop();
      }
    } catch (e) {
      this.setValueAndErrorAndNotifySubscribers(undefined, e);
      return;
    }

    this.setValueAndErrorAndNotifySubscribers(result, null);
  }

  setValueAndErrorAndNotifySubscribers(value, error) {
    let oldValue = this.wrappedValue,
        oldError = this.error;

    if (value !== oldValue || error !== oldError) {
      this.wrappedValue = value;
      this.error = error;
      this.notifySubscribers(value, oldValue, error);
    }
  }

  refresh() {
    let observables = this.observables;
    observables.forEach(s => {
      s.dispose();
    });
    observables.clear();
    this.initialize();
  }

}
function co(expression, evaluateAtOnce = true) {
  if (binLength) {
    var result = bin[--binLength];
    bin[binLength] = null;
  } else var result = new ComputedObservable();

  result.expression = expression;
  if (evaluateAtOnce) result.initialize();
  return result;
}

/***/ }),

/***/ "./node_modules/@alumis/ts/JSX.ts":
/*!****************************************!*\
  !*** ./node_modules/@alumis/ts/JSX.ts ***!
  \****************************************/
/*! exports provided: globalPropertyHandlers, Component, createNode, appendDisposeCallbackToNode, disposeNode, bindProperties, bindProperty, toggleClass, switchClass, Managed, normalize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalPropertyHandlers", function() { return globalPropertyHandlers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNode", function() { return createNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendDisposeCallbackToNode", function() { return appendDisposeCallbackToNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disposeNode", function() { return disposeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindProperties", function() { return bindProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindProperty", function() { return bindProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleClass", function() { return toggleClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchClass", function() { return switchClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Managed", function() { return Managed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony import */ var _ComputedObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComputedObservable */ "./node_modules/@alumis/ts/ComputedObservable.ts");
/* harmony import */ var _ModifiableObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModifiableObservable */ "./node_modules/@alumis/ts/ModifiableObservable.ts");
/* harmony import */ var _isObservable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isObservable */ "./node_modules/@alumis/ts/isObservable.ts");
/* harmony import */ var _ObservableList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ObservableList */ "./node_modules/@alumis/ts/ObservableList.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var globalPropertyHandlers = new Map();
class Component {
  constructor() {
    _defineProperty(this, "node", void 0);
  }

  nodeDestroyed() {
    delete this.node;
  }

}
function createNode(element, properties, ...children) {
  if (typeof element === "string") return createHTMLElementFromTagName(element, properties, children);
  if (typeof element === "function") return createNodeFromFunction(element, properties, children);
  if (element === null) return createDocumentFragment(children);
  throw new Error(`Unable to create element of type '${typeof element}'`);
}

function createHTMLElementFromTagName(tagName, properties, children) {
  let element = document.createElement(tagName);

  for (let c of children) appendChild(element, c);

  if (properties) bindProperties(element, properties);
  return element;
}

function appendChild(parentNode, child) {
  if (child instanceof Component) {
    appendChild(parentNode, child.node);
    let componentDisposeNode = document.createComment(" Elastic: dispose component ");
    appendDisposeCallbackToNode(componentDisposeNode, child.nodeDestroyed.bind(child));
    parentNode.appendChild(componentDisposeNode);
  } else if (child instanceof HTMLElement || child instanceof SVGElement || child instanceof Comment || child instanceof DocumentFragment) parentNode.appendChild(child);else if (Object(_isObservable__WEBPACK_IMPORTED_MODULE_2__["isObservable"])(child)) appendObservableChild(parentNode, child);else if (typeof child === "function") appendObservableChild(parentNode, Object(_ComputedObservable__WEBPACK_IMPORTED_MODULE_0__["co"])(child), child);else if (child instanceof _ObservableList__WEBPACK_IMPORTED_MODULE_3__["ObservableList"]) appendObservableListChild(parentNode, child);else if (child instanceof Array) for (let c of child) appendChild(parentNode, c);else if (child !== null && child !== undefined) parentNode.appendChild(document.createTextNode(child));
}

function appendObservableChild(parentNode, observable, observableExpression) {
  // TODO: Reuse text node
  let value = observable.peek(),
      head = document.createComment(" Elastic: head "),
      documentFragment = document.createDocumentFragment(),
      tail = document.createComment(" Elastic: tail ");
  documentFragment.appendChild(head);
  appendChild(documentFragment, value);
  documentFragment.appendChild(tail);
  parentNode.appendChild(documentFragment);
  let subscription = observable.subscribeSneakInLine(n => {
    appendChild(documentFragment, n);

    for (let child = head.nextSibling; child !== tail;) {
      let lastManagedChild = child[LAST_MANAGED_CHILD_KEY];

      if (lastManagedChild) {
        let n = child;
        child = child.nextSibling;
        n.remove();

        while (n !== lastManagedChild) {
          n = child;
          child = child.nextSibling;
          n.remove();
        }
      } else {
        disposeNode(child);
        let n = child;
        child = child.nextSibling;
        n.remove();
      }
    }

    head.parentNode.insertBefore(documentFragment, tail);
  });

  if (observableExpression) {
    if (observableExpression.dispose) appendDisposeCallbackToNode(tail, observableExpression.dispose);
    appendDisposeCallbackToNode(tail, observable.dispose);
  } else appendDisposeCallbackToNode(tail, subscription.dispose);
}

const DISPOSE_CALLBACKS_KEY = "__disposeCallbacks";
const LAST_MANAGED_CHILD_KEY = "__lastManagedChild";
function appendDisposeCallbackToNode(node, dispose) {
  let disposeCallbacks = node[DISPOSE_CALLBACKS_KEY];
  if (disposeCallbacks) disposeCallbacks.push(dispose);else node[DISPOSE_CALLBACKS_KEY] = [dispose];
}
function disposeNode(node) {
  if (node.childNodes.length) {
    // Depth first, post-order tree traversal
    for (let child = node.firstChild;;) {
      let lastManagedChild = child[LAST_MANAGED_CHILD_KEY];

      if (lastManagedChild) {
        while (child !== lastManagedChild) child = child.nextSibling;
      } else disposeNode(child);

      if (!(child = child.nextSibling)) break;
    }
  }

  let disposeCallbacks = node[DISPOSE_CALLBACKS_KEY];

  if (disposeCallbacks) {
    delete node[DISPOSE_CALLBACKS_KEY];

    for (let i = disposeCallbacks.length; 0 < i;) disposeCallbacks[--i]();
  }
}

function appendObservableListChild(parentNode, observableList) {
  let documentFragment = document.createDocumentFragment(),
      items = new Map();
  let n = null;

  for (let node = observableList.head.next; node !== observableList.tail; node = node.next) {
    appendChild(documentFragment, node.item);
    let item = {
      firstChild: n ? n.nextSibling : documentFragment.firstChild,
      lastChild: n = documentFragment.lastChild
    };
    items.set(node.item, item);
  }

  let observableListDisposeNode = document.createComment(" Elastic: dispose list ");
  documentFragment.appendChild(observableListDisposeNode);
  parentNode.appendChild(documentFragment);
  observableList.subscribeSneakInLine(modifications => {
    for (let m of modifications) {
      switch (m.type) {
        case _ObservableList__WEBPACK_IMPORTED_MODULE_3__["ObservableListModificationType"].Append:
          {
            appendChild(documentFragment, m.item);
            let item = {
              firstChild: documentFragment.firstChild,
              lastChild: documentFragment.lastChild
            };
            items.set(m.item, item);
            parentNode.insertBefore(documentFragment, observableListDisposeNode);
            break;
          }

        case _ObservableList__WEBPACK_IMPORTED_MODULE_3__["ObservableListModificationType"].InsertBefore:
          {
            let item = items.get(m.item);

            if (item) {
              for (let node = item.firstChild;;) {
                if (node === item.lastChild) {
                  documentFragment.appendChild(node);
                  break;
                } else {
                  let n = node;
                  node = node.nextSibling;
                  documentFragment.appendChild(n);
                }
              }
            } else {
              appendChild(documentFragment, m.item);
              item = {
                firstChild: documentFragment.firstChild,
                lastChild: documentFragment.lastChild
              };
              items.set(m.item, item);
            }

            parentNode.insertBefore(documentFragment, m.refItem ? items.get(m.refItem).firstChild : observableListDisposeNode);
            break;
          }

        case _ObservableList__WEBPACK_IMPORTED_MODULE_3__["ObservableListModificationType"].Remove:
          {
            let item = items.get(m.item);
            items.delete(m.item);

            for (let node = item.firstChild;;) {
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

function bindProperties(node, properties) {
  for (let n in properties) {
    let value = properties[n],
        globalPropertyHandler = globalPropertyHandlers.get(n);
    if (globalPropertyHandler) globalPropertyHandler(node, value, properties);else if (n.startsWith("on") && 2 < n.length) node[n] = value;else bindProperty(node, n, value);
  }
}
function bindProperty(element, name, expression) {
  if (name.indexOf("-") !== -1) {
    if (Object(_isObservable__WEBPACK_IMPORTED_MODULE_2__["isObservable"])(expression)) {
      let subscription = expression.subscribeInvokeSneakInLine(n => {
        element.setAttribute(name, n);
      });
      appendDisposeCallbackToNode(element, subscription.dispose);
    } else if (typeof expression === "function") {
      let computedObservable = Object(_ComputedObservable__WEBPACK_IMPORTED_MODULE_0__["co"])(expression);
      computedObservable.subscribeInvokeSneakInLine(n => {
        element.setAttribute(name, n);
      });
      if (expression.dispose) appendDisposeCallbackToNode(element, expression.dispose);
      appendDisposeCallbackToNode(element, computedObservable.dispose);
    } else element.setAttribute(name, expression);
  } else {
    if (Object(_isObservable__WEBPACK_IMPORTED_MODULE_2__["isObservable"])(expression)) {
      let subscription = expression.subscribeInvokeSneakInLine(n => {
        element[name] = n;
      });
      appendDisposeCallbackToNode(element, subscription.dispose);

      if (expression instanceof _ModifiableObservable__WEBPACK_IMPORTED_MODULE_1__["ModifiableObservable"]) {
        switch (name) {
          case "value":
          case "valueAsDate":
          case "valueAsNumber":
            {
              let listener = _e => {
                expression.setValueDontNotifySubscription(element[name], subscription);
              };

              element.addEventListener("input", listener);
              appendDisposeCallbackToNode(element, () => {
                element.removeEventListener("input", listener);
              });
              break;
            }

          case "checked":
            {
              let listener = _e => {
                expression.setValueDontNotifySubscription(element.checked, subscription);
              };

              element.addEventListener("change", listener);
              appendDisposeCallbackToNode(element, () => {
                element.removeEventListener("change", listener);
              });
              break;
            }
        }
      }
    } else if (typeof expression === "function") {
      let computedObservable = Object(_ComputedObservable__WEBPACK_IMPORTED_MODULE_0__["co"])(expression);
      computedObservable.subscribeInvokeSneakInLine(n => {
        element[name] = n;
      });
      if (expression.dispose) appendDisposeCallbackToNode(element, expression.dispose);
      appendDisposeCallbackToNode(element, computedObservable.dispose);
    } else element[name] = expression;
  }
}
globalPropertyHandlers.set("style", (element, value) => {
  Object.assign(element.style, value);
});
globalPropertyHandlers.set("role", (element, value) => {
  if (Object(_isObservable__WEBPACK_IMPORTED_MODULE_2__["isObservable"])(value)) {
    let subscription = value.subscribeInvokeSneakInLine(n => {
      element.setAttribute("role", n);
    });
    appendDisposeCallbackToNode(element, subscription.dispose);
  } else if (typeof value === "function") {
    let computedObservable = Object(_ComputedObservable__WEBPACK_IMPORTED_MODULE_0__["co"])(value);
    computedObservable.subscribeInvokeSneakInLine(n => {
      element.setAttribute("role", n);
    });
    if (value.dispose) appendDisposeCallbackToNode(element, value.dispose);
    appendDisposeCallbackToNode(element, computedObservable.dispose);
  } else element.setAttribute("role", value);
});
function toggleClass(element, value) {
  for (let p in value) {
    let expression = value[p];

    if (Object(_isObservable__WEBPACK_IMPORTED_MODULE_2__["isObservable"])(expression)) {
      let subscription = function (p) {
        return expression.subscribeInvokeSneakInLine(n => {
          element.classList.toggle(p, n);
        });
      }(p);

      appendDisposeCallbackToNode(element, subscription.dispose);
    } else if (typeof expression === "function") {
      let computedObservable = Object(_ComputedObservable__WEBPACK_IMPORTED_MODULE_0__["co"])(expression);

      (function (p) {
        computedObservable.subscribeInvokeSneakInLine(n => {
          element.classList.toggle(p, n);
        });
      })(p);

      if (expression.dispose) appendDisposeCallbackToNode(element, expression.dispose);
      appendDisposeCallbackToNode(element, computedObservable.dispose);
    } else element.classList.toggle(p, expression);
  }
}
globalPropertyHandlers.set("toggle", toggleClass);
function switchClass(element, value) {
  if (Object(_isObservable__WEBPACK_IMPORTED_MODULE_2__["isObservable"])(value)) {
    let subscription = value.subscribeInvokeSneakInLine(n => {
      element.className = n;
    });
    appendDisposeCallbackToNode(element, subscription.dispose);
  } else if (typeof value === "function") {
    let computedObservable = Object(_ComputedObservable__WEBPACK_IMPORTED_MODULE_0__["co"])(value);
    computedObservable.subscribeInvokeSneakInLine(n => {
      element.className = n;
    });
    if (value.dispose) appendDisposeCallbackToNode(element, value.dispose);
    appendDisposeCallbackToNode(element, computedObservable.dispose);
  } else {
    for (let i of value) {
      if (typeof i === "string") element.classList.add(i);else if (Object(_isObservable__WEBPACK_IMPORTED_MODULE_2__["isObservable"])(i)) {
        let subscription = i.subscribeInvokeSneakInLine((n, o) => {
          if (o) element.classList.remove(o);
          if (n) element.classList.add(n);
        });
        appendDisposeCallbackToNode(element, subscription.dispose);
      } else {
        let computedObservable = Object(_ComputedObservable__WEBPACK_IMPORTED_MODULE_0__["co"])(i);
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

function createNodeFromFunction(fn, properties, children) {
  if (fn.prototype instanceof Component) return new fn(properties, children);else return fn(properties, children);
}

function createDocumentFragment(children) {
  let documentFragment = document.createDocumentFragment();

  for (let c of children) appendChild(documentFragment, c);

  return documentFragment;
}

function Managed(_attributes, children) {
  let documentFragment = document.createDocumentFragment(),
      comment = document.createComment(" Elastic: managed ");
  documentFragment.appendChild(comment);

  for (let c of children) appendChild(documentFragment, c);

  comment[LAST_MANAGED_CHILD_KEY] = documentFragment.lastChild;
  return documentFragment;
}
function normalize(normalizeFn, generateFn) {
  let normalized = Object(_ComputedObservable__WEBPACK_IMPORTED_MODULE_0__["co"])(normalizeFn),
      result = () => generateFn(normalized);

  result.dispose = normalized.dispose;
  return result;
}

/***/ }),

/***/ "./node_modules/@alumis/ts/ModifiableObservable.ts":
/*!*********************************************************!*\
  !*** ./node_modules/@alumis/ts/ModifiableObservable.ts ***!
  \*********************************************************/
/*! exports provided: ModifiableObservable, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifiableObservable", function() { return ModifiableObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return o; });
/* harmony import */ var _ObservableSubscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ObservableSubscription */ "./node_modules/@alumis/ts/ObservableSubscription.ts");
/* harmony import */ var _ComputedObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComputedObservable */ "./node_modules/@alumis/ts/ComputedObservable.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



let bin = [],
    binLength = 0;
class ModifiableObservable {
  constructor() {
    _defineProperty(this, "wrappedValue", void 0);

    _defineProperty(this, "_subscriptionHead", _ObservableSubscription__WEBPACK_IMPORTED_MODULE_0__["ObservableSubscription"].create());

    _defineProperty(this, "_subscriptionTail", _ObservableSubscription__WEBPACK_IMPORTED_MODULE_0__["ObservableSubscription"].create());

    this.dispose = this.dispose.bind(this);
    (this._subscriptionHead.next = this._subscriptionTail).previous = this._subscriptionHead;
  }

  get value() {
    if (_ComputedObservable__WEBPACK_IMPORTED_MODULE_1__["evaluationStack"].length) {
      let co = _ComputedObservable__WEBPACK_IMPORTED_MODULE_1__["evaluationStack"][_ComputedObservable__WEBPACK_IMPORTED_MODULE_1__["evaluationStack"].length - 1];
      if (!co.observables.has(this)) co.observables.set(this, this.subscribeSneakInLine(co.refresh));
    }

    return this.wrappedValue;
  }

  set value(newValue) {
    let oldValue = this.wrappedValue;

    if (newValue !== oldValue) {
      this.wrappedValue = newValue;
      this.notifySubscribers(newValue, oldValue);
    }
  }

  peek() {
    return this.wrappedValue;
  }

  subscribe(callback) {
    return _ObservableSubscription__WEBPACK_IMPORTED_MODULE_0__["ObservableSubscription"].createAndPrependToTail(this._subscriptionTail, callback);
  }

  subscribeInvoke(callback) {
    callback(this.wrappedValue, undefined);
    let subscription = _ObservableSubscription__WEBPACK_IMPORTED_MODULE_0__["ObservableSubscription"].createAndPrependToTail(this._subscriptionTail, callback);
    return subscription;
  }

  subscribeSneakInLine(callback) {
    return _ObservableSubscription__WEBPACK_IMPORTED_MODULE_0__["ObservableSubscription"].createAndAppendToHead(this._subscriptionHead, callback);
  }

  subscribeInvokeSneakInLine(callback) {
    callback(this.wrappedValue, undefined);
    let subscription = _ObservableSubscription__WEBPACK_IMPORTED_MODULE_0__["ObservableSubscription"].createAndAppendToHead(this._subscriptionHead, callback);
    return subscription;
  }

  notifySubscribers(newValue, oldValue) {
    for (let node = this._subscriptionHead.next; node !== this._subscriptionTail;) {
      let currentNode = node;
      if (node.next && node.next !== this._subscriptionTail && !node.next.callback) debugger;
      node = node.next;
      currentNode.callback(newValue, oldValue);
    }
  }

  notifySubscribersExcept(newValue, oldValue, exemptedObservableSubscription) {
    for (let node = this._subscriptionHead.next; node !== this._subscriptionTail;) {
      let currentNode = node;
      node = node.next;
      if (currentNode !== exemptedObservableSubscription) currentNode.callback(newValue, oldValue);
    }
  }

  setValueDontNotifySubscription(newValue, exemptedObservableSubscription) {
    let oldValue = this.wrappedValue;

    if (newValue !== oldValue) {
      this.wrappedValue = newValue;
      this.notifySubscribersExcept(newValue, oldValue, exemptedObservableSubscription);
    }
  }

  invalidate() {
    let value = this.wrappedValue;
    this.notifySubscribers(value, value);
  }

  dispose() {
    this.wrappedValue = null;

    for (let node = this._subscriptionHead.next; node !== this._subscriptionTail;) {
      let currentNode = node;
      node = node.next;
      currentNode.recycle();
    }

    (this._subscriptionHead.next = this._subscriptionTail).previous = this._subscriptionHead;
    if (bin.length === binLength) bin.push(this);else bin[binLength] = this;
    ++binLength;
  }

}
function o(value) {
  if (binLength) {
    var result = bin[--binLength];
    bin[binLength] = null;
  } else var result = new ModifiableObservable();

  result.wrappedValue = value;
  return result;
}

/***/ }),

/***/ "./node_modules/@alumis/ts/ObservableList.ts":
/*!***************************************************!*\
  !*** ./node_modules/@alumis/ts/ObservableList.ts ***!
  \***************************************************/
/*! exports provided: ObservableList, ObservableListModificationType, ObservableListRefItemNotFoundError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableList", function() { return ObservableList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableListModificationType", function() { return ObservableListModificationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableListRefItemNotFoundError", function() { return ObservableListRefItemNotFoundError; });
/* harmony import */ var _ObservableSubscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ObservableSubscription */ "./node_modules/@alumis/ts/ObservableSubscription.ts");
/* harmony import */ var _ComputedObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComputedObservable */ "./node_modules/@alumis/ts/ComputedObservable.ts");
let _Symbol$iterator;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



_Symbol$iterator = Symbol.iterator;
class ObservableList {
  constructor(iterable) {
    this.iterable = iterable;

    _defineProperty(this, "head", {});

    _defineProperty(this, "tail", {});

    _defineProperty(this, "itemToNode", new Map());

    _defineProperty(this, "_subscriptionsHead", _ObservableSubscription__WEBPACK_IMPORTED_MODULE_0__["ObservableSubscription"].create());

    _defineProperty(this, "_subscriptionsTail", _ObservableSubscription__WEBPACK_IMPORTED_MODULE_0__["ObservableSubscription"].create());

    this.dispose = this.dispose.bind(this);
    (this._subscriptionsHead.next = this._subscriptionsTail).previous = this._subscriptionsHead;
    (this.head.next = this.tail).previous = this.head;
    if (iterable) for (let i of iterable) this.append(i);
  }

  append(item) {
    let node = this.itemToNode.get(item);

    if (node) {
      if (node.next === this.tail) return;
      let previous = node.previous,
          next = node.next;
      previous.next = next;
      next.previous = previous;
    } else this.itemToNode.set(item, node = {
      item: item
    });

    (node.previous = this.tail.previous).next = node;
    (node.next = this.tail).previous = node;
    this.notifySubscribers([{
      type: ObservableListModificationType.Append,
      item: item
    }]);
  }

  remove(item) {
    let node = this.itemToNode.get(item);

    if (node) {
      this.itemToNode.delete(item);
      let previous = node.previous,
          next = node.next;
      previous.next = next;
      next.previous = previous;
      this.notifySubscribers([{
        type: ObservableListModificationType.Remove,
        item: item
      }]);
    }
  }

  insertBefore(newItem, refItem) {
    let node = this.itemToNode.get(newItem);

    if (node) {
      let previous = node.previous,
          next = node.next;
      previous.next = next;
      next.previous = previous;
    } else this.itemToNode.set(newItem, node = {
      item: newItem
    });

    let refNode;

    if (refItem !== null) {
      refNode = this.itemToNode.get(refItem);
      if (!refNode) throw new ObservableListRefItemNotFoundError(refItem);
    } else refNode = this.tail;

    if (refNode.previous === node) return;
    (node.previous = refNode.previous).next = node;
    (node.next = refNode).previous = node;
    this.notifySubscribers([{
      type: ObservableListModificationType.InsertBefore,
      item: newItem,
      refItem: refItem
    }]);
  }

  [_Symbol$iterator]() {
    if (_ComputedObservable__WEBPACK_IMPORTED_MODULE_1__["evaluationStack"].length) {
      let co = _ComputedObservable__WEBPACK_IMPORTED_MODULE_1__["evaluationStack"][_ComputedObservable__WEBPACK_IMPORTED_MODULE_1__["evaluationStack"].length - 1];
      if (!co.observables.has(this)) co.observables.set(this, this.subscribeSneakInLine(co.refresh));
    }

    let node = this.head;
    return {
      next: () => {
        node = node.next;
        if (node !== this.tail) return {
          value: node.item,
          done: false
        };else return {
          done: true
        };
      }
    };
  }

  subscribe(action) {
    return _ObservableSubscription__WEBPACK_IMPORTED_MODULE_0__["ObservableSubscription"].createAndPrependToTail(this._subscriptionsTail, action);
  }

  subscribeSneakInLine(action) {
    return _ObservableSubscription__WEBPACK_IMPORTED_MODULE_0__["ObservableSubscription"].createAndAppendToHead(this._subscriptionsHead, action);
  }

  notifySubscribers(modifications) {
    for (let node = this._subscriptionsHead.next; node != this._subscriptionsTail;) {
      let currentNode = node;
      node = node.next;
      currentNode.callback(modifications);
    }
  }

  dispose() {
    delete this.head;
    delete this.tail;

    for (let node = this._subscriptionsHead.next; node != this._subscriptionsTail;) {
      let currentNode = node;
      node = node.next;
      currentNode.recycle();
    }

    this._subscriptionsHead.recycle();

    delete this._subscriptionsHead;

    this._subscriptionsTail.recycle();

    delete this._subscriptionsTail;
  }

}
let ObservableListModificationType;

(function (ObservableListModificationType) {
  ObservableListModificationType[ObservableListModificationType["Append"] = 0] = "Append";
  ObservableListModificationType[ObservableListModificationType["InsertBefore"] = 1] = "InsertBefore";
  ObservableListModificationType[ObservableListModificationType["Remove"] = 2] = "Remove";
})(ObservableListModificationType || (ObservableListModificationType = {}));

class ObservableListRefItemNotFoundError extends Error {
  constructor(refItem) {
    super(`Referenced item '${refItem}' was not found`);
  }

}

/***/ }),

/***/ "./node_modules/@alumis/ts/ObservableSubscription.ts":
/*!***********************************************************!*\
  !*** ./node_modules/@alumis/ts/ObservableSubscription.ts ***!
  \***********************************************************/
/*! exports provided: ObservableSubscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableSubscription", function() { return ObservableSubscription; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Each observable keeps a doubly-linked list of subscriptions (callbacks to invoke when a state changes).
// It is a doubly-linked list because insertions and deletions should be fast.
// The doubly-linked list usually has a head and a tail.
// When a subscription is no longer needed, it should be recycled for later usage.
// The bin immediately below keeps references to ready-to-use subscriptions that have been recycled.
let bin = [],
    binLength = 0;
class ObservableSubscription {
  constructor() {
    _defineProperty(this, "callback", void 0);

    _defineProperty(this, "previous", void 0);

    _defineProperty(this, "next", void 0);

    _defineProperty(this, "_suspendedCallback", void 0);

    _defineProperty(this, "_suspendedValue", void 0);

    this.dispose = this.dispose.bind(this);
  }
  /**
   * Creates or returns a recycled instance.
   * @internal
   */


  static create() {
    if (binLength) {
      let existing = bin[--binLength];
      bin[binLength] = null;
      return existing;
    }

    return new ObservableSubscription();
  }
  /**
   * Creates and appends a new subscription to right before the tail.
   * @internal
   */


  static createAndPrependToTail(tail, callback) {
    let result = ObservableSubscription.create();
    (result.previous = tail.previous).next = result;
    (result.next = tail).previous = result;
    result.callback = callback;
    return result;
  }
  /**
   * Creates and prepends a new subscription to right after the head.
   * @internal
   */


  static createAndAppendToHead(head, callback) {
    let result = ObservableSubscription.create();
    (result.next = head.next).previous = result;
    (result.previous = head).next = result;
    result.callback = callback;
    return result;
  }

  suspend() {}
  /**
   * Recycles a subscription (places it in the bin) such that it may be reused.
   * @remarks
   * Use unsubscribeAndRecycle() if you instead wish to both unsubscribe and recycle.
   * @internal
   */


  recycle() {
    this.callback = undefined;
    this.previous = undefined;
    this.next = undefined;
    if (bin.length === binLength) bin.push(this);else bin[binLength] = this;
    ++binLength;
  }
  /**
   * Use this function if you no longer wish the callback to be invoked.
   * @remarks
   * After invocation, for long-lived scopes, you should expunge any reference you have to it to accommodate the GC.
   */


  dispose() {
    (this.previous.next = this.next).previous = this.previous;
    this.previous = undefined;
    this.next = undefined;
    this.recycle();
  }

}

/***/ }),

/***/ "./node_modules/@alumis/ts/OperationCancelledError.ts":
/*!************************************************************!*\
  !*** ./node_modules/@alumis/ts/OperationCancelledError.ts ***!
  \************************************************************/
/*! exports provided: OperationCancelledError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationCancelledError", function() { return OperationCancelledError; });
class OperationCancelledError extends Error {
  constructor(message = "Operation was cancelled") {
    super(message);
  }

}

/***/ }),

/***/ "./node_modules/@alumis/ts/SPA.ts":
/*!****************************************!*\
  !*** ./node_modules/@alumis/ts/SPA.ts ***!
  \****************************************/
/*! exports provided: Page, PageDirection, DirectoryPage, HttpStatusCode, SPA, combinePath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageDirection", function() { return PageDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectoryPage", function() { return DirectoryPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpStatusCode", function() { return HttpStatusCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPA", function() { return SPA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combinePath", function() { return combinePath; });
/* harmony import */ var _ComputedObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComputedObservable */ "./node_modules/@alumis/ts/ComputedObservable.ts");
/* harmony import */ var _Semaphore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Semaphore */ "./node_modules/@alumis/ts/Semaphore.ts");
/* harmony import */ var _JSX__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./JSX */ "./node_modules/@alumis/ts/JSX.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Page extends _JSX__WEBPACK_IMPORTED_MODULE_2__["Component"] {}
let PageDirection;

(function (PageDirection) {
  PageDirection[PageDirection["None"] = 0] = "None";
  PageDirection[PageDirection["Forward"] = 1] = "Forward";
  PageDirection[PageDirection["Backward"] = 2] = "Backward";
})(PageDirection || (PageDirection = {}));

class DirectoryPage extends Page {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_aliases", new Map());

    _defineProperty(this, "_subPages", new Map());
  }

  registerSubPage(paths, loadInstanceAsync, cache = true) {
    this._subPages.set(paths[0], {
      loadInstanceAsync: loadInstanceAsync,
      cache: cache
    });

    for (let i = 1; i < paths.length; ++i) this._aliases.set(paths[i], paths[0]);
  }

  async loadSubPageAsync(path, pathIndex, parameters, pageDirection, e) {
    if (pathIndex < path.length) {
      let subPageEntry = this._subPages.get(path[pathIndex]);

      if (!subPageEntry) {
        let alias = this._aliases.get(path[pathIndex]);

        if (alias) subPageEntry = this._subPages.get(alias);
      }

      if (subPageEntry) {
        let page = subPageEntry.cachedInstance;

        if (!page) {
          page = await subPageEntry.loadInstanceAsync();

          if (subPageEntry.cache) {
            subPageEntry.cachedInstance = page;
            subPageEntry.loadInstanceAsync = null;
          }
        }

        let pageHttpStatusCode;
        if (page instanceof DirectoryPage) pageHttpStatusCode = await page.loadSubPageAsync(path, pathIndex + 1, parameters, pageDirection, e);else pageHttpStatusCode = await page.loadAsync(path, pathIndex + 1, parameters, pageDirection, e);
        return await this.loadAsync(path, pathIndex, parameters, pageDirection, e, page, pageHttpStatusCode);
      }
    }

    return await this.loadAsync(path, pathIndex, parameters, pageDirection, e);
  }

}
let HttpStatusCode;

(function (HttpStatusCode) {
  HttpStatusCode[HttpStatusCode["Ok"] = 200] = "Ok";
  HttpStatusCode[HttpStatusCode["Created"] = 201] = "Created";
  HttpStatusCode[HttpStatusCode["Accepted"] = 202] = "Accepted";
  HttpStatusCode[HttpStatusCode["PartialInformation"] = 203] = "PartialInformation";
  HttpStatusCode[HttpStatusCode["NoResponse"] = 204] = "NoResponse";
  HttpStatusCode[HttpStatusCode["BadRequest"] = 400] = "BadRequest";
  HttpStatusCode[HttpStatusCode["Unauthorized"] = 401] = "Unauthorized";
  HttpStatusCode[HttpStatusCode["PaymentRequired"] = 402] = "PaymentRequired";
  HttpStatusCode[HttpStatusCode["Forbidden"] = 403] = "Forbidden";
  HttpStatusCode[HttpStatusCode["NotFound"] = 404] = "NotFound";
  HttpStatusCode[HttpStatusCode["InternalError"] = 500] = "InternalError";
  HttpStatusCode[HttpStatusCode["NotImplemented"] = 501] = "NotImplemented";
})(HttpStatusCode || (HttpStatusCode = {}));

const PAGE_NUMBERS_KEY = "__pageNumbers";
class SPA extends DirectoryPage {
  constructor() {
    super();

    _defineProperty(this, "_currentPageNumber", void 0);

    _defineProperty(this, "_pageNumbers", void 0);

    _defineProperty(this, "loadLocationSemaphore", new _Semaphore__WEBPACK_IMPORTED_MODULE_1__["Semaphore"]());

    addEventListener("click", e => {
      let target = e.target;

      do {
        if (target.tagName === "A") {
          if (target.host !== location.host) return;
          history.pushState(null, null, target.href);
          this.invalidateLocationAsync();
          e.preventDefault();
          break;
        }
      } while (target = target.parentElement);
    });
    addEventListener("popstate", e => {
      this.invalidateLocationAsync(e);
    });
  }

  installTitleHandler() {
    Object(_ComputedObservable__WEBPACK_IMPORTED_MODULE_0__["co"])(() => this.title).subscribeInvoke(n => document.title = n);
  }

  async invalidateLocationAsync(e) {
    if (!this._pageNumbers) {
      if (!(this._pageNumbers = sessionStorage.getItem(PAGE_NUMBERS_KEY))) this._pageNumbers = 0;else this._pageNumbers = parseInt(this._pageNumbers);
    }

    let state = history.state;
    if (!state) state = {};

    if (!state.pageNumber) {
      state.pageNumber = ++this._pageNumbers;
      history.replaceState(state, "");
    }

    sessionStorage.setItem(PAGE_NUMBERS_KEY, String(this._pageNumbers));
    let oldCurrentPageNumber = this._currentPageNumber;
    this._currentPageNumber = state.pageNumber;
    let pageDirection;
    if (!oldCurrentPageNumber) pageDirection = PageDirection.None;else if (oldCurrentPageNumber < this._currentPageNumber) pageDirection = PageDirection.Forward;else if (this._currentPageNumber < oldCurrentPageNumber) pageDirection = PageDirection.Backward;else pageDirection = PageDirection.None;
    let locationComponents = getLocationComponents(location.pathname, location.search);
    await this.loadLocationSemaphore.waitOneAsync();

    try {
      await this.loadSubPageAsync(locationComponents.path, 0, locationComponents.parameters, pageDirection, e);
    } finally {
      this.loadLocationSemaphore.release();
    }
  }

  navigateAsync(path) {
    history.pushState(null, null, path);
    return this.invalidateLocationAsync();
  }

}

function getLocationComponents(pathName, search) {
  if (pathName.startsWith("/")) pathName = pathName.substr(1);
  return {
    path: pathName ? pathName.split("/").map(p => decodeURIComponent(p)) : [],
    parameters: new URLSearchParams(search)
  };
}

function combinePath(path, ...subPath) {
  if (0 < path.length) return "/" + path.join("/") + "/" + subPath.join("/");
  return "/" + subPath.join("/");
}

/***/ }),

/***/ "./node_modules/@alumis/ts/Semaphore.ts":
/*!**********************************************!*\
  !*** ./node_modules/@alumis/ts/Semaphore.ts ***!
  \**********************************************/
/*! exports provided: Semaphore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Semaphore", function() { return Semaphore; });
/* harmony import */ var _OperationCancelledError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OperationCancelledError */ "./node_modules/@alumis/ts/OperationCancelledError.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class Semaphore {
  constructor() {
    _defineProperty(this, "head", void 0);

    _defineProperty(this, "tail", void 0);

    let head = {},
        tail = {};
    (head.next = tail).previous = head;
    this.head = head;
    this.tail = tail;
  }

  waitOneAsync(cancellationtoken) {
    if (cancellationtoken) {
      if (cancellationtoken.isCancellationRequested) return Promise.reject(new _OperationCancelledError__WEBPACK_IMPORTED_MODULE_0__["OperationCancelledError"]());
    }

    return new Promise((resolve, reject) => {
      let currentQueueEntry = {
        resolve: resolve,
        previous: this.tail.previous,
        next: this.tail
      };
      currentQueueEntry.previous.next = currentQueueEntry;
      currentQueueEntry.next.previous = currentQueueEntry;
      if (this.head.next === currentQueueEntry) resolve();else if (cancellationtoken) {
        currentQueueEntry.cancellationToken = cancellationtoken;
        cancellationtoken.addListener(currentQueueEntry.cancellationTokenListener = () => {
          (currentQueueEntry.previous.next = currentQueueEntry.next).previous = currentQueueEntry.previous;
          reject(new _OperationCancelledError__WEBPACK_IMPORTED_MODULE_0__["OperationCancelledError"]());
        });
      }
    });
  }

  release() {
    let head = this.head,
        next = head.next.next;
    (head.next = next).previous = head;

    if (next !== this.tail) {
      if (next.cancellationToken) {
        next.cancellationToken.removeListener(next.cancellationTokenListener);
        next.cancellationToken = null;
        next.cancellationTokenListener = null;
      }

      let resolve = next.resolve;
      next.resolve = null;
      resolve();
    }
  }

}

/***/ }),

/***/ "./node_modules/@alumis/ts/isObservable.ts":
/*!*************************************************!*\
  !*** ./node_modules/@alumis/ts/isObservable.ts ***!
  \*************************************************/
/*! exports provided: isObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservable", function() { return isObservable; });
/* harmony import */ var _ModifiableObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModifiableObservable */ "./node_modules/@alumis/ts/ModifiableObservable.ts");
/* harmony import */ var _ComputedObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComputedObservable */ "./node_modules/@alumis/ts/ComputedObservable.ts");


function isObservable(obj) {
  return obj instanceof _ModifiableObservable__WEBPACK_IMPORTED_MODULE_0__["ModifiableObservable"] || obj instanceof _ComputedObservable__WEBPACK_IMPORTED_MODULE_1__["ComputedObservable"];
}

/***/ }),

/***/ "./node_modules/@teamsupercell/typings-for-css-modules-loader/src/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/grid/index.scss":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@teamsupercell/typings-for-css-modules-loader/src!./node_modules/css-loader/dist/cjs.js??ref--6-2!./node_modules/postcss-loader/src??ref--6-3!./node_modules/sass-loader/dist/cjs.js!./src/grid/index.scss ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = module.exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".src-grid-index__container {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n  @media (min-width: 576px) {\n    .src-grid-index__container {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .src-grid-index__container {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .src-grid-index__container {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .src-grid-index__container {\n      max-width: 1140px; } }\n\n.src-grid-index__container-fluid {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n\n.src-grid-index__container-with-no-right-margin {\n  width: 100%;\n  padding-left: 15px;\n  margin-left: auto; }\n  @media (min-width: 576px) {\n    .src-grid-index__container-with-no-right-margin {\n      max-width: calc(540px + (100% - 540px) / 2); } }\n  @media (min-width: 768px) {\n    .src-grid-index__container-with-no-right-margin {\n      max-width: calc(720px + (100% - 720px) / 2); } }\n  @media (min-width: 992px) {\n    .src-grid-index__container-with-no-right-margin {\n      max-width: calc(960px + (100% - 960px) / 2); } }\n  @media (min-width: 1200px) {\n    .src-grid-index__container-with-no-right-margin {\n      max-width: calc(1140px + (100% - 1140px) / 2); } }\n\n.src-grid-index__row {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px; }\n\n.src-grid-index__col-1, .src-grid-index__col-2, .src-grid-index__col-3, .src-grid-index__col-4, .src-grid-index__col-5, .src-grid-index__col-6, .src-grid-index__col-7, .src-grid-index__col-8, .src-grid-index__col-9, .src-grid-index__col-10, .src-grid-index__col-11, .src-grid-index__col-12, .src-grid-index__col, .src-grid-index__col-sm-1, .src-grid-index__col-sm-2, .src-grid-index__col-sm-3, .src-grid-index__col-sm-4, .src-grid-index__col-sm-5, .src-grid-index__col-sm-6, .src-grid-index__col-sm-7, .src-grid-index__col-sm-8, .src-grid-index__col-sm-9, .src-grid-index__col-sm-10, .src-grid-index__col-sm-11, .src-grid-index__col-sm-12, .src-grid-index__col-sm, .src-grid-index__col-md-1, .src-grid-index__col-md-2, .src-grid-index__col-md-3, .src-grid-index__col-md-4, .src-grid-index__col-md-5, .src-grid-index__col-md-6, .src-grid-index__col-md-7, .src-grid-index__col-md-8, .src-grid-index__col-md-9, .src-grid-index__col-md-10, .src-grid-index__col-md-11, .src-grid-index__col-md-12, .src-grid-index__col-md, .src-grid-index__col-lg-1, .src-grid-index__col-lg-2, .src-grid-index__col-lg-3, .src-grid-index__col-lg-4, .src-grid-index__col-lg-5, .src-grid-index__col-lg-6, .src-grid-index__col-lg-7, .src-grid-index__col-lg-8, .src-grid-index__col-lg-9, .src-grid-index__col-lg-10, .src-grid-index__col-lg-11, .src-grid-index__col-lg-12, .src-grid-index__col-lg, .src-grid-index__col-xl-1, .src-grid-index__col-xl-2, .src-grid-index__col-xl-3, .src-grid-index__col-xl-4, .src-grid-index__col-xl-5, .src-grid-index__col-xl-6, .src-grid-index__col-xl-7, .src-grid-index__col-xl-8, .src-grid-index__col-xl-9, .src-grid-index__col-xl-10, .src-grid-index__col-xl-11, .src-grid-index__col-xl-12, .src-grid-index__col-xl {\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px; }\n\n.src-grid-index__col {\n  flex-basis: 0;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  max-width: 100%; }\n\n.src-grid-index__col-1 {\n  -webkit-box-flex: 0;\n          flex: 0 0 8.33333%;\n  max-width: 8.33333%; }\n\n.src-grid-index__col-2 {\n  -webkit-box-flex: 0;\n          flex: 0 0 16.66667%;\n  max-width: 16.66667%; }\n\n.src-grid-index__col-3 {\n  -webkit-box-flex: 0;\n          flex: 0 0 25%;\n  max-width: 25%; }\n\n.src-grid-index__col-4 {\n  -webkit-box-flex: 0;\n          flex: 0 0 33.33333%;\n  max-width: 33.33333%; }\n\n.src-grid-index__col-5 {\n  -webkit-box-flex: 0;\n          flex: 0 0 41.66667%;\n  max-width: 41.66667%; }\n\n.src-grid-index__col-6 {\n  -webkit-box-flex: 0;\n          flex: 0 0 50%;\n  max-width: 50%; }\n\n.src-grid-index__col-7 {\n  -webkit-box-flex: 0;\n          flex: 0 0 58.33333%;\n  max-width: 58.33333%; }\n\n.src-grid-index__col-8 {\n  -webkit-box-flex: 0;\n          flex: 0 0 66.66667%;\n  max-width: 66.66667%; }\n\n.src-grid-index__col-9 {\n  -webkit-box-flex: 0;\n          flex: 0 0 75%;\n  max-width: 75%; }\n\n.src-grid-index__col-10 {\n  -webkit-box-flex: 0;\n          flex: 0 0 83.33333%;\n  max-width: 83.33333%; }\n\n.src-grid-index__col-11 {\n  -webkit-box-flex: 0;\n          flex: 0 0 91.66667%;\n  max-width: 91.66667%; }\n\n.src-grid-index__col-12 {\n  -webkit-box-flex: 0;\n          flex: 0 0 100%;\n  max-width: 100%; }\n\n@media (min-width: 576px) {\n  .src-grid-index__col-sm {\n    flex-basis: 0;\n    -webkit-box-flex: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .src-grid-index__col-sm-1 {\n    -webkit-box-flex: 0;\n            flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .src-grid-index__col-sm-2 {\n    -webkit-box-flex: 0;\n            flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .src-grid-index__col-sm-3 {\n    -webkit-box-flex: 0;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .src-grid-index__col-sm-4 {\n    -webkit-box-flex: 0;\n            flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .src-grid-index__col-sm-5 {\n    -webkit-box-flex: 0;\n            flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .src-grid-index__col-sm-6 {\n    -webkit-box-flex: 0;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .src-grid-index__col-sm-7 {\n    -webkit-box-flex: 0;\n            flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .src-grid-index__col-sm-8 {\n    -webkit-box-flex: 0;\n            flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .src-grid-index__col-sm-9 {\n    -webkit-box-flex: 0;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .src-grid-index__col-sm-10 {\n    -webkit-box-flex: 0;\n            flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .src-grid-index__col-sm-11 {\n    -webkit-box-flex: 0;\n            flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .src-grid-index__col-sm-12 {\n    -webkit-box-flex: 0;\n            flex: 0 0 100%;\n    max-width: 100%; } }\n\n@media (min-width: 768px) {\n  .src-grid-index__col-md {\n    flex-basis: 0;\n    -webkit-box-flex: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .src-grid-index__col-md-1 {\n    -webkit-box-flex: 0;\n            flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .src-grid-index__col-md-2 {\n    -webkit-box-flex: 0;\n            flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .src-grid-index__col-md-3 {\n    -webkit-box-flex: 0;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .src-grid-index__col-md-4 {\n    -webkit-box-flex: 0;\n            flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .src-grid-index__col-md-5 {\n    -webkit-box-flex: 0;\n            flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .src-grid-index__col-md-6 {\n    -webkit-box-flex: 0;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .src-grid-index__col-md-7 {\n    -webkit-box-flex: 0;\n            flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .src-grid-index__col-md-8 {\n    -webkit-box-flex: 0;\n            flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .src-grid-index__col-md-9 {\n    -webkit-box-flex: 0;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .src-grid-index__col-md-10 {\n    -webkit-box-flex: 0;\n            flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .src-grid-index__col-md-11 {\n    -webkit-box-flex: 0;\n            flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .src-grid-index__col-md-12 {\n    -webkit-box-flex: 0;\n            flex: 0 0 100%;\n    max-width: 100%; } }\n\n@media (min-width: 992px) {\n  .src-grid-index__col-lg {\n    flex-basis: 0;\n    -webkit-box-flex: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .src-grid-index__col-lg-1 {\n    -webkit-box-flex: 0;\n            flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .src-grid-index__col-lg-2 {\n    -webkit-box-flex: 0;\n            flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .src-grid-index__col-lg-3 {\n    -webkit-box-flex: 0;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .src-grid-index__col-lg-4 {\n    -webkit-box-flex: 0;\n            flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .src-grid-index__col-lg-5 {\n    -webkit-box-flex: 0;\n            flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .src-grid-index__col-lg-6 {\n    -webkit-box-flex: 0;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .src-grid-index__col-lg-7 {\n    -webkit-box-flex: 0;\n            flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .src-grid-index__col-lg-8 {\n    -webkit-box-flex: 0;\n            flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .src-grid-index__col-lg-9 {\n    -webkit-box-flex: 0;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .src-grid-index__col-lg-10 {\n    -webkit-box-flex: 0;\n            flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .src-grid-index__col-lg-11 {\n    -webkit-box-flex: 0;\n            flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .src-grid-index__col-lg-12 {\n    -webkit-box-flex: 0;\n            flex: 0 0 100%;\n    max-width: 100%; } }\n\n@media (min-width: 1200px) {\n  .src-grid-index__col-xl {\n    flex-basis: 0;\n    -webkit-box-flex: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .src-grid-index__col-xl-1 {\n    -webkit-box-flex: 0;\n            flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .src-grid-index__col-xl-2 {\n    -webkit-box-flex: 0;\n            flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .src-grid-index__col-xl-3 {\n    -webkit-box-flex: 0;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .src-grid-index__col-xl-4 {\n    -webkit-box-flex: 0;\n            flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .src-grid-index__col-xl-5 {\n    -webkit-box-flex: 0;\n            flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .src-grid-index__col-xl-6 {\n    -webkit-box-flex: 0;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .src-grid-index__col-xl-7 {\n    -webkit-box-flex: 0;\n            flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .src-grid-index__col-xl-8 {\n    -webkit-box-flex: 0;\n            flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .src-grid-index__col-xl-9 {\n    -webkit-box-flex: 0;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .src-grid-index__col-xl-10 {\n    -webkit-box-flex: 0;\n            flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .src-grid-index__col-xl-11 {\n    -webkit-box-flex: 0;\n            flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .src-grid-index__col-xl-12 {\n    -webkit-box-flex: 0;\n            flex: 0 0 100%;\n    max-width: 100%; } }\n", "",{"version":3,"sources":["index.scss"],"names":[],"mappings":"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","file":"index.scss","sourcesContent":[".container {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n  @media (min-width: 576px) {\n    .container {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .container {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .container {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .container {\n      max-width: 1140px; } }\n\n.container-fluid {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n\n.container-with-no-right-margin {\n  width: 100%;\n  padding-left: 15px;\n  margin-left: auto; }\n  @media (min-width: 576px) {\n    .container-with-no-right-margin {\n      max-width: calc(540px + (100% - 540px) / 2); } }\n  @media (min-width: 768px) {\n    .container-with-no-right-margin {\n      max-width: calc(720px + (100% - 720px) / 2); } }\n  @media (min-width: 992px) {\n    .container-with-no-right-margin {\n      max-width: calc(960px + (100% - 960px) / 2); } }\n  @media (min-width: 1200px) {\n    .container-with-no-right-margin {\n      max-width: calc(1140px + (100% - 1140px) / 2); } }\n\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px; }\n\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl {\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px; }\n\n.col {\n  flex-basis: 0;\n  flex-grow: 1;\n  max-width: 100%; }\n\n.col-1 {\n  flex: 0 0 8.33333%;\n  max-width: 8.33333%; }\n\n.col-2 {\n  flex: 0 0 16.66667%;\n  max-width: 16.66667%; }\n\n.col-3 {\n  flex: 0 0 25%;\n  max-width: 25%; }\n\n.col-4 {\n  flex: 0 0 33.33333%;\n  max-width: 33.33333%; }\n\n.col-5 {\n  flex: 0 0 41.66667%;\n  max-width: 41.66667%; }\n\n.col-6 {\n  flex: 0 0 50%;\n  max-width: 50%; }\n\n.col-7 {\n  flex: 0 0 58.33333%;\n  max-width: 58.33333%; }\n\n.col-8 {\n  flex: 0 0 66.66667%;\n  max-width: 66.66667%; }\n\n.col-9 {\n  flex: 0 0 75%;\n  max-width: 75%; }\n\n.col-10 {\n  flex: 0 0 83.33333%;\n  max-width: 83.33333%; }\n\n.col-11 {\n  flex: 0 0 91.66667%;\n  max-width: 91.66667%; }\n\n.col-12 {\n  flex: 0 0 100%;\n  max-width: 100%; }\n\n@media (min-width: 576px) {\n  .col-sm {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .col-sm-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-sm-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-sm-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-sm-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-sm-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-sm-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-sm-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-sm-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-sm-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-sm-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-sm-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-sm-12 {\n    flex: 0 0 100%;\n    max-width: 100%; } }\n\n@media (min-width: 768px) {\n  .col-md {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .col-md-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-md-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-md-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-md-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-md-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-md-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-md-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-md-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-md-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-md-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-md-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-md-12 {\n    flex: 0 0 100%;\n    max-width: 100%; } }\n\n@media (min-width: 992px) {\n  .col-lg {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .col-lg-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-lg-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-lg-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-lg-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-lg-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-lg-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-lg-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-lg-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-lg-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-lg-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-lg-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-lg-12 {\n    flex: 0 0 100%;\n    max-width: 100%; } }\n\n@media (min-width: 1200px) {\n  .col-xl {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .col-xl-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-xl-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-xl-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-xl-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-xl-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-xl-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-xl-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-xl-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-xl-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-xl-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-xl-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-xl-12 {\n    flex: 0 0 100%;\n    max-width: 100%; } }\n"]}]);
// Exports
exports.locals = {
	"container": "src-grid-index__container",
	"containerFluid": "src-grid-index__container-fluid",
	"containerWithNoRightMargin": "src-grid-index__container-with-no-right-margin",
	"row": "src-grid-index__row",
	"col1": "src-grid-index__col-1",
	"col2": "src-grid-index__col-2",
	"col3": "src-grid-index__col-3",
	"col4": "src-grid-index__col-4",
	"col5": "src-grid-index__col-5",
	"col6": "src-grid-index__col-6",
	"col7": "src-grid-index__col-7",
	"col8": "src-grid-index__col-8",
	"col9": "src-grid-index__col-9",
	"col10": "src-grid-index__col-10",
	"col11": "src-grid-index__col-11",
	"col12": "src-grid-index__col-12",
	"col": "src-grid-index__col",
	"colSm1": "src-grid-index__col-sm-1",
	"colSm2": "src-grid-index__col-sm-2",
	"colSm3": "src-grid-index__col-sm-3",
	"colSm4": "src-grid-index__col-sm-4",
	"colSm5": "src-grid-index__col-sm-5",
	"colSm6": "src-grid-index__col-sm-6",
	"colSm7": "src-grid-index__col-sm-7",
	"colSm8": "src-grid-index__col-sm-8",
	"colSm9": "src-grid-index__col-sm-9",
	"colSm10": "src-grid-index__col-sm-10",
	"colSm11": "src-grid-index__col-sm-11",
	"colSm12": "src-grid-index__col-sm-12",
	"colSm": "src-grid-index__col-sm",
	"colMd1": "src-grid-index__col-md-1",
	"colMd2": "src-grid-index__col-md-2",
	"colMd3": "src-grid-index__col-md-3",
	"colMd4": "src-grid-index__col-md-4",
	"colMd5": "src-grid-index__col-md-5",
	"colMd6": "src-grid-index__col-md-6",
	"colMd7": "src-grid-index__col-md-7",
	"colMd8": "src-grid-index__col-md-8",
	"colMd9": "src-grid-index__col-md-9",
	"colMd10": "src-grid-index__col-md-10",
	"colMd11": "src-grid-index__col-md-11",
	"colMd12": "src-grid-index__col-md-12",
	"colMd": "src-grid-index__col-md",
	"colLg1": "src-grid-index__col-lg-1",
	"colLg2": "src-grid-index__col-lg-2",
	"colLg3": "src-grid-index__col-lg-3",
	"colLg4": "src-grid-index__col-lg-4",
	"colLg5": "src-grid-index__col-lg-5",
	"colLg6": "src-grid-index__col-lg-6",
	"colLg7": "src-grid-index__col-lg-7",
	"colLg8": "src-grid-index__col-lg-8",
	"colLg9": "src-grid-index__col-lg-9",
	"colLg10": "src-grid-index__col-lg-10",
	"colLg11": "src-grid-index__col-lg-11",
	"colLg12": "src-grid-index__col-lg-12",
	"colLg": "src-grid-index__col-lg",
	"colXl1": "src-grid-index__col-xl-1",
	"colXl2": "src-grid-index__col-xl-2",
	"colXl3": "src-grid-index__col-xl-3",
	"colXl4": "src-grid-index__col-xl-4",
	"colXl5": "src-grid-index__col-xl-5",
	"colXl6": "src-grid-index__col-xl-6",
	"colXl7": "src-grid-index__col-xl-7",
	"colXl8": "src-grid-index__col-xl-8",
	"colXl9": "src-grid-index__col-xl-9",
	"colXl10": "src-grid-index__col-xl-10",
	"colXl11": "src-grid-index__col-xl-11",
	"colXl12": "src-grid-index__col-xl-12",
	"colXl": "src-grid-index__col-xl"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    for (var i = 0; i < modules.length; i++) {
      var item = [].concat(modules[i]);

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = {};

function modulesToDom(moduleId, list, options) {
  for (var i = 0; i < list.length; i++) {
    var part = {
      css: list[i][1],
      media: list[i][2],
      sourceMap: list[i][3]
    };

    if (stylesInDom[moduleId][i]) {
      stylesInDom[moduleId][i](part);
    } else {
      stylesInDom[moduleId].push(addStyle(part, options));
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (moduleId, list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  moduleId = options.base ? moduleId + options.base : moduleId;
  list = list || [];

  if (!stylesInDom[moduleId]) {
    stylesInDom[moduleId] = [];
  }

  modulesToDom(moduleId, list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    if (!stylesInDom[moduleId]) {
      stylesInDom[moduleId] = [];
    }

    modulesToDom(moduleId, newList, options);

    for (var j = newList.length; j < stylesInDom[moduleId].length; j++) {
      stylesInDom[moduleId][j]();
    }

    stylesInDom[moduleId].length = newList.length;

    if (stylesInDom[moduleId].length === 0) {
      delete stylesInDom[moduleId];
    }
  };
};

/***/ }),

/***/ "./src/TutorialPage/metadata.tsx":
/*!***************************************!*\
  !*** ./src/TutorialPage/metadata.tsx ***!
  \***************************************/
/*! exports provided: TUTORIAL_PAGE_RELATIVE_PATH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TUTORIAL_PAGE_RELATIVE_PATH", function() { return TUTORIAL_PAGE_RELATIVE_PATH; });
var TUTORIAL_PAGE_RELATIVE_PATH = "tutorial";

/***/ }),

/***/ "./src/Website/index.scss":
/*!********************************!*\
  !*** ./src/Website/index.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"focusVisible":"src-Website-index__focus-visible"};

/***/ }),

/***/ "./src/Website/index.tsx":
/*!*******************************!*\
  !*** ./src/Website/index.tsx ***!
  \*******************************/
/*! exports provided: Website, getThemeColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Website", function() { return Website; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getThemeColors", function() { return getThemeColors; });
/* harmony import */ var _alumis_ts_JSX__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @alumis/ts/JSX */ "./node_modules/@alumis/ts/JSX.ts");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/Website/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _alumis_ts_SPA__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @alumis/ts/SPA */ "./node_modules/@alumis/ts/SPA.ts");
/* harmony import */ var _alumis_ts_ModifiableObservable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @alumis/ts/ModifiableObservable */ "./node_modules/@alumis/ts/ModifiableObservable.ts");
/* harmony import */ var _TutorialPage_metadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../TutorialPage/metadata */ "./src/TutorialPage/metadata.tsx");


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Website extends _alumis_ts_SPA__WEBPACK_IMPORTED_MODULE_2__["SPA"] {
  constructor() {
    super();

    _defineProperty(this, "currentPage", Object(_alumis_ts_ModifiableObservable__WEBPACK_IMPORTED_MODULE_3__["o"])());

    this.installTitleHandler();
    this.registerSubPage([_TutorialPage_metadata__WEBPACK_IMPORTED_MODULE_4__["TUTORIAL_PAGE_RELATIVE_PATH"]], async () => {
      return new (await Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, /*! ../TutorialPage */ "./src/TutorialPage/index.tsx"))).TutorialPage();
    });
    this.node = Object(_alumis_ts_JSX__WEBPACK_IMPORTED_MODULE_0__["createNode"])(null, null, () => Object(_alumis_ts_JSX__WEBPACK_IMPORTED_MODULE_0__["createNode"])(_alumis_ts_JSX__WEBPACK_IMPORTED_MODULE_0__["Managed"], null, this.currentPage.value));
  }

  get title() {
    let currentPage = this.currentPage.value;
    if (currentPage) return "Alumis - " + currentPage.title;
    return "Alumis";
  }

  async loadAsync(path, pathIndex, parameters, pageDirection, e, page, pageHttpStatusCode) {
    this.currentPage.value = page;
    return _alumis_ts_SPA__WEBPACK_IMPORTED_MODULE_2__["HttpStatusCode"].Ok;
  }

}
let themeColors;
function getThemeColors() {
  if (themeColors) return themeColors;
  let style = getComputedStyle(document.body);
  return themeColors = {
    body: style.color,
    background: style.backgroundColor,
    blue: style.getPropertyValue("--blue"),
    indigo: style.getPropertyValue("--indigo"),
    purple: style.getPropertyValue("--purple"),
    pink: style.getPropertyValue("--pink"),
    red: style.getPropertyValue("--red"),
    orange: style.getPropertyValue("--orange"),
    yellow: style.getPropertyValue("--yellow"),
    green: style.getPropertyValue("--green"),
    teal: style.getPropertyValue("--teal"),
    cyan: style.getPropertyValue("--cyan")
  };
}

/***/ }),

/***/ "./src/grid/index.scss":
/*!*****************************!*\
  !*** ./src/grid/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/@teamsupercell/typings-for-css-modules-loader/src!../../node_modules/css-loader/dist/cjs.js??ref--6-2!../../node_modules/postcss-loader/src??ref--6-3!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/@teamsupercell/typings-for-css-modules-loader/src/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/grid/index.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(module.i, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/grid/index.ts":
/*!***************************!*\
  !*** ./src/grid/index.ts ***!
  \***************************/
/*! exports provided: decomposeDeviceWidth, DeviceWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decomposeDeviceWidth", function() { return decomposeDeviceWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceWidth", function() { return DeviceWidth; });
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/grid/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _alumis_ts_JSX__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @alumis/ts/JSX */ "./node_modules/@alumis/ts/JSX.ts");


function decomposeDeviceWidth(width) {
  if (DeviceWidth.ExtraLarge <= width) return DeviceWidth.ExtraLarge;
  if (DeviceWidth.Large <= width) return DeviceWidth.Large;
  if (DeviceWidth.Medium <= width) return DeviceWidth.Medium;
  if (DeviceWidth.Small <= width) return DeviceWidth.Small;
  return DeviceWidth.ExtraSmall;
}
let DeviceWidth;

(function (DeviceWidth) {
  DeviceWidth[DeviceWidth["ExtraSmall"] = 0] = "ExtraSmall";
  DeviceWidth[DeviceWidth["Small"] = 576] = "Small";
  DeviceWidth[DeviceWidth["Medium"] = 768] = "Medium";
  DeviceWidth[DeviceWidth["Large"] = 992] = "Large";
  DeviceWidth[DeviceWidth["ExtraLarge"] = 1200] = "ExtraLarge";
})(DeviceWidth || (DeviceWidth = {}));

_alumis_ts_JSX__WEBPACK_IMPORTED_MODULE_1__["globalPropertyHandlers"].set("column", (element, value) => {
  if (value) element.classList.add(_index_scss__WEBPACK_IMPORTED_MODULE_0___default.a.col);
});
_alumis_ts_JSX__WEBPACK_IMPORTED_MODULE_1__["globalPropertyHandlers"].set("columns", (element, value) => {
  element.classList.add(_index_scss__WEBPACK_IMPORTED_MODULE_0___default.a["col" + value]);
});
_alumis_ts_JSX__WEBPACK_IMPORTED_MODULE_1__["globalPropertyHandlers"].set("smallAndUpColumns", (element, value) => {
  element.classList.add(_index_scss__WEBPACK_IMPORTED_MODULE_0___default.a["colSm" + value]);
});
_alumis_ts_JSX__WEBPACK_IMPORTED_MODULE_1__["globalPropertyHandlers"].set("mediumAndUpColumns", (element, value) => {
  element.classList.add(_index_scss__WEBPACK_IMPORTED_MODULE_0___default.a["colMd" + value]);
});
_alumis_ts_JSX__WEBPACK_IMPORTED_MODULE_1__["globalPropertyHandlers"].set("largeAndUpColumns", (element, value) => {
  element.classList.add(_index_scss__WEBPACK_IMPORTED_MODULE_0___default.a["colLg" + value]);
});
_alumis_ts_JSX__WEBPACK_IMPORTED_MODULE_1__["globalPropertyHandlers"].set("extraLargeAndUpColumns", (element, value) => {
  element.classList.add(_index_scss__WEBPACK_IMPORTED_MODULE_0___default.a["colXl" + value]);
});
_alumis_ts_JSX__WEBPACK_IMPORTED_MODULE_1__["globalPropertyHandlers"].set("responsiveContainer", (element, value) => {
  if (value) element.classList.add(_index_scss__WEBPACK_IMPORTED_MODULE_0___default.a.container);
});
_alumis_ts_JSX__WEBPACK_IMPORTED_MODULE_1__["globalPropertyHandlers"].set("responsiveContainerWithNoRightMargin", (element, value) => {
  if (value) element.classList.add(_index_scss__WEBPACK_IMPORTED_MODULE_0___default.a.containerWithNoRightMargin);
});
_alumis_ts_JSX__WEBPACK_IMPORTED_MODULE_1__["globalPropertyHandlers"].set("fluidContainer", (element, value) => {
  if (value) element.classList.add(_index_scss__WEBPACK_IMPORTED_MODULE_0___default.a.containerFluid);
});
_alumis_ts_JSX__WEBPACK_IMPORTED_MODULE_1__["globalPropertyHandlers"].set("row", (element, value) => {
  if (value) element.classList.add(_index_scss__WEBPACK_IMPORTED_MODULE_0___default.a.row);
});

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Website */ "./src/Website/index.tsx");
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid */ "./src/grid/index.ts");

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
let spa = new _Website__WEBPACK_IMPORTED_MODULE_0__["Website"]();
spa.invalidateLocationAsync();
document.body.appendChild(spa.node); // (() => {
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhbHVtaXMvdHMvQ29tcHV0ZWRPYnNlcnZhYmxlLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYWx1bWlzL3RzL0pTWC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFsdW1pcy90cy9Nb2RpZmlhYmxlT2JzZXJ2YWJsZS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFsdW1pcy90cy9PYnNlcnZhYmxlTGlzdC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFsdW1pcy90cy9PYnNlcnZhYmxlU3Vic2NyaXB0aW9uLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYWx1bWlzL3RzL09wZXJhdGlvbkNhbmNlbGxlZEVycm9yLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYWx1bWlzL3RzL1NQQS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFsdW1pcy90cy9TZW1hcGhvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhbHVtaXMvdHMvaXNPYnNlcnZhYmxlLnRzIiwid2VicGFjazovLy8uL3NyYy9ncmlkL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1R1dG9yaWFsUGFnZS9tZXRhZGF0YS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL1dlYnNpdGUvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvV2Vic2l0ZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyaWQvaW5kZXguc2Nzcz8zMDdjIiwid2VicGFjazovLy8uL3NyYy9ncmlkL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50c3giXSwibmFtZXMiOlsiYmluIiwiYmluTGVuZ3RoIiwiZXZhbHVhdGlvblN0YWNrIiwiQ29tcHV0ZWRPYnNlcnZhYmxlIiwiY29uc3RydWN0b3IiLCJPYnNlcnZhYmxlU3Vic2NyaXB0aW9uIiwiY3JlYXRlIiwiTWFwIiwicmVmcmVzaCIsImJpbmQiLCJkaXNwb3NlIiwiX3N1YnNjcmlwdGlvbkhlYWQiLCJuZXh0IiwiX3N1YnNjcmlwdGlvblRhaWwiLCJwcmV2aW91cyIsInZhbHVlIiwibGVuZ3RoIiwiY28iLCJvYnNlcnZhYmxlcyIsImhhcyIsInNldCIsInN1YnNjcmliZVNuZWFrSW5MaW5lIiwiZXJyb3IiLCJ3cmFwcGVkVmFsdWUiLCJwZWVrIiwic3Vic2NyaWJlIiwiY2FsbGJhY2siLCJjcmVhdGVBbmRQcmVwZW5kVG9UYWlsIiwic3Vic2NyaWJlSW52b2tlIiwidW5kZWZpbmVkIiwic3Vic2NyaXB0aW9uIiwiY3JlYXRlQW5kQXBwZW5kVG9IZWFkIiwic3Vic2NyaWJlSW52b2tlU25lYWtJbkxpbmUiLCJub3RpZnlTdWJzY3JpYmVycyIsIm5ld1ZhbHVlIiwib2xkVmFsdWUiLCJub2RlIiwiY3VycmVudE5vZGUiLCJpbnZhbGlkYXRlIiwiY2hhaW4iLCJleHByZXNzaW9uIiwicmVzdWx0IiwiZm9yRWFjaCIsInMiLCJjbGVhciIsInJlY3ljbGUiLCJwdXNoIiwiaW5pdGlhbGl6ZSIsInBvcCIsImUiLCJzZXRWYWx1ZUFuZEVycm9yQW5kTm90aWZ5U3Vic2NyaWJlcnMiLCJvbGRFcnJvciIsImV2YWx1YXRlQXRPbmNlIiwiZ2xvYmFsUHJvcGVydHlIYW5kbGVycyIsIkNvbXBvbmVudCIsIm5vZGVEZXN0cm95ZWQiLCJjcmVhdGVOb2RlIiwiZWxlbWVudCIsInByb3BlcnRpZXMiLCJjaGlsZHJlbiIsImNyZWF0ZUhUTUxFbGVtZW50RnJvbVRhZ05hbWUiLCJjcmVhdGVOb2RlRnJvbUZ1bmN0aW9uIiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsIkVycm9yIiwidGFnTmFtZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImMiLCJhcHBlbmRDaGlsZCIsImJpbmRQcm9wZXJ0aWVzIiwicGFyZW50Tm9kZSIsImNoaWxkIiwiY29tcG9uZW50RGlzcG9zZU5vZGUiLCJjcmVhdGVDb21tZW50IiwiYXBwZW5kRGlzcG9zZUNhbGxiYWNrVG9Ob2RlIiwiSFRNTEVsZW1lbnQiLCJTVkdFbGVtZW50IiwiQ29tbWVudCIsIkRvY3VtZW50RnJhZ21lbnQiLCJpc09ic2VydmFibGUiLCJhcHBlbmRPYnNlcnZhYmxlQ2hpbGQiLCJPYnNlcnZhYmxlTGlzdCIsImFwcGVuZE9ic2VydmFibGVMaXN0Q2hpbGQiLCJBcnJheSIsImNyZWF0ZVRleHROb2RlIiwib2JzZXJ2YWJsZSIsIm9ic2VydmFibGVFeHByZXNzaW9uIiwiaGVhZCIsImRvY3VtZW50RnJhZ21lbnQiLCJ0YWlsIiwibiIsIm5leHRTaWJsaW5nIiwibGFzdE1hbmFnZWRDaGlsZCIsIkxBU1RfTUFOQUdFRF9DSElMRF9LRVkiLCJyZW1vdmUiLCJkaXNwb3NlTm9kZSIsImluc2VydEJlZm9yZSIsIkRJU1BPU0VfQ0FMTEJBQ0tTX0tFWSIsImRpc3Bvc2VDYWxsYmFja3MiLCJjaGlsZE5vZGVzIiwiZmlyc3RDaGlsZCIsImkiLCJvYnNlcnZhYmxlTGlzdCIsIml0ZW1zIiwiaXRlbSIsImxhc3RDaGlsZCIsIm9ic2VydmFibGVMaXN0RGlzcG9zZU5vZGUiLCJtb2RpZmljYXRpb25zIiwibSIsInR5cGUiLCJPYnNlcnZhYmxlTGlzdE1vZGlmaWNhdGlvblR5cGUiLCJBcHBlbmQiLCJJbnNlcnRCZWZvcmUiLCJnZXQiLCJyZWZJdGVtIiwiUmVtb3ZlIiwiZGVsZXRlIiwiZ2xvYmFsUHJvcGVydHlIYW5kbGVyIiwic3RhcnRzV2l0aCIsImJpbmRQcm9wZXJ0eSIsIm5hbWUiLCJpbmRleE9mIiwic2V0QXR0cmlidXRlIiwiY29tcHV0ZWRPYnNlcnZhYmxlIiwiTW9kaWZpYWJsZU9ic2VydmFibGUiLCJsaXN0ZW5lciIsIl9lIiwic2V0VmFsdWVEb250Tm90aWZ5U3Vic2NyaXB0aW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjaGVja2VkIiwiT2JqZWN0IiwiYXNzaWduIiwic3R5bGUiLCJ0b2dnbGVDbGFzcyIsInAiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJzd2l0Y2hDbGFzcyIsImNsYXNzTmFtZSIsImFkZCIsIm8iLCJmbiIsInByb3RvdHlwZSIsIk1hbmFnZWQiLCJfYXR0cmlidXRlcyIsImNvbW1lbnQiLCJub3JtYWxpemUiLCJub3JtYWxpemVGbiIsImdlbmVyYXRlRm4iLCJub3JtYWxpemVkIiwibm90aWZ5U3Vic2NyaWJlcnNFeGNlcHQiLCJleGVtcHRlZE9ic2VydmFibGVTdWJzY3JpcHRpb24iLCJTeW1ib2wiLCJpdGVyYXRvciIsIml0ZXJhYmxlIiwiX3N1YnNjcmlwdGlvbnNIZWFkIiwiX3N1YnNjcmlwdGlvbnNUYWlsIiwiYXBwZW5kIiwiaXRlbVRvTm9kZSIsIm5ld0l0ZW0iLCJyZWZOb2RlIiwiT2JzZXJ2YWJsZUxpc3RSZWZJdGVtTm90Rm91bmRFcnJvciIsImRvbmUiLCJhY3Rpb24iLCJleGlzdGluZyIsInN1c3BlbmQiLCJPcGVyYXRpb25DYW5jZWxsZWRFcnJvciIsIm1lc3NhZ2UiLCJQYWdlIiwiUGFnZURpcmVjdGlvbiIsIkRpcmVjdG9yeVBhZ2UiLCJyZWdpc3RlclN1YlBhZ2UiLCJwYXRocyIsImxvYWRJbnN0YW5jZUFzeW5jIiwiY2FjaGUiLCJfc3ViUGFnZXMiLCJfYWxpYXNlcyIsImxvYWRTdWJQYWdlQXN5bmMiLCJwYXRoIiwicGF0aEluZGV4IiwicGFyYW1ldGVycyIsInBhZ2VEaXJlY3Rpb24iLCJzdWJQYWdlRW50cnkiLCJhbGlhcyIsInBhZ2UiLCJjYWNoZWRJbnN0YW5jZSIsInBhZ2VIdHRwU3RhdHVzQ29kZSIsImxvYWRBc3luYyIsIkh0dHBTdGF0dXNDb2RlIiwiUEFHRV9OVU1CRVJTX0tFWSIsIlNQQSIsIlNlbWFwaG9yZSIsInRhcmdldCIsImhvc3QiLCJsb2NhdGlvbiIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJocmVmIiwiaW52YWxpZGF0ZUxvY2F0aW9uQXN5bmMiLCJwcmV2ZW50RGVmYXVsdCIsInBhcmVudEVsZW1lbnQiLCJpbnN0YWxsVGl0bGVIYW5kbGVyIiwidGl0bGUiLCJfcGFnZU51bWJlcnMiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJwYXJzZUludCIsInN0YXRlIiwicGFnZU51bWJlciIsInJlcGxhY2VTdGF0ZSIsInNldEl0ZW0iLCJTdHJpbmciLCJvbGRDdXJyZW50UGFnZU51bWJlciIsIl9jdXJyZW50UGFnZU51bWJlciIsIk5vbmUiLCJGb3J3YXJkIiwiQmFja3dhcmQiLCJsb2NhdGlvbkNvbXBvbmVudHMiLCJnZXRMb2NhdGlvbkNvbXBvbmVudHMiLCJwYXRobmFtZSIsInNlYXJjaCIsImxvYWRMb2NhdGlvblNlbWFwaG9yZSIsIndhaXRPbmVBc3luYyIsInJlbGVhc2UiLCJuYXZpZ2F0ZUFzeW5jIiwicGF0aE5hbWUiLCJzdWJzdHIiLCJzcGxpdCIsIm1hcCIsImRlY29kZVVSSUNvbXBvbmVudCIsIlVSTFNlYXJjaFBhcmFtcyIsImNvbWJpbmVQYXRoIiwic3ViUGF0aCIsImpvaW4iLCJjYW5jZWxsYXRpb250b2tlbiIsImlzQ2FuY2VsbGF0aW9uUmVxdWVzdGVkIiwiUHJvbWlzZSIsInJlamVjdCIsInJlc29sdmUiLCJjdXJyZW50UXVldWVFbnRyeSIsImNhbmNlbGxhdGlvblRva2VuIiwiYWRkTGlzdGVuZXIiLCJjYW5jZWxsYXRpb25Ub2tlbkxpc3RlbmVyIiwicmVtb3ZlTGlzdGVuZXIiLCJvYmoiLCJUVVRPUklBTF9QQUdFX1JFTEFUSVZFX1BBVEgiLCJXZWJzaXRlIiwiVHV0b3JpYWxQYWdlIiwiY3VycmVudFBhZ2UiLCJPayIsInRoZW1lQ29sb3JzIiwiZ2V0VGhlbWVDb2xvcnMiLCJnZXRDb21wdXRlZFN0eWxlIiwiYm9keSIsImNvbG9yIiwiYmFja2dyb3VuZCIsImJhY2tncm91bmRDb2xvciIsImJsdWUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiaW5kaWdvIiwicHVycGxlIiwicGluayIsInJlZCIsIm9yYW5nZSIsInllbGxvdyIsImdyZWVuIiwidGVhbCIsImN5YW4iLCJkZWNvbXBvc2VEZXZpY2VXaWR0aCIsIndpZHRoIiwiRGV2aWNlV2lkdGgiLCJFeHRyYUxhcmdlIiwiTGFyZ2UiLCJNZWRpdW0iLCJTbWFsbCIsIkV4dHJhU21hbGwiLCJncmlkU3R5bGVzIiwiY29sIiwiY29udGFpbmVyIiwiY29udGFpbmVyV2l0aE5vUmlnaHRNYXJnaW4iLCJjb250YWluZXJGbHVpZCIsInJvdyIsInNlbGYiLCJNb25hY29FbnZpcm9ubWVudCIsImdldFdvcmtlclVybCIsIl9tb2R1bGVJZCIsImxhYmVsIiwic3BhIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOzs7O1FBSUE7UUFDQTtRQUNBLDBDQUEwQyw2QkFBNkIsMDBEQUEwMEQ7UUFDajVEOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTs7O1FBR0E7O1FBRUE7UUFDQSxpQ0FBaUM7O1FBRWpDO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQSxNQUFNO1FBQ047O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtR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LGFBQWEsbUJBQW1CLE1BQU0sV0FBVyxVQUFVLGdCQUFnQixNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsZUFBZSxNQUFNLFlBQVksYUFBYSxrQkFBa0IsTUFBTSxZQUFZLGFBQWEsa0JBQWtCLE1BQU0sV0FBVyxVQUFVLGVBQWUsTUFBTSxZQUFZLGFBQWEsa0JBQWtCLE1BQU0sWUFBWSxhQUFhLGtCQUFrQixNQUFNLFdBQVcsVUFBVSxlQUFlLE1BQU0sWUFBWSxhQUFhLGtCQUFrQixNQUFNLFlBQVksYUFBYSxrQkFBa0IsTUFBTSxXQUFXLFVBQVUsZUFBZSxNQUFNLFlBQVksYUFBYSxrQkFBa0IsTUFBTSxZQUFZLGFBQWEsa0JBQWtCLE1BQU0sV0FBVyxVQUFVLHFCQUFxQixNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsZUFBZSxNQUFNLFlBQVksYUFBYSxrQkFBa0IsTUFBTSxZQUFZLGFBQWEsa0JBQWtCLE1BQU0sV0FBVyxVQUFVLGVBQWUsTUFBTSxZQUFZLGFBQWEsa0JBQWtCLE1BQU0sWUFBWSxhQUFhLGtCQUFrQixNQUFNLFdBQVcsVUFBVSxlQUFlLE1BQU0sWUFBWSxhQUFhLGtCQUFrQixNQUFNLFlBQVksYUFBYSxrQkFBa0IsTUFBTSxXQUFXLFVBQVUsZUFBZSxNQUFNLFlBQVksYUFBYSxrQkFBa0IsTUFBTSxZQUFZLGFBQWEsa0JBQWtCLE1BQU0sV0FBVyxVQUFVLHFCQUFxQixNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsZUFBZSxNQUFNLFlBQVksYUFBYSxrQkFBa0IsTUFBTSxZQUFZLGFBQWEsa0JBQWtCLE1BQU0sV0FBVyxVQUFVLGVBQWUsTUFBTSxZQUFZLGFBQWEsa0JBQWtCLE1BQU0sWUFBWSxhQUFhLGtCQUFrQixNQUFNLFdBQVcsVUFBVSxlQUFlLE1BQU0sWUFBWSxhQUFhLGtCQUFrQixNQUFNLFlBQVksYUFBYSxrQkFBa0IsTUFBTSxXQUFXLFVBQVUsZUFBZSxNQUFNLFlBQVksYUFBYSxrQkFBa0IsTUFBTSxZQUFZLGFBQWEsa0JBQWtCLE1BQU0sV0FBVyxVQUFVLHFCQUFxQixN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QUFDakMsR0FBdkIsQ0FBMkIsS0FBM0IsRUFBa0MsQ0FBQ3FDLE9BQUQsRUFBdUIxQyxLQUF2QixLQUEwQztBQUN4RSxNQUFJQSxLQUFKLEVBQ0kwQyxPQUFPLENBQUMrRSxTQUFSLENBQWtCSSxHQUFsQixDQUFzQnlJLGtEQUFVLENBQUNLLEdBQWpDO0FBQ1AsQ0FIRCxFOzs7Ozs7Ozs7Ozs7QUNyRUE7QUFBQTtBQUFBO0FBQUE7Q0FJQTs7QUFDQUMsSUFBSSxDQUFDQyxpQkFBTCxHQUF5QjtBQUNyQkMsY0FBWSxFQUFFLFVBQVVDLFNBQVYsRUFBcUJDLEtBQXJCLEVBQTRCO0FBQ3RDLFFBQUlBLEtBQUssS0FBSyxNQUFkLEVBQXNCO0FBQ2xCLGFBQU8sd0JBQVA7QUFDSDs7QUFDRCxRQUFJQSxLQUFLLEtBQUssS0FBZCxFQUFxQjtBQUNqQixhQUFPLHVCQUFQO0FBQ0g7O0FBQ0QsUUFBSUEsS0FBSyxLQUFLLE1BQWQsRUFBc0I7QUFDbEIsYUFBTyx3QkFBUDtBQUNIOztBQUNELFFBQUlBLEtBQUssS0FBSyxZQUFWLElBQTBCQSxLQUFLLEtBQUssWUFBeEMsRUFBc0Q7QUFDbEQsYUFBTyxzQkFBUDtBQUNIOztBQUNELFdBQU8sMEJBQVA7QUFDSDtBQWZvQixDQUF6QjtBQWtCQSxJQUFJQyxHQUFHLEdBQUcsSUFBSXpDLGdEQUFKLEVBQVY7QUFFQXlDLEdBQUcsQ0FBQ3pGLHVCQUFKO0FBQ0F0SSxRQUFRLENBQUM2TCxJQUFULENBQWMxTCxXQUFkLENBQTBCNE4sR0FBRyxDQUFDNVAsSUFBOUIsRSxDQUtBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQSxRIiwiZmlsZSI6Im1haW4uMzM2OGY2YTQwZWIzNTg5OWQ5MzIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcblxuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHR9O1xuXG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuXG5cbiBcdC8vIHNjcmlwdCBwYXRoIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBqc29ucFNjcmlwdFNyYyhjaHVua0lkKSB7XG4gXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgKHt9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLlwiICsge1wiMFwiOlwiYzY2NWE1ZjZkMjFiZWY1YWNjOTdcIixcIjFcIjpcImI4NTdiNTA2M2RjNTVhMDUwMzk2XCIsXCIyXCI6XCJkMWM1ODQ0ZTQyMmE3MDY0MGIyYVwiLFwiM1wiOlwiZjZjMGVkNjk5YTVkMDZkODgwNWNcIixcIjRcIjpcIjdkMWRiY2E3YjM2ZWVjM2MwNjM5XCIsXCI1XCI6XCI4ZDE2NjAwNjU3ZjU3NTUzOWYyYVwiLFwiNlwiOlwiMmE4MjY0YTM1NjZlZmZmY2NmZGZcIixcIjdcIjpcIjQwNGRhNTBkMTZiMzA0ZjgyMTU2XCIsXCI4XCI6XCI1NWVkZDRiYTk1MjdkNmM2MjkyM1wiLFwiOVwiOlwiZmJjZjc3NDZiNWU1YzU5MmM5OGFcIixcIjEwXCI6XCI1N2EzM2E4ZjI0ZDNjZjdjNWIzOFwiLFwiMTFcIjpcImNhYTI4Mjc2NmFlY2QwZDcxNjVjXCIsXCIxMlwiOlwiZmYxZmMzNjM2NmRiYTE0NmIyYTVcIixcIjEzXCI6XCIzZWYzN2ZjNDVmZGE3OGJhMTRiNlwiLFwiMTRcIjpcIjA1MDI5OWJhODEyYzdhMGQ4MDk1XCIsXCIxNVwiOlwiNTc5OGQ0YWNmZmNmYzU1Y2VlODFcIixcIjE2XCI6XCJlNmY5ZGQxMWQyNDcyNzg1MmIyM1wiLFwiMTdcIjpcIjU4YTgyOWY0ODcyMTRjNmI5YmY0XCIsXCIxOFwiOlwiMjUyMzVjOTUyN2M1YjEzMTg4NDhcIixcIjE5XCI6XCIwMDQ2Zjk4ZDFkNWZlY2QwY2NhZFwiLFwiMjBcIjpcIjBjMTk0YmJjMDU1ZGFiZTc2MjI5XCIsXCIyMVwiOlwiMGFiZDIzNjg2ZTA0YjMzNWEyNTFcIixcIjIyXCI6XCIzYTFmMjYxMTdiMDQ2MTRmZTE2MFwiLFwiMjNcIjpcImQyYzliNzk1Mjk1NmE2ZTZiMmEyXCIsXCIyNFwiOlwiNTAxMWE3YWFlN2RhOGViNWI3OWFcIixcIjI1XCI6XCI4NjllYjllNTE0MmYyNjg2Y2IzNVwiLFwiMjZcIjpcIjYwNTYxMDk4YjgzN2VkMDM1NmVkXCIsXCIyN1wiOlwiYTExZDE4MjVmOTE2ZGYyMTMwZTVcIixcIjI4XCI6XCI4ZTg3NTgzMGU0Y2I3NTJiMmZhYlwiLFwiMjlcIjpcIjkwMjA5ZWYwZDA2MDYwYTUzZTNhXCIsXCIzMFwiOlwiN2FiMmEwMTQ4ZjZkYWE0NzJhYjRcIixcIjMxXCI6XCJhMmMwOWMzMTgyZDY5YTE5NTQzOFwiLFwiMzJcIjpcIjU2NjNkNzdhOThlYzVhNjIwNDJhXCIsXCIzM1wiOlwiMGQ5NDNhMzA5MWNjYmI2MDhkYThcIixcIjM0XCI6XCI4MGVkZjkzNWI2N2UxOGRlNDhhNFwiLFwiMzVcIjpcIjZiZTI0OGM2YWE3NWFkMTAzZDRlXCIsXCIzNlwiOlwiMWZhNjE5ZjM5YjBkOTNiODM3YjhcIixcIjM3XCI6XCI2NzhjYTJmM2MwMTYyOTg0NTc4M1wiLFwiMzhcIjpcIjEyMWM2YzIyODMwYjg2ZmFkYWE4XCIsXCIzOVwiOlwiYTE2NjY5NzE5NDFmNmNlOWVlNjZcIixcIjQwXCI6XCI5OWNhNzI4MGFmMDQ4MmRkODkzZFwiLFwiNDFcIjpcImI2YTY1YmUzZWVmMWI0Nzk5NTU3XCIsXCI0MlwiOlwiMDM4YmYwMzM2ZGUyNDA0ZWRhYzdcIixcIjQzXCI6XCI4ZGFiMmU5NWQ2NTI5NGQ1NzZiOVwiLFwiNDRcIjpcIjFhYmE5M2QzYzVjZjM5MTI4MDZmXCIsXCI0NVwiOlwiYjJkZjEwZjAyZDZmZDZhYjVhZWVcIixcIjQ2XCI6XCI3YzliZjA1YmUxMjc1Y2JhZTZhOVwiLFwiNDdcIjpcIjJlZWQyM2I4MTJmZDE2NWQ4NzkyXCIsXCI0OFwiOlwiM2NmZjE3MTJkOTJkYWM1YzhlMzZcIixcIjQ5XCI6XCJkZThmNTI5YTM0NTkxNTQ4YzEwZlwiLFwiNTBcIjpcImZjYzE4ZDg4OWIyODNiNjAzOWU2XCIsXCI1MVwiOlwiNGJkMzQwYTZkNWExNzhhOTQ2MDJcIixcIjUyXCI6XCJjNDliYmQ1ZTRiOGFiMTZmZjIyZlwiLFwiNTNcIjpcIjlhMzc1MjRhMjRiMWI3ODQ2MWY4XCIsXCI1NFwiOlwiMThkNDYzMmZkMGI1YzMyNDZmY2RcIixcIjU1XCI6XCJhZTNkZjE0MGRjYmU1ZWE3YzhlZFwiLFwiNTZcIjpcIjRlZTU3Mjk2ZTZjZGU5MDYwZDA0XCIsXCI1N1wiOlwiYjkwOWEyYTQ0MDQxNGM4Nzc1NGRcIixcIjU4XCI6XCJjNzNlMmRlZGFmZjRkZjVkMjg2Y1wiLFwiNTlcIjpcImM0OTljMjQ4ZWMxNGY5NGRmMGVkXCIsXCI2MFwiOlwiNzUyYTU4MGU3ZGUxZDRjNWEwZjFcIixcIjYxXCI6XCJlZGQ1YzhmNmNiYjI5ZTA4NDFjMlwiLFwiNjJcIjpcImUzNTJlODUzNjBjMjlkMGI4M2JlXCIsXCI2M1wiOlwiZTI2NzAzNDllNWY4ZTNjOGU0NjRcIixcIjY0XCI6XCIwNTVlMTdkZjA3ZDVjMjY3NzJlZFwiLFwiNjVcIjpcImNjN2M4ZGI1ZDZjMDhmODFjMjU5XCIsXCI2NlwiOlwiZmY4ZTY4YTA2N2UyZGEzNGIyMzhcIn1bY2h1bmtJZF0gKyBcIi5qc1wiXG4gXHR9XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cbiBcdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSB7IC8vIDAgbWVhbnMgXCJhbHJlYWR5IGluc3RhbGxlZFwiLlxuXG4gXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdKTtcbiBcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuIFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF07XG4gXHRcdFx0XHR9KTtcbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cbiBcdFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcbiBcdFx0XHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiBcdFx0XHRcdHZhciBvblNjcmlwdENvbXBsZXRlO1xuXG4gXHRcdFx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG4gXHRcdFx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcbiBcdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG4gXHRcdFx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHNjcmlwdC5zcmMgPSBqc29ucFNjcmlwdFNyYyhjaHVua0lkKTtcblxuIFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuIFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG4gXHRcdFx0XHRvblNjcmlwdENvbXBsZXRlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gXHRcdFx0XHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cbiBcdFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcbiBcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuIFx0XHRcdFx0XHR2YXIgY2h1bmsgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdFx0XHRcdGlmKGNodW5rICE9PSAwKSB7XG4gXHRcdFx0XHRcdFx0aWYoY2h1bmspIHtcbiBcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG4gXHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcbiBcdFx0XHRcdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuIFx0XHRcdFx0XHRcdFx0Y2h1bmtbMV0oZXJyb3IpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH07XG4gXHRcdFx0XHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiBcdFx0XHRcdFx0b25TY3JpcHRDb21wbGV0ZSh7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSk7XG4gXHRcdFx0XHR9LCAxMjAwMDApO1xuIFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZTtcbiBcdFx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIG9uIGVycm9yIGZ1bmN0aW9uIGZvciBhc3luYyBsb2FkaW5nXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgdGhyb3cgZXJyOyB9O1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHNlbGZbXCJ3ZWJwYWNrSnNvbnBcIl0gPSBzZWxmW1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHN4XCIpO1xuIiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCIuL09ic2VydmFibGVcIjtcbmltcG9ydCB7IE9ic2VydmFibGVTdWJzY3JpcHRpb24gfSBmcm9tIFwiLi9PYnNlcnZhYmxlU3Vic2NyaXB0aW9uXCI7XG5cbmxldCBiaW46IENvbXB1dGVkT2JzZXJ2YWJsZTxhbnk+W10gPSBbXSwgYmluTGVuZ3RoID0gMDtcblxuZXhwb3J0IHZhciBldmFsdWF0aW9uU3RhY2s6IENvbXB1dGVkT2JzZXJ2YWJsZTxhbnk+W10gPSBbXTtcblxuZXhwb3J0IGNsYXNzIENvbXB1dGVkT2JzZXJ2YWJsZTxUPiBpbXBsZW1lbnRzIE9ic2VydmFibGU8VD4ge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucmVmcmVzaCA9IHRoaXMucmVmcmVzaC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRpc3Bvc2UgPSB0aGlzLmRpc3Bvc2UuYmluZCh0aGlzKTtcbiAgICAgICAgKHRoaXMuX3N1YnNjcmlwdGlvbkhlYWQubmV4dCA9IHRoaXMuX3N1YnNjcmlwdGlvblRhaWwpLnByZXZpb3VzID0gdGhpcy5fc3Vic2NyaXB0aW9uSGVhZDtcbiAgICB9XG5cbiAgICB3cmFwcGVkVmFsdWU6IFQ7XG5cbiAgICBwcml2YXRlIF9zdWJzY3JpcHRpb25IZWFkID0gT2JzZXJ2YWJsZVN1YnNjcmlwdGlvbi5jcmVhdGU8KG5ld1ZhbHVlOiBULCBvbGRWYWx1ZTogVCwgZXJyb3I/KSA9PiBhbnk+KCk7XG4gICAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uVGFpbCA9IE9ic2VydmFibGVTdWJzY3JpcHRpb24uY3JlYXRlPChuZXdWYWx1ZTogVCwgb2xkVmFsdWU6IFQsIGVycm9yPykgPT4gYW55PigpO1xuXG4gICAgZXhwcmVzc2lvbjogKCkgPT4gVDtcbiAgICBlcnJvcjtcblxuICAgIG9ic2VydmFibGVzOiBNYXA8YW55LCBPYnNlcnZhYmxlU3Vic2NyaXB0aW9uPChuZXdWYWx1ZTogVCwgb2xkVmFsdWU6IFQsIGVycm9yPykgPT4gYW55Pj4gPSBuZXcgTWFwKCk7XG5cbiAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgIGlmIChldmFsdWF0aW9uU3RhY2subGVuZ3RoKSB7XG4gICAgICAgICAgICBsZXQgY28gPSBldmFsdWF0aW9uU3RhY2tbZXZhbHVhdGlvblN0YWNrLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgaWYgKCFjby5vYnNlcnZhYmxlcy5oYXModGhpcykpXG4gICAgICAgICAgICAgICAgY28ub2JzZXJ2YWJsZXMuc2V0KHRoaXMsIHRoaXMuc3Vic2NyaWJlU25lYWtJbkxpbmUoY28ucmVmcmVzaCkpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBlcnJvciA9IHRoaXMuZXJyb3I7XG4gICAgICAgIGlmIChlcnJvcilcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICByZXR1cm4gdGhpcy53cmFwcGVkVmFsdWU7XG4gICAgfVxuXG4gICAgcGVlaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMud3JhcHBlZFZhbHVlO1xuICAgIH1cblxuICAgIHN1YnNjcmliZShjYWxsYmFjazogKG5ld1ZhbHVlOiBULCBvbGRWYWx1ZTogVCwgZXJyb3I/KSA9PiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGVTdWJzY3JpcHRpb24uY3JlYXRlQW5kUHJlcGVuZFRvVGFpbCh0aGlzLl9zdWJzY3JpcHRpb25UYWlsLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlSW52b2tlKGNhbGxiYWNrOiAobmV3VmFsdWU6IFQsIG9sZFZhbHVlOiBULCBlcnJvcj8pID0+IGFueSkge1xuICAgICAgICBjYWxsYmFjayh0aGlzLndyYXBwZWRWYWx1ZSwgdW5kZWZpbmVkLCB0aGlzLmVycm9yKTtcbiAgICAgICAgbGV0IHN1YnNjcmlwdGlvbiA9IE9ic2VydmFibGVTdWJzY3JpcHRpb24uY3JlYXRlQW5kUHJlcGVuZFRvVGFpbCh0aGlzLl9zdWJzY3JpcHRpb25UYWlsLCBjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlU25lYWtJbkxpbmUoY2FsbGJhY2s6IChuZXdWYWx1ZTogVCwgb2xkVmFsdWU6IFQsIGVycm9yPykgPT4gYW55KSB7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlU3Vic2NyaXB0aW9uLmNyZWF0ZUFuZEFwcGVuZFRvSGVhZCh0aGlzLl9zdWJzY3JpcHRpb25IZWFkLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlSW52b2tlU25lYWtJbkxpbmUoY2FsbGJhY2s6IChuZXdWYWx1ZTogVCwgb2xkVmFsdWU6IFQsIGVycm9yPykgPT4gYW55KSB7XG4gICAgICAgIGNhbGxiYWNrKHRoaXMud3JhcHBlZFZhbHVlLCB1bmRlZmluZWQsIHRoaXMuZXJyb3IpO1xuICAgICAgICBsZXQgc3Vic2NyaXB0aW9uID0gT2JzZXJ2YWJsZVN1YnNjcmlwdGlvbi5jcmVhdGVBbmRBcHBlbmRUb0hlYWQodGhpcy5fc3Vic2NyaXB0aW9uSGVhZCwgY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICAgIH1cblxuICAgIHByaXZhdGUgbm90aWZ5U3Vic2NyaWJlcnMobmV3VmFsdWU6IFQsIG9sZFZhbHVlOiBULCBlcnJvcj8pIHtcbiAgICAgICAgZm9yIChsZXQgbm9kZSA9IHRoaXMuX3N1YnNjcmlwdGlvbkhlYWQubmV4dDsgbm9kZSAhPT0gdGhpcy5fc3Vic2NyaXB0aW9uVGFpbDspIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50Tm9kZSA9IG5vZGU7XG4gICAgICAgICAgICBub2RlID0gbm9kZS5uZXh0O1xuICAgICAgICAgICAgY3VycmVudE5vZGUuY2FsbGJhY2sobmV3VmFsdWUsIG9sZFZhbHVlLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbnZhbGlkYXRlKCkge1xuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLndyYXBwZWRWYWx1ZTtcbiAgICAgICAgdGhpcy5ub3RpZnlTdWJzY3JpYmVycyh2YWx1ZSwgdmFsdWUpO1xuICAgIH1cblxuICAgIGNoYWluPFU+KGV4cHJlc3Npb246IChpbnB1dDogQ29tcHV0ZWRPYnNlcnZhYmxlPFQ+KSA9PiBVKSB7XG5cbiAgICAgICAgbGV0IHJlc3VsdCA9IGNvKCgpID0+IGV4cHJlc3Npb24odGhpcykpLCBkaXNwb3NlID0gcmVzdWx0LmRpc3Bvc2U7XG5cbiAgICAgICAgcmVzdWx0LmRpc3Bvc2UgPSAoKSA9PiB7XG4gICAgICAgICAgICAocmVzdWx0LmRpc3Bvc2UgPSBkaXNwb3NlKSgpO1xuICAgICAgICAgICAgdGhpcy5kaXNwb3NlKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBkaXNwb3NlKCkge1xuICAgICAgICB0aGlzLndyYXBwZWRWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5leHByZXNzaW9uID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmVycm9yID0gdW5kZWZpbmVkO1xuICAgICAgICBsZXQgb2JzZXJ2YWJsZXMgPSB0aGlzLm9ic2VydmFibGVzO1xuICAgICAgICBvYnNlcnZhYmxlcy5mb3JFYWNoKHMgPT4geyBzLmRpc3Bvc2UoKTsgfSk7XG4gICAgICAgIG9ic2VydmFibGVzLmNsZWFyKCk7XG4gICAgICAgIGZvciAobGV0IG5vZGUgPSB0aGlzLl9zdWJzY3JpcHRpb25IZWFkLm5leHQ7IG5vZGUgIT09IHRoaXMuX3N1YnNjcmlwdGlvblRhaWw7KSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudE5vZGUgPSBub2RlO1xuICAgICAgICAgICAgbm9kZSA9IG5vZGUubmV4dDtcbiAgICAgICAgICAgIGN1cnJlbnROb2RlLnJlY3ljbGUoKTtcbiAgICAgICAgfVxuICAgICAgICAodGhpcy5fc3Vic2NyaXB0aW9uSGVhZC5uZXh0ID0gdGhpcy5fc3Vic2NyaXB0aW9uVGFpbCkucHJldmlvdXMgPSB0aGlzLl9zdWJzY3JpcHRpb25IZWFkO1xuICAgICAgICBpZiAoYmluLmxlbmd0aCA9PT0gYmluTGVuZ3RoKVxuICAgICAgICAgICAgYmluLnB1c2godGhpcyk7XG4gICAgICAgIGVsc2UgYmluW2Jpbkxlbmd0aF0gPSB0aGlzO1xuICAgICAgICArK2Jpbkxlbmd0aDtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZXZhbHVhdGlvblN0YWNrLnB1c2godGhpcyk7XG4gICAgICAgICAgICB0cnkgeyB2YXIgcmVzdWx0ID0gdGhpcy5leHByZXNzaW9uKCk7IH1cbiAgICAgICAgICAgIGZpbmFsbHkgeyBldmFsdWF0aW9uU3RhY2sucG9wKCk7IH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkgeyB0aGlzLnNldFZhbHVlQW5kRXJyb3JBbmROb3RpZnlTdWJzY3JpYmVycyh1bmRlZmluZWQsIGUpOyByZXR1cm47IH1cbiAgICAgICAgdGhpcy5zZXRWYWx1ZUFuZEVycm9yQW5kTm90aWZ5U3Vic2NyaWJlcnMocmVzdWx0LCBudWxsKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldFZhbHVlQW5kRXJyb3JBbmROb3RpZnlTdWJzY3JpYmVycyh2YWx1ZTogVCwgZXJyb3IpIHtcbiAgICAgICAgbGV0IG9sZFZhbHVlID0gdGhpcy53cmFwcGVkVmFsdWUsIG9sZEVycm9yID0gdGhpcy5lcnJvcjtcbiAgICAgICAgaWYgKHZhbHVlICE9PSBvbGRWYWx1ZSB8fCBlcnJvciAhPT0gb2xkRXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMud3JhcHBlZFZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLmVycm9yID0gZXJyb3I7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVN1YnNjcmliZXJzKHZhbHVlLCBvbGRWYWx1ZSwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVmcmVzaCgpIHtcbiAgICAgICAgbGV0IG9ic2VydmFibGVzID0gdGhpcy5vYnNlcnZhYmxlcztcbiAgICAgICAgb2JzZXJ2YWJsZXMuZm9yRWFjaChzID0+IHsgcy5kaXNwb3NlKCk7IH0pO1xuICAgICAgICBvYnNlcnZhYmxlcy5jbGVhcigpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbzxUPihleHByZXNzaW9uOiAoKSA9PiBULCBldmFsdWF0ZUF0T25jZSA9IHRydWUpOiBDb21wdXRlZE9ic2VydmFibGU8VD4ge1xuICAgIGlmIChiaW5MZW5ndGgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IDxDb21wdXRlZE9ic2VydmFibGU8VD4+YmluWy0tYmluTGVuZ3RoXTtcbiAgICAgICAgYmluW2Jpbkxlbmd0aF0gPSBudWxsO1xuICAgIH1cbiAgICBlbHNlIHZhciByZXN1bHQgPSBuZXcgQ29tcHV0ZWRPYnNlcnZhYmxlPFQ+KCk7XG4gICAgcmVzdWx0LmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuICAgIGlmIChldmFsdWF0ZUF0T25jZSlcbiAgICAgICAgcmVzdWx0LmluaXRpYWxpemUoKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufSIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiLi9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBjbywgQ29tcHV0ZWRPYnNlcnZhYmxlIH0gZnJvbSBcIi4vQ29tcHV0ZWRPYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBNb2RpZmlhYmxlT2JzZXJ2YWJsZSB9IGZyb20gXCIuL01vZGlmaWFibGVPYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBpc09ic2VydmFibGUgfSBmcm9tIFwiLi9pc09ic2VydmFibGVcIjtcbmltcG9ydCB7IE9ic2VydmFibGVMaXN0LCBPYnNlcnZhYmxlTGlzdE1vZGlmaWNhdGlvblR5cGUgfSBmcm9tIFwiLi9PYnNlcnZhYmxlTGlzdFwiO1xuXG5leHBvcnQgdmFyIGdsb2JhbFByb3BlcnR5SGFuZGxlcnMgPSBuZXcgTWFwPHN0cmluZywgKG5vZGU6IE5vZGUsIHZhbHVlLCBwcm9wZXJ0aWVzOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSkgPT4gYW55PigpO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ29tcG9uZW50PFROb2RlIGV4dGVuZHMgTm9kZT4ge1xuXG4gICAgbm9kZTogVE5vZGU7XG5cbiAgICBub2RlRGVzdHJveWVkKCkge1xuICAgICAgICBkZWxldGUgdGhpcy5ub2RlO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5vZGUoZWxlbWVudDogc3RyaW5nIHwgKCgpID0+IGFueSksIHByb3BlcnRpZXM6IHsgW25hbWU6IHN0cmluZ106IGFueSB9LCAuLi5jaGlsZHJlbikge1xuICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gXCJzdHJpbmdcIilcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUhUTUxFbGVtZW50RnJvbVRhZ05hbWUoZWxlbWVudCwgcHJvcGVydGllcywgY2hpbGRyZW4pO1xuICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICByZXR1cm4gY3JlYXRlTm9kZUZyb21GdW5jdGlvbihlbGVtZW50LCBwcm9wZXJ0aWVzLCBjaGlsZHJlbik7XG4gICAgaWYgKGVsZW1lbnQgPT09IG51bGwpXG4gICAgICAgIHJldHVybiBjcmVhdGVEb2N1bWVudEZyYWdtZW50KGNoaWxkcmVuKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBjcmVhdGUgZWxlbWVudCBvZiB0eXBlICcke3R5cGVvZiBlbGVtZW50fSdgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSFRNTEVsZW1lbnRGcm9tVGFnTmFtZSh0YWdOYW1lOiBzdHJpbmcsIHByb3BlcnRpZXM6IHsgW25hbWU6IHN0cmluZ106IGFueSB9LCBjaGlsZHJlbjogYW55W10pIHtcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG4gICAgZm9yIChsZXQgYyBvZiBjaGlsZHJlbilcbiAgICAgICAgYXBwZW5kQ2hpbGQoZWxlbWVudCwgYyk7XG4gICAgaWYgKHByb3BlcnRpZXMpXG4gICAgICAgIGJpbmRQcm9wZXJ0aWVzKGVsZW1lbnQsIHByb3BlcnRpZXMpO1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBhcHBlbmRDaGlsZChwYXJlbnROb2RlOiBOb2RlLCBjaGlsZCkge1xuICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIENvbXBvbmVudCkge1xuICAgICAgICBhcHBlbmRDaGlsZChwYXJlbnROb2RlLCBjaGlsZC5ub2RlKTtcbiAgICAgICAgbGV0IGNvbXBvbmVudERpc3Bvc2VOb2RlID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudChcIiBFbGFzdGljOiBkaXNwb3NlIGNvbXBvbmVudCBcIik7XG4gICAgICAgIGFwcGVuZERpc3Bvc2VDYWxsYmFja1RvTm9kZShjb21wb25lbnREaXNwb3NlTm9kZSwgY2hpbGQubm9kZURlc3Ryb3llZC5iaW5kKGNoaWxkKSk7XG4gICAgICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoY29tcG9uZW50RGlzcG9zZU5vZGUpO1xuICAgIH1cbiAgICBlbHNlIGlmIChjaGlsZCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IGNoaWxkIGluc3RhbmNlb2YgU1ZHRWxlbWVudCB8fCBjaGlsZCBpbnN0YW5jZW9mIENvbW1lbnQgfHwgY2hpbGQgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KVxuICAgICAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICBlbHNlIGlmIChpc09ic2VydmFibGUoY2hpbGQpKVxuICAgICAgICBhcHBlbmRPYnNlcnZhYmxlQ2hpbGQocGFyZW50Tm9kZSwgY2hpbGQpO1xuICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZCA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBhcHBlbmRPYnNlcnZhYmxlQ2hpbGQocGFyZW50Tm9kZSwgY28oY2hpbGQpLCBjaGlsZCk7XG4gICAgZWxzZSBpZiAoY2hpbGQgaW5zdGFuY2VvZiBPYnNlcnZhYmxlTGlzdClcbiAgICAgICAgYXBwZW5kT2JzZXJ2YWJsZUxpc3RDaGlsZChwYXJlbnROb2RlLCBjaGlsZCk7XG4gICAgZWxzZSBpZiAoY2hpbGQgaW5zdGFuY2VvZiBBcnJheSlcbiAgICAgICAgZm9yIChsZXQgYyBvZiBjaGlsZClcbiAgICAgICAgICAgIGFwcGVuZENoaWxkKHBhcmVudE5vZGUsIGMpO1xuICAgIGVsc2UgaWYgKGNoaWxkICE9PSBudWxsICYmIGNoaWxkICE9PSB1bmRlZmluZWQpXG4gICAgICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2hpbGQpKTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kT2JzZXJ2YWJsZUNoaWxkKHBhcmVudE5vZGU6IE5vZGUsIG9ic2VydmFibGU6IE9ic2VydmFibGU8YW55Piwgb2JzZXJ2YWJsZUV4cHJlc3Npb24/OiAoKSA9PiBhbnkpIHtcblxuICAgIC8vIFRPRE86IFJldXNlIHRleHQgbm9kZVxuXG4gICAgbGV0IHZhbHVlID0gb2JzZXJ2YWJsZS5wZWVrKCksIGhlYWQgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KFwiIEVsYXN0aWM6IGhlYWQgXCIpLCBkb2N1bWVudEZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLCB0YWlsID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudChcIiBFbGFzdGljOiB0YWlsIFwiKTtcblxuICAgIGRvY3VtZW50RnJhZ21lbnQuYXBwZW5kQ2hpbGQoaGVhZCk7XG4gICAgYXBwZW5kQ2hpbGQoZG9jdW1lbnRGcmFnbWVudCwgdmFsdWUpO1xuICAgIGRvY3VtZW50RnJhZ21lbnQuYXBwZW5kQ2hpbGQodGFpbCk7XG4gICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudEZyYWdtZW50KTtcblxuICAgIGxldCBzdWJzY3JpcHRpb24gPSBvYnNlcnZhYmxlLnN1YnNjcmliZVNuZWFrSW5MaW5lKG4gPT4ge1xuICAgICAgICBhcHBlbmRDaGlsZChkb2N1bWVudEZyYWdtZW50LCBuKTtcbiAgICAgICAgZm9yIChsZXQgY2hpbGQgPSBoZWFkLm5leHRTaWJsaW5nOyBjaGlsZCAhPT0gdGFpbDspIHtcbiAgICAgICAgICAgIGxldCBsYXN0TWFuYWdlZENoaWxkOiBDaGlsZE5vZGUgPSBjaGlsZFtMQVNUX01BTkFHRURfQ0hJTERfS0VZXTtcbiAgICAgICAgICAgIGlmIChsYXN0TWFuYWdlZENoaWxkKSB7XG4gICAgICAgICAgICAgICAgbGV0IG4gPSBjaGlsZDtcbiAgICAgICAgICAgICAgICBjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIG4ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgd2hpbGUgKG4gIT09IGxhc3RNYW5hZ2VkQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgbiA9IGNoaWxkO1xuICAgICAgICAgICAgICAgICAgICBjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICBuLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRpc3Bvc2VOb2RlKGNoaWxkKTtcbiAgICAgICAgICAgICAgICBsZXQgbiA9IGNoaWxkO1xuICAgICAgICAgICAgICAgIGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgbi5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBoZWFkLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGRvY3VtZW50RnJhZ21lbnQsIHRhaWwpO1xuICAgIH0pO1xuXG4gICAgaWYgKG9ic2VydmFibGVFeHByZXNzaW9uKSB7XG5cbiAgICAgICAgaWYgKChvYnNlcnZhYmxlRXhwcmVzc2lvbiBhcyB1bmtub3duIGFzIE5vcm1hbGl6ZWRGdW5jdGlvbikuZGlzcG9zZSlcbiAgICAgICAgICAgIGFwcGVuZERpc3Bvc2VDYWxsYmFja1RvTm9kZSh0YWlsLCAob2JzZXJ2YWJsZUV4cHJlc3Npb24gYXMgdW5rbm93biBhcyBOb3JtYWxpemVkRnVuY3Rpb24pLmRpc3Bvc2UpO1xuXG4gICAgICAgIGFwcGVuZERpc3Bvc2VDYWxsYmFja1RvTm9kZSh0YWlsLCBvYnNlcnZhYmxlLmRpc3Bvc2UpO1xuICAgIH1cblxuICAgIGVsc2UgYXBwZW5kRGlzcG9zZUNhbGxiYWNrVG9Ob2RlKHRhaWwsIHN1YnNjcmlwdGlvbi5kaXNwb3NlKTtcbn1cblxuY29uc3QgRElTUE9TRV9DQUxMQkFDS1NfS0VZID0gXCJfX2Rpc3Bvc2VDYWxsYmFja3NcIjtcbmNvbnN0IExBU1RfTUFOQUdFRF9DSElMRF9LRVkgPSBcIl9fbGFzdE1hbmFnZWRDaGlsZFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kRGlzcG9zZUNhbGxiYWNrVG9Ob2RlKG5vZGU6IE5vZGUsIGRpc3Bvc2U6ICgpID0+IGFueSkge1xuICAgIGxldCBkaXNwb3NlQ2FsbGJhY2tzOiAoKCkgPT4gYW55KVtdID0gbm9kZVtESVNQT1NFX0NBTExCQUNLU19LRVldO1xuICAgIGlmIChkaXNwb3NlQ2FsbGJhY2tzKVxuICAgICAgICBkaXNwb3NlQ2FsbGJhY2tzLnB1c2goZGlzcG9zZSk7XG4gICAgZWxzZSBub2RlW0RJU1BPU0VfQ0FMTEJBQ0tTX0tFWV0gPSBbZGlzcG9zZV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwb3NlTm9kZShub2RlOiBOb2RlKSB7XG4gICAgaWYgKG5vZGUuY2hpbGROb2Rlcy5sZW5ndGgpIHsgLy8gRGVwdGggZmlyc3QsIHBvc3Qtb3JkZXIgdHJlZSB0cmF2ZXJzYWxcbiAgICAgICAgZm9yIChsZXQgY2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7IDspIHtcbiAgICAgICAgICAgIGxldCBsYXN0TWFuYWdlZENoaWxkOiBDaGlsZE5vZGUgPSBjaGlsZFtMQVNUX01BTkFHRURfQ0hJTERfS0VZXTtcbiAgICAgICAgICAgIGlmIChsYXN0TWFuYWdlZENoaWxkKSB7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGNoaWxkICE9PSBsYXN0TWFuYWdlZENoaWxkKVxuICAgICAgICAgICAgICAgICAgICBjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBkaXNwb3NlTm9kZShjaGlsZCk7XG4gICAgICAgICAgICBpZiAoIShjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nKSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgZGlzcG9zZUNhbGxiYWNrczogKCgpID0+IGFueSlbXSA9IG5vZGVbRElTUE9TRV9DQUxMQkFDS1NfS0VZXTtcbiAgICBpZiAoZGlzcG9zZUNhbGxiYWNrcykge1xuICAgICAgICBkZWxldGUgbm9kZVtESVNQT1NFX0NBTExCQUNLU19LRVldO1xuICAgICAgICBmb3IgKGxldCBpID0gZGlzcG9zZUNhbGxiYWNrcy5sZW5ndGg7IDAgPCBpOylcbiAgICAgICAgICAgIGRpc3Bvc2VDYWxsYmFja3NbLS1pXSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gYXBwZW5kT2JzZXJ2YWJsZUxpc3RDaGlsZChwYXJlbnROb2RlOiBOb2RlLCBvYnNlcnZhYmxlTGlzdDogT2JzZXJ2YWJsZUxpc3Q8YW55Pikge1xuXG4gICAgbGV0IGRvY3VtZW50RnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksIGl0ZW1zID0gbmV3IE1hcDxhbnksIExpc3RJdGVtPigpO1xuXG4gICAgbGV0IG4gPSBudWxsO1xuICAgIGZvciAobGV0IG5vZGUgPSBvYnNlcnZhYmxlTGlzdC5oZWFkLm5leHQ7IG5vZGUgIT09IG9ic2VydmFibGVMaXN0LnRhaWw7IG5vZGUgPSBub2RlLm5leHQpIHtcbiAgICAgICAgYXBwZW5kQ2hpbGQoZG9jdW1lbnRGcmFnbWVudCwgbm9kZS5pdGVtKTtcbiAgICAgICAgbGV0IGl0ZW06IExpc3RJdGVtID0geyBmaXJzdENoaWxkOiBuID8gbi5uZXh0U2libGluZyA6IGRvY3VtZW50RnJhZ21lbnQuZmlyc3RDaGlsZCwgbGFzdENoaWxkOiAobiA9IGRvY3VtZW50RnJhZ21lbnQubGFzdENoaWxkKSB9O1xuICAgICAgICBpdGVtcy5zZXQobm9kZS5pdGVtLCBpdGVtKTtcbiAgICB9XG4gICAgbGV0IG9ic2VydmFibGVMaXN0RGlzcG9zZU5vZGUgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KFwiIEVsYXN0aWM6IGRpc3Bvc2UgbGlzdCBcIik7XG4gICAgZG9jdW1lbnRGcmFnbWVudC5hcHBlbmRDaGlsZChvYnNlcnZhYmxlTGlzdERpc3Bvc2VOb2RlKTtcbiAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKGRvY3VtZW50RnJhZ21lbnQpO1xuXG4gICAgb2JzZXJ2YWJsZUxpc3Quc3Vic2NyaWJlU25lYWtJbkxpbmUobW9kaWZpY2F0aW9ucyA9PiB7XG4gICAgICAgIGZvciAobGV0IG0gb2YgbW9kaWZpY2F0aW9ucykge1xuICAgICAgICAgICAgc3dpdGNoIChtLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIE9ic2VydmFibGVMaXN0TW9kaWZpY2F0aW9uVHlwZS5BcHBlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgYXBwZW5kQ2hpbGQoZG9jdW1lbnRGcmFnbWVudCwgbS5pdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW06IExpc3RJdGVtID0geyBmaXJzdENoaWxkOiBkb2N1bWVudEZyYWdtZW50LmZpcnN0Q2hpbGQsIGxhc3RDaGlsZDogZG9jdW1lbnRGcmFnbWVudC5sYXN0Q2hpbGQgfTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMuc2V0KG0uaXRlbSwgaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGRvY3VtZW50RnJhZ21lbnQsIG9ic2VydmFibGVMaXN0RGlzcG9zZU5vZGUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBPYnNlcnZhYmxlTGlzdE1vZGlmaWNhdGlvblR5cGUuSW5zZXJ0QmVmb3JlOiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtID0gaXRlbXMuZ2V0KG0uaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBub2RlID0gaXRlbS5maXJzdENoaWxkOyA7KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUgPT09IGl0ZW0ubGFzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50RnJhZ21lbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG4gPSBub2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlID0gbm9kZS5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRGcmFnbWVudC5hcHBlbmRDaGlsZChuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBlbmRDaGlsZChkb2N1bWVudEZyYWdtZW50LCBtLml0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSA9IHsgZmlyc3RDaGlsZDogZG9jdW1lbnRGcmFnbWVudC5maXJzdENoaWxkLCBsYXN0Q2hpbGQ6IGRvY3VtZW50RnJhZ21lbnQubGFzdENoaWxkIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy5zZXQobS5pdGVtLCBpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShkb2N1bWVudEZyYWdtZW50LCBtLnJlZkl0ZW0gPyBpdGVtcy5nZXQobS5yZWZJdGVtKS5maXJzdENoaWxkIDogb2JzZXJ2YWJsZUxpc3REaXNwb3NlTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIE9ic2VydmFibGVMaXN0TW9kaWZpY2F0aW9uVHlwZS5SZW1vdmU6IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBpdGVtcy5nZXQobS5pdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMuZGVsZXRlKG0uaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IG5vZGUgPSBpdGVtLmZpcnN0Q2hpbGQ7IDspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3Bvc2VOb2RlKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUgPT09IGl0ZW0ubGFzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuID0gbm9kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUgPSBub2RlLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgbi5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGFwcGVuZERpc3Bvc2VDYWxsYmFja1RvTm9kZShvYnNlcnZhYmxlTGlzdERpc3Bvc2VOb2RlLCBvYnNlcnZhYmxlTGlzdC5kaXNwb3NlKTtcbn1cblxuaW50ZXJmYWNlIExpc3RJdGVtIHtcblxuICAgIGZpcnN0Q2hpbGQ6IENoaWxkTm9kZTtcbiAgICBsYXN0Q2hpbGQ6IENoaWxkTm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJpbmRQcm9wZXJ0aWVzKG5vZGU6IEVsZW1lbnQsIHByb3BlcnRpZXM6IHsgW25hbWU6IHN0cmluZ106IGFueSB9KSB7XG4gICAgZm9yIChsZXQgbiBpbiBwcm9wZXJ0aWVzKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IHByb3BlcnRpZXNbbl0sIGdsb2JhbFByb3BlcnR5SGFuZGxlciA9IGdsb2JhbFByb3BlcnR5SGFuZGxlcnMuZ2V0KG4pO1xuICAgICAgICBpZiAoZ2xvYmFsUHJvcGVydHlIYW5kbGVyKVxuICAgICAgICAgICAgZ2xvYmFsUHJvcGVydHlIYW5kbGVyKG5vZGUsIHZhbHVlLCBwcm9wZXJ0aWVzKTtcbiAgICAgICAgZWxzZSBpZiAobi5zdGFydHNXaXRoKFwib25cIikgJiYgMiA8IG4ubGVuZ3RoKVxuICAgICAgICAgICAgbm9kZVtuXSA9IHZhbHVlO1xuICAgICAgICBlbHNlIGJpbmRQcm9wZXJ0eShub2RlLCBuLCB2YWx1ZSk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYmluZFByb3BlcnR5KGVsZW1lbnQ6IEVsZW1lbnQsIG5hbWU6IHN0cmluZywgZXhwcmVzc2lvbjogYW55IHwgT2JzZXJ2YWJsZTxhbnk+IHwgKCgpID0+IGFueSkpIHtcblxuICAgIGlmIChuYW1lLmluZGV4T2YoXCItXCIpICE9PSAtMSkge1xuICAgICAgICBpZiAoaXNPYnNlcnZhYmxlKGV4cHJlc3Npb24pKSB7XG4gICAgICAgICAgICBsZXQgc3Vic2NyaXB0aW9uID0gKGV4cHJlc3Npb24gYXMgT2JzZXJ2YWJsZTxhbnk+KS5zdWJzY3JpYmVJbnZva2VTbmVha0luTGluZShuID0+IHsgZWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgbik7IH0pO1xuICAgICAgICAgICAgYXBwZW5kRGlzcG9zZUNhbGxiYWNrVG9Ob2RlKGVsZW1lbnQsIHN1YnNjcmlwdGlvbi5kaXNwb3NlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgZXhwcmVzc2lvbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBsZXQgY29tcHV0ZWRPYnNlcnZhYmxlID0gY28oZXhwcmVzc2lvbik7XG4gICAgICAgICAgICBjb21wdXRlZE9ic2VydmFibGUuc3Vic2NyaWJlSW52b2tlU25lYWtJbkxpbmUobiA9PiB7IGVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIG4gYXMgYW55KTsgfSk7XG4gICAgICAgICAgICBpZiAoKGV4cHJlc3Npb24gYXMgdW5rbm93biBhcyBOb3JtYWxpemVkRnVuY3Rpb24pLmRpc3Bvc2UpXG4gICAgICAgICAgICAgICAgYXBwZW5kRGlzcG9zZUNhbGxiYWNrVG9Ob2RlKGVsZW1lbnQsIChleHByZXNzaW9uIGFzIHVua25vd24gYXMgTm9ybWFsaXplZEZ1bmN0aW9uKS5kaXNwb3NlKTtcbiAgICAgICAgICAgIGFwcGVuZERpc3Bvc2VDYWxsYmFja1RvTm9kZShlbGVtZW50LCBjb21wdXRlZE9ic2VydmFibGUuZGlzcG9zZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCBleHByZXNzaW9uKTtcbiAgICB9XG5cbiAgICBlbHNlIHtcblxuICAgICAgICBpZiAoaXNPYnNlcnZhYmxlKGV4cHJlc3Npb24pKSB7XG5cbiAgICAgICAgICAgIGxldCBzdWJzY3JpcHRpb24gPSAoZXhwcmVzc2lvbiBhcyBPYnNlcnZhYmxlPGFueT4pLnN1YnNjcmliZUludm9rZVNuZWFrSW5MaW5lKG4gPT4geyBlbGVtZW50W25hbWVdID0gbjsgfSk7XG5cbiAgICAgICAgICAgIGFwcGVuZERpc3Bvc2VDYWxsYmFja1RvTm9kZShlbGVtZW50LCBzdWJzY3JpcHRpb24uZGlzcG9zZSk7XG5cbiAgICAgICAgICAgIGlmIChleHByZXNzaW9uIGluc3RhbmNlb2YgTW9kaWZpYWJsZU9ic2VydmFibGUpIHtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwidmFsdWVcIjpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInZhbHVlQXNEYXRlXCI6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ2YWx1ZUFzTnVtYmVyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsaXN0ZW5lciA9IChfZTogRXZlbnQpID0+IHsgZXhwcmVzc2lvbi5zZXRWYWx1ZURvbnROb3RpZnlTdWJzY3JpcHRpb24oZWxlbWVudFtuYW1lXSwgc3Vic2NyaXB0aW9uKTsgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGxpc3RlbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcGVuZERpc3Bvc2VDYWxsYmFja1RvTm9kZShlbGVtZW50LCAoKSA9PiB7IGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGxpc3RlbmVyKSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjaGVja2VkXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsaXN0ZW5lciA9IChfZTogRXZlbnQpID0+IHsgZXhwcmVzc2lvbi5zZXRWYWx1ZURvbnROb3RpZnlTdWJzY3JpcHRpb24oKGVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudCkuY2hlY2tlZCwgc3Vic2NyaXB0aW9uKTsgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBsaXN0ZW5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBlbmREaXNwb3NlQ2FsbGJhY2tUb05vZGUoZWxlbWVudCwgKCkgPT4geyBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgbGlzdGVuZXIpIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGV4cHJlc3Npb24gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgbGV0IGNvbXB1dGVkT2JzZXJ2YWJsZSA9IGNvKGV4cHJlc3Npb24pO1xuICAgICAgICAgICAgY29tcHV0ZWRPYnNlcnZhYmxlLnN1YnNjcmliZUludm9rZVNuZWFrSW5MaW5lKG4gPT4geyBlbGVtZW50W25hbWVdID0gbjsgfSk7XG4gICAgICAgICAgICBpZiAoKGV4cHJlc3Npb24gYXMgdW5rbm93biBhcyBOb3JtYWxpemVkRnVuY3Rpb24pLmRpc3Bvc2UpXG4gICAgICAgICAgICAgICAgYXBwZW5kRGlzcG9zZUNhbGxiYWNrVG9Ob2RlKGVsZW1lbnQsIChleHByZXNzaW9uIGFzIHVua25vd24gYXMgTm9ybWFsaXplZEZ1bmN0aW9uKS5kaXNwb3NlKTtcbiAgICAgICAgICAgIGFwcGVuZERpc3Bvc2VDYWxsYmFja1RvTm9kZShlbGVtZW50LCBjb21wdXRlZE9ic2VydmFibGUuZGlzcG9zZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBlbGVtZW50W25hbWVdID0gZXhwcmVzc2lvbjtcbiAgICB9XG59XG5cbmdsb2JhbFByb3BlcnR5SGFuZGxlcnMuc2V0KFwic3R5bGVcIiwgKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCB2YWx1ZTogUGFydGlhbDxDU1NTdHlsZURlY2xhcmF0aW9uPikgPT4ge1xuICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudC5zdHlsZSwgdmFsdWUpO1xufSk7XG5cbmdsb2JhbFByb3BlcnR5SGFuZGxlcnMuc2V0KFwicm9sZVwiLCAoZWxlbWVudDogSFRNTEVsZW1lbnQsIHZhbHVlOiBzdHJpbmcgfCBPYnNlcnZhYmxlPHN0cmluZz4gfCAoKCkgPT4gc3RyaW5nKSkgPT4ge1xuICAgIGlmIChpc09ic2VydmFibGUodmFsdWUpKSB7XG4gICAgICAgIGxldCBzdWJzY3JpcHRpb24gPSAodmFsdWUgYXMgT2JzZXJ2YWJsZTxhbnk+KS5zdWJzY3JpYmVJbnZva2VTbmVha0luTGluZShuID0+IHsgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIG4pOyB9KTtcbiAgICAgICAgYXBwZW5kRGlzcG9zZUNhbGxiYWNrVG9Ob2RlKGVsZW1lbnQsIHN1YnNjcmlwdGlvbi5kaXNwb3NlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgbGV0IGNvbXB1dGVkT2JzZXJ2YWJsZSA9IGNvKHZhbHVlKTtcbiAgICAgICAgY29tcHV0ZWRPYnNlcnZhYmxlLnN1YnNjcmliZUludm9rZVNuZWFrSW5MaW5lKG4gPT4geyBlbGVtZW50LnNldEF0dHJpYnV0ZShcInJvbGVcIiwgbiBhcyBhbnkpOyB9KTtcbiAgICAgICAgaWYgKCh2YWx1ZSBhcyB1bmtub3duIGFzIE5vcm1hbGl6ZWRGdW5jdGlvbikuZGlzcG9zZSlcbiAgICAgICAgICAgIGFwcGVuZERpc3Bvc2VDYWxsYmFja1RvTm9kZShlbGVtZW50LCAodmFsdWUgYXMgdW5rbm93biBhcyBOb3JtYWxpemVkRnVuY3Rpb24pLmRpc3Bvc2UpO1xuICAgICAgICBhcHBlbmREaXNwb3NlQ2FsbGJhY2tUb05vZGUoZWxlbWVudCwgY29tcHV0ZWRPYnNlcnZhYmxlLmRpc3Bvc2UpO1xuICAgIH1cbiAgICBlbHNlIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwicm9sZVwiLCB2YWx1ZSBhcyBzdHJpbmcpO1xufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVDbGFzcyhlbGVtZW50OiBIVE1MRWxlbWVudCwgdmFsdWU6IHsgW25hbWU6IHN0cmluZ106IGJvb2xlYW4gfCBPYnNlcnZhYmxlPGJvb2xlYW4+IHwgKCgpID0+IGJvb2xlYW4pOyB9KSB7XG4gICAgZm9yIChsZXQgcCBpbiB2YWx1ZSkge1xuICAgICAgICBsZXQgZXhwcmVzc2lvbiA9IHZhbHVlW3BdIGFzIGJvb2xlYW4gfCBPYnNlcnZhYmxlPGJvb2xlYW4+IHwgKCgpID0+IGJvb2xlYW4pO1xuICAgICAgICBpZiAoaXNPYnNlcnZhYmxlKGV4cHJlc3Npb24pKSB7XG4gICAgICAgICAgICBsZXQgc3Vic2NyaXB0aW9uID0gKGZ1bmN0aW9uIChwKSB7IHJldHVybiAoZXhwcmVzc2lvbiBhcyBPYnNlcnZhYmxlPGFueT4pLnN1YnNjcmliZUludm9rZVNuZWFrSW5MaW5lKG4gPT4geyBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUocCwgbik7IH0pOyB9KShwKTtcbiAgICAgICAgICAgIGFwcGVuZERpc3Bvc2VDYWxsYmFja1RvTm9kZShlbGVtZW50LCBzdWJzY3JpcHRpb24uZGlzcG9zZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGV4cHJlc3Npb24gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgbGV0IGNvbXB1dGVkT2JzZXJ2YWJsZSA9IGNvKGV4cHJlc3Npb24pO1xuICAgICAgICAgICAgKGZ1bmN0aW9uIChwKSB7IGNvbXB1dGVkT2JzZXJ2YWJsZS5zdWJzY3JpYmVJbnZva2VTbmVha0luTGluZShuID0+IHsgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKHAsIG4pOyB9KTsgfSkocCk7XG4gICAgICAgICAgICBpZiAoKGV4cHJlc3Npb24gYXMgdW5rbm93biBhcyBOb3JtYWxpemVkRnVuY3Rpb24pLmRpc3Bvc2UpXG4gICAgICAgICAgICAgICAgYXBwZW5kRGlzcG9zZUNhbGxiYWNrVG9Ob2RlKGVsZW1lbnQsIChleHByZXNzaW9uIGFzIHVua25vd24gYXMgTm9ybWFsaXplZEZ1bmN0aW9uKS5kaXNwb3NlKTtcbiAgICAgICAgICAgIGFwcGVuZERpc3Bvc2VDYWxsYmFja1RvTm9kZShlbGVtZW50LCBjb21wdXRlZE9ic2VydmFibGUuZGlzcG9zZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUocCwgZXhwcmVzc2lvbiBhcyBib29sZWFuKTtcbiAgICB9XG59XG5cbmdsb2JhbFByb3BlcnR5SGFuZGxlcnMuc2V0KFwidG9nZ2xlXCIsIHRvZ2dsZUNsYXNzKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHN3aXRjaENsYXNzKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCB2YWx1ZTogT2JzZXJ2YWJsZTxzdHJpbmc+IHwgKCgpID0+IHN0cmluZykgfCAoT2JzZXJ2YWJsZTxzdHJpbmc+IHwgKCgpID0+IHN0cmluZykpW10pIHtcbiAgICBpZiAoaXNPYnNlcnZhYmxlKHZhbHVlKSkge1xuICAgICAgICBsZXQgc3Vic2NyaXB0aW9uID0gKHZhbHVlIGFzIE9ic2VydmFibGU8c3RyaW5nPikuc3Vic2NyaWJlSW52b2tlU25lYWtJbkxpbmUobiA9PiB7IGVsZW1lbnQuY2xhc3NOYW1lID0gbjsgfSk7XG4gICAgICAgIGFwcGVuZERpc3Bvc2VDYWxsYmFja1RvTm9kZShlbGVtZW50LCBzdWJzY3JpcHRpb24uZGlzcG9zZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGxldCBjb21wdXRlZE9ic2VydmFibGUgPSBjbyh2YWx1ZSk7XG4gICAgICAgIGNvbXB1dGVkT2JzZXJ2YWJsZS5zdWJzY3JpYmVJbnZva2VTbmVha0luTGluZShuID0+IHsgZWxlbWVudC5jbGFzc05hbWUgPSBuOyB9KTtcbiAgICAgICAgaWYgKCh2YWx1ZSBhcyB1bmtub3duIGFzIE5vcm1hbGl6ZWRGdW5jdGlvbikuZGlzcG9zZSlcbiAgICAgICAgICAgIGFwcGVuZERpc3Bvc2VDYWxsYmFja1RvTm9kZShlbGVtZW50LCAodmFsdWUgYXMgdW5rbm93biBhcyBOb3JtYWxpemVkRnVuY3Rpb24pLmRpc3Bvc2UpO1xuICAgICAgICBhcHBlbmREaXNwb3NlQ2FsbGJhY2tUb05vZGUoZWxlbWVudCwgY29tcHV0ZWRPYnNlcnZhYmxlLmRpc3Bvc2UpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaSBvZiB2YWx1ZSBhcyAoT2JzZXJ2YWJsZTxzdHJpbmc+IHwgKCgpID0+IHN0cmluZykpW10pIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaSA9PT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoaSk7XG4gICAgICAgICAgICBlbHNlIGlmIChpc09ic2VydmFibGUoaSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgc3Vic2NyaXB0aW9uID0gKGkgYXMgT2JzZXJ2YWJsZTxzdHJpbmc+KS5zdWJzY3JpYmVJbnZva2VTbmVha0luTGluZSgobiwgbykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAobykgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKG8pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobikgZWxlbWVudC5jbGFzc0xpc3QuYWRkKG4pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGFwcGVuZERpc3Bvc2VDYWxsYmFja1RvTm9kZShlbGVtZW50LCBzdWJzY3JpcHRpb24uZGlzcG9zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgY29tcHV0ZWRPYnNlcnZhYmxlID0gY28oaSBhcyAoKSA9PiBzdHJpbmcpO1xuICAgICAgICAgICAgICAgIGNvbXB1dGVkT2JzZXJ2YWJsZS5zdWJzY3JpYmVJbnZva2VTbmVha0luTGluZSgobiwgbykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAobykgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKG8pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobikgZWxlbWVudC5jbGFzc0xpc3QuYWRkKG4pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGFwcGVuZERpc3Bvc2VDYWxsYmFja1RvTm9kZShlbGVtZW50LCBjb21wdXRlZE9ic2VydmFibGUuZGlzcG9zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmdsb2JhbFByb3BlcnR5SGFuZGxlcnMuc2V0KFwic3dpdGNoXCIsIHN3aXRjaENsYXNzKTtcblxuZnVuY3Rpb24gY3JlYXRlTm9kZUZyb21GdW5jdGlvbihmbiwgcHJvcGVydGllczogeyBbbmFtZTogc3RyaW5nXTogYW55IH0sIGNoaWxkcmVuOiBhbnlbXSkge1xuICAgIGlmIChmbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBDb21wb25lbnQpXG4gICAgICAgIHJldHVybiA8Q29tcG9uZW50PE5vZGU+Pm5ldyBmbihwcm9wZXJ0aWVzLCBjaGlsZHJlbik7XG4gICAgZWxzZSByZXR1cm4gZm4ocHJvcGVydGllcywgY2hpbGRyZW4pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEb2N1bWVudEZyYWdtZW50KGNoaWxkcmVuOiBhbnlbXSkge1xuICAgIGxldCBkb2N1bWVudEZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIGZvciAobGV0IGMgb2YgY2hpbGRyZW4pXG4gICAgICAgIGFwcGVuZENoaWxkKGRvY3VtZW50RnJhZ21lbnQsIGMpO1xuICAgIHJldHVybiBkb2N1bWVudEZyYWdtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gTWFuYWdlZChfYXR0cmlidXRlczoge30sIGNoaWxkcmVuOiBhbnlbXSkge1xuICAgIGxldCBkb2N1bWVudEZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLCBjb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudChcIiBFbGFzdGljOiBtYW5hZ2VkIFwiKTtcbiAgICBkb2N1bWVudEZyYWdtZW50LmFwcGVuZENoaWxkKGNvbW1lbnQpO1xuICAgIGZvciAobGV0IGMgb2YgY2hpbGRyZW4pXG4gICAgICAgIGFwcGVuZENoaWxkKGRvY3VtZW50RnJhZ21lbnQsIGMpO1xuICAgIGNvbW1lbnRbTEFTVF9NQU5BR0VEX0NISUxEX0tFWV0gPSBkb2N1bWVudEZyYWdtZW50Lmxhc3RDaGlsZDtcbiAgICByZXR1cm4gZG9jdW1lbnRGcmFnbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZTxULCBVPihub3JtYWxpemVGbjogKCkgPT4gVCwgZ2VuZXJhdGVGbjogKG5vcm1hbGl6ZWQ6IENvbXB1dGVkT2JzZXJ2YWJsZTxUPikgPT4gVSkge1xuXG4gICAgbGV0IG5vcm1hbGl6ZWQgPSBjbyhub3JtYWxpemVGbiksIHJlc3VsdCA9ICgpID0+IGdlbmVyYXRlRm4obm9ybWFsaXplZCk7XG5cbiAgICAocmVzdWx0IGFzIHVua25vd24gYXMgTm9ybWFsaXplZEZ1bmN0aW9uKS5kaXNwb3NlID0gbm9ybWFsaXplZC5kaXNwb3NlO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb3JtYWxpemVkRnVuY3Rpb24ge1xuXG4gICAgZGlzcG9zZSgpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEludHJpbnNpY0VsZW1lbnRzIHtcblxuICAgIGE6IEhUTUxBdHRyaWJ1dGVzPEhUTUxBbmNob3JFbGVtZW50PjtcbiAgICBhYmJyOiBIVE1MQXR0cmlidXRlczxIVE1MRWxlbWVudD47XG4gICAgYWRkcmVzczogSFRNTEF0dHJpYnV0ZXM8SFRNTEVsZW1lbnQ+O1xuICAgIGFyZWE6IEhUTUxBdHRyaWJ1dGVzPEhUTUxBcmVhRWxlbWVudD47XG4gICAgYXJ0aWNsZTogSFRNTEF0dHJpYnV0ZXM8SFRNTEVsZW1lbnQ+O1xuICAgIGFzaWRlOiBIVE1MQXR0cmlidXRlczxIVE1MRWxlbWVudD47XG4gICAgYXVkaW86IEhUTUxBdHRyaWJ1dGVzPEhUTUxBdWRpb0VsZW1lbnQ+O1xuICAgIGI6IEhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50PjtcbiAgICBiYXNlOiBIVE1MQXR0cmlidXRlczxIVE1MQmFzZUVsZW1lbnQ+O1xuICAgIGJkaTogSFRNTEF0dHJpYnV0ZXM8SFRNTEVsZW1lbnQ+O1xuICAgIGJkbzogSFRNTEF0dHJpYnV0ZXM8SFRNTEVsZW1lbnQ+O1xuICAgIGJpZzogSFRNTEF0dHJpYnV0ZXM8SFRNTEVsZW1lbnQ+O1xuICAgIGJsb2NrcXVvdGU6IEhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50PjtcbiAgICBib2R5OiBIVE1MQXR0cmlidXRlczxIVE1MQm9keUVsZW1lbnQ+O1xuICAgIGJyOiBIVE1MQXR0cmlidXRlczxIVE1MQlJFbGVtZW50PjtcbiAgICBidXR0b246IEhUTUxBdHRyaWJ1dGVzPEhUTUxCdXR0b25FbGVtZW50PjtcbiAgICBjYW52YXM6IEhUTUxBdHRyaWJ1dGVzPEhUTUxDYW52YXNFbGVtZW50PjtcbiAgICBjYXB0aW9uOiBIVE1MQXR0cmlidXRlczxIVE1MRWxlbWVudD47XG4gICAgY2l0ZTogSFRNTEF0dHJpYnV0ZXM8SFRNTEVsZW1lbnQ+O1xuICAgIGNvZGU6IEhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50PjtcbiAgICBjb2w6IEhUTUxBdHRyaWJ1dGVzPEhUTUxUYWJsZUNvbEVsZW1lbnQ+O1xuICAgIGNvbGdyb3VwOiBIVE1MQXR0cmlidXRlczxIVE1MVGFibGVDb2xFbGVtZW50PjtcbiAgICBkYXRhOiBIVE1MQXR0cmlidXRlczxIVE1MRGF0YUVsZW1lbnQ+O1xuICAgIGRhdGFsaXN0OiBIVE1MQXR0cmlidXRlczxIVE1MRGF0YUxpc3RFbGVtZW50PjtcbiAgICBkZDogSFRNTEF0dHJpYnV0ZXM8SFRNTEVsZW1lbnQ+O1xuICAgIGRlbDogSFRNTEF0dHJpYnV0ZXM8SFRNTEVsZW1lbnQ+O1xuICAgIGRldGFpbHM6IEhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50PjtcbiAgICBkZm46IEhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50PjtcbiAgICBkaWFsb2c6IEhUTUxBdHRyaWJ1dGVzPEhUTUxEaWFsb2dFbGVtZW50PjtcbiAgICBkaXY6IEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PjtcbiAgICBkbDogSFRNTEF0dHJpYnV0ZXM8SFRNTERMaXN0RWxlbWVudD47XG4gICAgZHQ6IEhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50PjtcbiAgICBlbTogSFRNTEF0dHJpYnV0ZXM8SFRNTEVsZW1lbnQ+O1xuICAgIGVtYmVkOiBIVE1MQXR0cmlidXRlczxIVE1MRW1iZWRFbGVtZW50PjtcbiAgICBmaWVsZHNldDogSFRNTEF0dHJpYnV0ZXM8SFRNTEZpZWxkU2V0RWxlbWVudD47XG4gICAgZmlnY2FwdGlvbjogSFRNTEF0dHJpYnV0ZXM8SFRNTEVsZW1lbnQ+O1xuICAgIGZpZ3VyZTogSFRNTEF0dHJpYnV0ZXM8SFRNTEVsZW1lbnQ+O1xuICAgIGZvb3RlcjogSFRNTEF0dHJpYnV0ZXM8SFRNTEVsZW1lbnQ+O1xuICAgIGZvcm06IEhUTUxBdHRyaWJ1dGVzPEhUTUxGb3JtRWxlbWVudD47XG4gICAgaDE6IEhUTUxBdHRyaWJ1dGVzPEhUTUxIZWFkaW5nRWxlbWVudD47XG4gICAgaDI6IEhUTUxBdHRyaWJ1dGVzPEhUTUxIZWFkaW5nRWxlbWVudD47XG4gICAgaDM6IEhUTUxBdHRyaWJ1dGVzPEhUTUxIZWFkaW5nRWxlbWVudD47XG4gICAgaDQ6IEhUTUxBdHRyaWJ1dGVzPEhUTUxIZWFkaW5nRWxlbWVudD47XG4gICAgaDU6IEhUTUxBdHRyaWJ1dGVzPEhUTUxIZWFkaW5nRWxlbWVudD47XG4gICAgaDY6IEhUTUxBdHRyaWJ1dGVzPEhUTUxIZWFkaW5nRWxlbWVudD47XG4gICAgaGVhZDogSFRNTEF0dHJpYnV0ZXM8SFRNTEVsZW1lbnQ+O1xuICAgIGhlYWRlcjogSFRNTEF0dHJpYnV0ZXM8SFRNTEVsZW1lbnQ+O1xuICAgIGhncm91cDogSFRNTEF0dHJpYnV0ZXM8SFRNTEVsZW1lbnQ+O1xuICAgIGhyOiBIVE1MQXR0cmlidXRlczxIVE1MSFJFbGVtZW50PjtcbiAgICBodG1sOiBIVE1MQXR0cmlidXRlczxIVE1MSHRtbEVsZW1lbnQ+O1xuICAgIGk6IEhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50PjtcbiAgICBpZnJhbWU6IEhUTUxBdHRyaWJ1dGVzPEhUTUxJRnJhbWVFbGVtZW50PjtcbiAgICBpbWc6IEhUTUxBdHRyaWJ1dGVzPEhUTUxJbWFnZUVsZW1lbnQ+O1xuICAgIGlucHV0OiBIVE1MQXR0cmlidXRlczxIVE1MSW5wdXRFbGVtZW50PjtcbiAgICBpbnM6IEhUTUxBdHRyaWJ1dGVzPEhUTUxNb2RFbGVtZW50PjtcbiAgICBrYmQ6IEhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50PjtcbiAgICBrZXlnZW46IEhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50PjtcbiAgICBsYWJlbDogSFRNTEF0dHJpYnV0ZXM8SFRNTExhYmVsRWxlbWVudD47XG4gICAgbGVnZW5kOiBIVE1MQXR0cmlidXRlczxIVE1MTGVnZW5kRWxlbWVudD47XG4gICAgbGk6IEhUTUxBdHRyaWJ1dGVzPEhUTUxMSUVsZW1lbnQ+O1xuICAgIGxpbms6IEhUTUxBdHRyaWJ1dGVzPEhUTUxMaW5rRWxlbWVudD47XG4gICAgbWFpbjogSFRNTEF0dHJpYnV0ZXM8SFRNTEVsZW1lbnQ+O1xuICAgIG1hcDogSFRNTEF0dHJpYnV0ZXM8SFRNTE1hcEVsZW1lbnQ+O1xuICAgIG1hcms6IEhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50PjtcbiAgICBtZW51OiBIVE1MQXR0cmlidXRlczxIVE1MRWxlbWVudD47XG4gICAgbWVudWl0ZW06IEhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50PjtcbiAgICBtZXRhOiBIVE1MQXR0cmlidXRlczxIVE1MTWV0YUVsZW1lbnQ+O1xuICAgIG1ldGVyOiBIVE1MQXR0cmlidXRlczxIVE1MRWxlbWVudD47XG4gICAgbmF2OiBIVE1MQXR0cmlidXRlczxIVE1MRWxlbWVudD47XG4gICAgbm9zY3JpcHQ6IEhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50PjtcbiAgICBvYmplY3Q6IEhUTUxBdHRyaWJ1dGVzPEhUTUxPYmplY3RFbGVtZW50PjtcbiAgICBvbDogSFRNTEF0dHJpYnV0ZXM8SFRNTE9MaXN0RWxlbWVudD47XG4gICAgb3B0Z3JvdXA6IEhUTUxBdHRyaWJ1dGVzPEhUTUxPcHRHcm91cEVsZW1lbnQ+O1xuICAgIG9wdGlvbjogSFRNTEF0dHJpYnV0ZXM8SFRNTE9wdGlvbkVsZW1lbnQ+O1xuICAgIG91dHB1dDogSFRNTEF0dHJpYnV0ZXM8SFRNTEVsZW1lbnQ+O1xuICAgIHA6IEhUTUxBdHRyaWJ1dGVzPEhUTUxQYXJhZ3JhcGhFbGVtZW50PjtcbiAgICBwYXJhbTogSFRNTEF0dHJpYnV0ZXM8SFRNTFBhcmFtRWxlbWVudD47XG4gICAgcGljdHVyZTogSFRNTEF0dHJpYnV0ZXM8SFRNTEVsZW1lbnQ+O1xuICAgIHByZTogSFRNTEF0dHJpYnV0ZXM8SFRNTFByZUVsZW1lbnQ+O1xuICAgIHByb2dyZXNzOiBIVE1MQXR0cmlidXRlczxIVE1MUHJvZ3Jlc3NFbGVtZW50PjtcbiAgICBxOiBIVE1MQXR0cmlidXRlczxIVE1MUXVvdGVFbGVtZW50PjtcbiAgICBycDogSFRNTEF0dHJpYnV0ZXM8SFRNTEVsZW1lbnQ+O1xuICAgIHJ0OiBIVE1MQXR0cmlidXRlczxIVE1MRWxlbWVudD47XG4gICAgcnVieTogSFRNTEF0dHJpYnV0ZXM8SFRNTEVsZW1lbnQ+O1xuICAgIHM6IEhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50PjtcbiAgICBzYW1wOiBIVE1MQXR0cmlidXRlczxIVE1MRWxlbWVudD47XG4gICAgc2NyaXB0OiBIVE1MQXR0cmlidXRlczxIVE1MU2NyaXB0RWxlbWVudD47XG4gICAgc2VjdGlvbjogSFRNTEF0dHJpYnV0ZXM8SFRNTEVsZW1lbnQ+O1xuICAgIHNlbGVjdDogSFRNTEF0dHJpYnV0ZXM8SFRNTFNlbGVjdEVsZW1lbnQ+O1xuICAgIHNtYWxsOiBIVE1MQXR0cmlidXRlczxIVE1MRWxlbWVudD47XG4gICAgc291cmNlOiBIVE1MQXR0cmlidXRlczxIVE1MU291cmNlRWxlbWVudD47XG4gICAgc3BhbjogSFRNTEF0dHJpYnV0ZXM8SFRNTFNwYW5FbGVtZW50PjtcbiAgICBzdHJvbmc6IEhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50PjtcbiAgICBzdHlsZTogSFRNTEF0dHJpYnV0ZXM8SFRNTFN0eWxlRWxlbWVudD47XG4gICAgc3ViOiBIVE1MQXR0cmlidXRlczxIVE1MRWxlbWVudD47XG4gICAgc3VtbWFyeTogSFRNTEF0dHJpYnV0ZXM8SFRNTEVsZW1lbnQ+O1xuICAgIHN1cDogSFRNTEF0dHJpYnV0ZXM8SFRNTEVsZW1lbnQ+O1xuICAgIHRhYmxlOiBIVE1MQXR0cmlidXRlczxIVE1MVGFibGVFbGVtZW50PjtcbiAgICB0ZW1wbGF0ZTogSFRNTEF0dHJpYnV0ZXM8SFRNTFRlbXBsYXRlRWxlbWVudD47XG4gICAgdGJvZHk6IEhUTUxBdHRyaWJ1dGVzPEhUTUxUYWJsZVNlY3Rpb25FbGVtZW50PjtcbiAgICB0ZDogSFRNTEF0dHJpYnV0ZXM8SFRNTFRhYmxlRGF0YUNlbGxFbGVtZW50PjtcbiAgICB0ZXh0YXJlYTogSFRNTEF0dHJpYnV0ZXM8SFRNTFRleHRBcmVhRWxlbWVudD47XG4gICAgdGZvb3Q6IEhUTUxBdHRyaWJ1dGVzPEhUTUxUYWJsZVNlY3Rpb25FbGVtZW50PjtcbiAgICB0aDogSFRNTEF0dHJpYnV0ZXM8SFRNTFRhYmxlSGVhZGVyQ2VsbEVsZW1lbnQ+O1xuICAgIHRoZWFkOiBIVE1MQXR0cmlidXRlczxIVE1MVGFibGVTZWN0aW9uRWxlbWVudD47XG4gICAgdGltZTogSFRNTEF0dHJpYnV0ZXM8SFRNTEVsZW1lbnQ+O1xuICAgIHRpdGxlOiBIVE1MQXR0cmlidXRlczxIVE1MVGl0bGVFbGVtZW50PjtcbiAgICB0cjogSFRNTEF0dHJpYnV0ZXM8SFRNTFRhYmxlUm93RWxlbWVudD47XG4gICAgdHJhY2s6IEhUTUxBdHRyaWJ1dGVzPEhUTUxUcmFja0VsZW1lbnQ+O1xuICAgIHU6IEhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50PjtcbiAgICB1bDogSFRNTEF0dHJpYnV0ZXM8SFRNTFVMaXN0RWxlbWVudD47XG4gICAgXCJ2YXJcIjogSFRNTEF0dHJpYnV0ZXM8SFRNTEVsZW1lbnQ+O1xuICAgIHZpZGVvOiBIVE1MQXR0cmlidXRlczxIVE1MVmlkZW9FbGVtZW50PjtcbiAgICB3YnI6IEhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50PjtcbiAgICBzdmc6IFNWR0F0dHJpYnV0ZXM8U1ZHRWxlbWVudD47XG59XG5cbmV4cG9ydCB0eXBlIEZ1bmN0aW9uUHJvcGVydHlOYW1lczxUPiA9IHsgW0sgaW4ga2V5b2YgVF06IFRbS10gZXh0ZW5kcyBGdW5jdGlvbiA/IEsgOiBuZXZlciB9W2tleW9mIFRdO1xuZXhwb3J0IHR5cGUgRnVuY3Rpb25Qcm9wZXJ0aWVzPFQ+ID0gUGljazxULCBGdW5jdGlvblByb3BlcnR5TmFtZXM8VD4+O1xuXG5leHBvcnQgdHlwZSBOb25GdW5jdGlvblByb3BlcnR5TmFtZXM8VD4gPSB7IFtLIGluIGtleW9mIFRdOiBUW0tdIGV4dGVuZHMgRnVuY3Rpb24gPyBuZXZlciA6IEsgfVtrZXlvZiBUXTtcbmV4cG9ydCB0eXBlIE5vbkZ1bmN0aW9uUHJvcGVydGllczxUPiA9IFBpY2s8VCwgTm9uRnVuY3Rpb25Qcm9wZXJ0eU5hbWVzPFQ+PjtcblxuZXhwb3J0IHR5cGUgQXBwbGljYWJsZU5vbkZ1bmN0aW9uUHJvcGVydGllczxUPiA9IE9taXQ8Tm9uRnVuY3Rpb25Qcm9wZXJ0aWVzPFQ+LCBcImNoaWxkcmVuXCIgfCBcInN0eWxlXCI+O1xuXG5leHBvcnQgdHlwZSBIVE1MQXR0cmlidXRlczxUIGV4dGVuZHMgSFRNTEVsZW1lbnQ+ID1cbiAgICAmIHsgW1AgaW4ga2V5b2YgQXBwbGljYWJsZU5vbkZ1bmN0aW9uUHJvcGVydGllczxUPl0/OiBBcHBsaWNhYmxlTm9uRnVuY3Rpb25Qcm9wZXJ0aWVzPFQ+W1BdIHwgT2JzZXJ2YWJsZTxBcHBsaWNhYmxlTm9uRnVuY3Rpb25Qcm9wZXJ0aWVzPFQ+W1BdPiB8ICgoKSA9PiBBcHBsaWNhYmxlTm9uRnVuY3Rpb25Qcm9wZXJ0aWVzPFQ+W1BdKTsgfVxuICAgICYgeyBbUCBpbiBrZXlvZiBBcmlhQXR0cmlidXRlc10/OiBBcmlhQXR0cmlidXRlc1tQXSB8IE9ic2VydmFibGU8QXJpYUF0dHJpYnV0ZXNbUF0+IHwgKCgpID0+IEFyaWFBdHRyaWJ1dGVzW1BdKTsgfVxuICAgICYgeyByb2xlPzogc3RyaW5nIHwgT2JzZXJ2YWJsZTxzdHJpbmc+IHwgKCgpID0+IHN0cmluZyk7IH1cbiAgICAmIHsgc3R5bGU/OiBQYXJ0aWFsPENTU1N0eWxlRGVjbGFyYXRpb24+OyB9IC8vIFRPRE86IFN1cHBvcnQgb2JzZXJ2YWJsZXNcbiAgICAmIHsgdG9nZ2xlPzogeyBbbmFtZTogc3RyaW5nXTogYm9vbGVhbiB8IE9ic2VydmFibGU8Ym9vbGVhbj4gfCAoKCkgPT4gYm9vbGVhbik7IH07IH1cbiAgICAmIHsgc3dpdGNoPzogT2JzZXJ2YWJsZTxzdHJpbmc+IHwgKCgpID0+IHN0cmluZykgfCAoT2JzZXJ2YWJsZTxzdHJpbmc+IHwgKCgpID0+IHN0cmluZykpW107IH1cbiAgICAmIHsgW1AgaW4ga2V5b2YgRnVuY3Rpb25Qcm9wZXJ0aWVzPFQ+XT86IEZ1bmN0aW9uUHJvcGVydGllczxUPltQXTsgfTtcblxuZXhwb3J0IHR5cGUgU1ZHQXR0cmlidXRlczxUIGV4dGVuZHMgU1ZHRWxlbWVudD4gPVxuICAgICYgeyBbUCBpbiBrZXlvZiBBcHBsaWNhYmxlTm9uRnVuY3Rpb25Qcm9wZXJ0aWVzPFQ+XT86IEFwcGxpY2FibGVOb25GdW5jdGlvblByb3BlcnRpZXM8VD5bUF0gfCBPYnNlcnZhYmxlPEFwcGxpY2FibGVOb25GdW5jdGlvblByb3BlcnRpZXM8VD5bUF0+IHwgKCgpID0+IEFwcGxpY2FibGVOb25GdW5jdGlvblByb3BlcnRpZXM8VD5bUF0pOyB9XG4gICAgJiB7IFtQIGluIGtleW9mIEFyaWFBdHRyaWJ1dGVzXT86IEFyaWFBdHRyaWJ1dGVzW1BdIHwgT2JzZXJ2YWJsZTxBcmlhQXR0cmlidXRlc1tQXT4gfCAoKCkgPT4gQXJpYUF0dHJpYnV0ZXNbUF0pOyB9XG4gICAgJiB7IHN0eWxlPzogUGFydGlhbDxDU1NTdHlsZURlY2xhcmF0aW9uPjsgfVxuICAgICYgeyB0b2dnbGU/OiB7IFtuYW1lOiBzdHJpbmddOiBib29sZWFuIHwgT2JzZXJ2YWJsZTxib29sZWFuPiB8ICgoKSA9PiBib29sZWFuKTsgfTsgfVxuICAgICYgeyBzd2l0Y2g/OiBPYnNlcnZhYmxlPHN0cmluZz4gfCAoKCkgPT4gc3RyaW5nKSB8IChPYnNlcnZhYmxlPHN0cmluZz4gfCAoKCkgPT4gc3RyaW5nKSlbXTsgfVxuICAgICYgeyBbUCBpbiBrZXlvZiBGdW5jdGlvblByb3BlcnRpZXM8VD5dPzogRnVuY3Rpb25Qcm9wZXJ0aWVzPFQ+W1BdOyB9O1xuXG4vLyBBbGwgdGhlIFdBSS1BUklBIDEuMSBhdHRyaWJ1dGVzIGZyb20gaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLTEuMS9cbmV4cG9ydCBpbnRlcmZhY2UgQXJpYUF0dHJpYnV0ZXMge1xuICAgIC8qKiBJZGVudGlmaWVzIHRoZSBjdXJyZW50bHkgYWN0aXZlIGVsZW1lbnQgd2hlbiBET00gZm9jdXMgaXMgb24gYSBjb21wb3NpdGUgd2lkZ2V0LCB0ZXh0Ym94LCBncm91cCwgb3IgYXBwbGljYXRpb24uICovXG4gICAgXCJhcmlhLWFjdGl2ZWRlc2NlbmRhbnRcIj86IHN0cmluZztcbiAgICAvKiogSW5kaWNhdGVzIHdoZXRoZXIgYXNzaXN0aXZlIHRlY2hub2xvZ2llcyB3aWxsIHByZXNlbnQgYWxsLCBvciBvbmx5IHBhcnRzIG9mLCB0aGUgY2hhbmdlZCByZWdpb24gYmFzZWQgb24gdGhlIGNoYW5nZSBub3RpZmljYXRpb25zIGRlZmluZWQgYnkgdGhlIGFyaWEtcmVsZXZhbnQgYXR0cmlidXRlLiAqL1xuICAgIFwiYXJpYS1hdG9taWNcIj86IGJvb2xlYW4gfCBcImZhbHNlXCIgfCBcInRydWVcIjtcbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciBpbnB1dHRpbmcgdGV4dCBjb3VsZCB0cmlnZ2VyIGRpc3BsYXkgb2Ygb25lIG9yIG1vcmUgcHJlZGljdGlvbnMgb2YgdGhlIHVzZXIncyBpbnRlbmRlZCB2YWx1ZSBmb3IgYW4gaW5wdXQgYW5kIHNwZWNpZmllcyBob3cgcHJlZGljdGlvbnMgd291bGQgYmVcbiAgICAgKiBwcmVzZW50ZWQgaWYgdGhleSBhcmUgbWFkZS5cbiAgICAgKi9cbiAgICBcImFyaWEtYXV0b2NvbXBsZXRlXCI/OiBcIm5vbmVcIiB8IFwiaW5saW5lXCIgfCBcImxpc3RcIiB8IFwiYm90aFwiO1xuICAgIC8qKiBJbmRpY2F0ZXMgYW4gZWxlbWVudCBpcyBiZWluZyBtb2RpZmllZCBhbmQgdGhhdCBhc3Npc3RpdmUgdGVjaG5vbG9naWVzIE1BWSB3YW50IHRvIHdhaXQgdW50aWwgdGhlIG1vZGlmaWNhdGlvbnMgYXJlIGNvbXBsZXRlIGJlZm9yZSBleHBvc2luZyB0aGVtIHRvIHRoZSB1c2VyLiAqL1xuICAgIFwiYXJpYS1idXN5XCI/OiBib29sZWFuIHwgXCJmYWxzZVwiIHwgXCJ0cnVlXCI7XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHRoZSBjdXJyZW50IFwiY2hlY2tlZFwiIHN0YXRlIG9mIGNoZWNrYm94ZXMsIHJhZGlvIGJ1dHRvbnMsIGFuZCBvdGhlciB3aWRnZXRzLlxuICAgICAqIEBzZWUgYXJpYS1wcmVzc2VkIEBzZWUgYXJpYS1zZWxlY3RlZC5cbiAgICAgKi9cbiAgICBcImFyaWEtY2hlY2tlZFwiPzogYm9vbGVhbiB8IFwiZmFsc2VcIiB8IFwibWl4ZWRcIiB8IFwidHJ1ZVwiO1xuICAgIC8qKlxuICAgICAqIERlZmluZXMgdGhlIHRvdGFsIG51bWJlciBvZiBjb2x1bW5zIGluIGEgdGFibGUsIGdyaWQsIG9yIHRyZWVncmlkLlxuICAgICAqIEBzZWUgYXJpYS1jb2xpbmRleC5cbiAgICAgKi9cbiAgICBcImFyaWEtY29sY291bnRcIj86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIGFuIGVsZW1lbnQncyBjb2x1bW4gaW5kZXggb3IgcG9zaXRpb24gd2l0aCByZXNwZWN0IHRvIHRoZSB0b3RhbCBudW1iZXIgb2YgY29sdW1ucyB3aXRoaW4gYSB0YWJsZSwgZ3JpZCwgb3IgdHJlZWdyaWQuXG4gICAgICogQHNlZSBhcmlhLWNvbGNvdW50IEBzZWUgYXJpYS1jb2xzcGFuLlxuICAgICAqL1xuICAgIFwiYXJpYS1jb2xpbmRleFwiPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIERlZmluZXMgdGhlIG51bWJlciBvZiBjb2x1bW5zIHNwYW5uZWQgYnkgYSBjZWxsIG9yIGdyaWRjZWxsIHdpdGhpbiBhIHRhYmxlLCBncmlkLCBvciB0cmVlZ3JpZC5cbiAgICAgKiBAc2VlIGFyaWEtY29saW5kZXggQHNlZSBhcmlhLXJvd3NwYW4uXG4gICAgICovXG4gICAgXCJhcmlhLWNvbHNwYW5cIj86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBJZGVudGlmaWVzIHRoZSBlbGVtZW50IChvciBlbGVtZW50cykgd2hvc2UgY29udGVudHMgb3IgcHJlc2VuY2UgYXJlIGNvbnRyb2xsZWQgYnkgdGhlIGN1cnJlbnQgZWxlbWVudC5cbiAgICAgKiBAc2VlIGFyaWEtb3ducy5cbiAgICAgKi9cbiAgICBcImFyaWEtY29udHJvbHNcIj86IHN0cmluZztcbiAgICAvKiogSW5kaWNhdGVzIHRoZSBlbGVtZW50IHRoYXQgcmVwcmVzZW50cyB0aGUgY3VycmVudCBpdGVtIHdpdGhpbiBhIGNvbnRhaW5lciBvciBzZXQgb2YgcmVsYXRlZCBlbGVtZW50cy4gKi9cbiAgICBcImFyaWEtY3VycmVudFwiPzogYm9vbGVhbiB8IFwiZmFsc2VcIiB8IFwidHJ1ZVwiIHwgXCJwYWdlXCIgfCBcInN0ZXBcIiB8IFwibG9jYXRpb25cIiB8IFwiZGF0ZVwiIHwgXCJ0aW1lXCI7XG4gICAgLyoqXG4gICAgICogSWRlbnRpZmllcyB0aGUgZWxlbWVudCAob3IgZWxlbWVudHMpIHRoYXQgZGVzY3JpYmVzIHRoZSBvYmplY3QuXG4gICAgICogQHNlZSBhcmlhLWxhYmVsbGVkYnlcbiAgICAgKi9cbiAgICBcImFyaWEtZGVzY3JpYmVkYnlcIj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBJZGVudGlmaWVzIHRoZSBlbGVtZW50IHRoYXQgcHJvdmlkZXMgYSBkZXRhaWxlZCwgZXh0ZW5kZWQgZGVzY3JpcHRpb24gZm9yIHRoZSBvYmplY3QuXG4gICAgICogQHNlZSBhcmlhLWRlc2NyaWJlZGJ5LlxuICAgICAqL1xuICAgIFwiYXJpYS1kZXRhaWxzXCI/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHRoYXQgdGhlIGVsZW1lbnQgaXMgcGVyY2VpdmFibGUgYnV0IGRpc2FibGVkLCBzbyBpdCBpcyBub3QgZWRpdGFibGUgb3Igb3RoZXJ3aXNlIG9wZXJhYmxlLlxuICAgICAqIEBzZWUgYXJpYS1oaWRkZW4gQHNlZSBhcmlhLXJlYWRvbmx5LlxuICAgICAqL1xuICAgIFwiYXJpYS1kaXNhYmxlZFwiPzogYm9vbGVhbiB8IFwiZmFsc2VcIiB8IFwidHJ1ZVwiO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB3aGF0IGZ1bmN0aW9ucyBjYW4gYmUgcGVyZm9ybWVkIHdoZW4gYSBkcmFnZ2VkIG9iamVjdCBpcyByZWxlYXNlZCBvbiB0aGUgZHJvcCB0YXJnZXQuXG4gICAgICogQGRlcHJlY2F0ZWQgaW4gQVJJQSAxLjFcbiAgICAgKi9cbiAgICBcImFyaWEtZHJvcGVmZmVjdFwiPzogXCJub25lXCIgfCBcImNvcHlcIiB8IFwiZXhlY3V0ZVwiIHwgXCJsaW5rXCIgfCBcIm1vdmVcIiB8IFwicG9wdXBcIjtcbiAgICAvKipcbiAgICAgKiBJZGVudGlmaWVzIHRoZSBlbGVtZW50IHRoYXQgcHJvdmlkZXMgYW4gZXJyb3IgbWVzc2FnZSBmb3IgdGhlIG9iamVjdC5cbiAgICAgKiBAc2VlIGFyaWEtaW52YWxpZCBAc2VlIGFyaWEtZGVzY3JpYmVkYnkuXG4gICAgICovXG4gICAgXCJhcmlhLWVycm9ybWVzc2FnZVwiPzogc3RyaW5nO1xuICAgIC8qKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgZWxlbWVudCwgb3IgYW5vdGhlciBncm91cGluZyBlbGVtZW50IGl0IGNvbnRyb2xzLCBpcyBjdXJyZW50bHkgZXhwYW5kZWQgb3IgY29sbGFwc2VkLiAqL1xuICAgIFwiYXJpYS1leHBhbmRlZFwiPzogYm9vbGVhbiB8IFwiZmFsc2VcIiB8IFwidHJ1ZVwiO1xuICAgIC8qKlxuICAgICAqIElkZW50aWZpZXMgdGhlIG5leHQgZWxlbWVudCAob3IgZWxlbWVudHMpIGluIGFuIGFsdGVybmF0ZSByZWFkaW5nIG9yZGVyIG9mIGNvbnRlbnQgd2hpY2gsIGF0IHRoZSB1c2VyJ3MgZGlzY3JldGlvbixcbiAgICAgKiBhbGxvd3MgYXNzaXN0aXZlIHRlY2hub2xvZ3kgdG8gb3ZlcnJpZGUgdGhlIGdlbmVyYWwgZGVmYXVsdCBvZiByZWFkaW5nIGluIGRvY3VtZW50IHNvdXJjZSBvcmRlci5cbiAgICAgKi9cbiAgICBcImFyaWEtZmxvd3RvXCI/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIGFuIGVsZW1lbnQncyBcImdyYWJiZWRcIiBzdGF0ZSBpbiBhIGRyYWctYW5kLWRyb3Agb3BlcmF0aW9uLlxuICAgICAqIEBkZXByZWNhdGVkIGluIEFSSUEgMS4xXG4gICAgICovXG4gICAgXCJhcmlhLWdyYWJiZWRcIj86IGJvb2xlYW4gfCBcImZhbHNlXCIgfCBcInRydWVcIjtcbiAgICAvKiogSW5kaWNhdGVzIHRoZSBhdmFpbGFiaWxpdHkgYW5kIHR5cGUgb2YgaW50ZXJhY3RpdmUgcG9wdXAgZWxlbWVudCwgc3VjaCBhcyBtZW51IG9yIGRpYWxvZywgdGhhdCBjYW4gYmUgdHJpZ2dlcmVkIGJ5IGFuIGVsZW1lbnQuICovXG4gICAgXCJhcmlhLWhhc3BvcHVwXCI/OiBib29sZWFuIHwgXCJmYWxzZVwiIHwgXCJ0cnVlXCIgfCBcIm1lbnVcIiB8IFwibGlzdGJveFwiIHwgXCJ0cmVlXCIgfCBcImdyaWRcIiB8IFwiZGlhbG9nXCI7XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgZXhwb3NlZCB0byBhbiBhY2Nlc3NpYmlsaXR5IEFQSS5cbiAgICAgKiBAc2VlIGFyaWEtZGlzYWJsZWQuXG4gICAgICovXG4gICAgXCJhcmlhLWhpZGRlblwiPzogYm9vbGVhbiB8IFwiZmFsc2VcIiB8IFwidHJ1ZVwiO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB0aGUgZW50ZXJlZCB2YWx1ZSBkb2VzIG5vdCBjb25mb3JtIHRvIHRoZSBmb3JtYXQgZXhwZWN0ZWQgYnkgdGhlIGFwcGxpY2F0aW9uLlxuICAgICAqIEBzZWUgYXJpYS1lcnJvcm1lc3NhZ2UuXG4gICAgICovXG4gICAgXCJhcmlhLWludmFsaWRcIj86IGJvb2xlYW4gfCBcImZhbHNlXCIgfCBcInRydWVcIiB8IFwiZ3JhbW1hclwiIHwgXCJzcGVsbGluZ1wiO1xuICAgIC8qKiBJbmRpY2F0ZXMga2V5Ym9hcmQgc2hvcnRjdXRzIHRoYXQgYW4gYXV0aG9yIGhhcyBpbXBsZW1lbnRlZCB0byBhY3RpdmF0ZSBvciBnaXZlIGZvY3VzIHRvIGFuIGVsZW1lbnQuICovXG4gICAgXCJhcmlhLWtleXNob3J0Y3V0c1wiPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIERlZmluZXMgYSBzdHJpbmcgdmFsdWUgdGhhdCBsYWJlbHMgdGhlIGN1cnJlbnQgZWxlbWVudC5cbiAgICAgKiBAc2VlIGFyaWEtbGFiZWxsZWRieS5cbiAgICAgKi9cbiAgICBcImFyaWEtbGFiZWxcIj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBJZGVudGlmaWVzIHRoZSBlbGVtZW50IChvciBlbGVtZW50cykgdGhhdCBsYWJlbHMgdGhlIGN1cnJlbnQgZWxlbWVudC5cbiAgICAgKiBAc2VlIGFyaWEtZGVzY3JpYmVkYnkuXG4gICAgICovXG4gICAgXCJhcmlhLWxhYmVsbGVkYnlcIj86IHN0cmluZztcbiAgICAvKiogRGVmaW5lcyB0aGUgaGllcmFyY2hpY2FsIGxldmVsIG9mIGFuIGVsZW1lbnQgd2l0aGluIGEgc3RydWN0dXJlLiAqL1xuICAgIFwiYXJpYS1sZXZlbFwiPzogbnVtYmVyO1xuICAgIC8qKiBJbmRpY2F0ZXMgdGhhdCBhbiBlbGVtZW50IHdpbGwgYmUgdXBkYXRlZCwgYW5kIGRlc2NyaWJlcyB0aGUgdHlwZXMgb2YgdXBkYXRlcyB0aGUgdXNlciBhZ2VudHMsIGFzc2lzdGl2ZSB0ZWNobm9sb2dpZXMsIGFuZCB1c2VyIGNhbiBleHBlY3QgZnJvbSB0aGUgbGl2ZSByZWdpb24uICovXG4gICAgXCJhcmlhLWxpdmVcIj86IFwib2ZmXCIgfCBcImFzc2VydGl2ZVwiIHwgXCJwb2xpdGVcIjtcbiAgICAvKiogSW5kaWNhdGVzIHdoZXRoZXIgYW4gZWxlbWVudCBpcyBtb2RhbCB3aGVuIGRpc3BsYXllZC4gKi9cbiAgICBcImFyaWEtbW9kYWxcIj86IGJvb2xlYW4gfCBcImZhbHNlXCIgfCBcInRydWVcIjtcbiAgICAvKiogSW5kaWNhdGVzIHdoZXRoZXIgYSB0ZXh0IGJveCBhY2NlcHRzIG11bHRpcGxlIGxpbmVzIG9mIGlucHV0IG9yIG9ubHkgYSBzaW5nbGUgbGluZS4gKi9cbiAgICBcImFyaWEtbXVsdGlsaW5lXCI/OiBib29sZWFuIHwgXCJmYWxzZVwiIHwgXCJ0cnVlXCI7XG4gICAgLyoqIEluZGljYXRlcyB0aGF0IHRoZSB1c2VyIG1heSBzZWxlY3QgbW9yZSB0aGFuIG9uZSBpdGVtIGZyb20gdGhlIGN1cnJlbnQgc2VsZWN0YWJsZSBkZXNjZW5kYW50cy4gKi9cbiAgICBcImFyaWEtbXVsdGlzZWxlY3RhYmxlXCI/OiBib29sZWFuIHwgXCJmYWxzZVwiIHwgXCJ0cnVlXCI7XG4gICAgLyoqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBlbGVtZW50J3Mgb3JpZW50YXRpb24gaXMgaG9yaXpvbnRhbCwgdmVydGljYWwsIG9yIHVua25vd24vYW1iaWd1b3VzLiAqL1xuICAgIFwiYXJpYS1vcmllbnRhdGlvblwiPzogXCJob3Jpem9udGFsXCIgfCBcInZlcnRpY2FsXCI7XG4gICAgLyoqXG4gICAgICogSWRlbnRpZmllcyBhbiBlbGVtZW50IChvciBlbGVtZW50cykgaW4gb3JkZXIgdG8gZGVmaW5lIGEgdmlzdWFsLCBmdW5jdGlvbmFsLCBvciBjb250ZXh0dWFsIHBhcmVudC9jaGlsZCByZWxhdGlvbnNoaXBcbiAgICAgKiBiZXR3ZWVuIERPTSBlbGVtZW50cyB3aGVyZSB0aGUgRE9NIGhpZXJhcmNoeSBjYW5ub3QgYmUgdXNlZCB0byByZXByZXNlbnQgdGhlIHJlbGF0aW9uc2hpcC5cbiAgICAgKiBAc2VlIGFyaWEtY29udHJvbHMuXG4gICAgICovXG4gICAgXCJhcmlhLW93bnNcIj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIGEgc2hvcnQgaGludCAoYSB3b3JkIG9yIHNob3J0IHBocmFzZSkgaW50ZW5kZWQgdG8gYWlkIHRoZSB1c2VyIHdpdGggZGF0YSBlbnRyeSB3aGVuIHRoZSBjb250cm9sIGhhcyBubyB2YWx1ZS5cbiAgICAgKiBBIGhpbnQgY291bGQgYmUgYSBzYW1wbGUgdmFsdWUgb3IgYSBicmllZiBkZXNjcmlwdGlvbiBvZiB0aGUgZXhwZWN0ZWQgZm9ybWF0LlxuICAgICAqL1xuICAgIFwiYXJpYS1wbGFjZWhvbGRlclwiPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIERlZmluZXMgYW4gZWxlbWVudCdzIG51bWJlciBvciBwb3NpdGlvbiBpbiB0aGUgY3VycmVudCBzZXQgb2YgbGlzdGl0ZW1zIG9yIHRyZWVpdGVtcy4gTm90IHJlcXVpcmVkIGlmIGFsbCBlbGVtZW50cyBpbiB0aGUgc2V0IGFyZSBwcmVzZW50IGluIHRoZSBET00uXG4gICAgICogQHNlZSBhcmlhLXNldHNpemUuXG4gICAgICovXG4gICAgXCJhcmlhLXBvc2luc2V0XCI/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHRoZSBjdXJyZW50IFwicHJlc3NlZFwiIHN0YXRlIG9mIHRvZ2dsZSBidXR0b25zLlxuICAgICAqIEBzZWUgYXJpYS1jaGVja2VkIEBzZWUgYXJpYS1zZWxlY3RlZC5cbiAgICAgKi9cbiAgICBcImFyaWEtcHJlc3NlZFwiPzogYm9vbGVhbiB8IFwiZmFsc2VcIiB8IFwibWl4ZWRcIiB8IFwidHJ1ZVwiO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB0aGF0IHRoZSBlbGVtZW50IGlzIG5vdCBlZGl0YWJsZSwgYnV0IGlzIG90aGVyd2lzZSBvcGVyYWJsZS5cbiAgICAgKiBAc2VlIGFyaWEtZGlzYWJsZWQuXG4gICAgICovXG4gICAgXCJhcmlhLXJlYWRvbmx5XCI/OiBib29sZWFuIHwgXCJmYWxzZVwiIHwgXCJ0cnVlXCI7XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHdoYXQgbm90aWZpY2F0aW9ucyB0aGUgdXNlciBhZ2VudCB3aWxsIHRyaWdnZXIgd2hlbiB0aGUgYWNjZXNzaWJpbGl0eSB0cmVlIHdpdGhpbiBhIGxpdmUgcmVnaW9uIGlzIG1vZGlmaWVkLlxuICAgICAqIEBzZWUgYXJpYS1hdG9taWMuXG4gICAgICovXG4gICAgXCJhcmlhLXJlbGV2YW50XCI/OiBcImFkZGl0aW9uc1wiIHwgXCJhZGRpdGlvbnMgdGV4dFwiIHwgXCJhbGxcIiB8IFwicmVtb3ZhbHNcIiB8IFwidGV4dFwiO1xuICAgIC8qKiBJbmRpY2F0ZXMgdGhhdCB1c2VyIGlucHV0IGlzIHJlcXVpcmVkIG9uIHRoZSBlbGVtZW50IGJlZm9yZSBhIGZvcm0gbWF5IGJlIHN1Ym1pdHRlZC4gKi9cbiAgICBcImFyaWEtcmVxdWlyZWRcIj86IGJvb2xlYW4gfCBcImZhbHNlXCIgfCBcInRydWVcIjtcbiAgICAvKiogRGVmaW5lcyBhIGh1bWFuLXJlYWRhYmxlLCBhdXRob3ItbG9jYWxpemVkIGRlc2NyaXB0aW9uIGZvciB0aGUgcm9sZSBvZiBhbiBlbGVtZW50LiAqL1xuICAgIFwiYXJpYS1yb2xlZGVzY3JpcHRpb25cIj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIHRoZSB0b3RhbCBudW1iZXIgb2Ygcm93cyBpbiBhIHRhYmxlLCBncmlkLCBvciB0cmVlZ3JpZC5cbiAgICAgKiBAc2VlIGFyaWEtcm93aW5kZXguXG4gICAgICovXG4gICAgXCJhcmlhLXJvd2NvdW50XCI/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogRGVmaW5lcyBhbiBlbGVtZW50J3Mgcm93IGluZGV4IG9yIHBvc2l0aW9uIHdpdGggcmVzcGVjdCB0byB0aGUgdG90YWwgbnVtYmVyIG9mIHJvd3Mgd2l0aGluIGEgdGFibGUsIGdyaWQsIG9yIHRyZWVncmlkLlxuICAgICAqIEBzZWUgYXJpYS1yb3djb3VudCBAc2VlIGFyaWEtcm93c3Bhbi5cbiAgICAgKi9cbiAgICBcImFyaWEtcm93aW5kZXhcIj86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIHRoZSBudW1iZXIgb2Ygcm93cyBzcGFubmVkIGJ5IGEgY2VsbCBvciBncmlkY2VsbCB3aXRoaW4gYSB0YWJsZSwgZ3JpZCwgb3IgdHJlZWdyaWQuXG4gICAgICogQHNlZSBhcmlhLXJvd2luZGV4IEBzZWUgYXJpYS1jb2xzcGFuLlxuICAgICAqL1xuICAgIFwiYXJpYS1yb3dzcGFuXCI/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHRoZSBjdXJyZW50IFwic2VsZWN0ZWRcIiBzdGF0ZSBvZiB2YXJpb3VzIHdpZGdldHMuXG4gICAgICogQHNlZSBhcmlhLWNoZWNrZWQgQHNlZSBhcmlhLXByZXNzZWQuXG4gICAgICovXG4gICAgXCJhcmlhLXNlbGVjdGVkXCI/OiBib29sZWFuIHwgXCJmYWxzZVwiIHwgXCJ0cnVlXCI7XG4gICAgLyoqXG4gICAgICogRGVmaW5lcyB0aGUgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBjdXJyZW50IHNldCBvZiBsaXN0aXRlbXMgb3IgdHJlZWl0ZW1zLiBOb3QgcmVxdWlyZWQgaWYgYWxsIGVsZW1lbnRzIGluIHRoZSBzZXQgYXJlIHByZXNlbnQgaW4gdGhlIERPTS5cbiAgICAgKiBAc2VlIGFyaWEtcG9zaW5zZXQuXG4gICAgICovXG4gICAgXCJhcmlhLXNldHNpemVcIj86IG51bWJlcjtcbiAgICAvKiogSW5kaWNhdGVzIGlmIGl0ZW1zIGluIGEgdGFibGUgb3IgZ3JpZCBhcmUgc29ydGVkIGluIGFzY2VuZGluZyBvciBkZXNjZW5kaW5nIG9yZGVyLiAqL1xuICAgIFwiYXJpYS1zb3J0XCI/OiBcIm5vbmVcIiB8IFwiYXNjZW5kaW5nXCIgfCBcImRlc2NlbmRpbmdcIiB8IFwib3RoZXJcIjtcbiAgICAvKiogRGVmaW5lcyB0aGUgbWF4aW11bSBhbGxvd2VkIHZhbHVlIGZvciBhIHJhbmdlIHdpZGdldC4gKi9cbiAgICBcImFyaWEtdmFsdWVtYXhcIj86IG51bWJlcjtcbiAgICAvKiogRGVmaW5lcyB0aGUgbWluaW11bSBhbGxvd2VkIHZhbHVlIGZvciBhIHJhbmdlIHdpZGdldC4gKi9cbiAgICBcImFyaWEtdmFsdWVtaW5cIj86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIHRoZSBjdXJyZW50IHZhbHVlIGZvciBhIHJhbmdlIHdpZGdldC5cbiAgICAgKiBAc2VlIGFyaWEtdmFsdWV0ZXh0LlxuICAgICAqL1xuICAgIFwiYXJpYS12YWx1ZW5vd1wiPzogbnVtYmVyO1xuICAgIC8qKiBEZWZpbmVzIHRoZSBodW1hbiByZWFkYWJsZSB0ZXh0IGFsdGVybmF0aXZlIG9mIGFyaWEtdmFsdWVub3cgZm9yIGEgcmFuZ2Ugd2lkZ2V0LiAqL1xuICAgIFwiYXJpYS12YWx1ZXRleHRcIj86IHN0cmluZztcbn0iLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcIi4vT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZVN1YnNjcmlwdGlvbiB9IGZyb20gXCIuL09ic2VydmFibGVTdWJzY3JpcHRpb25cIjtcbmltcG9ydCB7IGV2YWx1YXRpb25TdGFjayB9IGZyb20gXCIuL0NvbXB1dGVkT2JzZXJ2YWJsZVwiO1xuXG5sZXQgYmluOiBNb2RpZmlhYmxlT2JzZXJ2YWJsZTxhbnk+W10gPSBbXSwgYmluTGVuZ3RoID0gMDtcblxuZXhwb3J0IGNsYXNzIE1vZGlmaWFibGVPYnNlcnZhYmxlPFQ+IGltcGxlbWVudHMgT2JzZXJ2YWJsZTxUPiB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kaXNwb3NlID0gdGhpcy5kaXNwb3NlLmJpbmQodGhpcyk7XG4gICAgICAgICh0aGlzLl9zdWJzY3JpcHRpb25IZWFkLm5leHQgPSB0aGlzLl9zdWJzY3JpcHRpb25UYWlsKS5wcmV2aW91cyA9IHRoaXMuX3N1YnNjcmlwdGlvbkhlYWQ7XG4gICAgfVxuXG4gICAgd3JhcHBlZFZhbHVlOiBUO1xuXG4gICAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uSGVhZCA9IE9ic2VydmFibGVTdWJzY3JpcHRpb24uY3JlYXRlPChuZXdWYWx1ZTogVCwgb2xkVmFsdWU6IFQpID0+IGFueT4oKTtcbiAgICBwcml2YXRlIF9zdWJzY3JpcHRpb25UYWlsID0gT2JzZXJ2YWJsZVN1YnNjcmlwdGlvbi5jcmVhdGU8KG5ld1ZhbHVlOiBULCBvbGRWYWx1ZTogVCkgPT4gYW55PigpO1xuXG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICBpZiAoZXZhbHVhdGlvblN0YWNrLmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IGNvID0gZXZhbHVhdGlvblN0YWNrW2V2YWx1YXRpb25TdGFjay5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGlmICghY28ub2JzZXJ2YWJsZXMuaGFzKHRoaXMpKVxuICAgICAgICAgICAgICAgIGNvLm9ic2VydmFibGVzLnNldCh0aGlzLCB0aGlzLnN1YnNjcmliZVNuZWFrSW5MaW5lKGNvLnJlZnJlc2gpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy53cmFwcGVkVmFsdWU7XG4gICAgfVxuXG4gICAgc2V0IHZhbHVlKG5ld1ZhbHVlOiBUKSB7XG4gICAgICAgIGxldCBvbGRWYWx1ZSA9IHRoaXMud3JhcHBlZFZhbHVlO1xuICAgICAgICBpZiAobmV3VmFsdWUgIT09IG9sZFZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLndyYXBwZWRWYWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlTdWJzY3JpYmVycyhuZXdWYWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGVlaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMud3JhcHBlZFZhbHVlO1xuICAgIH1cblxuICAgIHN1YnNjcmliZShjYWxsYmFjazogKG5ld1ZhbHVlOiBULCBvbGRWYWx1ZTogVCkgPT4gYW55KSB7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlU3Vic2NyaXB0aW9uLmNyZWF0ZUFuZFByZXBlbmRUb1RhaWwodGhpcy5fc3Vic2NyaXB0aW9uVGFpbCwgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIHN1YnNjcmliZUludm9rZShjYWxsYmFjazogKG5ld1ZhbHVlOiBULCBvbGRWYWx1ZTogVCkgPT4gYW55KSB7XG4gICAgICAgIGNhbGxiYWNrKHRoaXMud3JhcHBlZFZhbHVlLCB1bmRlZmluZWQpO1xuICAgICAgICBsZXQgc3Vic2NyaXB0aW9uID0gT2JzZXJ2YWJsZVN1YnNjcmlwdGlvbi5jcmVhdGVBbmRQcmVwZW5kVG9UYWlsKHRoaXMuX3N1YnNjcmlwdGlvblRhaWwsIGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBzdWJzY3JpYmVTbmVha0luTGluZShjYWxsYmFjazogKG5ld1ZhbHVlOiBULCBvbGRWYWx1ZTogVCkgPT4gYW55KSB7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlU3Vic2NyaXB0aW9uLmNyZWF0ZUFuZEFwcGVuZFRvSGVhZCh0aGlzLl9zdWJzY3JpcHRpb25IZWFkLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlSW52b2tlU25lYWtJbkxpbmUoY2FsbGJhY2s6IChuZXdWYWx1ZTogVCwgb2xkVmFsdWU6IFQpID0+IGFueSkge1xuICAgICAgICBjYWxsYmFjayh0aGlzLndyYXBwZWRWYWx1ZSwgdW5kZWZpbmVkKTtcbiAgICAgICAgbGV0IHN1YnNjcmlwdGlvbiA9IE9ic2VydmFibGVTdWJzY3JpcHRpb24uY3JlYXRlQW5kQXBwZW5kVG9IZWFkKHRoaXMuX3N1YnNjcmlwdGlvbkhlYWQsIGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBwcml2YXRlIG5vdGlmeVN1YnNjcmliZXJzKG5ld1ZhbHVlOiBULCBvbGRWYWx1ZTogVCkge1xuICAgICAgICBmb3IgKGxldCBub2RlID0gdGhpcy5fc3Vic2NyaXB0aW9uSGVhZC5uZXh0OyBub2RlICE9PSB0aGlzLl9zdWJzY3JpcHRpb25UYWlsOykge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnROb2RlID0gbm9kZTtcbiAgICAgICAgICAgIGlmIChub2RlLm5leHQgJiYgbm9kZS5uZXh0ICE9PSB0aGlzLl9zdWJzY3JpcHRpb25UYWlsICYmICFub2RlLm5leHQuY2FsbGJhY2spXG4gICAgICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgICBub2RlID0gbm9kZS5uZXh0O1xuICAgICAgICAgICAgY3VycmVudE5vZGUuY2FsbGJhY2sobmV3VmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgbm90aWZ5U3Vic2NyaWJlcnNFeGNlcHQobmV3VmFsdWU6IFQsIG9sZFZhbHVlOiBULCBleGVtcHRlZE9ic2VydmFibGVTdWJzY3JpcHRpb246IE9ic2VydmFibGVTdWJzY3JpcHRpb248KG5ld1ZhbHVlOiBULCBvbGRWYWx1ZTogVCkgPT4gYW55Pikge1xuICAgICAgICBmb3IgKGxldCBub2RlID0gdGhpcy5fc3Vic2NyaXB0aW9uSGVhZC5uZXh0OyBub2RlICE9PSB0aGlzLl9zdWJzY3JpcHRpb25UYWlsOykge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnROb2RlID0gbm9kZTtcbiAgICAgICAgICAgIG5vZGUgPSBub2RlLm5leHQ7XG4gICAgICAgICAgICBpZiAoY3VycmVudE5vZGUgIT09IGV4ZW1wdGVkT2JzZXJ2YWJsZVN1YnNjcmlwdGlvbilcbiAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZS5jYWxsYmFjayhuZXdWYWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0VmFsdWVEb250Tm90aWZ5U3Vic2NyaXB0aW9uKG5ld1ZhbHVlOiBULCBleGVtcHRlZE9ic2VydmFibGVTdWJzY3JpcHRpb246IE9ic2VydmFibGVTdWJzY3JpcHRpb248KG5ld1ZhbHVlOiBULCBvbGRWYWx1ZTogVCkgPT4gYW55Pikge1xuICAgICAgICBsZXQgb2xkVmFsdWUgPSB0aGlzLndyYXBwZWRWYWx1ZTtcbiAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSBvbGRWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy53cmFwcGVkVmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5U3Vic2NyaWJlcnNFeGNlcHQobmV3VmFsdWUsIG9sZFZhbHVlLCBleGVtcHRlZE9ic2VydmFibGVTdWJzY3JpcHRpb24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW52YWxpZGF0ZSgpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy53cmFwcGVkVmFsdWU7XG4gICAgICAgIHRoaXMubm90aWZ5U3Vic2NyaWJlcnModmFsdWUsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBkaXNwb3NlKCkge1xuICAgICAgICB0aGlzLndyYXBwZWRWYWx1ZSA9IG51bGw7XG4gICAgICAgIGZvciAobGV0IG5vZGUgPSB0aGlzLl9zdWJzY3JpcHRpb25IZWFkLm5leHQ7IG5vZGUgIT09IHRoaXMuX3N1YnNjcmlwdGlvblRhaWw7KSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudE5vZGUgPSBub2RlO1xuICAgICAgICAgICAgbm9kZSA9IG5vZGUubmV4dDtcbiAgICAgICAgICAgIGN1cnJlbnROb2RlLnJlY3ljbGUoKTtcbiAgICAgICAgfVxuICAgICAgICAodGhpcy5fc3Vic2NyaXB0aW9uSGVhZC5uZXh0ID0gdGhpcy5fc3Vic2NyaXB0aW9uVGFpbCkucHJldmlvdXMgPSB0aGlzLl9zdWJzY3JpcHRpb25IZWFkO1xuICAgICAgICBpZiAoYmluLmxlbmd0aCA9PT0gYmluTGVuZ3RoKVxuICAgICAgICAgICAgYmluLnB1c2godGhpcyk7XG4gICAgICAgIGVsc2UgYmluW2Jpbkxlbmd0aF0gPSB0aGlzO1xuICAgICAgICArK2Jpbkxlbmd0aDtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvPFQ+KHZhbHVlPzogVCk6IE1vZGlmaWFibGVPYnNlcnZhYmxlPFQ+IHtcbiAgICBpZiAoYmluTGVuZ3RoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSA8TW9kaWZpYWJsZU9ic2VydmFibGU8VD4+YmluWy0tYmluTGVuZ3RoXTtcbiAgICAgICAgYmluW2Jpbkxlbmd0aF0gPSBudWxsO1xuICAgIH1cbiAgICBlbHNlIHZhciByZXN1bHQgPSBuZXcgTW9kaWZpYWJsZU9ic2VydmFibGU8VD4oKTtcbiAgICByZXN1bHQud3JhcHBlZFZhbHVlID0gdmFsdWU7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsImltcG9ydCB7IE9ic2VydmFibGVTdWJzY3JpcHRpb24gfSBmcm9tIFwiLi9PYnNlcnZhYmxlU3Vic2NyaXB0aW9uXCI7XG5pbXBvcnQgeyBldmFsdWF0aW9uU3RhY2sgfSBmcm9tIFwiLi9Db21wdXRlZE9ic2VydmFibGVcIjtcblxuZXhwb3J0IGNsYXNzIE9ic2VydmFibGVMaXN0PFQ+IHtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBpdGVyYWJsZT86IEl0ZXJhYmxlPFQ+KSB7XG4gICAgICAgIHRoaXMuZGlzcG9zZSA9IHRoaXMuZGlzcG9zZS5iaW5kKHRoaXMpO1xuICAgICAgICAodGhpcy5fc3Vic2NyaXB0aW9uc0hlYWQubmV4dCA9IHRoaXMuX3N1YnNjcmlwdGlvbnNUYWlsKS5wcmV2aW91cyA9IHRoaXMuX3N1YnNjcmlwdGlvbnNIZWFkO1xuICAgICAgICAodGhpcy5oZWFkLm5leHQgPSB0aGlzLnRhaWwpLnByZXZpb3VzID0gdGhpcy5oZWFkO1xuICAgICAgICBpZiAoaXRlcmFibGUpXG4gICAgICAgICAgICBmb3IgKGxldCBpIG9mIGl0ZXJhYmxlKVxuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kKGkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBoZWFkOiBPYnNlcnZhYmxlTGlzdE5vZGU8VD4gPSB7fSBhcyBhbnk7XG4gICAgcHVibGljIHRhaWw6IE9ic2VydmFibGVMaXN0Tm9kZTxUPiA9IHt9IGFzIGFueTtcblxuICAgIHByb3RlY3RlZCBpdGVtVG9Ob2RlID0gbmV3IE1hcDxULCBPYnNlcnZhYmxlTGlzdE5vZGU8VD4+KCk7XG5cbiAgICBwcml2YXRlIF9zdWJzY3JpcHRpb25zSGVhZCA9IE9ic2VydmFibGVTdWJzY3JpcHRpb24uY3JlYXRlPChtb2RpZmljYXRpb25zOiBPYnNlcnZhYmxlTGlzdE1vZGlmaWNhdGlvbjxUPltdKSA9PiBhbnk+KCk7XG4gICAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uc1RhaWwgPSBPYnNlcnZhYmxlU3Vic2NyaXB0aW9uLmNyZWF0ZTwobW9kaWZpY2F0aW9uczogT2JzZXJ2YWJsZUxpc3RNb2RpZmljYXRpb248VD5bXSkgPT4gYW55PigpO1xuXG4gICAgYXBwZW5kKGl0ZW06IFQpIHtcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLml0ZW1Ub05vZGUuZ2V0KGl0ZW0pO1xuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgaWYgKG5vZGUubmV4dCA9PT0gdGhpcy50YWlsKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGxldCBwcmV2aW91cyA9IG5vZGUucHJldmlvdXMsIG5leHQgPSBub2RlLm5leHQ7XG4gICAgICAgICAgICBwcmV2aW91cy5uZXh0ID0gbmV4dDtcbiAgICAgICAgICAgIG5leHQucHJldmlvdXMgPSBwcmV2aW91cztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHRoaXMuaXRlbVRvTm9kZS5zZXQoaXRlbSwgbm9kZSA9IHsgaXRlbTogaXRlbSB9IGFzIGFueSk7XG4gICAgICAgIChub2RlLnByZXZpb3VzID0gdGhpcy50YWlsLnByZXZpb3VzKS5uZXh0ID0gbm9kZTtcbiAgICAgICAgKG5vZGUubmV4dCA9IHRoaXMudGFpbCkucHJldmlvdXMgPSBub2RlO1xuICAgICAgICB0aGlzLm5vdGlmeVN1YnNjcmliZXJzKFt7IHR5cGU6IE9ic2VydmFibGVMaXN0TW9kaWZpY2F0aW9uVHlwZS5BcHBlbmQsIGl0ZW06IGl0ZW0gfV0pO1xuICAgIH1cblxuICAgIHJlbW92ZShpdGVtOiBUKSB7XG4gICAgICAgIGxldCBub2RlID0gdGhpcy5pdGVtVG9Ob2RlLmdldChpdGVtKTtcbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbVRvTm9kZS5kZWxldGUoaXRlbSk7XG4gICAgICAgICAgICBsZXQgcHJldmlvdXMgPSBub2RlLnByZXZpb3VzLCBuZXh0ID0gbm9kZS5uZXh0O1xuICAgICAgICAgICAgcHJldmlvdXMubmV4dCA9IG5leHQ7XG4gICAgICAgICAgICBuZXh0LnByZXZpb3VzID0gcHJldmlvdXM7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVN1YnNjcmliZXJzKFt7IHR5cGU6IE9ic2VydmFibGVMaXN0TW9kaWZpY2F0aW9uVHlwZS5SZW1vdmUsIGl0ZW06IGl0ZW0gfV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5zZXJ0QmVmb3JlKG5ld0l0ZW06IFQsIHJlZkl0ZW06IFQpIHtcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLml0ZW1Ub05vZGUuZ2V0KG5ld0l0ZW0pO1xuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgbGV0IHByZXZpb3VzID0gbm9kZS5wcmV2aW91cywgbmV4dCA9IG5vZGUubmV4dDtcbiAgICAgICAgICAgIHByZXZpb3VzLm5leHQgPSBuZXh0O1xuICAgICAgICAgICAgbmV4dC5wcmV2aW91cyA9IHByZXZpb3VzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgdGhpcy5pdGVtVG9Ob2RlLnNldChuZXdJdGVtLCBub2RlID0geyBpdGVtOiBuZXdJdGVtIH0gYXMgYW55KTtcbiAgICAgICAgbGV0IHJlZk5vZGU6IE9ic2VydmFibGVMaXN0Tm9kZTxUPjtcbiAgICAgICAgaWYgKHJlZkl0ZW0gIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJlZk5vZGUgPSB0aGlzLml0ZW1Ub05vZGUuZ2V0KHJlZkl0ZW0pO1xuICAgICAgICAgICAgaWYgKCFyZWZOb2RlKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBPYnNlcnZhYmxlTGlzdFJlZkl0ZW1Ob3RGb3VuZEVycm9yKHJlZkl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgcmVmTm9kZSA9IHRoaXMudGFpbDtcbiAgICAgICAgaWYgKHJlZk5vZGUucHJldmlvdXMgPT09IG5vZGUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIChub2RlLnByZXZpb3VzID0gcmVmTm9kZS5wcmV2aW91cykubmV4dCA9IG5vZGU7XG4gICAgICAgIChub2RlLm5leHQgPSByZWZOb2RlKS5wcmV2aW91cyA9IG5vZGU7XG4gICAgICAgIHRoaXMubm90aWZ5U3Vic2NyaWJlcnMoW3sgdHlwZTogT2JzZXJ2YWJsZUxpc3RNb2RpZmljYXRpb25UeXBlLkluc2VydEJlZm9yZSwgaXRlbTogbmV3SXRlbSwgcmVmSXRlbTogcmVmSXRlbSB9XSk7XG4gICAgfVxuXG4gICAgW1N5bWJvbC5pdGVyYXRvcl0oKTogSXRlcmF0b3I8VD4ge1xuICAgICAgICBpZiAoZXZhbHVhdGlvblN0YWNrLmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IGNvID0gZXZhbHVhdGlvblN0YWNrW2V2YWx1YXRpb25TdGFjay5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGlmICghY28ub2JzZXJ2YWJsZXMuaGFzKHRoaXMpKVxuICAgICAgICAgICAgICAgIGNvLm9ic2VydmFibGVzLnNldCh0aGlzLCB0aGlzLnN1YnNjcmliZVNuZWFrSW5MaW5lKGNvLnJlZnJlc2gpKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuaGVhZDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5leHQ6ICgpOiBJdGVyYXRvclJlc3VsdDxUPiA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZSA9IG5vZGUubmV4dDtcbiAgICAgICAgICAgICAgICBpZiAobm9kZSAhPT0gdGhpcy50YWlsKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbm9kZS5pdGVtLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9IGFzIGFueTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzdWJzY3JpYmUoYWN0aW9uOiAobW9kaWZpY2F0aW9uczogT2JzZXJ2YWJsZUxpc3RNb2RpZmljYXRpb248VD5bXSkgPT4gYW55KSB7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlU3Vic2NyaXB0aW9uLmNyZWF0ZUFuZFByZXBlbmRUb1RhaWwodGhpcy5fc3Vic2NyaXB0aW9uc1RhaWwsIGFjdGlvbik7XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlU25lYWtJbkxpbmUoYWN0aW9uOiAobW9kaWZpY2F0aW9uczogT2JzZXJ2YWJsZUxpc3RNb2RpZmljYXRpb248VD5bXSkgPT4gYW55KSB7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlU3Vic2NyaXB0aW9uLmNyZWF0ZUFuZEFwcGVuZFRvSGVhZCh0aGlzLl9zdWJzY3JpcHRpb25zSGVhZCwgYWN0aW9uKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbm90aWZ5U3Vic2NyaWJlcnMobW9kaWZpY2F0aW9uczogT2JzZXJ2YWJsZUxpc3RNb2RpZmljYXRpb248VD5bXSkge1xuICAgICAgICBmb3IgKGxldCBub2RlID0gdGhpcy5fc3Vic2NyaXB0aW9uc0hlYWQubmV4dDsgbm9kZSAhPSB0aGlzLl9zdWJzY3JpcHRpb25zVGFpbDspIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50Tm9kZSA9IG5vZGU7XG4gICAgICAgICAgICBub2RlID0gbm9kZS5uZXh0O1xuICAgICAgICAgICAgY3VycmVudE5vZGUuY2FsbGJhY2sobW9kaWZpY2F0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNwb3NlKCkge1xuICAgICAgICBkZWxldGUgdGhpcy5oZWFkO1xuICAgICAgICBkZWxldGUgdGhpcy50YWlsO1xuICAgICAgICBmb3IgKGxldCBub2RlID0gdGhpcy5fc3Vic2NyaXB0aW9uc0hlYWQubmV4dDsgbm9kZSAhPSB0aGlzLl9zdWJzY3JpcHRpb25zVGFpbDspIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50Tm9kZSA9IG5vZGU7XG4gICAgICAgICAgICBub2RlID0gbm9kZS5uZXh0O1xuICAgICAgICAgICAgY3VycmVudE5vZGUucmVjeWNsZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnNIZWFkLnJlY3ljbGUoKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuX3N1YnNjcmlwdGlvbnNIZWFkO1xuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25zVGFpbC5yZWN5Y2xlKCk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9zdWJzY3JpcHRpb25zVGFpbDtcbiAgICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9ic2VydmFibGVMaXN0Tm9kZTxUPiB7XG5cbiAgICBwcmV2aW91czogT2JzZXJ2YWJsZUxpc3ROb2RlPFQ+O1xuICAgIG5leHQ6IE9ic2VydmFibGVMaXN0Tm9kZTxUPjtcbiAgICBpdGVtOiBUO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9ic2VydmFibGVMaXN0TW9kaWZpY2F0aW9uPFQ+IHtcblxuICAgIHR5cGU6IE9ic2VydmFibGVMaXN0TW9kaWZpY2F0aW9uVHlwZTtcbiAgICBpdGVtOiBUO1xuICAgIHJlZkl0ZW0/OiBUO1xufVxuZXhwb3J0IGVudW0gT2JzZXJ2YWJsZUxpc3RNb2RpZmljYXRpb25UeXBlIHtcblxuICAgIEFwcGVuZCxcbiAgICBJbnNlcnRCZWZvcmUsXG4gICAgUmVtb3ZlXG59XG5cbmV4cG9ydCBjbGFzcyBPYnNlcnZhYmxlTGlzdFJlZkl0ZW1Ob3RGb3VuZEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKHJlZkl0ZW0pIHtcbiAgICAgICAgc3VwZXIoYFJlZmVyZW5jZWQgaXRlbSAnJHtyZWZJdGVtfScgd2FzIG5vdCBmb3VuZGApO1xuICAgIH1cbn0iLCJcbi8vIEVhY2ggb2JzZXJ2YWJsZSBrZWVwcyBhIGRvdWJseS1saW5rZWQgbGlzdCBvZiBzdWJzY3JpcHRpb25zIChjYWxsYmFja3MgdG8gaW52b2tlIHdoZW4gYSBzdGF0ZSBjaGFuZ2VzKS5cbi8vIEl0IGlzIGEgZG91Ymx5LWxpbmtlZCBsaXN0IGJlY2F1c2UgaW5zZXJ0aW9ucyBhbmQgZGVsZXRpb25zIHNob3VsZCBiZSBmYXN0LlxuLy8gVGhlIGRvdWJseS1saW5rZWQgbGlzdCB1c3VhbGx5IGhhcyBhIGhlYWQgYW5kIGEgdGFpbC5cbi8vIFdoZW4gYSBzdWJzY3JpcHRpb24gaXMgbm8gbG9uZ2VyIG5lZWRlZCwgaXQgc2hvdWxkIGJlIHJlY3ljbGVkIGZvciBsYXRlciB1c2FnZS5cbi8vIFRoZSBiaW4gaW1tZWRpYXRlbHkgYmVsb3cga2VlcHMgcmVmZXJlbmNlcyB0byByZWFkeS10by11c2Ugc3Vic2NyaXB0aW9ucyB0aGF0IGhhdmUgYmVlbiByZWN5Y2xlZC5cblxubGV0IGJpbjogT2JzZXJ2YWJsZVN1YnNjcmlwdGlvbjxhbnk+W10gPSBbXSwgYmluTGVuZ3RoID0gMDtcblxuZXhwb3J0IGNsYXNzIE9ic2VydmFibGVTdWJzY3JpcHRpb248VD4ge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZGlzcG9zZSA9IHRoaXMuZGlzcG9zZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgb3IgcmV0dXJucyBhIHJlY3ljbGVkIGluc3RhbmNlLlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHN0YXRpYyBjcmVhdGU8VD4oKTogT2JzZXJ2YWJsZVN1YnNjcmlwdGlvbjxUPiB7XG4gICAgICAgIGlmIChiaW5MZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCBleGlzdGluZyA9IGJpblstLWJpbkxlbmd0aF07XG4gICAgICAgICAgICBiaW5bYmluTGVuZ3RoXSA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gZXhpc3Rpbmc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlU3Vic2NyaXB0aW9uKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbmQgYXBwZW5kcyBhIG5ldyBzdWJzY3JpcHRpb24gdG8gcmlnaHQgYmVmb3JlIHRoZSB0YWlsLlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHN0YXRpYyBjcmVhdGVBbmRQcmVwZW5kVG9UYWlsPFQ+KHRhaWw6IE9ic2VydmFibGVTdWJzY3JpcHRpb248VD4sIGNhbGxiYWNrOiBUKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBPYnNlcnZhYmxlU3Vic2NyaXB0aW9uLmNyZWF0ZTxUPigpO1xuICAgICAgICAocmVzdWx0LnByZXZpb3VzID0gdGFpbC5wcmV2aW91cykubmV4dCA9IHJlc3VsdDtcbiAgICAgICAgKHJlc3VsdC5uZXh0ID0gdGFpbCkucHJldmlvdXMgPSByZXN1bHQ7XG4gICAgICAgIHJlc3VsdC5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW5kIHByZXBlbmRzIGEgbmV3IHN1YnNjcmlwdGlvbiB0byByaWdodCBhZnRlciB0aGUgaGVhZC5cbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlQW5kQXBwZW5kVG9IZWFkPFQ+KGhlYWQ6IE9ic2VydmFibGVTdWJzY3JpcHRpb248VD4sIGNhbGxiYWNrOiBUKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBPYnNlcnZhYmxlU3Vic2NyaXB0aW9uLmNyZWF0ZTxUPigpO1xuICAgICAgICAocmVzdWx0Lm5leHQgPSBoZWFkLm5leHQpLnByZXZpb3VzID0gcmVzdWx0O1xuICAgICAgICAocmVzdWx0LnByZXZpb3VzID0gaGVhZCkubmV4dCA9IHJlc3VsdDtcbiAgICAgICAgcmVzdWx0LmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgY2FsbGJhY2s6IFQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcHJldmlvdXMgbm9kZSBpbiB0aGUgZG91Ymx5LWxpbmtlZCBsaXN0LlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHByZXZpb3VzOiBPYnNlcnZhYmxlU3Vic2NyaXB0aW9uPFQ+O1xuXG4gICAgLyoqXG4gICAgICogVGhlIG5leHQgbm9kZSBpbiB0aGUgZG91Ymx5LWxpbmtlZCBsaXN0LlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIG5leHQ6IE9ic2VydmFibGVTdWJzY3JpcHRpb248VD47XG5cbiAgICBwcml2YXRlIF9zdXNwZW5kZWRDYWxsYmFjazogVDtcbiAgICBwcml2YXRlIF9zdXNwZW5kZWRWYWx1ZTogVDtcblxuICAgIHN1c3BlbmQoKSB7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWN5Y2xlcyBhIHN1YnNjcmlwdGlvbiAocGxhY2VzIGl0IGluIHRoZSBiaW4pIHN1Y2ggdGhhdCBpdCBtYXkgYmUgcmV1c2VkLlxuICAgICAqIEByZW1hcmtzXG4gICAgICogVXNlIHVuc3Vic2NyaWJlQW5kUmVjeWNsZSgpIGlmIHlvdSBpbnN0ZWFkIHdpc2ggdG8gYm90aCB1bnN1YnNjcmliZSBhbmQgcmVjeWNsZS5cbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICByZWN5Y2xlKCkge1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnByZXZpb3VzID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLm5leHQgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChiaW4ubGVuZ3RoID09PSBiaW5MZW5ndGgpXG4gICAgICAgICAgICBiaW4ucHVzaCh0aGlzKTtcbiAgICAgICAgZWxzZSBiaW5bYmluTGVuZ3RoXSA9IHRoaXM7XG4gICAgICAgICsrYmluTGVuZ3RoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVzZSB0aGlzIGZ1bmN0aW9uIGlmIHlvdSBubyBsb25nZXIgd2lzaCB0aGUgY2FsbGJhY2sgdG8gYmUgaW52b2tlZC5cbiAgICAgKiBAcmVtYXJrc1xuICAgICAqIEFmdGVyIGludm9jYXRpb24sIGZvciBsb25nLWxpdmVkIHNjb3BlcywgeW91IHNob3VsZCBleHB1bmdlIGFueSByZWZlcmVuY2UgeW91IGhhdmUgdG8gaXQgdG8gYWNjb21tb2RhdGUgdGhlIEdDLlxuICAgICAqL1xuICAgIGRpc3Bvc2UoKSB7XG4gICAgICAgICh0aGlzLnByZXZpb3VzLm5leHQgPSB0aGlzLm5leHQpLnByZXZpb3VzID0gdGhpcy5wcmV2aW91cztcbiAgICAgICAgdGhpcy5wcmV2aW91cyA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5uZXh0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnJlY3ljbGUoKTtcbiAgICB9O1xufSIsImV4cG9ydCBjbGFzcyBPcGVyYXRpb25DYW5jZWxsZWRFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlID0gXCJPcGVyYXRpb24gd2FzIGNhbmNlbGxlZFwiKSB7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBjbyB9IGZyb20gXCIuL0NvbXB1dGVkT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgU2VtYXBob3JlIH0gZnJvbSBcIi4vU2VtYXBob3JlXCI7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9KU1hcIjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFBhZ2U8VE5vZGUgZXh0ZW5kcyBOb2RlID0gTm9kZT4gZXh0ZW5kcyBDb21wb25lbnQ8VE5vZGU+IHtcbiAgICBhYnN0cmFjdCBsb2FkQXN5bmMocGF0aDogc3RyaW5nW10sIHBhdGhJbmRleDogbnVtYmVyLCBwYXJhbWV0ZXJzOiBVUkxTZWFyY2hQYXJhbXMsIHBhZ2VEaXJlY3Rpb246IFBhZ2VEaXJlY3Rpb24sIGU6IFBvcFN0YXRlRXZlbnQpOiBQcm9taXNlPEh0dHBTdGF0dXNDb2RlPjtcbiAgICBhYnN0cmFjdCBnZXQgdGl0bGUoKTogc3RyaW5nO1xufVxuXG5leHBvcnQgZW51bSBQYWdlRGlyZWN0aW9uIHtcbiAgICBOb25lLFxuICAgIEZvcndhcmQsXG4gICAgQmFja3dhcmRcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIERpcmVjdG9yeVBhZ2U8VE5vZGUgZXh0ZW5kcyBOb2RlID0gTm9kZSwgVFBhZ2VOb2RlIGV4dGVuZHMgTm9kZSA9IE5vZGU+IGV4dGVuZHMgUGFnZTxUTm9kZT4ge1xuXG4gICAgcHJpdmF0ZSBfYWxpYXNlcyA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG4gICAgcHJpdmF0ZSBfc3ViUGFnZXMgPSBuZXcgTWFwPHN0cmluZywgeyBsb2FkSW5zdGFuY2VBc3luYygpOiBQcm9taXNlPFBhZ2U8Tm9kZT4+OyBjYWNoZTogYm9vbGVhbjsgY2FjaGVkSW5zdGFuY2U/OiBQYWdlPE5vZGU+OyB9PigpO1xuXG4gICAgcHJvdGVjdGVkIHJlZ2lzdGVyU3ViUGFnZShwYXRoczogc3RyaW5nW10sIGxvYWRJbnN0YW5jZUFzeW5jOiAoKSA9PiBQcm9taXNlPFBhZ2U8Tm9kZT4+LCBjYWNoZSA9IHRydWUpIHtcbiAgICAgICAgdGhpcy5fc3ViUGFnZXMuc2V0KHBhdGhzWzBdLCB7IGxvYWRJbnN0YW5jZUFzeW5jOiBsb2FkSW5zdGFuY2VBc3luYywgY2FjaGU6IGNhY2hlIH0pO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHBhdGhzLmxlbmd0aDsgKytpKVxuICAgICAgICAgICAgdGhpcy5fYWxpYXNlcy5zZXQocGF0aHNbaV0sIHBhdGhzWzBdKTtcbiAgICB9XG5cbiAgICBhc3luYyBsb2FkU3ViUGFnZUFzeW5jKHBhdGg6IHN0cmluZ1tdLCBwYXRoSW5kZXg6IG51bWJlciwgcGFyYW1ldGVyczogVVJMU2VhcmNoUGFyYW1zLCBwYWdlRGlyZWN0aW9uOiBQYWdlRGlyZWN0aW9uLCBlOiBQb3BTdGF0ZUV2ZW50KSB7XG4gICAgICAgIGlmIChwYXRoSW5kZXggPCBwYXRoLmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IHN1YlBhZ2VFbnRyeSA9IHRoaXMuX3N1YlBhZ2VzLmdldChwYXRoW3BhdGhJbmRleF0pO1xuICAgICAgICAgICAgaWYgKCFzdWJQYWdlRW50cnkpIHtcbiAgICAgICAgICAgICAgICBsZXQgYWxpYXMgPSB0aGlzLl9hbGlhc2VzLmdldChwYXRoW3BhdGhJbmRleF0pO1xuICAgICAgICAgICAgICAgIGlmIChhbGlhcylcbiAgICAgICAgICAgICAgICAgICAgc3ViUGFnZUVudHJ5ID0gdGhpcy5fc3ViUGFnZXMuZ2V0KGFsaWFzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdWJQYWdlRW50cnkpIHtcbiAgICAgICAgICAgICAgICBsZXQgcGFnZSA9IHN1YlBhZ2VFbnRyeS5jYWNoZWRJbnN0YW5jZSBhcyBQYWdlPFRQYWdlTm9kZT47XG4gICAgICAgICAgICAgICAgaWYgKCFwYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2UgPSBhd2FpdCBzdWJQYWdlRW50cnkubG9hZEluc3RhbmNlQXN5bmMoKSBhcyBQYWdlPFRQYWdlTm9kZT47XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWJQYWdlRW50cnkuY2FjaGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YlBhZ2VFbnRyeS5jYWNoZWRJbnN0YW5jZSA9IHBhZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJQYWdlRW50cnkubG9hZEluc3RhbmNlQXN5bmMgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBwYWdlSHR0cFN0YXR1c0NvZGU6IEh0dHBTdGF0dXNDb2RlO1xuICAgICAgICAgICAgICAgIGlmIChwYWdlIGluc3RhbmNlb2YgRGlyZWN0b3J5UGFnZSlcbiAgICAgICAgICAgICAgICAgICAgcGFnZUh0dHBTdGF0dXNDb2RlID0gYXdhaXQgcGFnZS5sb2FkU3ViUGFnZUFzeW5jKHBhdGgsIHBhdGhJbmRleCArIDEsIHBhcmFtZXRlcnMsIHBhZ2VEaXJlY3Rpb24sIGUpO1xuICAgICAgICAgICAgICAgIGVsc2UgcGFnZUh0dHBTdGF0dXNDb2RlID0gYXdhaXQgcGFnZS5sb2FkQXN5bmMocGF0aCwgcGF0aEluZGV4ICsgMSwgcGFyYW1ldGVycywgcGFnZURpcmVjdGlvbiwgZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMubG9hZEFzeW5jKHBhdGgsIHBhdGhJbmRleCwgcGFyYW1ldGVycywgcGFnZURpcmVjdGlvbiwgZSwgcGFnZSwgcGFnZUh0dHBTdGF0dXNDb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5sb2FkQXN5bmMocGF0aCwgcGF0aEluZGV4LCBwYXJhbWV0ZXJzLCBwYWdlRGlyZWN0aW9uLCBlKTtcbiAgICB9XG5cbiAgICBhYnN0cmFjdCBsb2FkQXN5bmMocGF0aDogc3RyaW5nW10sIHBhdGhJbmRleDogbnVtYmVyLCBwYXJhbWV0ZXJzOiBVUkxTZWFyY2hQYXJhbXMsIHBhZ2VEaXJlY3Rpb246IFBhZ2VEaXJlY3Rpb24sIGU6IFBvcFN0YXRlRXZlbnQsIHBhZ2U/OiBQYWdlPFRQYWdlTm9kZT4sIHBhZ2VIdHRwU3RhdHVzQ29kZT86IEh0dHBTdGF0dXNDb2RlKTogUHJvbWlzZTxIdHRwU3RhdHVzQ29kZT47XG59XG5cbmV4cG9ydCBlbnVtIEh0dHBTdGF0dXNDb2RlIHtcbiAgICBPayA9IDIwMCxcbiAgICBDcmVhdGVkID0gMjAxLFxuICAgIEFjY2VwdGVkID0gMjAyLFxuICAgIFBhcnRpYWxJbmZvcm1hdGlvbiA9IDIwMyxcbiAgICBOb1Jlc3BvbnNlID0gMjA0LFxuICAgIEJhZFJlcXVlc3QgPSA0MDAsXG4gICAgVW5hdXRob3JpemVkID0gNDAxLFxuICAgIFBheW1lbnRSZXF1aXJlZCA9IDQwMixcbiAgICBGb3JiaWRkZW4gPSA0MDMsXG4gICAgTm90Rm91bmQgPSA0MDQsXG4gICAgSW50ZXJuYWxFcnJvciA9IDUwMCxcbiAgICBOb3RJbXBsZW1lbnRlZCA9IDUwMVxufVxuXG5jb25zdCBQQUdFX05VTUJFUlNfS0VZID0gXCJfX3BhZ2VOdW1iZXJzXCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTUEE8VE5vZGUgZXh0ZW5kcyBOb2RlLCBUUGFnZU5vZGUgZXh0ZW5kcyBOb2RlPiBleHRlbmRzIERpcmVjdG9yeVBhZ2U8VE5vZGUsIFRQYWdlTm9kZT4ge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSA8SFRNTEVsZW1lbnQ+ZS50YXJnZXQ7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldC50YWdOYW1lID09PSBcIkFcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKDxIVE1MQW5jaG9yRWxlbWVudD50YXJnZXQpLmhvc3QgIT09IGxvY2F0aW9uLmhvc3QpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIGhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsICg8SFRNTEFuY2hvckVsZW1lbnQ+dGFyZ2V0KS5ocmVmKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnZhbGlkYXRlTG9jYXRpb25Bc3luYygpO1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gd2hpbGUgKHRhcmdldCA9IHRhcmdldC5wYXJlbnRFbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLCBlID0+IHsgdGhpcy5pbnZhbGlkYXRlTG9jYXRpb25Bc3luYyhlKTsgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY3VycmVudFBhZ2VOdW1iZXI6IG51bWJlcjtcbiAgICBwcml2YXRlIF9wYWdlTnVtYmVyczogbnVtYmVyO1xuXG4gICAgcHJvdGVjdGVkIGluc3RhbGxUaXRsZUhhbmRsZXIoKSB7XG4gICAgICAgIGNvKCgpID0+IHRoaXMudGl0bGUpLnN1YnNjcmliZUludm9rZShuID0+IGRvY3VtZW50LnRpdGxlID0gbik7XG4gICAgfVxuXG4gICAgYXN5bmMgaW52YWxpZGF0ZUxvY2F0aW9uQXN5bmMoZT86IFBvcFN0YXRlRXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9wYWdlTnVtYmVycykge1xuICAgICAgICAgICAgaWYgKCEodGhpcy5fcGFnZU51bWJlcnMgPSA8YW55PnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oUEFHRV9OVU1CRVJTX0tFWSkpKVxuICAgICAgICAgICAgICAgIHRoaXMuX3BhZ2VOdW1iZXJzID0gMDtcbiAgICAgICAgICAgIGVsc2UgdGhpcy5fcGFnZU51bWJlcnMgPSBwYXJzZUludCg8YW55PnRoaXMuX3BhZ2VOdW1iZXJzKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc3RhdGUgPSBoaXN0b3J5LnN0YXRlO1xuICAgICAgICBpZiAoIXN0YXRlKVxuICAgICAgICAgICAgc3RhdGUgPSB7fTtcbiAgICAgICAgaWYgKCFzdGF0ZS5wYWdlTnVtYmVyKSB7XG4gICAgICAgICAgICBzdGF0ZS5wYWdlTnVtYmVyID0gKyt0aGlzLl9wYWdlTnVtYmVycztcbiAgICAgICAgICAgIGhpc3RvcnkucmVwbGFjZVN0YXRlKHN0YXRlLCBcIlwiKTtcbiAgICAgICAgfVxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFBBR0VfTlVNQkVSU19LRVksIFN0cmluZyh0aGlzLl9wYWdlTnVtYmVycykpO1xuICAgICAgICBsZXQgb2xkQ3VycmVudFBhZ2VOdW1iZXIgPSB0aGlzLl9jdXJyZW50UGFnZU51bWJlcjtcbiAgICAgICAgdGhpcy5fY3VycmVudFBhZ2VOdW1iZXIgPSBzdGF0ZS5wYWdlTnVtYmVyO1xuICAgICAgICBsZXQgcGFnZURpcmVjdGlvbjogUGFnZURpcmVjdGlvbjtcbiAgICAgICAgaWYgKCFvbGRDdXJyZW50UGFnZU51bWJlcilcbiAgICAgICAgICAgIHBhZ2VEaXJlY3Rpb24gPSBQYWdlRGlyZWN0aW9uLk5vbmU7XG4gICAgICAgIGVsc2UgaWYgKG9sZEN1cnJlbnRQYWdlTnVtYmVyIDwgdGhpcy5fY3VycmVudFBhZ2VOdW1iZXIpXG4gICAgICAgICAgICBwYWdlRGlyZWN0aW9uID0gUGFnZURpcmVjdGlvbi5Gb3J3YXJkO1xuICAgICAgICBlbHNlIGlmICh0aGlzLl9jdXJyZW50UGFnZU51bWJlciA8IG9sZEN1cnJlbnRQYWdlTnVtYmVyKVxuICAgICAgICAgICAgcGFnZURpcmVjdGlvbiA9IFBhZ2VEaXJlY3Rpb24uQmFja3dhcmQ7XG4gICAgICAgIGVsc2UgcGFnZURpcmVjdGlvbiA9IFBhZ2VEaXJlY3Rpb24uTm9uZTtcbiAgICAgICAgbGV0IGxvY2F0aW9uQ29tcG9uZW50cyA9IGdldExvY2F0aW9uQ29tcG9uZW50cyhsb2NhdGlvbi5wYXRobmFtZSwgbG9jYXRpb24uc2VhcmNoKTtcbiAgICAgICAgYXdhaXQgdGhpcy5sb2FkTG9jYXRpb25TZW1hcGhvcmUud2FpdE9uZUFzeW5jKCk7XG4gICAgICAgIHRyeSB7IGF3YWl0IHRoaXMubG9hZFN1YlBhZ2VBc3luYyhsb2NhdGlvbkNvbXBvbmVudHMucGF0aCwgMCwgbG9jYXRpb25Db21wb25lbnRzLnBhcmFtZXRlcnMsIHBhZ2VEaXJlY3Rpb24sIGUpOyB9XG4gICAgICAgIGZpbmFsbHkgeyB0aGlzLmxvYWRMb2NhdGlvblNlbWFwaG9yZS5yZWxlYXNlKCk7IH1cbiAgICB9XG5cbiAgICBuYXZpZ2F0ZUFzeW5jKHBhdGg6IHN0cmluZykge1xuICAgICAgICBoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCBwYXRoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW52YWxpZGF0ZUxvY2F0aW9uQXN5bmMoKTtcbiAgICB9XG5cbiAgICBsb2FkTG9jYXRpb25TZW1hcGhvcmUgPSBuZXcgU2VtYXBob3JlKCk7XG59XG5cbmZ1bmN0aW9uIGdldExvY2F0aW9uQ29tcG9uZW50cyhwYXRoTmFtZTogc3RyaW5nLCBzZWFyY2g6IHN0cmluZykge1xuICAgIGlmIChwYXRoTmFtZS5zdGFydHNXaXRoKFwiL1wiKSlcbiAgICAgICAgcGF0aE5hbWUgPSBwYXRoTmFtZS5zdWJzdHIoMSk7XG4gICAgcmV0dXJuIHsgcGF0aDogcGF0aE5hbWUgPyBwYXRoTmFtZS5zcGxpdChcIi9cIikubWFwKHAgPT4gZGVjb2RlVVJJQ29tcG9uZW50KHApKSA6IFtdLCBwYXJhbWV0ZXJzOiBuZXcgVVJMU2VhcmNoUGFyYW1zKHNlYXJjaCkgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVQYXRoKHBhdGg6IHN0cmluZ1tdLCAuLi5zdWJQYXRoOiBzdHJpbmdbXSkge1xuXG4gICAgaWYgKDAgPCBwYXRoLmxlbmd0aClcbiAgICAgICAgcmV0dXJuIFwiL1wiICsgcGF0aC5qb2luKFwiL1wiKSArIFwiL1wiICsgc3ViUGF0aC5qb2luKFwiL1wiKTtcblxuICAgIHJldHVybiBcIi9cIiArIHN1YlBhdGguam9pbihcIi9cIik7XG59IiwiaW1wb3J0IHsgQ2FuY2VsbGF0aW9uVG9rZW4gfSBmcm9tIFwiLi9DYW5jZWxsYXRpb25Ub2tlblwiO1xuaW1wb3J0IHsgT3BlcmF0aW9uQ2FuY2VsbGVkRXJyb3IgfSBmcm9tIFwiLi9PcGVyYXRpb25DYW5jZWxsZWRFcnJvclwiO1xuXG5leHBvcnQgY2xhc3MgU2VtYXBob3JlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBsZXQgaGVhZCA9IDxTZW1hcGhvcmVRdWV1ZUVudHJ5Pnt9LCB0YWlsID0gPFNlbWFwaG9yZVF1ZXVlRW50cnk+e307XG4gICAgICAgIChoZWFkLm5leHQgPSB0YWlsKS5wcmV2aW91cyA9IGhlYWQ7XG4gICAgICAgIHRoaXMuaGVhZCA9IGhlYWQ7XG4gICAgICAgIHRoaXMudGFpbCA9IHRhaWw7XG4gICAgfVxuXG4gICAgaGVhZDogU2VtYXBob3JlUXVldWVFbnRyeTtcbiAgICB0YWlsOiBTZW1hcGhvcmVRdWV1ZUVudHJ5O1xuXG4gICAgd2FpdE9uZUFzeW5jKGNhbmNlbGxhdGlvbnRva2VuPzogQ2FuY2VsbGF0aW9uVG9rZW4pIHtcbiAgICAgICAgaWYgKGNhbmNlbGxhdGlvbnRva2VuKSB7XG4gICAgICAgICAgICBpZiAoY2FuY2VsbGF0aW9udG9rZW4uaXNDYW5jZWxsYXRpb25SZXF1ZXN0ZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBPcGVyYXRpb25DYW5jZWxsZWRFcnJvcigpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRRdWV1ZUVudHJ5ID0gPFNlbWFwaG9yZVF1ZXVlRW50cnk+eyByZXNvbHZlOiByZXNvbHZlLCBwcmV2aW91czogdGhpcy50YWlsLnByZXZpb3VzLCBuZXh0OiB0aGlzLnRhaWwgfTtcbiAgICAgICAgICAgIGN1cnJlbnRRdWV1ZUVudHJ5LnByZXZpb3VzLm5leHQgPSBjdXJyZW50UXVldWVFbnRyeTtcbiAgICAgICAgICAgIGN1cnJlbnRRdWV1ZUVudHJ5Lm5leHQucHJldmlvdXMgPSBjdXJyZW50UXVldWVFbnRyeTtcbiAgICAgICAgICAgIGlmICh0aGlzLmhlYWQubmV4dCA9PT0gY3VycmVudFF1ZXVlRW50cnkpXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgZWxzZSBpZiAoY2FuY2VsbGF0aW9udG9rZW4pIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVFbnRyeS5jYW5jZWxsYXRpb25Ub2tlbiA9IGNhbmNlbGxhdGlvbnRva2VuO1xuICAgICAgICAgICAgICAgIGNhbmNlbGxhdGlvbnRva2VuLmFkZExpc3RlbmVyKGN1cnJlbnRRdWV1ZUVudHJ5LmNhbmNlbGxhdGlvblRva2VuTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIChjdXJyZW50UXVldWVFbnRyeS5wcmV2aW91cy5uZXh0ID0gY3VycmVudFF1ZXVlRW50cnkubmV4dCkucHJldmlvdXMgPSBjdXJyZW50UXVldWVFbnRyeS5wcmV2aW91cztcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBPcGVyYXRpb25DYW5jZWxsZWRFcnJvcigpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVsZWFzZSgpIHtcbiAgICAgICAgbGV0IGhlYWQgPSB0aGlzLmhlYWQsIG5leHQgPSBoZWFkLm5leHQubmV4dDtcbiAgICAgICAgKGhlYWQubmV4dCA9IG5leHQpLnByZXZpb3VzID0gaGVhZDtcbiAgICAgICAgaWYgKG5leHQgIT09IHRoaXMudGFpbCkge1xuICAgICAgICAgICAgaWYgKG5leHQuY2FuY2VsbGF0aW9uVG9rZW4pIHtcbiAgICAgICAgICAgICAgICBuZXh0LmNhbmNlbGxhdGlvblRva2VuLnJlbW92ZUxpc3RlbmVyKG5leHQuY2FuY2VsbGF0aW9uVG9rZW5MaXN0ZW5lcik7XG4gICAgICAgICAgICAgICAgbmV4dC5jYW5jZWxsYXRpb25Ub2tlbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgbmV4dC5jYW5jZWxsYXRpb25Ub2tlbkxpc3RlbmVyID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCByZXNvbHZlID0gbmV4dC5yZXNvbHZlO1xuICAgICAgICAgICAgbmV4dC5yZXNvbHZlID0gbnVsbDtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZW1hcGhvcmVRdWV1ZUVudHJ5IHtcbiAgICByZXNvbHZlKCk7XG4gICAgcHJldmlvdXM6IFNlbWFwaG9yZVF1ZXVlRW50cnk7XG4gICAgbmV4dDogU2VtYXBob3JlUXVldWVFbnRyeTtcbiAgICBjYW5jZWxsYXRpb25Ub2tlbjogQ2FuY2VsbGF0aW9uVG9rZW47XG4gICAgY2FuY2VsbGF0aW9uVG9rZW5MaXN0ZW5lcigpO1xufSIsImltcG9ydCB7IE1vZGlmaWFibGVPYnNlcnZhYmxlIH0gZnJvbSBcIi4vTW9kaWZpYWJsZU9ic2VydmFibGVcIjtcbmltcG9ydCB7IENvbXB1dGVkT2JzZXJ2YWJsZSB9IGZyb20gXCIuL0NvbXB1dGVkT2JzZXJ2YWJsZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNPYnNlcnZhYmxlKG9iaikge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBNb2RpZmlhYmxlT2JzZXJ2YWJsZSB8fCBvYmogaW5zdGFuY2VvZiBDb21wdXRlZE9ic2VydmFibGU7XG59IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3JjLWdyaWQtaW5kZXhfX2NvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBtYXJnaW4tbGVmdDogYXV0bzsgfVxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XFxuICAgIC5zcmMtZ3JpZC1pbmRleF9fY29udGFpbmVyIHtcXG4gICAgICBtYXgtd2lkdGg6IDU0MHB4OyB9IH1cXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICAuc3JjLWdyaWQtaW5kZXhfX2NvbnRhaW5lciB7XFxuICAgICAgbWF4LXdpZHRoOiA3MjBweDsgfSB9XFxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gICAgLnNyYy1ncmlkLWluZGV4X19jb250YWluZXIge1xcbiAgICAgIG1heC13aWR0aDogOTYwcHg7IH0gfVxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xcbiAgICAuc3JjLWdyaWQtaW5kZXhfX2NvbnRhaW5lciB7XFxuICAgICAgbWF4LXdpZHRoOiAxMTQwcHg7IH0gfVxcblxcbi5zcmMtZ3JpZC1pbmRleF9fY29udGFpbmVyLWZsdWlkIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy1yaWdodDogMTVweDtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvOyB9XFxuXFxuLnNyYy1ncmlkLWluZGV4X19jb250YWluZXItd2l0aC1uby1yaWdodC1tYXJnaW4ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICBtYXJnaW4tbGVmdDogYXV0bzsgfVxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XFxuICAgIC5zcmMtZ3JpZC1pbmRleF9fY29udGFpbmVyLXdpdGgtbm8tcmlnaHQtbWFyZ2luIHtcXG4gICAgICBtYXgtd2lkdGg6IGNhbGMoNTQwcHggKyAoMTAwJSAtIDU0MHB4KSAvIDIpOyB9IH1cXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICAuc3JjLWdyaWQtaW5kZXhfX2NvbnRhaW5lci13aXRoLW5vLXJpZ2h0LW1hcmdpbiB7XFxuICAgICAgbWF4LXdpZHRoOiBjYWxjKDcyMHB4ICsgKDEwMCUgLSA3MjBweCkgLyAyKTsgfSB9XFxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gICAgLnNyYy1ncmlkLWluZGV4X19jb250YWluZXItd2l0aC1uby1yaWdodC1tYXJnaW4ge1xcbiAgICAgIG1heC13aWR0aDogY2FsYyg5NjBweCArICgxMDAlIC0gOTYwcHgpIC8gMik7IH0gfVxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xcbiAgICAuc3JjLWdyaWQtaW5kZXhfX2NvbnRhaW5lci13aXRoLW5vLXJpZ2h0LW1hcmdpbiB7XFxuICAgICAgbWF4LXdpZHRoOiBjYWxjKDExNDBweCArICgxMDAlIC0gMTE0MHB4KSAvIDIpOyB9IH1cXG5cXG4uc3JjLWdyaWQtaW5kZXhfX3JvdyB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4OyB9XFxuXFxuLnNyYy1ncmlkLWluZGV4X19jb2wtMSwgLnNyYy1ncmlkLWluZGV4X19jb2wtMiwgLnNyYy1ncmlkLWluZGV4X19jb2wtMywgLnNyYy1ncmlkLWluZGV4X19jb2wtNCwgLnNyYy1ncmlkLWluZGV4X19jb2wtNSwgLnNyYy1ncmlkLWluZGV4X19jb2wtNiwgLnNyYy1ncmlkLWluZGV4X19jb2wtNywgLnNyYy1ncmlkLWluZGV4X19jb2wtOCwgLnNyYy1ncmlkLWluZGV4X19jb2wtOSwgLnNyYy1ncmlkLWluZGV4X19jb2wtMTAsIC5zcmMtZ3JpZC1pbmRleF9fY29sLTExLCAuc3JjLWdyaWQtaW5kZXhfX2NvbC0xMiwgLnNyYy1ncmlkLWluZGV4X19jb2wsIC5zcmMtZ3JpZC1pbmRleF9fY29sLXNtLTEsIC5zcmMtZ3JpZC1pbmRleF9fY29sLXNtLTIsIC5zcmMtZ3JpZC1pbmRleF9fY29sLXNtLTMsIC5zcmMtZ3JpZC1pbmRleF9fY29sLXNtLTQsIC5zcmMtZ3JpZC1pbmRleF9fY29sLXNtLTUsIC5zcmMtZ3JpZC1pbmRleF9fY29sLXNtLTYsIC5zcmMtZ3JpZC1pbmRleF9fY29sLXNtLTcsIC5zcmMtZ3JpZC1pbmRleF9fY29sLXNtLTgsIC5zcmMtZ3JpZC1pbmRleF9fY29sLXNtLTksIC5zcmMtZ3JpZC1pbmRleF9fY29sLXNtLTEwLCAuc3JjLWdyaWQtaW5kZXhfX2NvbC1zbS0xMSwgLnNyYy1ncmlkLWluZGV4X19jb2wtc20tMTIsIC5zcmMtZ3JpZC1pbmRleF9fY29sLXNtLCAuc3JjLWdyaWQtaW5kZXhfX2NvbC1tZC0xLCAuc3JjLWdyaWQtaW5kZXhfX2NvbC1tZC0yLCAuc3JjLWdyaWQtaW5kZXhfX2NvbC1tZC0zLCAuc3JjLWdyaWQtaW5kZXhfX2NvbC1tZC00LCAuc3JjLWdyaWQtaW5kZXhfX2NvbC1tZC01LCAuc3JjLWdyaWQtaW5kZXhfX2NvbC1tZC02LCAuc3JjLWdyaWQtaW5kZXhfX2NvbC1tZC03LCAuc3JjLWdyaWQtaW5kZXhfX2NvbC1tZC04LCAuc3JjLWdyaWQtaW5kZXhfX2NvbC1tZC05LCAuc3JjLWdyaWQtaW5kZXhfX2NvbC1tZC0xMCwgLnNyYy1ncmlkLWluZGV4X19jb2wtbWQtMTEsIC5zcmMtZ3JpZC1pbmRleF9fY29sLW1kLTEyLCAuc3JjLWdyaWQtaW5kZXhfX2NvbC1tZCwgLnNyYy1ncmlkLWluZGV4X19jb2wtbGctMSwgLnNyYy1ncmlkLWluZGV4X19jb2wtbGctMiwgLnNyYy1ncmlkLWluZGV4X19jb2wtbGctMywgLnNyYy1ncmlkLWluZGV4X19jb2wtbGctNCwgLnNyYy1ncmlkLWluZGV4X19jb2wtbGctNSwgLnNyYy1ncmlkLWluZGV4X19jb2wtbGctNiwgLnNyYy1ncmlkLWluZGV4X19jb2wtbGctNywgLnNyYy1ncmlkLWluZGV4X19jb2wtbGctOCwgLnNyYy1ncmlkLWluZGV4X19jb2wtbGctOSwgLnNyYy1ncmlkLWluZGV4X19jb2wtbGctMTAsIC5zcmMtZ3JpZC1pbmRleF9fY29sLWxnLTExLCAuc3JjLWdyaWQtaW5kZXhfX2NvbC1sZy0xMiwgLnNyYy1ncmlkLWluZGV4X19jb2wtbGcsIC5zcmMtZ3JpZC1pbmRleF9fY29sLXhsLTEsIC5zcmMtZ3JpZC1pbmRleF9fY29sLXhsLTIsIC5zcmMtZ3JpZC1pbmRleF9fY29sLXhsLTMsIC5zcmMtZ3JpZC1pbmRleF9fY29sLXhsLTQsIC5zcmMtZ3JpZC1pbmRleF9fY29sLXhsLTUsIC5zcmMtZ3JpZC1pbmRleF9fY29sLXhsLTYsIC5zcmMtZ3JpZC1pbmRleF9fY29sLXhsLTcsIC5zcmMtZ3JpZC1pbmRleF9fY29sLXhsLTgsIC5zcmMtZ3JpZC1pbmRleF9fY29sLXhsLTksIC5zcmMtZ3JpZC1pbmRleF9fY29sLXhsLTEwLCAuc3JjLWdyaWQtaW5kZXhfX2NvbC14bC0xMSwgLnNyYy1ncmlkLWluZGV4X19jb2wteGwtMTIsIC5zcmMtZ3JpZC1pbmRleF9fY29sLXhsIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy1yaWdodDogMTVweDtcXG4gIHBhZGRpbmctbGVmdDogMTVweDsgfVxcblxcbi5zcmMtZ3JpZC1pbmRleF9fY29sIHtcXG4gIGZsZXgtYmFzaXM6IDA7XFxuICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XFxuICBtYXgtd2lkdGg6IDEwMCU7IH1cXG5cXG4uc3JjLWdyaWQtaW5kZXhfX2NvbC0xIHtcXG4gIC13ZWJraXQtYm94LWZsZXg6IDA7XFxuICAgICAgICAgIGZsZXg6IDAgMCA4LjMzMzMzJTtcXG4gIG1heC13aWR0aDogOC4zMzMzMyU7IH1cXG5cXG4uc3JjLWdyaWQtaW5kZXhfX2NvbC0yIHtcXG4gIC13ZWJraXQtYm94LWZsZXg6IDA7XFxuICAgICAgICAgIGZsZXg6IDAgMCAxNi42NjY2NyU7XFxuICBtYXgtd2lkdGg6IDE2LjY2NjY3JTsgfVxcblxcbi5zcmMtZ3JpZC1pbmRleF9fY29sLTMge1xcbiAgLXdlYmtpdC1ib3gtZmxleDogMDtcXG4gICAgICAgICAgZmxleDogMCAwIDI1JTtcXG4gIG1heC13aWR0aDogMjUlOyB9XFxuXFxuLnNyYy1ncmlkLWluZGV4X19jb2wtNCB7XFxuICAtd2Via2l0LWJveC1mbGV4OiAwO1xcbiAgICAgICAgICBmbGV4OiAwIDAgMzMuMzMzMzMlO1xcbiAgbWF4LXdpZHRoOiAzMy4zMzMzMyU7IH1cXG5cXG4uc3JjLWdyaWQtaW5kZXhfX2NvbC01IHtcXG4gIC13ZWJraXQtYm94LWZsZXg6IDA7XFxuICAgICAgICAgIGZsZXg6IDAgMCA0MS42NjY2NyU7XFxuICBtYXgtd2lkdGg6IDQxLjY2NjY3JTsgfVxcblxcbi5zcmMtZ3JpZC1pbmRleF9fY29sLTYge1xcbiAgLXdlYmtpdC1ib3gtZmxleDogMDtcXG4gICAgICAgICAgZmxleDogMCAwIDUwJTtcXG4gIG1heC13aWR0aDogNTAlOyB9XFxuXFxuLnNyYy1ncmlkLWluZGV4X19jb2wtNyB7XFxuICAtd2Via2l0LWJveC1mbGV4OiAwO1xcbiAgICAgICAgICBmbGV4OiAwIDAgNTguMzMzMzMlO1xcbiAgbWF4LXdpZHRoOiA1OC4zMzMzMyU7IH1cXG5cXG4uc3JjLWdyaWQtaW5kZXhfX2NvbC04IHtcXG4gIC13ZWJraXQtYm94LWZsZXg6IDA7XFxuICAgICAgICAgIGZsZXg6IDAgMCA2Ni42NjY2NyU7XFxuICBtYXgtd2lkdGg6IDY2LjY2NjY3JTsgfVxcblxcbi5zcmMtZ3JpZC1pbmRleF9fY29sLTkge1xcbiAgLXdlYmtpdC1ib3gtZmxleDogMDtcXG4gICAgICAgICAgZmxleDogMCAwIDc1JTtcXG4gIG1heC13aWR0aDogNzUlOyB9XFxuXFxuLnNyYy1ncmlkLWluZGV4X19jb2wtMTAge1xcbiAgLXdlYmtpdC1ib3gtZmxleDogMDtcXG4gICAgICAgICAgZmxleDogMCAwIDgzLjMzMzMzJTtcXG4gIG1heC13aWR0aDogODMuMzMzMzMlOyB9XFxuXFxuLnNyYy1ncmlkLWluZGV4X19jb2wtMTEge1xcbiAgLXdlYmtpdC1ib3gtZmxleDogMDtcXG4gICAgICAgICAgZmxleDogMCAwIDkxLjY2NjY3JTtcXG4gIG1heC13aWR0aDogOTEuNjY2NjclOyB9XFxuXFxuLnNyYy1ncmlkLWluZGV4X19jb2wtMTIge1xcbiAgLXdlYmtpdC1ib3gtZmxleDogMDtcXG4gICAgICAgICAgZmxleDogMCAwIDEwMCU7XFxuICBtYXgtd2lkdGg6IDEwMCU7IH1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcXG4gIC5zcmMtZ3JpZC1pbmRleF9fY29sLXNtIHtcXG4gICAgZmxleC1iYXNpczogMDtcXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XFxuICAgIG1heC13aWR0aDogMTAwJTsgfVxcbiAgLnNyYy1ncmlkLWluZGV4X19jb2wtc20tMSB7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDA7XFxuICAgICAgICAgICAgZmxleDogMCAwIDguMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDguMzMzMzMlOyB9XFxuICAuc3JjLWdyaWQtaW5kZXhfX2NvbC1zbS0yIHtcXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMDtcXG4gICAgICAgICAgICBmbGV4OiAwIDAgMTYuNjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDE2LjY2NjY3JTsgfVxcbiAgLnNyYy1ncmlkLWluZGV4X19jb2wtc20tMyB7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDA7XFxuICAgICAgICAgICAgZmxleDogMCAwIDI1JTtcXG4gICAgbWF4LXdpZHRoOiAyNSU7IH1cXG4gIC5zcmMtZ3JpZC1pbmRleF9fY29sLXNtLTQge1xcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xcbiAgICAgICAgICAgIGZsZXg6IDAgMCAzMy4zMzMzMyU7XFxuICAgIG1heC13aWR0aDogMzMuMzMzMzMlOyB9XFxuICAuc3JjLWdyaWQtaW5kZXhfX2NvbC1zbS01IHtcXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMDtcXG4gICAgICAgICAgICBmbGV4OiAwIDAgNDEuNjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDQxLjY2NjY3JTsgfVxcbiAgLnNyYy1ncmlkLWluZGV4X19jb2wtc20tNiB7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDA7XFxuICAgICAgICAgICAgZmxleDogMCAwIDUwJTtcXG4gICAgbWF4LXdpZHRoOiA1MCU7IH1cXG4gIC5zcmMtZ3JpZC1pbmRleF9fY29sLXNtLTcge1xcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xcbiAgICAgICAgICAgIGZsZXg6IDAgMCA1OC4zMzMzMyU7XFxuICAgIG1heC13aWR0aDogNTguMzMzMzMlOyB9XFxuICAuc3JjLWdyaWQtaW5kZXhfX2NvbC1zbS04IHtcXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMDtcXG4gICAgICAgICAgICBmbGV4OiAwIDAgNjYuNjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDY2LjY2NjY3JTsgfVxcbiAgLnNyYy1ncmlkLWluZGV4X19jb2wtc20tOSB7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDA7XFxuICAgICAgICAgICAgZmxleDogMCAwIDc1JTtcXG4gICAgbWF4LXdpZHRoOiA3NSU7IH1cXG4gIC5zcmMtZ3JpZC1pbmRleF9fY29sLXNtLTEwIHtcXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMDtcXG4gICAgICAgICAgICBmbGV4OiAwIDAgODMuMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDgzLjMzMzMzJTsgfVxcbiAgLnNyYy1ncmlkLWluZGV4X19jb2wtc20tMTEge1xcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xcbiAgICAgICAgICAgIGZsZXg6IDAgMCA5MS42NjY2NyU7XFxuICAgIG1heC13aWR0aDogOTEuNjY2NjclOyB9XFxuICAuc3JjLWdyaWQtaW5kZXhfX2NvbC1zbS0xMiB7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDA7XFxuICAgICAgICAgICAgZmxleDogMCAwIDEwMCU7XFxuICAgIG1heC13aWR0aDogMTAwJTsgfSB9XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuc3JjLWdyaWQtaW5kZXhfX2NvbC1tZCB7XFxuICAgIGZsZXgtYmFzaXM6IDA7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7IH1cXG4gIC5zcmMtZ3JpZC1pbmRleF9fY29sLW1kLTEge1xcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xcbiAgICAgICAgICAgIGZsZXg6IDAgMCA4LjMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiA4LjMzMzMzJTsgfVxcbiAgLnNyYy1ncmlkLWluZGV4X19jb2wtbWQtMiB7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDA7XFxuICAgICAgICAgICAgZmxleDogMCAwIDE2LjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiAxNi42NjY2NyU7IH1cXG4gIC5zcmMtZ3JpZC1pbmRleF9fY29sLW1kLTMge1xcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xcbiAgICAgICAgICAgIGZsZXg6IDAgMCAyNSU7XFxuICAgIG1heC13aWR0aDogMjUlOyB9XFxuICAuc3JjLWdyaWQtaW5kZXhfX2NvbC1tZC00IHtcXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMDtcXG4gICAgICAgICAgICBmbGV4OiAwIDAgMzMuMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDMzLjMzMzMzJTsgfVxcbiAgLnNyYy1ncmlkLWluZGV4X19jb2wtbWQtNSB7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDA7XFxuICAgICAgICAgICAgZmxleDogMCAwIDQxLjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiA0MS42NjY2NyU7IH1cXG4gIC5zcmMtZ3JpZC1pbmRleF9fY29sLW1kLTYge1xcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xcbiAgICAgICAgICAgIGZsZXg6IDAgMCA1MCU7XFxuICAgIG1heC13aWR0aDogNTAlOyB9XFxuICAuc3JjLWdyaWQtaW5kZXhfX2NvbC1tZC03IHtcXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMDtcXG4gICAgICAgICAgICBmbGV4OiAwIDAgNTguMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDU4LjMzMzMzJTsgfVxcbiAgLnNyYy1ncmlkLWluZGV4X19jb2wtbWQtOCB7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDA7XFxuICAgICAgICAgICAgZmxleDogMCAwIDY2LjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiA2Ni42NjY2NyU7IH1cXG4gIC5zcmMtZ3JpZC1pbmRleF9fY29sLW1kLTkge1xcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xcbiAgICAgICAgICAgIGZsZXg6IDAgMCA3NSU7XFxuICAgIG1heC13aWR0aDogNzUlOyB9XFxuICAuc3JjLWdyaWQtaW5kZXhfX2NvbC1tZC0xMCB7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDA7XFxuICAgICAgICAgICAgZmxleDogMCAwIDgzLjMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiA4My4zMzMzMyU7IH1cXG4gIC5zcmMtZ3JpZC1pbmRleF9fY29sLW1kLTExIHtcXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMDtcXG4gICAgICAgICAgICBmbGV4OiAwIDAgOTEuNjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDkxLjY2NjY3JTsgfVxcbiAgLnNyYy1ncmlkLWluZGV4X19jb2wtbWQtMTIge1xcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xcbiAgICAgICAgICAgIGZsZXg6IDAgMCAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7IH0gfVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgLnNyYy1ncmlkLWluZGV4X19jb2wtbGcge1xcbiAgICBmbGV4LWJhc2lzOiAwO1xcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgbWF4LXdpZHRoOiAxMDAlOyB9XFxuICAuc3JjLWdyaWQtaW5kZXhfX2NvbC1sZy0xIHtcXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMDtcXG4gICAgICAgICAgICBmbGV4OiAwIDAgOC4zMzMzMyU7XFxuICAgIG1heC13aWR0aDogOC4zMzMzMyU7IH1cXG4gIC5zcmMtZ3JpZC1pbmRleF9fY29sLWxnLTIge1xcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xcbiAgICAgICAgICAgIGZsZXg6IDAgMCAxNi42NjY2NyU7XFxuICAgIG1heC13aWR0aDogMTYuNjY2NjclOyB9XFxuICAuc3JjLWdyaWQtaW5kZXhfX2NvbC1sZy0zIHtcXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMDtcXG4gICAgICAgICAgICBmbGV4OiAwIDAgMjUlO1xcbiAgICBtYXgtd2lkdGg6IDI1JTsgfVxcbiAgLnNyYy1ncmlkLWluZGV4X19jb2wtbGctNCB7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDA7XFxuICAgICAgICAgICAgZmxleDogMCAwIDMzLjMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiAzMy4zMzMzMyU7IH1cXG4gIC5zcmMtZ3JpZC1pbmRleF9fY29sLWxnLTUge1xcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xcbiAgICAgICAgICAgIGZsZXg6IDAgMCA0MS42NjY2NyU7XFxuICAgIG1heC13aWR0aDogNDEuNjY2NjclOyB9XFxuICAuc3JjLWdyaWQtaW5kZXhfX2NvbC1sZy02IHtcXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMDtcXG4gICAgICAgICAgICBmbGV4OiAwIDAgNTAlO1xcbiAgICBtYXgtd2lkdGg6IDUwJTsgfVxcbiAgLnNyYy1ncmlkLWluZGV4X19jb2wtbGctNyB7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDA7XFxuICAgICAgICAgICAgZmxleDogMCAwIDU4LjMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiA1OC4zMzMzMyU7IH1cXG4gIC5zcmMtZ3JpZC1pbmRleF9fY29sLWxnLTgge1xcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xcbiAgICAgICAgICAgIGZsZXg6IDAgMCA2Ni42NjY2NyU7XFxuICAgIG1heC13aWR0aDogNjYuNjY2NjclOyB9XFxuICAuc3JjLWdyaWQtaW5kZXhfX2NvbC1sZy05IHtcXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMDtcXG4gICAgICAgICAgICBmbGV4OiAwIDAgNzUlO1xcbiAgICBtYXgtd2lkdGg6IDc1JTsgfVxcbiAgLnNyYy1ncmlkLWluZGV4X19jb2wtbGctMTAge1xcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xcbiAgICAgICAgICAgIGZsZXg6IDAgMCA4My4zMzMzMyU7XFxuICAgIG1heC13aWR0aDogODMuMzMzMzMlOyB9XFxuICAuc3JjLWdyaWQtaW5kZXhfX2NvbC1sZy0xMSB7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDA7XFxuICAgICAgICAgICAgZmxleDogMCAwIDkxLjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiA5MS42NjY2NyU7IH1cXG4gIC5zcmMtZ3JpZC1pbmRleF9fY29sLWxnLTEyIHtcXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMDtcXG4gICAgICAgICAgICBmbGV4OiAwIDAgMTAwJTtcXG4gICAgbWF4LXdpZHRoOiAxMDAlOyB9IH1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxuICAuc3JjLWdyaWQtaW5kZXhfX2NvbC14bCB7XFxuICAgIGZsZXgtYmFzaXM6IDA7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7IH1cXG4gIC5zcmMtZ3JpZC1pbmRleF9fY29sLXhsLTEge1xcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xcbiAgICAgICAgICAgIGZsZXg6IDAgMCA4LjMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiA4LjMzMzMzJTsgfVxcbiAgLnNyYy1ncmlkLWluZGV4X19jb2wteGwtMiB7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDA7XFxuICAgICAgICAgICAgZmxleDogMCAwIDE2LjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiAxNi42NjY2NyU7IH1cXG4gIC5zcmMtZ3JpZC1pbmRleF9fY29sLXhsLTMge1xcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xcbiAgICAgICAgICAgIGZsZXg6IDAgMCAyNSU7XFxuICAgIG1heC13aWR0aDogMjUlOyB9XFxuICAuc3JjLWdyaWQtaW5kZXhfX2NvbC14bC00IHtcXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMDtcXG4gICAgICAgICAgICBmbGV4OiAwIDAgMzMuMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDMzLjMzMzMzJTsgfVxcbiAgLnNyYy1ncmlkLWluZGV4X19jb2wteGwtNSB7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDA7XFxuICAgICAgICAgICAgZmxleDogMCAwIDQxLjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiA0MS42NjY2NyU7IH1cXG4gIC5zcmMtZ3JpZC1pbmRleF9fY29sLXhsLTYge1xcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xcbiAgICAgICAgICAgIGZsZXg6IDAgMCA1MCU7XFxuICAgIG1heC13aWR0aDogNTAlOyB9XFxuICAuc3JjLWdyaWQtaW5kZXhfX2NvbC14bC03IHtcXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMDtcXG4gICAgICAgICAgICBmbGV4OiAwIDAgNTguMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDU4LjMzMzMzJTsgfVxcbiAgLnNyYy1ncmlkLWluZGV4X19jb2wteGwtOCB7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDA7XFxuICAgICAgICAgICAgZmxleDogMCAwIDY2LjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiA2Ni42NjY2NyU7IH1cXG4gIC5zcmMtZ3JpZC1pbmRleF9fY29sLXhsLTkge1xcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xcbiAgICAgICAgICAgIGZsZXg6IDAgMCA3NSU7XFxuICAgIG1heC13aWR0aDogNzUlOyB9XFxuICAuc3JjLWdyaWQtaW5kZXhfX2NvbC14bC0xMCB7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDA7XFxuICAgICAgICAgICAgZmxleDogMCAwIDgzLjMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiA4My4zMzMzMyU7IH1cXG4gIC5zcmMtZ3JpZC1pbmRleF9fY29sLXhsLTExIHtcXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMDtcXG4gICAgICAgICAgICBmbGV4OiAwIDAgOTEuNjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDkxLjY2NjY3JTsgfVxcbiAgLnNyYy1ncmlkLWluZGV4X19jb2wteGwtMTIge1xcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xcbiAgICAgICAgICAgIGZsZXg6IDAgMCAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7IH0gfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcImluZGV4LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUU7RUFD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LGNBQWM7SUFDZCxlQUFlLEVBQUUsRUFBRVwiLFwiZmlsZVwiOlwiaW5kZXguc2Nzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy1yaWdodDogMTVweDtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvOyB9XFxuICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcXG4gICAgLmNvbnRhaW5lciB7XFxuICAgICAgbWF4LXdpZHRoOiA1NDBweDsgfSB9XFxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgLmNvbnRhaW5lciB7XFxuICAgICAgbWF4LXdpZHRoOiA3MjBweDsgfSB9XFxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gICAgLmNvbnRhaW5lciB7XFxuICAgICAgbWF4LXdpZHRoOiA5NjBweDsgfSB9XFxuICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxuICAgIC5jb250YWluZXIge1xcbiAgICAgIG1heC13aWR0aDogMTE0MHB4OyB9IH1cXG5cXG4uY29udGFpbmVyLWZsdWlkIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy1yaWdodDogMTVweDtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvOyB9XFxuXFxuLmNvbnRhaW5lci13aXRoLW5vLXJpZ2h0LW1hcmdpbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvOyB9XFxuICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcXG4gICAgLmNvbnRhaW5lci13aXRoLW5vLXJpZ2h0LW1hcmdpbiB7XFxuICAgICAgbWF4LXdpZHRoOiBjYWxjKDU0MHB4ICsgKDEwMCUgLSA1NDBweCkgLyAyKTsgfSB9XFxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgLmNvbnRhaW5lci13aXRoLW5vLXJpZ2h0LW1hcmdpbiB7XFxuICAgICAgbWF4LXdpZHRoOiBjYWxjKDcyMHB4ICsgKDEwMCUgLSA3MjBweCkgLyAyKTsgfSB9XFxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gICAgLmNvbnRhaW5lci13aXRoLW5vLXJpZ2h0LW1hcmdpbiB7XFxuICAgICAgbWF4LXdpZHRoOiBjYWxjKDk2MHB4ICsgKDEwMCUgLSA5NjBweCkgLyAyKTsgfSB9XFxuICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxuICAgIC5jb250YWluZXItd2l0aC1uby1yaWdodC1tYXJnaW4ge1xcbiAgICAgIG1heC13aWR0aDogY2FsYygxMTQwcHggKyAoMTAwJSAtIDExNDBweCkgLyAyKTsgfSB9XFxuXFxuLnJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcXG4gIG1hcmdpbi1sZWZ0OiAtMTVweDsgfVxcblxcbi5jb2wtMSwgLmNvbC0yLCAuY29sLTMsIC5jb2wtNCwgLmNvbC01LCAuY29sLTYsIC5jb2wtNywgLmNvbC04LCAuY29sLTksIC5jb2wtMTAsIC5jb2wtMTEsIC5jb2wtMTIsIC5jb2wsIC5jb2wtc20tMSwgLmNvbC1zbS0yLCAuY29sLXNtLTMsIC5jb2wtc20tNCwgLmNvbC1zbS01LCAuY29sLXNtLTYsIC5jb2wtc20tNywgLmNvbC1zbS04LCAuY29sLXNtLTksIC5jb2wtc20tMTAsIC5jb2wtc20tMTEsIC5jb2wtc20tMTIsIC5jb2wtc20sIC5jb2wtbWQtMSwgLmNvbC1tZC0yLCAuY29sLW1kLTMsIC5jb2wtbWQtNCwgLmNvbC1tZC01LCAuY29sLW1kLTYsIC5jb2wtbWQtNywgLmNvbC1tZC04LCAuY29sLW1kLTksIC5jb2wtbWQtMTAsIC5jb2wtbWQtMTEsIC5jb2wtbWQtMTIsIC5jb2wtbWQsIC5jb2wtbGctMSwgLmNvbC1sZy0yLCAuY29sLWxnLTMsIC5jb2wtbGctNCwgLmNvbC1sZy01LCAuY29sLWxnLTYsIC5jb2wtbGctNywgLmNvbC1sZy04LCAuY29sLWxnLTksIC5jb2wtbGctMTAsIC5jb2wtbGctMTEsIC5jb2wtbGctMTIsIC5jb2wtbGcsIC5jb2wteGwtMSwgLmNvbC14bC0yLCAuY29sLXhsLTMsIC5jb2wteGwtNCwgLmNvbC14bC01LCAuY29sLXhsLTYsIC5jb2wteGwtNywgLmNvbC14bC04LCAuY29sLXhsLTksIC5jb2wteGwtMTAsIC5jb2wteGwtMTEsIC5jb2wteGwtMTIsIC5jb2wteGwge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4OyB9XFxuXFxuLmNvbCB7XFxuICBmbGV4LWJhc2lzOiAwO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgbWF4LXdpZHRoOiAxMDAlOyB9XFxuXFxuLmNvbC0xIHtcXG4gIGZsZXg6IDAgMCA4LjMzMzMzJTtcXG4gIG1heC13aWR0aDogOC4zMzMzMyU7IH1cXG5cXG4uY29sLTIge1xcbiAgZmxleDogMCAwIDE2LjY2NjY3JTtcXG4gIG1heC13aWR0aDogMTYuNjY2NjclOyB9XFxuXFxuLmNvbC0zIHtcXG4gIGZsZXg6IDAgMCAyNSU7XFxuICBtYXgtd2lkdGg6IDI1JTsgfVxcblxcbi5jb2wtNCB7XFxuICBmbGV4OiAwIDAgMzMuMzMzMzMlO1xcbiAgbWF4LXdpZHRoOiAzMy4zMzMzMyU7IH1cXG5cXG4uY29sLTUge1xcbiAgZmxleDogMCAwIDQxLjY2NjY3JTtcXG4gIG1heC13aWR0aDogNDEuNjY2NjclOyB9XFxuXFxuLmNvbC02IHtcXG4gIGZsZXg6IDAgMCA1MCU7XFxuICBtYXgtd2lkdGg6IDUwJTsgfVxcblxcbi5jb2wtNyB7XFxuICBmbGV4OiAwIDAgNTguMzMzMzMlO1xcbiAgbWF4LXdpZHRoOiA1OC4zMzMzMyU7IH1cXG5cXG4uY29sLTgge1xcbiAgZmxleDogMCAwIDY2LjY2NjY3JTtcXG4gIG1heC13aWR0aDogNjYuNjY2NjclOyB9XFxuXFxuLmNvbC05IHtcXG4gIGZsZXg6IDAgMCA3NSU7XFxuICBtYXgtd2lkdGg6IDc1JTsgfVxcblxcbi5jb2wtMTAge1xcbiAgZmxleDogMCAwIDgzLjMzMzMzJTtcXG4gIG1heC13aWR0aDogODMuMzMzMzMlOyB9XFxuXFxuLmNvbC0xMSB7XFxuICBmbGV4OiAwIDAgOTEuNjY2NjclO1xcbiAgbWF4LXdpZHRoOiA5MS42NjY2NyU7IH1cXG5cXG4uY29sLTEyIHtcXG4gIGZsZXg6IDAgMCAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMDAlOyB9XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XFxuICAuY29sLXNtIHtcXG4gICAgZmxleC1iYXNpczogMDtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7IH1cXG4gIC5jb2wtc20tMSB7XFxuICAgIGZsZXg6IDAgMCA4LjMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiA4LjMzMzMzJTsgfVxcbiAgLmNvbC1zbS0yIHtcXG4gICAgZmxleDogMCAwIDE2LjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiAxNi42NjY2NyU7IH1cXG4gIC5jb2wtc20tMyB7XFxuICAgIGZsZXg6IDAgMCAyNSU7XFxuICAgIG1heC13aWR0aDogMjUlOyB9XFxuICAuY29sLXNtLTQge1xcbiAgICBmbGV4OiAwIDAgMzMuMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDMzLjMzMzMzJTsgfVxcbiAgLmNvbC1zbS01IHtcXG4gICAgZmxleDogMCAwIDQxLjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiA0MS42NjY2NyU7IH1cXG4gIC5jb2wtc20tNiB7XFxuICAgIGZsZXg6IDAgMCA1MCU7XFxuICAgIG1heC13aWR0aDogNTAlOyB9XFxuICAuY29sLXNtLTcge1xcbiAgICBmbGV4OiAwIDAgNTguMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDU4LjMzMzMzJTsgfVxcbiAgLmNvbC1zbS04IHtcXG4gICAgZmxleDogMCAwIDY2LjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiA2Ni42NjY2NyU7IH1cXG4gIC5jb2wtc20tOSB7XFxuICAgIGZsZXg6IDAgMCA3NSU7XFxuICAgIG1heC13aWR0aDogNzUlOyB9XFxuICAuY29sLXNtLTEwIHtcXG4gICAgZmxleDogMCAwIDgzLjMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiA4My4zMzMzMyU7IH1cXG4gIC5jb2wtc20tMTEge1xcbiAgICBmbGV4OiAwIDAgOTEuNjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDkxLjY2NjY3JTsgfVxcbiAgLmNvbC1zbS0xMiB7XFxuICAgIGZsZXg6IDAgMCAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7IH0gfVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLmNvbC1tZCB7XFxuICAgIGZsZXgtYmFzaXM6IDA7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgbWF4LXdpZHRoOiAxMDAlOyB9XFxuICAuY29sLW1kLTEge1xcbiAgICBmbGV4OiAwIDAgOC4zMzMzMyU7XFxuICAgIG1heC13aWR0aDogOC4zMzMzMyU7IH1cXG4gIC5jb2wtbWQtMiB7XFxuICAgIGZsZXg6IDAgMCAxNi42NjY2NyU7XFxuICAgIG1heC13aWR0aDogMTYuNjY2NjclOyB9XFxuICAuY29sLW1kLTMge1xcbiAgICBmbGV4OiAwIDAgMjUlO1xcbiAgICBtYXgtd2lkdGg6IDI1JTsgfVxcbiAgLmNvbC1tZC00IHtcXG4gICAgZmxleDogMCAwIDMzLjMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiAzMy4zMzMzMyU7IH1cXG4gIC5jb2wtbWQtNSB7XFxuICAgIGZsZXg6IDAgMCA0MS42NjY2NyU7XFxuICAgIG1heC13aWR0aDogNDEuNjY2NjclOyB9XFxuICAuY29sLW1kLTYge1xcbiAgICBmbGV4OiAwIDAgNTAlO1xcbiAgICBtYXgtd2lkdGg6IDUwJTsgfVxcbiAgLmNvbC1tZC03IHtcXG4gICAgZmxleDogMCAwIDU4LjMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiA1OC4zMzMzMyU7IH1cXG4gIC5jb2wtbWQtOCB7XFxuICAgIGZsZXg6IDAgMCA2Ni42NjY2NyU7XFxuICAgIG1heC13aWR0aDogNjYuNjY2NjclOyB9XFxuICAuY29sLW1kLTkge1xcbiAgICBmbGV4OiAwIDAgNzUlO1xcbiAgICBtYXgtd2lkdGg6IDc1JTsgfVxcbiAgLmNvbC1tZC0xMCB7XFxuICAgIGZsZXg6IDAgMCA4My4zMzMzMyU7XFxuICAgIG1heC13aWR0aDogODMuMzMzMzMlOyB9XFxuICAuY29sLW1kLTExIHtcXG4gICAgZmxleDogMCAwIDkxLjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiA5MS42NjY2NyU7IH1cXG4gIC5jb2wtbWQtMTIge1xcbiAgICBmbGV4OiAwIDAgMTAwJTtcXG4gICAgbWF4LXdpZHRoOiAxMDAlOyB9IH1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gIC5jb2wtbGcge1xcbiAgICBmbGV4LWJhc2lzOiAwO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIG1heC13aWR0aDogMTAwJTsgfVxcbiAgLmNvbC1sZy0xIHtcXG4gICAgZmxleDogMCAwIDguMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDguMzMzMzMlOyB9XFxuICAuY29sLWxnLTIge1xcbiAgICBmbGV4OiAwIDAgMTYuNjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDE2LjY2NjY3JTsgfVxcbiAgLmNvbC1sZy0zIHtcXG4gICAgZmxleDogMCAwIDI1JTtcXG4gICAgbWF4LXdpZHRoOiAyNSU7IH1cXG4gIC5jb2wtbGctNCB7XFxuICAgIGZsZXg6IDAgMCAzMy4zMzMzMyU7XFxuICAgIG1heC13aWR0aDogMzMuMzMzMzMlOyB9XFxuICAuY29sLWxnLTUge1xcbiAgICBmbGV4OiAwIDAgNDEuNjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDQxLjY2NjY3JTsgfVxcbiAgLmNvbC1sZy02IHtcXG4gICAgZmxleDogMCAwIDUwJTtcXG4gICAgbWF4LXdpZHRoOiA1MCU7IH1cXG4gIC5jb2wtbGctNyB7XFxuICAgIGZsZXg6IDAgMCA1OC4zMzMzMyU7XFxuICAgIG1heC13aWR0aDogNTguMzMzMzMlOyB9XFxuICAuY29sLWxnLTgge1xcbiAgICBmbGV4OiAwIDAgNjYuNjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDY2LjY2NjY3JTsgfVxcbiAgLmNvbC1sZy05IHtcXG4gICAgZmxleDogMCAwIDc1JTtcXG4gICAgbWF4LXdpZHRoOiA3NSU7IH1cXG4gIC5jb2wtbGctMTAge1xcbiAgICBmbGV4OiAwIDAgODMuMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDgzLjMzMzMzJTsgfVxcbiAgLmNvbC1sZy0xMSB7XFxuICAgIGZsZXg6IDAgMCA5MS42NjY2NyU7XFxuICAgIG1heC13aWR0aDogOTEuNjY2NjclOyB9XFxuICAuY29sLWxnLTEyIHtcXG4gICAgZmxleDogMCAwIDEwMCU7XFxuICAgIG1heC13aWR0aDogMTAwJTsgfSB9XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xcbiAgLmNvbC14bCB7XFxuICAgIGZsZXgtYmFzaXM6IDA7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgbWF4LXdpZHRoOiAxMDAlOyB9XFxuICAuY29sLXhsLTEge1xcbiAgICBmbGV4OiAwIDAgOC4zMzMzMyU7XFxuICAgIG1heC13aWR0aDogOC4zMzMzMyU7IH1cXG4gIC5jb2wteGwtMiB7XFxuICAgIGZsZXg6IDAgMCAxNi42NjY2NyU7XFxuICAgIG1heC13aWR0aDogMTYuNjY2NjclOyB9XFxuICAuY29sLXhsLTMge1xcbiAgICBmbGV4OiAwIDAgMjUlO1xcbiAgICBtYXgtd2lkdGg6IDI1JTsgfVxcbiAgLmNvbC14bC00IHtcXG4gICAgZmxleDogMCAwIDMzLjMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiAzMy4zMzMzMyU7IH1cXG4gIC5jb2wteGwtNSB7XFxuICAgIGZsZXg6IDAgMCA0MS42NjY2NyU7XFxuICAgIG1heC13aWR0aDogNDEuNjY2NjclOyB9XFxuICAuY29sLXhsLTYge1xcbiAgICBmbGV4OiAwIDAgNTAlO1xcbiAgICBtYXgtd2lkdGg6IDUwJTsgfVxcbiAgLmNvbC14bC03IHtcXG4gICAgZmxleDogMCAwIDU4LjMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiA1OC4zMzMzMyU7IH1cXG4gIC5jb2wteGwtOCB7XFxuICAgIGZsZXg6IDAgMCA2Ni42NjY2NyU7XFxuICAgIG1heC13aWR0aDogNjYuNjY2NjclOyB9XFxuICAuY29sLXhsLTkge1xcbiAgICBmbGV4OiAwIDAgNzUlO1xcbiAgICBtYXgtd2lkdGg6IDc1JTsgfVxcbiAgLmNvbC14bC0xMCB7XFxuICAgIGZsZXg6IDAgMCA4My4zMzMzMyU7XFxuICAgIG1heC13aWR0aDogODMuMzMzMzMlOyB9XFxuICAuY29sLXhsLTExIHtcXG4gICAgZmxleDogMCAwIDkxLjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiA5MS42NjY2NyU7IH1cXG4gIC5jb2wteGwtMTIge1xcbiAgICBmbGV4OiAwIDAgMTAwJTtcXG4gICAgbWF4LXdpZHRoOiAxMDAlOyB9IH1cXG5cIl19XSk7XG4vLyBFeHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJjb250YWluZXJcIjogXCJzcmMtZ3JpZC1pbmRleF9fY29udGFpbmVyXCIsXG5cdFwiY29udGFpbmVyRmx1aWRcIjogXCJzcmMtZ3JpZC1pbmRleF9fY29udGFpbmVyLWZsdWlkXCIsXG5cdFwiY29udGFpbmVyV2l0aE5vUmlnaHRNYXJnaW5cIjogXCJzcmMtZ3JpZC1pbmRleF9fY29udGFpbmVyLXdpdGgtbm8tcmlnaHQtbWFyZ2luXCIsXG5cdFwicm93XCI6IFwic3JjLWdyaWQtaW5kZXhfX3Jvd1wiLFxuXHRcImNvbDFcIjogXCJzcmMtZ3JpZC1pbmRleF9fY29sLTFcIixcblx0XCJjb2wyXCI6IFwic3JjLWdyaWQtaW5kZXhfX2NvbC0yXCIsXG5cdFwiY29sM1wiOiBcInNyYy1ncmlkLWluZGV4X19jb2wtM1wiLFxuXHRcImNvbDRcIjogXCJzcmMtZ3JpZC1pbmRleF9fY29sLTRcIixcblx0XCJjb2w1XCI6IFwic3JjLWdyaWQtaW5kZXhfX2NvbC01XCIsXG5cdFwiY29sNlwiOiBcInNyYy1ncmlkLWluZGV4X19jb2wtNlwiLFxuXHRcImNvbDdcIjogXCJzcmMtZ3JpZC1pbmRleF9fY29sLTdcIixcblx0XCJjb2w4XCI6IFwic3JjLWdyaWQtaW5kZXhfX2NvbC04XCIsXG5cdFwiY29sOVwiOiBcInNyYy1ncmlkLWluZGV4X19jb2wtOVwiLFxuXHRcImNvbDEwXCI6IFwic3JjLWdyaWQtaW5kZXhfX2NvbC0xMFwiLFxuXHRcImNvbDExXCI6IFwic3JjLWdyaWQtaW5kZXhfX2NvbC0xMVwiLFxuXHRcImNvbDEyXCI6IFwic3JjLWdyaWQtaW5kZXhfX2NvbC0xMlwiLFxuXHRcImNvbFwiOiBcInNyYy1ncmlkLWluZGV4X19jb2xcIixcblx0XCJjb2xTbTFcIjogXCJzcmMtZ3JpZC1pbmRleF9fY29sLXNtLTFcIixcblx0XCJjb2xTbTJcIjogXCJzcmMtZ3JpZC1pbmRleF9fY29sLXNtLTJcIixcblx0XCJjb2xTbTNcIjogXCJzcmMtZ3JpZC1pbmRleF9fY29sLXNtLTNcIixcblx0XCJjb2xTbTRcIjogXCJzcmMtZ3JpZC1pbmRleF9fY29sLXNtLTRcIixcblx0XCJjb2xTbTVcIjogXCJzcmMtZ3JpZC1pbmRleF9fY29sLXNtLTVcIixcblx0XCJjb2xTbTZcIjogXCJzcmMtZ3JpZC1pbmRleF9fY29sLXNtLTZcIixcblx0XCJjb2xTbTdcIjogXCJzcmMtZ3JpZC1pbmRleF9fY29sLXNtLTdcIixcblx0XCJjb2xTbThcIjogXCJzcmMtZ3JpZC1pbmRleF9fY29sLXNtLThcIixcblx0XCJjb2xTbTlcIjogXCJzcmMtZ3JpZC1pbmRleF9fY29sLXNtLTlcIixcblx0XCJjb2xTbTEwXCI6IFwic3JjLWdyaWQtaW5kZXhfX2NvbC1zbS0xMFwiLFxuXHRcImNvbFNtMTFcIjogXCJzcmMtZ3JpZC1pbmRleF9fY29sLXNtLTExXCIsXG5cdFwiY29sU20xMlwiOiBcInNyYy1ncmlkLWluZGV4X19jb2wtc20tMTJcIixcblx0XCJjb2xTbVwiOiBcInNyYy1ncmlkLWluZGV4X19jb2wtc21cIixcblx0XCJjb2xNZDFcIjogXCJzcmMtZ3JpZC1pbmRleF9fY29sLW1kLTFcIixcblx0XCJjb2xNZDJcIjogXCJzcmMtZ3JpZC1pbmRleF9fY29sLW1kLTJcIixcblx0XCJjb2xNZDNcIjogXCJzcmMtZ3JpZC1pbmRleF9fY29sLW1kLTNcIixcblx0XCJjb2xNZDRcIjogXCJzcmMtZ3JpZC1pbmRleF9fY29sLW1kLTRcIixcblx0XCJjb2xNZDVcIjogXCJzcmMtZ3JpZC1pbmRleF9fY29sLW1kLTVcIixcblx0XCJjb2xNZDZcIjogXCJzcmMtZ3JpZC1pbmRleF9fY29sLW1kLTZcIixcblx0XCJjb2xNZDdcIjogXCJzcmMtZ3JpZC1pbmRleF9fY29sLW1kLTdcIixcblx0XCJjb2xNZDhcIjogXCJzcmMtZ3JpZC1pbmRleF9fY29sLW1kLThcIixcblx0XCJjb2xNZDlcIjogXCJzcmMtZ3JpZC1pbmRleF9fY29sLW1kLTlcIixcblx0XCJjb2xNZDEwXCI6IFwic3JjLWdyaWQtaW5kZXhfX2NvbC1tZC0xMFwiLFxuXHRcImNvbE1kMTFcIjogXCJzcmMtZ3JpZC1pbmRleF9fY29sLW1kLTExXCIsXG5cdFwiY29sTWQxMlwiOiBcInNyYy1ncmlkLWluZGV4X19jb2wtbWQtMTJcIixcblx0XCJjb2xNZFwiOiBcInNyYy1ncmlkLWluZGV4X19jb2wtbWRcIixcblx0XCJjb2xMZzFcIjogXCJzcmMtZ3JpZC1pbmRleF9fY29sLWxnLTFcIixcblx0XCJjb2xMZzJcIjogXCJzcmMtZ3JpZC1pbmRleF9fY29sLWxnLTJcIixcblx0XCJjb2xMZzNcIjogXCJzcmMtZ3JpZC1pbmRleF9fY29sLWxnLTNcIixcblx0XCJjb2xMZzRcIjogXCJzcmMtZ3JpZC1pbmRleF9fY29sLWxnLTRcIixcblx0XCJjb2xMZzVcIjogXCJzcmMtZ3JpZC1pbmRleF9fY29sLWxnLTVcIixcblx0XCJjb2xMZzZcIjogXCJzcmMtZ3JpZC1pbmRleF9fY29sLWxnLTZcIixcblx0XCJjb2xMZzdcIjogXCJzcmMtZ3JpZC1pbmRleF9fY29sLWxnLTdcIixcblx0XCJjb2xMZzhcIjogXCJzcmMtZ3JpZC1pbmRleF9fY29sLWxnLThcIixcblx0XCJjb2xMZzlcIjogXCJzcmMtZ3JpZC1pbmRleF9fY29sLWxnLTlcIixcblx0XCJjb2xMZzEwXCI6IFwic3JjLWdyaWQtaW5kZXhfX2NvbC1sZy0xMFwiLFxuXHRcImNvbExnMTFcIjogXCJzcmMtZ3JpZC1pbmRleF9fY29sLWxnLTExXCIsXG5cdFwiY29sTGcxMlwiOiBcInNyYy1ncmlkLWluZGV4X19jb2wtbGctMTJcIixcblx0XCJjb2xMZ1wiOiBcInNyYy1ncmlkLWluZGV4X19jb2wtbGdcIixcblx0XCJjb2xYbDFcIjogXCJzcmMtZ3JpZC1pbmRleF9fY29sLXhsLTFcIixcblx0XCJjb2xYbDJcIjogXCJzcmMtZ3JpZC1pbmRleF9fY29sLXhsLTJcIixcblx0XCJjb2xYbDNcIjogXCJzcmMtZ3JpZC1pbmRleF9fY29sLXhsLTNcIixcblx0XCJjb2xYbDRcIjogXCJzcmMtZ3JpZC1pbmRleF9fY29sLXhsLTRcIixcblx0XCJjb2xYbDVcIjogXCJzcmMtZ3JpZC1pbmRleF9fY29sLXhsLTVcIixcblx0XCJjb2xYbDZcIjogXCJzcmMtZ3JpZC1pbmRleF9fY29sLXhsLTZcIixcblx0XCJjb2xYbDdcIjogXCJzcmMtZ3JpZC1pbmRleF9fY29sLXhsLTdcIixcblx0XCJjb2xYbDhcIjogXCJzcmMtZ3JpZC1pbmRleF9fY29sLXhsLThcIixcblx0XCJjb2xYbDlcIjogXCJzcmMtZ3JpZC1pbmRleF9fY29sLXhsLTlcIixcblx0XCJjb2xYbDEwXCI6IFwic3JjLWdyaWQtaW5kZXhfX2NvbC14bC0xMFwiLFxuXHRcImNvbFhsMTFcIjogXCJzcmMtZ3JpZC1pbmRleF9fY29sLXhsLTExXCIsXG5cdFwiY29sWGwxMlwiOiBcInNyYy1ncmlkLWluZGV4X19jb2wteGwtMTJcIixcblx0XCJjb2xYbFwiOiBcInNyYy1ncmlkLWluZGV4X19jb2wteGxcIlxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW2ldKTtcblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290KS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShtb2R1bGVJZCwgbGlzdCwgb3B0aW9ucykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGNzczogbGlzdFtpXVsxXSxcbiAgICAgIG1lZGlhOiBsaXN0W2ldWzJdLFxuICAgICAgc291cmNlTWFwOiBsaXN0W2ldWzNdXG4gICAgfTtcblxuICAgIGlmIChzdHlsZXNJbkRvbVttb2R1bGVJZF1baV0pIHtcbiAgICAgIHN0eWxlc0luRG9tW21vZHVsZUlkXVtpXShwYXJ0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb21bbW9kdWxlSWRdLnB1c2goYWRkU3R5bGUocGFydCwgb3B0aW9ucykpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG1vZHVsZUlkLCBsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIG1vZHVsZUlkID0gb3B0aW9ucy5iYXNlID8gbW9kdWxlSWQgKyBvcHRpb25zLmJhc2UgOiBtb2R1bGVJZDtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG5cbiAgaWYgKCFzdHlsZXNJbkRvbVttb2R1bGVJZF0pIHtcbiAgICBzdHlsZXNJbkRvbVttb2R1bGVJZF0gPSBbXTtcbiAgfVxuXG4gIG1vZHVsZXNUb0RvbShtb2R1bGVJZCwgbGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghc3R5bGVzSW5Eb21bbW9kdWxlSWRdKSB7XG4gICAgICBzdHlsZXNJbkRvbVttb2R1bGVJZF0gPSBbXTtcbiAgICB9XG5cbiAgICBtb2R1bGVzVG9Eb20obW9kdWxlSWQsIG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgaiA9IG5ld0xpc3QubGVuZ3RoOyBqIDwgc3R5bGVzSW5Eb21bbW9kdWxlSWRdLmxlbmd0aDsgaisrKSB7XG4gICAgICBzdHlsZXNJbkRvbVttb2R1bGVJZF1bal0oKTtcbiAgICB9XG5cbiAgICBzdHlsZXNJbkRvbVttb2R1bGVJZF0ubGVuZ3RoID0gbmV3TGlzdC5sZW5ndGg7XG5cbiAgICBpZiAoc3R5bGVzSW5Eb21bbW9kdWxlSWRdLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW21vZHVsZUlkXTtcbiAgICB9XG4gIH07XG59OyIsImV4cG9ydCB2YXIgVFVUT1JJQUxfUEFHRV9SRUxBVElWRV9QQVRIID0gXCJ0dXRvcmlhbFwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImZvY3VzVmlzaWJsZVwiOlwic3JjLVdlYnNpdGUtaW5kZXhfX2ZvY3VzLXZpc2libGVcIn07IiwiaW1wb3J0IFwiLi9pbmRleC5zY3NzXCI7XG5cbmltcG9ydCB7IFNQQSBhcyBTUEEsIEh0dHBTdGF0dXNDb2RlLCBQYWdlLCBQYWdlRGlyZWN0aW9uIH0gZnJvbSBcIkBhbHVtaXMvdHMvU1BBXCI7XG5pbXBvcnQgeyBNYW5hZ2VkIH0gZnJvbSBcIkBhbHVtaXMvdHMvSlNYXCI7XG5pbXBvcnQgeyBvIH0gZnJvbSBcIkBhbHVtaXMvdHMvTW9kaWZpYWJsZU9ic2VydmFibGVcIjtcbmltcG9ydCB7IFRVVE9SSUFMX1BBR0VfUkVMQVRJVkVfUEFUSCBhcyBUVVRPUklBTF9QQUdFX1JFTEFUSVZFX1BBVEggfSBmcm9tIFwiLi4vVHV0b3JpYWxQYWdlL21ldGFkYXRhXCI7XG5cbmV4cG9ydCBjbGFzcyBXZWJzaXRlIGV4dGVuZHMgU1BBPEhUTUxCb2R5RWxlbWVudCwgTm9kZT4ge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaW5zdGFsbFRpdGxlSGFuZGxlcigpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyU3ViUGFnZShbVFVUT1JJQUxfUEFHRV9SRUxBVElWRV9QQVRIXSwgYXN5bmMgKCkgPT4geyByZXR1cm4gbmV3IChhd2FpdCBpbXBvcnQoXCIuLi9UdXRvcmlhbFBhZ2VcIikpLlR1dG9yaWFsUGFnZSgpOyB9KTtcbiAgICAgICAgdGhpcy5ub2RlID0gPD57KCkgPT4gPE1hbmFnZWQ+e3RoaXMuY3VycmVudFBhZ2UudmFsdWV9PC9NYW5hZ2VkPn08Lz47XG4gICAgfVxuXG4gICAgY3VycmVudFBhZ2UgPSBvPFBhZ2U8Tm9kZT4+KCk7XG5cbiAgICBnZXQgdGl0bGUoKSB7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRQYWdlID0gdGhpcy5jdXJyZW50UGFnZS52YWx1ZTtcblxuICAgICAgICBpZiAoY3VycmVudFBhZ2UpXG4gICAgICAgICAgICByZXR1cm4gXCJBbHVtaXMgLSBcIiArIGN1cnJlbnRQYWdlLnRpdGxlO1xuXG4gICAgICAgIHJldHVybiBcIkFsdW1pc1wiO1xuICAgIH1cblxuICAgIGFzeW5jIGxvYWRBc3luYyhwYXRoOiBzdHJpbmdbXSwgcGF0aEluZGV4OiBudW1iZXIsIHBhcmFtZXRlcnM6IFVSTFNlYXJjaFBhcmFtcywgcGFnZURpcmVjdGlvbjogUGFnZURpcmVjdGlvbiwgZTogUG9wU3RhdGVFdmVudCwgcGFnZT86IFBhZ2U8Tm9kZT4sIHBhZ2VIdHRwU3RhdHVzQ29kZT86IEh0dHBTdGF0dXNDb2RlKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UudmFsdWUgPSBwYWdlO1xuICAgICAgICByZXR1cm4gSHR0cFN0YXR1c0NvZGUuT2s7XG4gICAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRoZW1lQ29sb3JzIHtcblxuICAgIGJvZHk6IHN0cmluZztcbiAgICBiYWNrZ3JvdW5kOiBzdHJpbmc7XG5cbiAgICBibHVlOiBzdHJpbmc7XG4gICAgaW5kaWdvOiBzdHJpbmc7XG4gICAgcHVycGxlOiBzdHJpbmc7XG4gICAgcGluazogc3RyaW5nO1xuICAgIHJlZDogc3RyaW5nO1xuICAgIG9yYW5nZTogc3RyaW5nO1xuICAgIHllbGxvdzogc3RyaW5nO1xuICAgIGdyZWVuOiBzdHJpbmc7XG4gICAgdGVhbDogc3RyaW5nO1xuICAgIGN5YW46IHN0cmluZztcbn1cblxubGV0IHRoZW1lQ29sb3JzOiBUaGVtZUNvbG9ycztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRoZW1lQ29sb3JzKCkge1xuXG4gICAgaWYgKHRoZW1lQ29sb3JzKVxuICAgICAgICByZXR1cm4gdGhlbWVDb2xvcnM7XG5cbiAgICBsZXQgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpO1xuXG4gICAgcmV0dXJuIHRoZW1lQ29sb3JzID0ge1xuICAgICAgICBib2R5OiBzdHlsZS5jb2xvcixcbiAgICAgICAgYmFja2dyb3VuZDogc3R5bGUuYmFja2dyb3VuZENvbG9yLFxuICAgICAgICBibHVlOiBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1ibHVlXCIpLFxuICAgICAgICBpbmRpZ286IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCItLWluZGlnb1wiKSxcbiAgICAgICAgcHVycGxlOiBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1wdXJwbGVcIiksXG4gICAgICAgIHBpbms6IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCItLXBpbmtcIiksXG4gICAgICAgIHJlZDogc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcIi0tcmVkXCIpLFxuICAgICAgICBvcmFuZ2U6IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCItLW9yYW5nZVwiKSxcbiAgICAgICAgeWVsbG93OiBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS15ZWxsb3dcIiksXG4gICAgICAgIGdyZWVuOiBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1ncmVlblwiKSxcbiAgICAgICAgdGVhbDogc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcIi0tdGVhbFwiKSxcbiAgICAgICAgY3lhbjogc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcIi0tY3lhblwiKVxuICAgIH07XG59XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9AdGVhbXN1cGVyY2VsbC90eXBpbmdzLWZvci1jc3MtbW9kdWxlcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMiEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKG1vZHVsZS5pZCwgY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiaW1wb3J0IGdyaWRTdHlsZXMgZnJvbSBcIi4vaW5kZXguc2Nzc1wiO1xuaW1wb3J0IHsgZ2xvYmFsUHJvcGVydHlIYW5kbGVycyB9IGZyb20gXCJAYWx1bWlzL3RzL0pTWFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZGVjb21wb3NlRGV2aWNlV2lkdGgod2lkdGg6IG51bWJlcikge1xuXG4gICAgaWYgKERldmljZVdpZHRoLkV4dHJhTGFyZ2UgPD0gd2lkdGgpXG4gICAgICAgIHJldHVybiBEZXZpY2VXaWR0aC5FeHRyYUxhcmdlO1xuXG4gICAgaWYgKERldmljZVdpZHRoLkxhcmdlIDw9IHdpZHRoKVxuICAgICAgICByZXR1cm4gRGV2aWNlV2lkdGguTGFyZ2U7XG5cbiAgICBpZiAoRGV2aWNlV2lkdGguTWVkaXVtIDw9IHdpZHRoKVxuICAgICAgICByZXR1cm4gRGV2aWNlV2lkdGguTWVkaXVtO1xuXG4gICAgaWYgKERldmljZVdpZHRoLlNtYWxsIDw9IHdpZHRoKVxuICAgICAgICByZXR1cm4gRGV2aWNlV2lkdGguU21hbGw7XG5cbiAgICByZXR1cm4gRGV2aWNlV2lkdGguRXh0cmFTbWFsbDtcbn1cblxuZXhwb3J0IGVudW0gRGV2aWNlV2lkdGgge1xuXG4gICAgRXh0cmFTbWFsbCA9IDAsXG4gICAgU21hbGwgPSA1NzYsXG4gICAgTWVkaXVtID0gNzY4LFxuICAgIExhcmdlID0gOTkyLFxuICAgIEV4dHJhTGFyZ2UgPSAxMjAwXG59XG5cbmdsb2JhbFByb3BlcnR5SGFuZGxlcnMuc2V0KFwiY29sdW1uXCIsIChlbGVtZW50OiBIVE1MRWxlbWVudCwgdmFsdWU6IGJvb2xlYW4pID0+IHtcbiAgICBpZiAodmFsdWUpXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChncmlkU3R5bGVzLmNvbCk7XG59KTtcblxuZ2xvYmFsUHJvcGVydHlIYW5kbGVycy5zZXQoXCJjb2x1bW5zXCIsIChlbGVtZW50OiBIVE1MRWxlbWVudCwgdmFsdWU6IG51bWJlcikgPT4ge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChncmlkU3R5bGVzW1wiY29sXCIgKyB2YWx1ZV0pO1xufSk7XG5cbmdsb2JhbFByb3BlcnR5SGFuZGxlcnMuc2V0KFwic21hbGxBbmRVcENvbHVtbnNcIiwgKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCB2YWx1ZTogbnVtYmVyKSA9PiB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGdyaWRTdHlsZXNbXCJjb2xTbVwiICsgdmFsdWVdKTtcbn0pO1xuXG5nbG9iYWxQcm9wZXJ0eUhhbmRsZXJzLnNldChcIm1lZGl1bUFuZFVwQ29sdW1uc1wiLCAoZWxlbWVudDogSFRNTEVsZW1lbnQsIHZhbHVlOiBudW1iZXIpID0+IHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoZ3JpZFN0eWxlc1tcImNvbE1kXCIgKyB2YWx1ZV0pO1xufSk7XG5cbmdsb2JhbFByb3BlcnR5SGFuZGxlcnMuc2V0KFwibGFyZ2VBbmRVcENvbHVtbnNcIiwgKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCB2YWx1ZTogbnVtYmVyKSA9PiB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGdyaWRTdHlsZXNbXCJjb2xMZ1wiICsgdmFsdWVdKTtcbn0pO1xuXG5nbG9iYWxQcm9wZXJ0eUhhbmRsZXJzLnNldChcImV4dHJhTGFyZ2VBbmRVcENvbHVtbnNcIiwgKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCB2YWx1ZTogbnVtYmVyKSA9PiB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGdyaWRTdHlsZXNbXCJjb2xYbFwiICsgdmFsdWVdKTtcbn0pO1xuXG5nbG9iYWxQcm9wZXJ0eUhhbmRsZXJzLnNldChcInJlc3BvbnNpdmVDb250YWluZXJcIiwgKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCB2YWx1ZTogYm9vbGVhbikgPT4ge1xuICAgIGlmICh2YWx1ZSlcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGdyaWRTdHlsZXMuY29udGFpbmVyKTtcbn0pO1xuXG5nbG9iYWxQcm9wZXJ0eUhhbmRsZXJzLnNldChcInJlc3BvbnNpdmVDb250YWluZXJXaXRoTm9SaWdodE1hcmdpblwiLCAoZWxlbWVudDogSFRNTEVsZW1lbnQsIHZhbHVlOiBib29sZWFuKSA9PiB7XG4gICAgaWYgKHZhbHVlKVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoZ3JpZFN0eWxlcy5jb250YWluZXJXaXRoTm9SaWdodE1hcmdpbik7XG59KTtcblxuZ2xvYmFsUHJvcGVydHlIYW5kbGVycy5zZXQoXCJmbHVpZENvbnRhaW5lclwiLCAoZWxlbWVudDogSFRNTEVsZW1lbnQsIHZhbHVlOiBib29sZWFuKSA9PiB7XG4gICAgaWYgKHZhbHVlKVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoZ3JpZFN0eWxlcy5jb250YWluZXJGbHVpZCk7XG59KTtcblxuZ2xvYmFsUHJvcGVydHlIYW5kbGVycy5zZXQoXCJyb3dcIiwgKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCB2YWx1ZTogYm9vbGVhbikgPT4ge1xuICAgIGlmICh2YWx1ZSlcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGdyaWRTdHlsZXMucm93KTtcbn0pOyIsImltcG9ydCB7IFdlYnNpdGUgfSBmcm9tIFwiLi9XZWJzaXRlXCI7XG5cbmltcG9ydCBcIi4vZ3JpZFwiO1xuXG4vLyBAdHMtaWdub3JlXG5zZWxmLk1vbmFjb0Vudmlyb25tZW50ID0ge1xuICAgIGdldFdvcmtlclVybDogZnVuY3Rpb24gKF9tb2R1bGVJZCwgbGFiZWwpIHtcbiAgICAgICAgaWYgKGxhYmVsID09PSBcImpzb25cIikge1xuICAgICAgICAgICAgcmV0dXJuIFwiL2pzb24ud29ya2VyLmJ1bmRsZS5qc1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsYWJlbCA9PT0gXCJjc3NcIikge1xuICAgICAgICAgICAgcmV0dXJuIFwiL2Nzcy53b3JrZXIuYnVuZGxlLmpzXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxhYmVsID09PSBcImh0bWxcIikge1xuICAgICAgICAgICAgcmV0dXJuIFwiL2h0bWwud29ya2VyLmJ1bmRsZS5qc1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsYWJlbCA9PT0gXCJ0eXBlc2NyaXB0XCIgfHwgbGFiZWwgPT09IFwiamF2YXNjcmlwdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gXCIvdHMud29ya2VyLmJ1bmRsZS5qc1wiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIi9lZGl0b3Iud29ya2VyLmJ1bmRsZS5qc1wiO1xuICAgIH1cbn07XG5cbmxldCBzcGEgPSBuZXcgV2Vic2l0ZSgpO1xuXG5zcGEuaW52YWxpZGF0ZUxvY2F0aW9uQXN5bmMoKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3BhLm5vZGUpO1xuXG5cblxuXG4vLyAoKCkgPT4ge1xuXG4vLyAgICAgbGV0IGdpdmVuTmFtZSA9IG8oXCJ0b2RvXCIpOyAvLyBDcmVhdGVzIGEgTW9kaWZpYWJsZU9ic2VydmFibGU8c3RyaW5nPlxuLy8gICAgIGxldCB0ZXN0ID0gbygwKTtcblxuLy8gICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoXG4vLyAgICAgICAgIDxwPmdpdmVuTmFtZSBpcyB7Z2l2ZW5OYW1lfSBhbmRcbi8vICAgICAgICAgICAgIGl0IGlzIHsoKSA9PiBnaXZlbk5hbWUudmFsdWUubGVuZ3RofSBjaGFyYWN0ZXJzIGxvbmcuXG4vLyAgICAgICAgICAgICB7bm9ybWFsaXplKCgpID0+IHRlc3QudmFsdWUgPCAxMCwgKGIpID0+IHtcbi8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImdlbmVyZXJlci4uLlwiKTtcbi8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhiLnZhbHVlKTtcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gYi52YWx1ZSA/IDxzcGFuPm1pbmRyZSBlbm4gMTA8L3NwYW4+IDogPHNwYW4+dGkgZWxsZXIgaMO4eWVyZSB7dGVzdH08L3NwYW4+O1xuLy8gICAgICAgICAgICAgfSl9XG4vLyAgICAgICAgIDwvcD5cbi8vICAgICApO1xuXG4vLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNTsgKytpKVxuLy8gICAgICAgICB0ZXN0LnZhbHVlID0gaTtcblxuLy8gICAgIGNvbnNvbGUubG9nKHRlc3QudmFsdWUpXG5cbi8vICAgICBnaXZlbk5hbWUudmFsdWUgPSBcImxqa2RmamhzZGZkZnNkc2ZcIjtcblxuLy8gfSkoKTsiXSwic291cmNlUm9vdCI6IiJ9