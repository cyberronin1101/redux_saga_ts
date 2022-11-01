import { routerActions } from "./router.types";

export const updateLocation = <T>(payload: T) => ({
  type: routerActions.UPDATE_LOCATION,
  payload,
});
