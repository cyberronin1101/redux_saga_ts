import { newsActionsType, newsStoreType, newsTypes } from "./news.types";

const initialState: newsStoreType = {
  latestNews: [],
  popularNews: [],

  isLoading: false,

  latestNewsError: "",
  popularNewsError: "",
};

const news = (state = initialState, { type, payload }: newsActionsType) => {
  switch (type) {
    case newsTypes.SET_LATEST_NEWS:
      return {
        ...state,
        latestNews: payload,
      };
    case newsTypes.SET_POPULAR_NEWS:
      return {
        ...state,
        popularNews: payload,
      };
    case newsTypes.SET_LOADING_DATA:
      return {
        ...state,
        isLoading: payload,
      };
    case newsTypes.SET_POPULAR_NEWS_ERROR:
      return {
        ...state,
        popularNewsError: payload,
      };
    case newsTypes.SET_LATEST_NEWS_ERROR:
      return {
        ...state,
        latestNewsError: payload,
      };
    default:
      return state;
  }
};

export default news;
