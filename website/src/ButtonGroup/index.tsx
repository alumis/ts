import buttonGroupStyles from "./index.scss";
import { createNode } from "@alumis/ts/JSX";

export function ButtonGroup(properties: JSX.HTMLAttributes<HTMLDivElement>, children: any[]) {
  let result = createNode("div", properties, children) as HTMLDivElement;
  result.classList.add(buttonGroupStyles.btnGroup);
  return result;
}