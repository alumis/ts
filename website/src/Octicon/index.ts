import octiconStyles from "./index.scss";

import { bindProperties } from "@alumis/elastic-ts/JSX";

export default function Octicon(properties: OcticonProperties) {

    
    let icon = properties.icon;
    let height = properties.size || OcticonSize.Medium;

    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    let newProperties = {...properties};

    delete newProperties.icon;
    delete newProperties.size;

    bindProperties(svg, newProperties);
    svg.setAttribute("role", "img");
    
    if (!("aria-hidden" in newProperties))
        svg.setAttribute("aria-hidden", "true");

    svg.classList.add(octiconStyles.octicon);

    let k = height / (icon[2] as number);

    svg.setAttribute("viewBox", "0 0 " + (icon[1] as number) + " " + (icon[2] as number));
    svg.setAttribute("height", height as any);
    svg.setAttribute("width", (icon[1] as number) * k as any);

    let path = document.createElementNS('http://www.w3.org/2000/svg', "path");

    path.setAttributeNS(null, "fill-rule", "evenodd");
    path.setAttributeNS(null, "d", properties.icon[0] as string);

    svg.appendChild(path);

    return svg;
}

export interface OcticonProperties {
    icon: OcticonData;
    size?: OcticonSize;
}

export enum OcticonSize {

    Small = 16,
    Medium = 32,
    Large = 64
}

export type OcticonData = (string | number)[];