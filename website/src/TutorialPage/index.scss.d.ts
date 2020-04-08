declare namespace IndexScssModule {
  export interface IIndexScss {
    tutorialPage: string;
    tutorialPageBody: string;
    tutorialPageExampleOutput: string;
    tutorialPageExampleToolbar: string;
    tutorialPagePaper: string;
    tutorialPageToc: string;
  }
}

declare const IndexScssModule: IndexScssModule.IIndexScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: IndexScssModule.IIndexScss;
};

export = IndexScssModule;
