import CompilerWorker from "worker-loader!./compiler.worker";
import { CompilerRequestMessage, CompilerMessageType, CompilerResponseMessage } from "./CompilerMessage";
import { packageFiles } from "../packageFiles";

let worker = new CompilerWorker();

let ids = 0;
let pendingPromises = new Map<number, { resolve: (value?: any | PromiseLike<any>) => void; reject: (reason?: any) => void; }>();

function postMessageAsync<TResponse>(type: CompilerMessageType, data?) {
  return new Promise<TResponse>((resolve, reject) => {
    let id = ids++;
    pendingPromises.set(id, { resolve, reject });
    worker.postMessage(<CompilerRequestMessage<any>>{ type, data, id });
  });
}

worker.onmessage = e => {
  let message = e.data as CompilerResponseMessage<any>, pendingPromise = pendingPromises.get(message.id);
  pendingPromises.delete(message.id);
  if (message.isErroneous)
    pendingPromise.reject(message.error);
  else pendingPromise.resolve(message.data);
};

worker.onerror = e => {
  let t = new Map<number, { resolve: (value?: any | PromiseLike<any>) => void; reject: (reason?: any) => void; }>();
  pendingPromises.forEach((value, key) => t.set(key, value));
  pendingPromises.clear();
  t.forEach(v => v.reject(e.error));
};

let compilePackageFilesAsync = (async () => {

  let files = {};
  for (let p in packageFiles) {
    if (!p.startsWith("/node_modules/"))
      throw new Error();
      files[p.substr("/node_modules/".length)] = packageFiles[p];
  }
  return await postMessageAsync<string>(CompilerMessageType.Compile, files);
})();

export class CodeRunner {

  constructor(title = "Alumis", width = 800, height = 600) {
    let top = screen.height / 2 - height / 2, left = screen.width / 2 - width / 2;
    this.window = open("", "", `toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=${width},height=${height},top=${top},left=${left}`);
    if (!this.window)
      throw new CodeRunnerPopupError();
    this.window.document.title = title;
    this.window.window.eval("var require = { skipDataMain: true };");
    let script = this.window.document.createElement("script");
    this._loadRequireJsPromise = new Promise((resolve, reject) => { script.onload = () => resolve(); script.onerror = e => reject(e); });
    script.src = location.origin + "/require.min.js";
    this.window.document.head.appendChild(script);
  }

  private _loadRequireJsPromise: Promise<void>;

  window: Window;

  onStop: (codeRunner: CodeRunner) => any;

  async runAsync(code: string) {

    let files = {};

    for (let p in packageFiles) {
      if (!p.startsWith("/node_modules/"))
        throw new Error();
        files[p.substr("/node_modules/".length)] = packageFiles[p];
    }

    files["bootstrap.tsx"] = `import { createNode } from "@alumis/ts/JSX"; window["createNode"] = createNode`;
    files["index.tsx"] = code;

    let dependencies = await Promise.all([this._loadRequireJsPromise, postMessageAsync<string>(CompilerMessageType.Compile, files)]);
    this.window.window.eval(dependencies[1] + ";require(['bootstrap']);require(['index'])");
  }
}

export class CodeRunnerPopupError extends Error {

}