import { ModifiableObservable, o } from "./ModifiableObservable";

let localStorageObservables: { [key: string]: ModifiableObservable<any> } = {};

export function getLocalStorageObservable<T>(key: string, defaultValue: T = null) {

    let result = <ModifiableObservable<T>>localStorageObservables[key];

    if (result)
        return result;

    let localStorageValue = localStorage.getItem(key);

    if (localStorageValue) {

        try {
            var value = JSON.parse(localStorageValue);
        }
        catch {
            value = defaultValue;
        }
    }

    else value = defaultValue;

    localStorageObservables[key] = result = o<T>(value);

    result.subscribe(n => localStorage.setItem(key, JSON.stringify(n)));

    return result;
}