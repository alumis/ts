import gridStyles from "./index.scss";
import { globalPropertyHandlers } from "@alumis/ts/JSX";

export function decomposeDeviceWidth(width: number) {

    if (DeviceWidth.ExtraLarge <= width)
        return DeviceWidth.ExtraLarge;

    if (DeviceWidth.Large <= width)
        return DeviceWidth.Large;

    if (DeviceWidth.Medium <= width)
        return DeviceWidth.Medium;

    if (DeviceWidth.Small <= width)
        return DeviceWidth.Small;

    return DeviceWidth.ExtraSmall;
}

export enum DeviceWidth {

    ExtraSmall = 0,
    Small = 576,
    Medium = 768,
    Large = 992,
    ExtraLarge = 1200
}

globalPropertyHandlers.set("column", (element: HTMLElement, value: boolean) => {
    if (value)
        element.classList.add(gridStyles.col);
});

globalPropertyHandlers.set("columns", (element: HTMLElement, value: number) => {
    element.classList.add(gridStyles["col" + value]);
});

globalPropertyHandlers.set("smallAndUpColumns", (element: HTMLElement, value: number) => {
    element.classList.add(gridStyles["colSm" + value]);
});

globalPropertyHandlers.set("mediumAndUpColumns", (element: HTMLElement, value: number) => {
    element.classList.add(gridStyles["colMd" + value]);
});

globalPropertyHandlers.set("largeAndUpColumns", (element: HTMLElement, value: number) => {
    element.classList.add(gridStyles["colLg" + value]);
});

globalPropertyHandlers.set("extraLargeAndUpColumns", (element: HTMLElement, value: number) => {
    element.classList.add(gridStyles["colXl" + value]);
});

globalPropertyHandlers.set("responsiveContainer", (element: HTMLElement, value: boolean) => {
    if (value)
        element.classList.add(gridStyles.container);
});

globalPropertyHandlers.set("responsiveContainerWithNoRightMargin", (element: HTMLElement, value: boolean) => {
    if (value)
        element.classList.add(gridStyles.containerWithNoRightMargin);
});

globalPropertyHandlers.set("fluidContainer", (element: HTMLElement, value: boolean) => {
    if (value)
        element.classList.add(gridStyles.containerFluid);
});

globalPropertyHandlers.set("row", (element: HTMLElement, value: boolean) => {
    if (value)
        element.classList.add(gridStyles.row);
});