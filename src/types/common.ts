export interface SearchOptions {
  startIndex?: number;
  maxResults?: number;
  orderBy?: 'relevance' | 'newest';
  ebookOnly: boolean;
}
