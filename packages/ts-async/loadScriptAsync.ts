export function loadScriptAsync(url: string) {

    let promise = promises[url];

    if (promise)
        return promise;

    let resolve: (value?) => void, reject: (reason?) => void;

    promises[url] = promise = new Promise((resolve2, reject2) => { resolve = resolve2; reject = reject2; });

    try {

        let script = document.createElement("script");

        script.onload = resolve;

        script.onerror = (event: Event | string, source?: string, lineno?: number, colno?: number, error?: Error) => {

            if (promise === promises[url])
                promises[url] = null;

            reject(new ScriptLoadingError(event, source, lineno, colno, error));
        };

        script.src = url;
        script.async = true;

        document.head.appendChild(script);
    }

    catch (e) {

        promises[url] = null;
        reject(e);
    }

    return promise;
}

let promises: { [key: string]: Promise<Event> } = {};

export class ScriptLoadingError extends Error {
    constructor(public event: Event | string, public source?: string, public lineno?: number, public colno?: number, public innerError?: Error, message = "An error occurred while loading a script") {
        super(message);
    }
}