import { newsTypes } from "./news.types";
import { newsType } from "../../api/api.types";

export const getLatestNews = () => ({ type: newsTypes.GET_LATEST_NEWS });

export const setLatestNews = (payload: newsType[]) => ({
  type: newsTypes.SET_LATEST_NEWS,
  payload,
});

export const getNews = () => ({
  type: newsTypes.GET_NEWS,
});

export const getPopularNews = () => ({ type: newsTypes.GET_POPULAR_NEWS });

export const setPopularNews = (payload: newsType[]) => ({
  type: newsTypes.SET_POPULAR_NEWS,
  payload,
});

export const setLatestNewsError = (payload: string) => ({
  type: newsTypes.SET_LATEST_NEWS_ERROR,
  payload,
});

export const setPopularNewsError = (payload: string) => ({
  type: newsTypes.SET_POPULAR_NEWS_ERROR,
  payload,
});
