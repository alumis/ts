import { Semaphore } from "@alumis/ts-async/Semaphore";
import { co } from "@alumis/ts-observables/ComputedObservable";
import { PageNotFoundError } from "./PageNotFoundError";

export abstract class Page {

    get title(): string {

        return null;
    }

    abstract generateElement();

    loadAsync(path: string[], pathIndex: number, parameters: URLSearchParams, e: PopStateEvent): Promise<boolean> {

        if (pathIndex < path.length && path[pathIndex].trim() || pathIndex + 1 < path.length)
            return Promise.reject(new PageNotFoundError());
            
        return Promise.resolve(true);
    }
}

export abstract class SPA extends Page {

    constructor() {
        super();
        addEventListener("click", e => {
            let target = <HTMLElement>e.target;
            do {
                if (target.tagName === "A") {
                    if ((<HTMLAnchorElement>target).host.toUpperCase() !== location.host.toUpperCase())
                        return;
                    if ((<HTMLAnchorElement>target).pathname.toUpperCase() === location.pathname.toUpperCase() && (<HTMLAnchorElement>target).search === location.search) {
                        let hash = (<HTMLAnchorElement>target).hash;
                        if (hash && 2 <= hash.length && hash.startsWith("#")) {
                            let element = document.getElementById(hash.substr(1));
                            if (element)
                                element.scrollIntoView({ behavior: "smooth" });
                        }
                        e.preventDefault();
                        return;
                    }
                    history.pushState(null, null, (<HTMLAnchorElement>target).href);
                    this.invalidateLocationAsync();
                    e.preventDefault();
                    break;
                }
            } while (target = target.parentElement);
        });
        addEventListener("popstate", e => { this.invalidateLocationAsync(e); });
    }

    protected installTitleHandler() {
        co(() => this.title).subscribeInvoke(n => document.title = n);
    }

    async invalidateLocationAsync(e?: PopStateEvent) {
        let parameters = new URLSearchParams(location.search), pathname = location.pathname || "";
        if (pathname.startsWith("/"))
            pathname = pathname.substr(1);
        let pathnameParts = pathname.split("/").map(p => decodeURIComponent(p).toUpperCase());
        await this.loadLocationSemaphore.waitOneAsync();
        this._shouldCheckHash = true;
        try {
            let shouldCheckHash = await this.loadAsync(pathnameParts, 0, parameters, e);
            if (shouldCheckHash && this._shouldCheckHash) {
                let hash = location.hash;
                if (hash && 2 <= hash.length && hash.startsWith("#")) {
                    let element = document.getElementById(hash.substr(1));
                    if (element)
                        element.scrollIntoView({ behavior: "smooth" });
                }
            }
        }
        finally {
            this._shouldCheckHash = false;
            this.loadLocationSemaphore.release();
        }
    }

    private _shouldCheckHash = false;

    navigateAsync(path: string) {
        history.pushState(null, null, path);
        return this.invalidateLocationAsync();
    }

    loadLocationSemaphore = new Semaphore();
}


export class PageCache {

    constructor(paths?: { paths: string[]; instantiatePageAsync: () => Promise<Page>; }[]) {
        if (paths) {
            for (let r of paths)
                this.setPaths(r.paths, r.instantiatePageAsync);
        }
    }

    private _pathMap = new Map<string, PageCacheEntry>();

    setPaths(paths: string[], instantiatePageAsync: () => Promise<Page>) {

        let value = { instantiatePageAsync };

        for (let p of paths)
            this._pathMap.set(p, value)
    }

    getPath(path: string) {

        let result = this._pathMap.get(path);

        if (result && result.preflight)
            result.preflight();

        return result;
    }
}

export interface PageCacheEntry {
    instantiatePageAsync(): Promise<Page>;
    preflight?: () => any;
    cachedPage?: Page;
}