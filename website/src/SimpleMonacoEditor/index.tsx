import simpleMonacoEditorStyles from "./index.scss";

import * as monaco from "monaco-editor";
import "../monaco";

import { Component } from "@alumis/elastic-ts/JSX";

const LINE_HEIGHT = 19;

export default class SimpleMonacoEditor extends Component<HTMLDivElement> {

  constructor(properties: SimpleMonacoEditorProperties) {

    super();

    let div = document.createElement("div");
    div.className = simpleMonacoEditorStyles.simpleMonacoEditor;
    let innerDiv = document.createElement("div");
    div.appendChild(innerDiv);
    innerDiv.style.height = ((properties && properties.rows || 10) + 1) * LINE_HEIGHT + "px";

    setTimeout(() => {

      this.editor = monaco.editor.create(innerDiv, {
        language: "typescript",
        model: monaco.editor.createModel(properties.code, "typescript", monaco.Uri.parse("file:///main.tsx")),
        lineNumbers: "off",
        folding: false,
        // Undocumented see https://github.com/Microsoft/vscode/issues/30795#issuecomment-410998882
        lineDecorationsWidth: 16,
        lineNumbersMinChars: 0,
        scrollBeyondLastLine: false,

        minimap: {
          enabled: false
        },

        contextmenu: false,
        fontFamily: "IBM Plex Mono",
        theme: "elasticTheme"
      });

      // Add some padding to the top
      this.editor.changeViewZones(a => {
        a.addZone({
          afterLineNumber: 0,
          heightInLines: 1,
          domNode: document.createElement("div")
        });
      });

    }, 0);

    this.node = div;
  }

  editor: monaco.editor.IStandaloneCodeEditor;
}

export type SimpleMonacoEditorProperties = JSX.HTMLAttributes<HTMLDivElement> & { rows?: number; code?: string; };