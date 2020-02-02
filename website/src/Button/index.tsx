import buttonStyles from "./index.scss";
import { createNode } from "@alumis/ts/JSX";

export function Button(properties: ButtonProperties, children: any[]) {

  let { theme, outlined, size, ...otherProperties } = properties || {};

  if (!otherProperties.type)
    otherProperties.type = "button";

  let result = createNode("button", otherProperties, children) as HTMLButtonElement;

  result.classList.add(buttonStyles.btn);

  if (outlined) {
    switch (theme) {
      case ButtonTheme.None:
        break;
      case ButtonTheme.Toolbar:
        result.classList.add(buttonStyles.btnToolbar);
        break;
      default:
        result.classList.add(buttonStyles.btnOutlinePrimary);
        break;
    }
  }
  else {
    switch (theme) {
      case ButtonTheme.None:
        break;
      case ButtonTheme.Icon:
        result.classList.add(buttonStyles.btnIcon);
        break;
      case ButtonTheme.Toolbar:
        result.classList.add(buttonStyles.btnToolbar);
        break;
      default:
        result.classList.add(buttonStyles.btnPrimary);
        break;
    }
  }
  switch (size) {
    case ButtonSize.Large:
      result.classList.add(buttonStyles.btnLg);
      break;
    case ButtonSize.Small:
      result.classList.add(buttonStyles.btnSm);
      break;
  }

  return result;
}

export type ButtonProperties =
  & JSX.HTMLAttributes<HTMLButtonElement>
  & { theme?: ButtonTheme; outlined?: boolean; size?: ButtonSize; };

export enum ButtonTheme {
  None,
  Primary,
  Icon,
  Toolbar
}

export enum ButtonSize {
  Small,
  Normal,
  Large
}