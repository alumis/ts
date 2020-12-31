import { ModifiableObservable } from "./ModifiableObservable";
import { ComputedObservable } from "./ComputedObservable";
import { AsyncObservable } from "./AsyncObservable";

export function isObservable(obj) {
    return obj instanceof ModifiableObservable || obj instanceof ComputedObservable || obj instanceof AsyncObservable;
}