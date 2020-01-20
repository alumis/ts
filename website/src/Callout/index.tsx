import calloutStyles from "./index.scss";

export function Callout(properties: JSX.HTMLAttributes<HTMLDivElement>, children: any[]) {

    let result = <aside {...properties}>{children}</aside> as HTMLDivElement;

    result.classList.add(calloutStyles.callout);
    
    return result;
}