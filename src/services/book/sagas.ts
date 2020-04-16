import { put, all, takeEvery, call } from 'redux-saga/effects'
import { ActionType } from 'typesafe-actions'
import * as actions from './actions'
import * as requests from './requests'

export function* fetchArticleListSaga(action: ActionType<typeof actions.fetchBookListAsync.request>) {
  try {
    const data = yield call(requests.fetchBooks, action.payload.query, action.payload.options)
    yield put(actions.fetchBookListAsync.success(data))
  } catch (err) {
    yield put(actions.fetchBookListAsync.failure())
  }
}

export default function * () {
  yield all([
    takeEvery(actions.fetchBookListAsync.request, fetchArticleListSaga),
  ])
}
