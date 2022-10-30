import { take } from "@redux-saga/core/effects";
import { counterActions } from "../redux/counter/counter.types";

export function* workerSaga() {}

export function* watchClicksSaga() {
  yield take(counterActions.CUSTOM_STEP);
  console.log("saga start 1");
  yield take(counterActions.CUSTOM_STEP);
  console.log("saga start 2");
  yield;
}

export default function* rootSaga() {
  yield watchClicksSaga();
}
