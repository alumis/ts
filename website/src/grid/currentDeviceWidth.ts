import { mo } from "@alumis/elastic-ts/ModifiableObservable";
import { decomposeDeviceWidth } from "../grid";

export var currentDeviceWidth = mo(decomposeDeviceWidth(innerWidth));

addEventListener("resize", function () { currentDeviceWidth.value = decomposeDeviceWidth(innerWidth); });