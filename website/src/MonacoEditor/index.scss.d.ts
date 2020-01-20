declare namespace IndexScssModule {
  export interface IIndexScss {
    monacoEditor: string;
    monacoEditorCompiling: string;
    monacoEditorFrame: string;
    monacoEditorPath: string;
    monacoEditorPathIcon: string;
    monacoEditorToolbar: string;
    monacoEditorToolbarBtnPlay: string;
    monacoEditorToolbarBtnReplay: string;
    monacoEditorToolbarBtnStop: string;
    monacoEditorToolbarProgress: string;
  }
}

declare const IndexScssModule: IndexScssModule.IIndexScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: IndexScssModule.IIndexScss;
};

export = IndexScssModule;
