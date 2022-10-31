// import { take, takeEvery, takeLatest, takeLeading, select, put, call, fork, all, race, spawn } from "@redux-saga/core/effects";
import {
  setLatestNews,
  setLatestNewsError,
  setPopularNews,
  setPopularNewsError,
} from "../redux/news/news.actions";
import { takeEvery, put, call, fork } from "@redux-saga/core/effects";
import { Api, hitsType } from "../api/api";

import { newsTypes } from "../redux/news/news.types";

export function* handleLatestNews() {
  try {
    const { hits }: hitsType = yield call(Api.getLatestNews, "react");
    yield put(setLatestNews(hits));
  } catch {
    yield put(setLatestNewsError("Error fetching last news"));
  }
}

export function* handlePopularNews() {
  try {
    const { hits }: hitsType = yield call(Api.getPopularNews);
    yield put(setPopularNews(hits));
  } catch {
    yield put(setPopularNewsError("Error fetching popular news"));
  }
}

export function* handleNews() {
  // race for first
  // yield all([call(handlePopularNews), call(handleLatestNews)]); // all or nothing

  yield fork(handleLatestNews);
  yield fork(handlePopularNews);
}

export function* watchClicksSaga() {
  yield takeEvery(newsTypes.GET_NEWS, handleNews);
}

export default function* rootSaga() {
  yield watchClicksSaga();
}
