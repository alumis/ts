declare namespace IndexScssModule {
  export interface IIndexScss {
    col: string;
    col1: string;
    col10: string;
    col11: string;
    col12: string;
    col2: string;
    col3: string;
    col4: string;
    col5: string;
    col6: string;
    col7: string;
    col8: string;
    col9: string;
    colLg: string;
    colLg1: string;
    colLg10: string;
    colLg11: string;
    colLg12: string;
    colLg2: string;
    colLg3: string;
    colLg4: string;
    colLg5: string;
    colLg6: string;
    colLg7: string;
    colLg8: string;
    colLg9: string;
    colMd: string;
    colMd1: string;
    colMd10: string;
    colMd11: string;
    colMd12: string;
    colMd2: string;
    colMd3: string;
    colMd4: string;
    colMd5: string;
    colMd6: string;
    colMd7: string;
    colMd8: string;
    colMd9: string;
    colSm: string;
    colSm1: string;
    colSm10: string;
    colSm11: string;
    colSm12: string;
    colSm2: string;
    colSm3: string;
    colSm4: string;
    colSm5: string;
    colSm6: string;
    colSm7: string;
    colSm8: string;
    colSm9: string;
    colXl: string;
    colXl1: string;
    colXl10: string;
    colXl11: string;
    colXl12: string;
    colXl2: string;
    colXl3: string;
    colXl4: string;
    colXl5: string;
    colXl6: string;
    colXl7: string;
    colXl8: string;
    colXl9: string;
    container: string;
    containerFluid: string;
    containerWithNoRightMargin: string;
    row: string;
  }
}

declare const IndexScssModule: IndexScssModule.IIndexScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: IndexScssModule.IIndexScss;
};

export = IndexScssModule;
