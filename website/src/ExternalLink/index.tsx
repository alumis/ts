import externalLinkStyles from "./index.scss";
import { HTMLAttributes } from "@alumis/elastic-ts/JSX";
import Octicon, { OcticonSize } from "../Octicon";
import LinkExternal from "../Octicons/LinkExternal";

export default function ExternalLink(properties: HTMLAttributes<HTMLAnchorElement>, children: any[]) {

    let octicon = <Octicon icon={LinkExternal} size={OcticonSize.Small} /> as SVGElement;

    // SVGElement's className is readonly
    octicon.classList.add(externalLinkStyles.externalLinkIcon);

    let result = <a target="_blank" {...properties}>{children}{octicon}</a> as HTMLAnchorElement;

    result.classList.add(externalLinkStyles.externalLink);

    return result;
}