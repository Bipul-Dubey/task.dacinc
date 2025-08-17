export type TTodo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type TPieData = { name: string; value: number };
export type TBarData = { userId: string; count: number };

export interface IBook {
  key: string; // e.g., "/works/OL22207810W"
  title: string;
  author_name?: string[];
  first_publish_year?: number;
  isbn?: string[];
  cover_i?: number;
  edition_count?: number;
  publisher?: string[];
  subject?: string[];
  language?: string[]; // add
  publish_year?: number[]; // add
  author_key?: string[]; // add (can be used to fetch author info if desired)
  ebook_access?: "public" | "no_ebook" | "borrowable" | string; // add
  has_fulltext?: boolean; // add
  public_scan_b?: boolean; // add
}

export interface BookSearchResponse {
  docs: IBook[];
  numFound: number;
  start: number;
}
