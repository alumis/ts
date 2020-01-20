import * as ts from "../typescript";
import { CompilerRequestMessage, CompilerMessageType, CompilerResponseMessage } from "./CompilerMessage";

const ctx: Worker = self as any;

ctx.onmessage = e => {
  let message = e.data as CompilerRequestMessage<any>;
  switch (message.type) {
    case CompilerMessageType.Compile: {
      let result: string;
      try {
        result = compile(message.data);
      }
      catch (e) {
        ctx.postMessage(<CompilerResponseMessage<void>>{ id: message.id, isErroneous: true, error: String(e) });
        break;
      }
      ctx.postMessage(<CompilerResponseMessage<string>>{ id: message.id, data: result });
      break;
    }
  }
};

function compile(files: { [filePath: string]: string; }) {

  let createdFiles: { [filePath: string]: string; } = {};

  let options: ts.CompilerOptions = {
    target: ts.ScriptTarget.ES5,
    module: ts.ModuleKind.AMD,
    jsx: ts.JsxEmit.React,
    strict: false,
    moduleResolution: ts.ModuleResolutionKind.NodeJs,
    esModuleInterop: true,
    resolveJsonModule: true,
    outFile: "index.js"
  };

  function readFile(fileName) {
    return files[fileName] || createdFiles[fileName];
  }

  function getSourceFile(fileName, languageVersion, onError) {
    var text;
    try {
        text = readFile(fileName);
    }
    catch (e) {
        if (onError) {
            onError(e.message);
        }
        text = "";
    }
    return text !== undefined ? ts.createSourceFile(fileName, text, languageVersion) : undefined;
  }

  function writeFile(fileName, contents) {
    createdFiles[fileName] = contents;
  }

  let host: ts.CompilerHost = {
    getSourceFile: getSourceFile,
    getDefaultLibFileName: (defaultLibOptions: ts.CompilerOptions) => "/" + ts.getDefaultLibFileName(defaultLibOptions),
    writeFile: writeFile,
    getCurrentDirectory: () => "/",
    getDirectories: (path: string) => [],
    fileExists: (fileName: string) => { return files.hasOwnProperty(fileName) || createdFiles.hasOwnProperty(fileName); },
    readFile: readFile,
    getCanonicalFileName: (fileName: string) => fileName,
    useCaseSensitiveFileNames: () => true,
    getNewLine: () => "\n",
    getEnvironmentVariable: () => "" // do nothing
  };

  let program = ts.createProgram(Object.keys(files), options, host);

  program.emit();
  
  return createdFiles["index.js"];
}