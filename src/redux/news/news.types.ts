import { newsType } from "../../api/api.types";

export type newsStoreType = {
  latestNews: newsType[];
  popularNews: newsType[];
};

export enum newsActions {
  GET_NEWS = "GET_NEWS",
  GET_LATEST_NEWS = "GET_LATEST_NEWS",
  SET_LATEST_NEWS = "SET_LATEST_NEWS",
  GET_POPULAR_NEWS = "GET_POPULAR_NEWS",
  SET_POPULAR_NEWS = "SET_POPULAR_NEWS",
}

export type newsTypes =
  | {
      type: newsActions.GET_LATEST_NEWS;
    }
  | {
      type: newsActions.SET_LATEST_NEWS;
      payload: newsType[];
    }
  | {
      type: newsActions.GET_POPULAR_NEWS;
    }
  | {
      type: newsActions.SET_POPULAR_NEWS;
      payload: newsType[];
    };
