import { newsActions, newsStoreType, newsTypes } from "./news.types";

const initialState: newsStoreType = {
  latestNews: [],
  popularNews: [],
};

const news = (state = initialState, action: newsTypes) => {
  switch (action.type) {
    case newsActions.SET_LATEST_NEWS:
      return {
        ...state,
        latestNews: [...state.latestNews, ...action.payload],
      };
    case newsActions.SET_POPULAR_NEWS:
      return {
        ...state,
        popularNews: [...state.popularNews, ...action.payload],
      };
    default:
      return state;
  }
};

export default news;
