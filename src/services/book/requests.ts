import axios from 'axios'
import { Book } from 'types/book'
import { SearchOptions } from 'types/common'

export const fetchBooks = async (query: string, options?: SearchOptions) => {
  const { data } = await axios.request<{totalItems: number; items: Book[]}>({
    method: 'get',
    url: 'https://www.googleapis.com/books/v1/volumes',
    params: {
      q: query,
      startIndex: options?.startIndex || 0,
      maxResults: options?.maxResults || 20,
      orderBy: options?.orderBy || 'relevance',
      filter: options?.ebookOnly ? 'ebooks' : undefined
    }
  })

  return { books: data.items, totalItemsLength: data.totalItems }
}
