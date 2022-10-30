export type countStoreType = {
  count: number;
};

export enum counterActions {
  INCREASE_COUNT = "INCREASE_COUNT",
  DECREASE_COUNT = "DECREASE_COUNT",
  CUSTOM_STEP = "CUSTOM_STEP",
}

export type counterTypes =
  | {
      type: counterActions.INCREASE_COUNT;
    }
  | {
      type: counterActions.DECREASE_COUNT;
    }
  | {
      type: counterActions.CUSTOM_STEP;
      payload: number;
    };
