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

const router = (state = initialState, { type, payload }: routerActions) => {
  switch (type) {
    case routerTypes.UPDATE_LOCATION:
      return {
        ...state,
        location: payload,
      };
    default:
      return state;
  }
};

export default router;
