import listStyleTypeStyles from "./index.scss";

import { globalPropertyHandlers } from "@alumis/ts/JSX";

globalPropertyHandlers.set("list-style-type", (element: HTMLElement, value: ListStyleType) => {
    switch (value) {
        case ListStyleType.Decimal:
            element.classList.add(listStyleTypeStyles.listStyleTypeDecimal);
            break;
        case ListStyleType.Disc:
            element.classList.add(listStyleTypeStyles.listStyleTypeDisc);
            break;
        case ListStyleType.UpperRoman:
            element.classList.add(listStyleTypeStyles.listStyleTypeUpperRoman);
            break;
    }
});

export enum ListStyleType {
    Decimal,
    Disc,
    UpperRoman
}