import { combineReducers, applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import ArticleService, { ArticleState } from './article/reducers'
import ArticleSaga from './article/sagas'

export interface RootState {
  articleState: ArticleState;
}

const rootReducer = combineReducers({
  articleState: ArticleService,
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

sagaMiddleware.run(ArticleSaga)

export default store
