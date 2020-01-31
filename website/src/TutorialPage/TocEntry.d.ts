interface TocEntry {
  title: string;
  relativePath?: string;
  children?: TocEntry[];
}