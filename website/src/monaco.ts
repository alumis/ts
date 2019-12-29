import * as monaco from "monaco-editor";
import { getThemeColors } from "./ElasticWebsite";

monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
  target: monaco.languages.typescript.ScriptTarget.ES2018,
  module: monaco.languages.typescript.ModuleKind.ESNext,
  jsx: monaco.languages.typescript.JsxEmit.Preserve,
  strict: false,
  moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
  esModuleInterop: true,
  resolveJsonModule: true
  // noEmit: true,
  // typeRoots: [ "node_modules/@types" ]
});

let typings = generateTypings();

console.log(typings);

for (let p in typings)
  monaco.languages.typescript.typescriptDefaults.addExtraLib(typings[p], "file:///" + p);

// Define a light theme based on css

let themeColors = getThemeColors();
let hexDigits = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f");

function getHexColor(color: string) {
  let i = color.indexOf("rgb(");
  if (i === -1) {
    i = color.indexOf("rgba(");
    if (i === -1)
      return getHexColorNotRgb(color);
    else i += "rgba(".length;
  }
  else i += "rgb(".length;
  let result = "";
  for (; ;) {
    let j = color.indexOf(",", i);
    if (j === -1 && (j = color.indexOf(")", i)) === -1)
      return result;
    let arg = parseInt(color.substr(i, j - i), 10), hexDigit1 = ~~(arg / 16), hexDigit2 = ~~(arg - hexDigit1 * 16);
    result += hexDigits[hexDigit1] + hexDigits[hexDigit2];
    i = j + 1;
  }
}

function getHexColorNotRgb(color: string) {
  color = color.trim();
  if (color.startsWith("#"))
    return color.substr(1);
  return color;
}

monaco.editor.defineTheme("elasticTheme", {
  base: "vs",
  inherit: true,
  rules: [
    { token: "", foreground: getHexColor(themeColors.body), background: getHexColor(themeColors.background) },
    { token: "keyword", foreground: getHexColor(themeColors.blue) },
    { token: "comment", foreground: getHexColor(themeColors.green), fontStyle: "italic" }
  ]
} as any);