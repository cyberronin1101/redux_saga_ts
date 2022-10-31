import { newsType } from "../../api/api.types";

export type newsStoreType = {
  latestNews: newsType[];
  popularNews: newsType[];

  // ERRORS
  latestNewsError: string;
  popularNewsError: string;
};

export enum newsTypes {
  GET_LATEST_NEWS = "GET_LATEST_NEWS",
  SET_LATEST_NEWS = "SET_LATEST_NEWS",
  GET_POPULAR_NEWS = "GET_POPULAR_NEWS",
  SET_POPULAR_NEWS = "SET_POPULAR_NEWS",

  // ERRORS
  SET_LATEST_NEWS_ERROR = "SET_LATEST_NEWS_ERROR",
  SET_POPULAR_NEWS_ERROR = "SET_POPULAR_NEWS_ERROR",
}

export type newsActionsType =
  | {
      type: newsTypes.GET_LATEST_NEWS | newsTypes.GET_POPULAR_NEWS;
      payload: never;
    }
  | {
      type: newsTypes.SET_LATEST_NEWS | newsTypes.SET_POPULAR_NEWS;
      payload: newsType[];
    }

  // ERRORS
  | {
      type: newsTypes.SET_LATEST_NEWS_ERROR | newsTypes.SET_POPULAR_NEWS_ERROR;
      payload: string;
    };
