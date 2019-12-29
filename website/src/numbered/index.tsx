import numberedStyles from "./index.scss";

import { globalPropertyHandlers } from "@alumis/elastic-ts/JSX";

globalPropertyHandlers.set("numbered", (element: HTMLElement, value: boolean) => {
    if (value)
        element.classList.add(numberedStyles.numbered);
});
