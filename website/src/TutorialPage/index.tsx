import tutorialPageStyles from "./index.scss";

import { DirectoryPage, PageDirection, Page, HttpStatusCode, combinePath } from "@alumis/elastic-ts/SPA";
import { ModifiableObservable, o } from "@alumis/elastic-ts/ModifiableObservable";
import { Managed } from "@alumis/elastic-ts/JSX";
import { ListStyleType } from "../list-style-type";
import { IntroductionPage } from "./IntroductionPage";
import { INTRODUCTION_TO_OBSERVABLES_PAGE_RELATIVE_PATH, INTRODUCTION_TO_OBSERVABLES_PAGE_MENU_ITEM } from "./IntroductionToObservablesPage/metadata";
import { INTRODUCTION_PAGE_MENU_ITEM } from "./IntroductionPage/metadata";
import { INTRODUCTION_TO_JSX_PLUS_OBSERVABLES_PAGE_MENU_ITEM, INTRODUCTION_TO_JSX_PLUS_OBSERVABLES_PAGE_RELATIVE_PATH } from "./IntroductionToJSXPlusObservablesPage/metadata";

export class TutorialPage extends DirectoryPage {

  constructor() {
    super();
    this.registerSubPage([INTRODUCTION_TO_OBSERVABLES_PAGE_RELATIVE_PATH], async () => { return new (await import("./IntroductionToObservablesPage")).IntroductionToObservablesPage(); });
    this.registerSubPage([INTRODUCTION_TO_JSX_PLUS_OBSERVABLES_PAGE_RELATIVE_PATH], async () => { return new (await import("./IntroductionToJSXPlusObservablesPage")).IntroductionToJSXPlusObservablesPage(); });
  }

  get title() {

    return this._currentPage.value.title;
  }

  private _introductionPage: IntroductionPage;
  private _currentPage: ModifiableObservable<Page<Node>>;

  async loadAsync(path: string[], pathIndex: number, parameters: URLSearchParams, pageDirection: PageDirection, e: PopStateEvent, page?: Page<Node>, pageHttpStatusCode?: HttpStatusCode) {

    if (!this.node) {

      this._currentPage = o(page);

      let currentPath = path.slice(0, pathIndex);

      this.node = (
        <div className={tutorialPageStyles.tutorialPage} responsiveContainerWithNoRightMargin>
          <article className={tutorialPageStyles.tutorialPageBody}>
            <div className={tutorialPageStyles.tutorialPagePaper}>
              {() => { let currentPage = this._currentPage.value; return currentPage ? <Managed>{currentPage}</Managed> : null; }}
            </div>
          </article>
          <nav className={tutorialPageStyles.tutorialPageToc}>
            <h1>Table of Contents</h1>
            <ol list-style-type={ListStyleType.UpperRoman}>
              {menu.map(i => <li>
                <a href={encodeURI(combinePath(currentPath, i.relativePath))}>{i.title}</a>
                {i.children ?
                  <ol list-style-type={ListStyleType.Decimal}>
                    {i.children.map(i2 => <li><a href={encodeURI(combinePath(currentPath, i2.relativePath))}>{i2.title}</a></li>)}
                  </ol>
                  : null}
              </li>)}
            </ol>
          </nav>
        </div>
      );
    }

    if (!page) {
      if (!(page = this._introductionPage))
        this._introductionPage = page = new IntroductionPage();
      pageHttpStatusCode = await this._introductionPage.loadAsync(path, pathIndex + 1, parameters, pageDirection, e);
    }

    this._currentPage.value = page;

    return pageHttpStatusCode;
  }
}

let menu: TocEntry[] = [
  INTRODUCTION_PAGE_MENU_ITEM,
  INTRODUCTION_TO_OBSERVABLES_PAGE_MENU_ITEM,
  INTRODUCTION_TO_JSX_PLUS_OBSERVABLES_PAGE_MENU_ITEM
];