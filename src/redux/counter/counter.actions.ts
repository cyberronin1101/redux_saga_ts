import { counterActions } from "./counter.types";

export const increaseCount = () => ({ type: counterActions.INCREASE_COUNT });

export const decreaseCount = () => ({ type: counterActions.DECREASE_COUNT });

export const counterCustomStep = (step: number = 1) => ({
  type: counterActions.CUSTOM_STEP,
  payload: step,
});
