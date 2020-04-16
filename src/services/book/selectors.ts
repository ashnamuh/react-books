import { createSelector } from 'reselect'
import { RootState } from '../store'

const getBookState = (state: RootState) => state.bookState

export const getBooks = createSelector(getBookState, state => state.books.data)
