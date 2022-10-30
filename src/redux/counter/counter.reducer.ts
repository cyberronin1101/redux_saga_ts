import { counterActions, counterTypes, countStoreType } from "./counter.types";

const initialState: countStoreType = {
  count: 0,
};

const test = (state = initialState, action: counterTypes) => {
  switch (action.type) {
    case counterActions.INCREASE_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case counterActions.DECREASE_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    case counterActions.CUSTOM_STEP:
      return {
        ...state,
        count: state.count + action.payload,
      };
    default:
      return state;
  }
};

export default test;
