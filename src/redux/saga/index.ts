// import { take, takeEvery, takeLatest, takeLeading, select, put, call, fork, all, race, spawn } from "@redux-saga/core/effects";
import {
  setLatestNews,
  setLatestNewsError,
  setPopularNews,
  setPopularNewsError,
} from "../news/news.actions";
import { takeEvery, put, call, all, select } from "@redux-saga/core/effects";
import { Api, hitsType } from "../../api/api";
import { routerTypes } from "../router/router.types";
import { IStore } from "../store";

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

export function* watchNewsSaga() {
  const pathname: string = yield select(
    ({ router }: IStore) => router.location.pathname
  );

  if (pathname === "/") {
    yield all([call(handlePopularNews), call(handleLatestNews)]);
  }
  if (pathname === "/news/popular") yield call(handlePopularNews);
  if (pathname === "/news/latest") yield call(handleLatestNews);
}

export default function* rootSaga() {
  yield takeEvery(routerTypes.UPDATE_LOCATION, watchNewsSaga);
}
