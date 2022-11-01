import { Location } from "react-router-dom";

export type routerStoreType = {
  location: Location;
};

export enum routerTypes {
  UPDATE_LOCATION = "UPDATE_LOCATION",
}

export type routerActions = {
  type: routerTypes.UPDATE_LOCATION;
  payload: routerStoreType;
};
