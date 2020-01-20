import tutorialPageStyles from "./index.scss";

import { DirectoryPage, PageDirection, Page, HttpStatusCode } from "@alumis/elastic-ts/SPA";
import { ModifiableObservable, o } from "@alumis/elastic-ts/ModifiableObservable";
import { Managed } from "@alumis/elastic-ts/JSX";
import { ListStyleType } from "../list-style-type";
import { IntroductionPage } from "./IntroductionPage";

export class TutorialPage extends DirectoryPage {

  constructor() {
    super();
    this.registerSubPage(["observables"], async () => { return new (await import("./ObservablesPage")).ObservablesPage(); });
  }

  get title() {
    return "Tutorial";
  }

  private _introductionPage: IntroductionPage;
  private _currentPage: ModifiableObservable<any>;

  async loadAsync(parameters: URLSearchParams, pageDirection: PageDirection, e: PopStateEvent, page?: Page<Node>, pageHttpStatusCode?: HttpStatusCode) {

    if (!this.node) {

      this._currentPage = o(page);

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
              <li>
                <a href="/tutorial">Introduction</a>
                <ol list-style-type={ListStyleType.Decimal}>
                  <li><a href="/tutorial#setting-up-your-environment">Setting up your environment</a></li>
                  <li><a href="/tutorial#example">Example</a></li>
                </ol>
              </li>
              <li>
                <a href="/tutorial/observables">Observables</a>
                <ol list-style-type={ListStyleType.Decimal}>
                  <li><a href="/tutorial/observables#instantiating-and-subscribing-to-observables">Instantiating and subscribing to observables</a></li>
                  <li><a href="/tutorial/observables#computed-observables">Computed observables</a></li>
                  <li><a href="/tutorial/observables#memory-management">Memory management</a></li>
                </ol>
              </li>
            </ol>
          </nav>
        </div>
      );
    }

    if (!page) {
      if (!(page = this._introductionPage))
        this._introductionPage = page = new IntroductionPage();
      pageHttpStatusCode = await this._introductionPage.loadAsync(parameters, pageDirection, e);
    }

    this._currentPage.value = page.node;

    return pageHttpStatusCode;
  }
}