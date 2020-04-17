import { combineReducers, applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import BookService, { BookState } from './book/reducers'
import BookSaga from './book/sagas'

export interface RootState {
  bookState: BookState;
}

const rootReducer = combineReducers({
  bookState: BookService
})

const sagaMiddleware = createSagaMiddleware()

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancer =
 (process.env.NODE_ENV !== 'production' &&
   window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) ||
 compose

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(sagaMiddleware)),
)

sagaMiddleware.run(BookSaga)

export default store
