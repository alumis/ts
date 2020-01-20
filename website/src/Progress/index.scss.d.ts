declare namespace IndexScssModule {
  export interface IIndexScss {
    progress: string;
    progressBar: string;
    progressBarInner: string;
    progressBarPrimary: string;
    progressBarSecondary: string;
    progressBuffer: string;
    progressIndeterminate: string;
    progressPrimaryIndeterminateScale: string;
    progressPrimaryIndeterminateTranslate: string;
    progressSecondaryIndeterminateScale: string;
    progressSecondaryIndeterminateTranslate: string;
  }
}

declare const IndexScssModule: IndexScssModule.IIndexScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: IndexScssModule.IIndexScss;
};

export = IndexScssModule;
