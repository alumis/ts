import { bootstrap } from "@alumis/elastic-ts/JSX";
import ElasticWebsite from "./ElasticWebsite";

bootstrap();

import "./grid";
import "./numbered";

// @ts-ignore
self.MonacoEnvironment = {
    getWorkerUrl: function (_moduleId, label) {
        if (label === "json") {
            return "./json.worker.bundle.js";
        }
        if (label === "css") {
            return "./css.worker.bundle.js";
        }
        if (label === "html") {
            return "./html.worker.bundle.js";
        }
        if (label === "typescript" || label === "javascript") {
            return "./ts.worker.bundle.js";
        }
        return "./editor.worker.bundle.js";
    }
};

let spa = new ElasticWebsite();

spa.invalidateLocationAsync();
document.body.appendChild(spa.node);