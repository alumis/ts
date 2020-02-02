import monacoEditorStyles from "./index.scss";

import * as monaco from "monaco-editor";
import "../monaco";

import { Component, toggleClass } from "@alumis/ts/JSX";
import { CodeRunner } from "../compiler/compiler";
import { ButtonGroup } from "../ButtonGroup";
import { Button, ButtonTheme, ButtonSize } from "../Button";
import { Octicon, OcticonSize } from "../Octicon";
import TriangleRight from "../Octicons/TriangleRight";
import PrimitiveSquare from "../Octicons/PrimitiveSquare";
import { o } from "@alumis/ts/ModifiableObservable";
import { Progress } from "../Progress";
import File from "../Octicons/File";

const LINE_HEIGHT = 19;

export class MonacoEditor extends Component<HTMLDivElement> {

  constructor(properties: MonacoEditorProperties) {

    super();

    let { rows, model, readOnly, showPath, ...otherProperties } = properties || {};

    if (typeof rows !== "number") {

      rows = 1;

      let modelValue = model.getValue();

      for (let c of modelValue)
        if (c === "\n")
          ++rows;
    }

    let domElement: HTMLElement;

    if (showPath) {

      var octicon: SVGSVGElement = <Octicon icon={File} size={OcticonSize.Small} />;

      octicon.classList.add(monacoEditorStyles.monacoEditorPathIcon);
    }

    this.node = (
      <div {...otherProperties}>
        {showPath ? <small className={monacoEditorStyles.monacoEditorPath}>{octicon}{simplifyPath(model.uri.path)}</small> : null}
        <div toggle={{ [monacoEditorStyles.monacoEditorFrame]: true, [monacoEditorStyles.monacoEditorCompiling]: this._isCompiling }}>
          {!readOnly ?
            <fieldset className={monacoEditorStyles.monacoEditorToolbar} role="toolbar" disabled={this._isCompiling}>
              <ButtonGroup>
                <Button className={monacoEditorStyles.monacoEditorToolbarBtnPlay} theme={ButtonTheme.Toolbar} size={ButtonSize.Small} title="Run (opens in a new window)" onclick={() => this.runAsync()}>
                  <Octicon icon={TriangleRight} size={OcticonSize.Small} />
                </Button>
                <Button className={monacoEditorStyles.monacoEditorToolbarBtnStop} theme={ButtonTheme.Toolbar} size={ButtonSize.Small} title="Stop" disabled={() => !this._codeRunner.value} onclick={() => this.stop()}>
                  <Octicon icon={PrimitiveSquare} size={OcticonSize.Small} />
                </Button>
              </ButtonGroup>
              <Progress className={monacoEditorStyles.monacoEditorToolbarProgress} indeterminate buffer={false} />
            </fieldset>
            : null}
          {domElement = <div style={{ height: (rows + 2) * LINE_HEIGHT + "px" }}></div>}
        </div>
      </div>
    );

    this.node.classList.add(monacoEditorStyles.monacoEditor);

    setTimeout(() => {

      this._editor = monaco.editor.create(domElement, {
        language: "typescript",
        model: model,
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
        theme: "alumisTheme",

        readOnly: readOnly
      });

      // Add some padding to the top
      this._editor.changeViewZones(a => {
        a.addZone({
          afterLineNumber: 0,
          heightInLines: 1,
          domNode: document.createElement("div")
        });
      });

      this._isCompiling.subscribe(n => this._editor.updateOptions({ readOnly: n }));

    }, 0);
  }

  private _editor: monaco.editor.IStandaloneCodeEditor;
  private _isCompiling = o(false);
  private _codeRunner = o<CodeRunner>(null);

  async runAsync() {

    if (this._isCompiling.value)
      return;

    this.stop();
    this._isCompiling.value = true;

    try {

      let codeRunner: CodeRunner;

      try {

        this._codeRunner.value = codeRunner = new CodeRunner();

        codeRunner.window.onunload = () => {

          if (this._codeRunner.value === codeRunner)
            this._codeRunner.value = null;
        };

        await codeRunner.runAsync(this._editor.getModel().getValue());
      }

      catch (e) {

        if (codeRunner) {

          codeRunner.window.close();
          this._codeRunner.value = null;
        }

        // TODO
        throw e;
      }
    }

    finally {

      this._isCompiling.value = false;
    }
  }

  stop() {

    let codeRunner = this._codeRunner.value;

    if (codeRunner) {
      codeRunner.window.close();
      this._codeRunner.value = null;
    }
  }

  nodeDestroyed() {

    this._isCompiling.dispose();
    this._codeRunner.dispose();
  }
}

function simplifyPath(path: string) {
  if (path.startsWith("/node_modules/"))
    path = path.substr("/node_modules/".length);

  if (path.endsWith(".ts"))
    path = path.substr(0, path.length - 3);

  return path;
}

export type MonacoEditorProperties = JSX.HTMLAttributes<HTMLDivElement> & {
  rows?: number;
  model: import("monaco-editor/esm/vs/editor/editor.api").editor.ITextModel;
  readOnly?: boolean;
  showPath?: boolean;
};