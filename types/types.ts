export interface FontData {
  family: string;
  variants: string[];
  subsets: string[];
  version: string;
  lastModified: string;
  files: {
    [key: string]: string;
  };
  category: 'sans-serif' | 'serif' | 'display';
  kind: 'webfonts#webfont';
}

export interface FontsApiResponse {
  kind: 'webfonts#webfontslist';
  items: FontData[];
}
