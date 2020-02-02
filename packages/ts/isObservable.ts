import { ModifiableObservable } from "./ModifiableObservable";
import { ComputedObservable } from "./ComputedObservable";

export function isObservable(obj) {
    return obj instanceof ModifiableObservable || obj instanceof ComputedObservable;
}