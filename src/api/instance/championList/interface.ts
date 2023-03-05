export interface championListParams {
  size: number;
  locale?: string;
}

export interface championList {
  data: Champion[];
}

export interface Champion {
  id: string;
  name: string[];
  url: string;
}
