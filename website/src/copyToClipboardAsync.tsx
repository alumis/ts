import { Snack } from "./Snackbar";

export async function copyToClipboardAsync(text: string, feedback: any = "Copied text to clipboard") {

  await navigator.clipboard.writeText(text);
  (<Snack>{feedback}</Snack> as Snack).showIfNothingElse();
}