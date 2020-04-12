import { co } from "@alumis/ts-observables/ComputedObservable";
import { Semaphore } from "@alumis/ts-async/Semaphore";
import { Component } from "./JSX";

export abstract class Page<TNode extends Node = Node> extends Component<TNode> {
    abstract loadAsync(path: string[], pathIndex: number, parameters: URLSearchParams, pageDirection: PageDirection, e: PopStateEvent): Promise<HttpStatusCode>;
    abstract get title(): string;
}

export enum PageDirection {
    None,
    Forward,
    Backward
}

export abstract class DirectoryPage<TNode extends Node = Node, TPageNode extends Node = Node> extends Page<TNode> {

    private _aliases = new Map<string, string>();
    private _subPages = new Map<string, { loadInstanceAsync(): Promise<Page<Node>>; cache: boolean; cachedInstance?: Page<Node>; }>();

    protected registerSubPage(paths: string[], loadInstanceAsync: () => Promise<Page<Node>>, cache = true) {
        this._subPages.set(paths[0], { loadInstanceAsync: loadInstanceAsync, cache: cache });
        for (let i = 1; i < paths.length; ++i)
            this._aliases.set(paths[i], paths[0]);
    }

    async loadSubPageAsync(path: string[], pathIndex: number, parameters: URLSearchParams, pageDirection: PageDirection, e: PopStateEvent) {
        if (pathIndex < path.length) {
            let subPageEntry = this._subPages.get(path[pathIndex]);
            if (!subPageEntry) {
                let alias = this._aliases.get(path[pathIndex]);
                if (alias)
                    subPageEntry = this._subPages.get(alias);
            }
            if (subPageEntry) {
                let page = subPageEntry.cachedInstance as Page<TPageNode>;
                if (!page) {
                    page = await subPageEntry.loadInstanceAsync() as Page<TPageNode>;
                    if (subPageEntry.cache) {
                        subPageEntry.cachedInstance = page;
                        subPageEntry.loadInstanceAsync = null;
                    }
                }
                let pageHttpStatusCode: HttpStatusCode;
                if (page instanceof DirectoryPage)
                    pageHttpStatusCode = await page.loadSubPageAsync(path, pathIndex + 1, parameters, pageDirection, e);
                else pageHttpStatusCode = await page.loadAsync(path, pathIndex + 1, parameters, pageDirection, e);
                return await this.loadAsync(path, pathIndex, parameters, pageDirection, e, page, pageHttpStatusCode);
            }
        }
        return await this.loadAsync(path, pathIndex, parameters, pageDirection, e);
    }

    abstract loadAsync(path: string[], pathIndex: number, parameters: URLSearchParams, pageDirection: PageDirection, e: PopStateEvent, page?: Page<TPageNode>, pageHttpStatusCode?: HttpStatusCode): Promise<HttpStatusCode>;
}

export enum HttpStatusCode {
    Ok = 200,
    Created = 201,
    Accepted = 202,
    PartialInformation = 203,
    NoResponse = 204,
    BadRequest = 400,
    Unauthorized = 401,
    PaymentRequired = 402,
    Forbidden = 403,
    NotFound = 404,
    InternalError = 500,
    NotImplemented = 501
}

const PAGE_NUMBERS_KEY = "__pageNumbers";

export abstract class SPA<TNode extends Node, TPageNode extends Node> extends DirectoryPage<TNode, TPageNode> {

    constructor() {
        super();
        addEventListener("click", e => {
            let target = <HTMLElement>e.target;
            do {
                if (target.tagName === "A") {
                    if ((<HTMLAnchorElement>target).host !== location.host)
                        return;
                    history.pushState(null, null, (<HTMLAnchorElement>target).href);
                    this.invalidateLocationAsync();
                    e.preventDefault();
                    break;
                }
            } while (target = target.parentElement);
        });
        addEventListener("popstate", e => { this.invalidateLocationAsync(e); });
    }

    private _currentPageNumber: number;
    private _pageNumbers: number;

    protected installTitleHandler() {
        co(() => this.title).subscribeInvoke(n => document.title = n);
    }

    async invalidateLocationAsync(e?: PopStateEvent) {
        if (!this._pageNumbers) {
            if (!(this._pageNumbers = <any>sessionStorage.getItem(PAGE_NUMBERS_KEY)))
                this._pageNumbers = 0;
            else this._pageNumbers = parseInt(<any>this._pageNumbers);
        }
        let state = history.state;
        if (!state)
            state = {};
        if (!state.pageNumber) {
            state.pageNumber = ++this._pageNumbers;
            history.replaceState(state, "");
        }
        sessionStorage.setItem(PAGE_NUMBERS_KEY, String(this._pageNumbers));
        let oldCurrentPageNumber = this._currentPageNumber;
        this._currentPageNumber = state.pageNumber;
        let pageDirection: PageDirection;
        if (!oldCurrentPageNumber)
            pageDirection = PageDirection.None;
        else if (oldCurrentPageNumber < this._currentPageNumber)
            pageDirection = PageDirection.Forward;
        else if (this._currentPageNumber < oldCurrentPageNumber)
            pageDirection = PageDirection.Backward;
        else pageDirection = PageDirection.None;
        let locationComponents = getLocationComponents(location.pathname, location.search);
        await this.loadLocationSemaphore.waitOneAsync();
        try { await this.loadSubPageAsync(locationComponents.path, 0, locationComponents.parameters, pageDirection, e); }
        finally { this.loadLocationSemaphore.release(); }
    }

    navigateAsync(path: string) {
        history.pushState(null, null, path);
        return this.invalidateLocationAsync();
    }

    loadLocationSemaphore = new Semaphore();
}

function getLocationComponents(pathName: string, search: string) {
    if (pathName.startsWith("/"))
        pathName = pathName.substr(1);
    return { path: pathName ? pathName.split("/").map(p => decodeURIComponent(p)) : [], parameters: new URLSearchParams(search) };
}

export function combinePath(path: string[], ...subPath: string[]) {

    if (0 < path.length)
        return "/" + path.join("/") + "/" + subPath.join("/");

    return "/" + subPath.join("/");
}