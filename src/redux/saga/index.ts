// import { take, takeEvery, takeLatest, takeLeading, select, put, call, fork, all, race, spawn } from "@redux-saga/core/effects";
import {
  setLatestNews,
  setLatestNewsError,
  setPopularNews,
  setPopularNewsError,
} from "../news/news.actions";
import { takeEvery, put, call, all, fork } from "@redux-saga/core/effects";
import { Api, hitsType } from "../../api/api";

import { newsTypes } from "../news/news.types";

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

export function* watchLatestNewsSaga() {
  yield takeEvery(newsTypes.GET_LATEST_NEWS, handleLatestNews);
}

export function* watchPopularNewsSaga() {
  yield takeEvery(newsTypes.GET_POPULAR_NEWS, handlePopularNews);
}

export default function* rootSaga() {
  yield all([fork(watchLatestNewsSaga), fork(watchPopularNewsSaga)]);
}
