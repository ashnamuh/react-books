import { createReducer, ActionType } from 'typesafe-actions'
import * as actions from './actions'
import { Book } from 'types/book'

export type Actions = ActionType<typeof actions>

export interface BookState {
  books: {
    data: Book[];
    loading: boolean;
    totalItemsLength?: number;
    currentIndex: number;
  };
}

const initialState: BookState = {
  books: {
    data: [],
    loading: false,
    currentIndex: 0
  }
}

export default createReducer<BookState, Actions>(initialState)
  .handleAction(actions.fetchBookListAsync.request, (state) => ({ ...state,  books: { ...state.books, loading: true } }))
  .handleAction(actions.fetchBookListAsync.success, (state, action) => {
    const booksData = [...state.books.data, ...action.payload.books]

    return { ...state,  books: { data: booksData, totalItemsLength: action.payload.totalItemsLength, loading: false, currentIndex: booksData.length } }
  })
  .handleAction(actions.fetchBookListAsync.failure, (state) => ({ ...state,  books: { ...state.books, loading: false } }))
