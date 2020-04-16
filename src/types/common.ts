export type OrderType = 'relevance' | 'newest'

export interface SearchOptions {
  startIndex?: number;
  maxResults?: number;
  orderBy?: OrderType;
  ebookOnly?: boolean;
}
