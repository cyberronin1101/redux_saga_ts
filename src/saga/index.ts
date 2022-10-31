// import { take, takeEvery, takeLatest, takeLeading, select, put, call, fork, all, race } from "@redux-saga/core/effects";
import { setLatestNews, setPopularNews } from "../redux/news/news.actions";
import { takeEvery, put, call, fork } from "@redux-saga/core/effects";
import { Api, hitsType } from "../api/api";

import { newsActions } from "../redux/news/news.types";

export function* handleLatestNews() {
  const { hits }: hitsType = yield call(Api.getLatestNews, "react");
  yield put(setLatestNews(hits));
  yield;
}

export function* handlePopularNews() {
  const { hits }: hitsType = yield call(Api.getPopularNews);
  yield put(setPopularNews(hits));
  yield;
}

export function* handleNews() {
  // race for first
  // yield all([call(handlePopularNews), call(handleLatestNews)]); // all or nothing

  yield fork(handleLatestNews);
  yield fork(handlePopularNews);

  yield;
}

export function* watchClicksSaga() {
  yield takeEvery(newsActions.GET_NEWS, handleNews);

  yield;
}

export default function* rootSaga() {
  yield watchClicksSaga();
}
