// import { take, takeEvery, takeLatest, takeLeading, select } from "@redux-saga/core/effects";
import { setLatestNews } from "../redux/news/news.actions";
import { takeEvery, put, call } from "@redux-saga/core/effects";
import { Api, hitsType } from "../api/api";

import { newsActions } from "../redux/news/news.types";

export function* handleLatestNews() {
  const { hits }: hitsType = yield call(Api.getLatestNews, "react");
  yield put(setLatestNews(hits));
  yield;
}

export function* watchClicksSaga() {
  yield takeEvery(newsActions.GET_LATEST_NEWS, handleLatestNews);

  yield;
}

export default function* rootSaga() {
  yield watchClicksSaga();
}
