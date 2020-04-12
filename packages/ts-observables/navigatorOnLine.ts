import { o } from "./ModifiableObservable";

export const navigatorOnLine = o(navigator.onLine);

addEventListener("offline", () => { navigatorOnLine.value = false; });
addEventListener("online", () => { navigatorOnLine.value = true; });