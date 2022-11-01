import { Location } from "react-router-dom";

export type routerStoreType = {
  location: Location;
};

export enum routerActions {
  UPDATE_LOCATION = "UPDATE_LOCATION",
}

export type routerTypes = {
  type: routerActions.UPDATE_LOCATION;
  payload: routerStoreType;
};
