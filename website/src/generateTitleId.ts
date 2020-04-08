export function generateTitleId(title: string) {
  return title.toLowerCase().split(" ").join("-");
}