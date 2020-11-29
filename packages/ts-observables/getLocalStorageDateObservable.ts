import { ModifiableObservable, o } from "./ModifiableObservable";

let localStorageDateObservables: { [key: string]: ModifiableObservable<Date> } = {};

export function getLocalStorageDateObservable(key: string, defaultValue = null) {

    let result = localStorageDateObservables[key];

    if (result)
        return result;

    let localStorageValue = localStorage.getItem(key);

    if (localStorageValue) {

        try {
            if (localStorageValue)
                var value = new Date(parseInt(localStorageValue));
        }
        catch {
            value = defaultValue;
        }
    }

    else value = defaultValue;

    localStorageDateObservables[key] = result = o(value);

    result.subscribe(n => localStorage.setItem(key, n ? String(n.getTime()) : ""));

    return result;
}