import { newsActions } from "./news.types";
import { newsType } from "../../api/api.types";

export const getLatestNews = () => ({ type: newsActions.GET_LATEST_NEWS });

export const setLatestNews = (payload: newsType[]) => ({
  type: newsActions.SET_LATEST_NEWS,
  payload,
});
