import { o } from "@alumis/ts/ModifiableObservable";
import { decomposeDeviceWidth } from "../grid";

export var currentDeviceWidth = o(decomposeDeviceWidth(innerWidth));

addEventListener("resize", function () { currentDeviceWidth.value = decomposeDeviceWidth(innerWidth); });