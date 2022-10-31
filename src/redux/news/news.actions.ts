import { newsActions } from "./news.types";
import { newsType } from "../../api/api.types";

export const getLatestNews = () => ({ type: newsActions.GET_LATEST_NEWS });

export const setLatestNews = (payload: newsType[]) => ({
  type: newsActions.SET_LATEST_NEWS,
  payload,
});

export const getNews = () => ({
  type: newsActions.GET_NEWS,
});

export const getPopularNews = () => ({ type: newsActions.GET_POPULAR_NEWS });

export const setPopularNews = (payload: newsType[]) => ({
  type: newsActions.SET_POPULAR_NEWS,
  payload,
});
