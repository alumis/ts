import octiconButtonStyles from "./index.scss";
import { Octicon, OcticonData, OcticonSize } from "../Octicon";

export function OcticonButton(properties: OcticonButtonProperties) {
  
  let { type = "button", icon, size, ...otherProperties } = properties;
  let result = <button type={type} {...otherProperties}><Octicon icon={icon} size={size} /></button> as HTMLButtonElement;

  result.classList.add(octiconButtonStyles.octiconButton);

  return result;
}

export type OcticonButtonProperties =
  & JSX.HTMLAttributes<HTMLButtonElement>
  & { icon: OcticonData; size?: OcticonSize; };