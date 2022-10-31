// import { take, takeEvery, takeLatest, takeLeading, select } from "@redux-saga/core/effects";
import { takeLeading } from "@redux-saga/core/effects";
import { Api, hitsType } from "../api/api";

import { counterActions } from "../redux/counter/counter.types";
// import { IStore } from "../redux/store";

// const delay = (time: number = 1) =>
//   new Promise((resolve, reject) => {
//     setTimeout(resolve, time * 1000);
//   });

export function* workerSaga() {
  const data: hitsType = yield Api.getLatestNews();
  console.log(data);
  yield;
}

// export function* workerSaga({ payload }: { type: string; payload?: number }) {
//   console.log(payload);
//   const count: number = yield select(({ counter }: IStore) => counter.count);
//   yield delay(2);
//   console.log("action: " + counterActions.CUSTOM_STEP + " and count: " + count);
//   yield;
// }

export function* watchClicksSaga() {
  // yield takeEvery(counterActions.CUSTOM_STEP, workerSaga);
  yield takeLeading(counterActions.CUSTOM_STEP, workerSaga);

  // yield take(counterActions.CUSTOM_STEP);
  // console.log("saga start 1");
  // yield take(counterActions.CUSTOM_STEP);
  // console.log("saga start 2");
  yield;
}

export default function* rootSaga() {
  yield watchClicksSaga();
}
