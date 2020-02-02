import { HTMLAttributes } from "@alumis/ts/JSX";
import Clippy from "../Octicons/Clippy";
import { Snack } from "../Snackbar";
import { OcticonButton } from "../OcticonButton";
import { OcticonSize } from "../Octicon";
import { copyToClipboardAsync } from "../copyToClipboardAsync";

export function ShellCommand(properties: HTMLAttributes<HTMLElement>, children: any[]) {

    let code = <code>{children}</code> as HTMLElement;

    return (
        <span {...properties}>
            {code}
            <OcticonButton icon={Clippy} size={OcticonSize.Small} title="Copy command to clipboard" onclick={async () => {
                //getSelection().selectAllChildren(code);
                await copyToClipboardAsync(code.textContent, "Copied command to clipboard");
            }} />
        </span>
    );
}
