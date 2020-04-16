import { createAsyncAction } from 'typesafe-actions'
import { Book } from 'types/book'
import { SearchOptions } from 'types/common'

export const fetchBookListAsync = createAsyncAction(
  'FETCH_BOOK_LIST_REQUEST',
  'FETCH_BOOK_LIST_SUCCESS',
  'FETCH_BOOK_LIST_FAILURE',
)<{query: string; options?: SearchOptions}, {books: Book[]; totalItemsLength: number}, undefined>()
