import { o, ModifiableObservable } from "@alumis/ts-observables/ModifiableObservable";
import * as languageData from "./__translations.json";

export class Language {

    constructor(public subtag: string, public nativeName: string, public englishName: string, public macroLanguageSubtag: string, public keyEntries: { [key: string]: string }) { }

    macroLanguage: Language;
}

export var defaultLanguage: Language;
export const languages: Language[] = [];
export const languagesBySubtag = new Map<string, Language>();

for (let l of (<any[]>(<any>languageData).languages)) {
    let language = new Language(l.subtag, l.nativeName, l.englishName, l.macroLanguageSubtag, l.keyEntries);
    if (language.subtag === (<any>languageData).defaultSubtag)
        defaultLanguage = language;
    languages.push(language);
    languagesBySubtag.set(language.subtag, language);
}

for (let l of languages) {
    let macroLanguage = languagesBySubtag.get(l.macroLanguageSubtag);
    if (macroLanguage)
        l.macroLanguage = macroLanguage;
}
let localStorageLanguageSubtag = localStorage.getItem("__lang");
let localStorageLanguage: Language;
if (localStorageLanguageSubtag)
    localStorageLanguage = languagesBySubtag.get(localStorageLanguageSubtag);

export const currentLanguage = o(localStorageLanguage || defaultLanguage);

let observablesByKey = new Map<string, ModifiableObservable<string>>();
currentLanguage.subscribe(n => {
    if (n) {
        for (let p of observablesByKey) {
            let key = p[0], value = n.keyEntries[key];
            if (!value) {
                for (let ml = n.macroLanguage; ml; ml = ml.macroLanguage) {
                    value = n.keyEntries[key];
                    if (value)
                        break;
                }
                if (!value)
                    value = defaultLanguage && defaultLanguage.keyEntries[key];
            }
            p[1].value = value;
        }
        document.documentElement.setAttribute("lang", n.subtag);
        localStorage.setItem("__lang", n.subtag);
    }
    else {
        for (let p of observablesByKey)
            p[1].value = <any>n;
        document.documentElement.removeAttribute("lang");
        localStorage.removeItem("__lang");
    }
});
if (currentLanguage.value)
    document.documentElement.setAttribute("lang", currentLanguage.value.subtag)
else document.documentElement.removeAttribute("lang");

export function r(key: string) {
    let observable = observablesByKey.get(key);
    if (observable)
        return observable;
    let l = currentLanguage.value, value: string;
    if (l) {
        value = l.keyEntries[key];
        if (!value) {
            for (let ml = l.macroLanguage; ml; ml = ml.macroLanguage) {
                value = l.keyEntries[key];
                if (value)
                    break;
            }
            if (!value)
                value = defaultLanguage && defaultLanguage.keyEntries[key];
        }
    }
    observablesByKey.set(key, observable = o(value));
    return observable;
}

export function toLocaleString(obj: { toLocaleString(locales?: string | string[]): string }) {
    let l = currentLanguage.value;
    if (l) {
        switch (l.subtag) { // Bug in Firefox and Chrome: https://bugs.chromium.org/p/chromium/issues/detail?id=959246
            case "no": // nb is the only one that is implemented correctly
            case "nn":
                if (defaultLanguage)
                    return obj.toLocaleString(["nb", defaultLanguage.subtag]);
                return obj.toLocaleString("nb");
        }
        if (defaultLanguage)
            return obj.toLocaleString([l.subtag, defaultLanguage.subtag]);
        return obj.toLocaleString(l.subtag);
    }
    else if (defaultLanguage)
        return obj.toLocaleString(defaultLanguage.subtag);
    else return obj.toString();
}

export function toLocaleDateString(date: Date) {
    let l = currentLanguage.value;
    if (l) {
        switch (l.subtag) { // Bug in Firefox and Chrome: https://bugs.chromium.org/p/chromium/issues/detail?id=959246
            case "no": // nb is the only one that is implemented correctly
            case "nn":
                if (defaultLanguage)
                    return date.toLocaleDateString(["nb", defaultLanguage.subtag]);
                else return date.toLocaleDateString("nb");
        }
        if (defaultLanguage)
            return date.toLocaleDateString([l.subtag, defaultLanguage.subtag]);
        return date.toLocaleDateString(l.subtag);
    }
    else if (defaultLanguage)
        return date.toLocaleDateString(defaultLanguage.subtag);
    else return date.toLocaleDateString();
}

export function toLocaleTimeString(date: Date) {
    let l = currentLanguage.value;
    if (l) {
        switch (l.subtag) { // Bug in Firefox and Chrome: https://bugs.chromium.org/p/chromium/issues/detail?id=959246
            case "no": // nb is the only one that is implemented correctly
            case "nn":
                if (defaultLanguage)
                    return date.toLocaleTimeString(["nb", defaultLanguage.subtag]);

                else return date.toLocaleTimeString("nb");
        }
        if (defaultLanguage)
            return date.toLocaleTimeString([l.subtag, defaultLanguage.subtag]);
        return date.toLocaleTimeString(l.subtag);
    }
    else if (defaultLanguage)
        return date.toLocaleTimeString(defaultLanguage.subtag);
    else return date.toLocaleTimeString();
}