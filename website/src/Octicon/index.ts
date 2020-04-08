import octiconStyles from "./index.scss";

import { bindProperties } from "@alumis/ts/JSX";

export function Octicon(properties: OcticonProperties) {

    let { icon, size, role = "img", ...otherProperties } = properties || {};
    let height = size || OcticonSize.Medium;
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    if (!("aria-hidden" in otherProperties))
        otherProperties["aria-hidden"] = "true";

    bindProperties(svg, otherProperties);

    svg.setAttribute("role", role);

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

export type OcticonProperties =
  & JSX.SVGAttributes<SVGSVGElement>
  & { icon: OcticonData; size?: OcticonSize; role?: string; };

export enum OcticonSize {

    Small = 16,
    Medium = 32,
    Large = 64
}

export type OcticonData = (string | number)[];