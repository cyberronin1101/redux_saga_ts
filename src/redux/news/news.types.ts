import { newsType } from "../../api/api.types";

export type newsStoreType = {
  latestNews: newsType[];
};

export enum newsActions {
  GET_LATEST_NEWS = "GET_LATEST_NEWS",
  SET_LATEST_NEWS = "SET_LATEST_NEWS",
}

export type newsTypes =
  | {
      type: newsActions.GET_LATEST_NEWS;
    }
  | {
      type: newsActions.SET_LATEST_NEWS;
      payload: newsType[];
    };
