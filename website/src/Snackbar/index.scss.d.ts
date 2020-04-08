declare namespace IndexScssModule {
  export interface IIndexScss {
    snack: string;
    snackbar: string;
    snackbarHide: string;
    snackbarShow: string;
  }
}

declare const IndexScssModule: IndexScssModule.IIndexScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: IndexScssModule.IIndexScss;
};

export = IndexScssModule;
