import { routerTypes } from "./router.types";

export const updateLocation = <T>(payload: T) => ({
  type: routerTypes.UPDATE_LOCATION,
  payload,
});
