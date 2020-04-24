import { put, all, call, select, takeLatest, delay } from 'redux-saga/effects'
import { ActionType } from 'typesafe-actions'
import * as actions from './actions'
import * as requests from './requests'
import * as selectors from './selectors'

export function* fetchArticleListSaga(action: ActionType<typeof actions.fetchBookListAsync.request>) {
  yield delay(1000)
  const startIndex = yield select(selectors.getCurrentIndex)
  try {
    const data = yield call(requests.fetchBooks, action.payload.query, { ...action.payload.options, startIndex })
    yield put(actions.fetchBookListAsync.success(data))
  } catch (err) {
    yield put(actions.fetchBookListAsync.failure())
  }
}

export default function * () {
  yield all([
    takeLatest(actions.fetchBookListAsync.request, fetchArticleListSaga),
  ])
}
