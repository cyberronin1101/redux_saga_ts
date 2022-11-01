import { routerActions, routerStoreType, routerTypes } from "./router.types";

const initialState: routerStoreType = {
  location: {
    key: "",
    state: "",
    pathname: "",
    hash: "",
    search: "",
  },
};

const router = (state = initialState, { type, payload }: routerTypes) => {
  switch (type) {
    case routerActions.UPDATE_LOCATION:
      return {
        ...state,
        location: payload,
      };
    default:
      return state;
  }
};

export default router;
