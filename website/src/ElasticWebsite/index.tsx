import "./index.scss";

import { SPA as SPA, HttpStatusCode, Page, PageDirection } from "@alumis/elastic-ts/SPA";
import { Managed } from "@alumis/elastic-ts/JSX";
import { o } from "@alumis/elastic-ts/ModifiableObservable";
import { TUTORIAL_PAGE_RELATIVE_PATH as TUTORIAL_PAGE_RELATIVE_PATH } from "../TutorialPage/metadata";

export class ElasticWebsite extends SPA<HTMLBodyElement, Node> {

    constructor() {
        super();
        this.installTitleHandler();
        this.registerSubPage([TUTORIAL_PAGE_RELATIVE_PATH], async () => { return new (await import("../TutorialPage")).TutorialPage(); });
        this.node = <>{() => <Managed>{this.currentPage.value}</Managed>}</>;
    }

    currentPage = o<Page<Node>>();

    get title() {

        let currentPage = this.currentPage.value;

        if (currentPage)
            return "Elastic - " + currentPage.title;

        return "Elastic";
    }

    async loadAsync(path: string[], pathIndex: number, parameters: URLSearchParams, pageDirection: PageDirection, e: PopStateEvent, page?: Page<Node>, pageHttpStatusCode?: HttpStatusCode) {
        this.currentPage.value = page;
        return HttpStatusCode.Ok;
    }
}

export interface ThemeColors {

    body: string;
    background: string;

    blue: string;
    indigo: string;
    purple: string;
    pink: string;
    red: string;
    orange: string;
    yellow: string;
    green: string;
    teal: string;
    cyan: string;
}

let themeColors: ThemeColors;

export function getThemeColors() {

    if (themeColors)
        return themeColors;

    let style = getComputedStyle(document.body);

    return themeColors = {
        body: style.color,
        background: style.backgroundColor,
        blue: style.getPropertyValue("--blue"),
        indigo: style.getPropertyValue("--indigo"),
        purple: style.getPropertyValue("--purple"),
        pink: style.getPropertyValue("--pink"),
        red: style.getPropertyValue("--red"),
        orange: style.getPropertyValue("--orange"),
        yellow: style.getPropertyValue("--yellow"),
        green: style.getPropertyValue("--green"),
        teal: style.getPropertyValue("--teal"),
        cyan: style.getPropertyValue("--cyan")
    };
}
