import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import counter from "./counter/counter.reducer";
import router from "./router/router.reducer";
import { countStoreType } from "./counter/counter.types";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";
import news from "./news/news.reducer";
import { newsStoreType } from "./news/news.types";
import { routerStoreType } from "./router/router.types";

export interface IStore {
  router: routerStoreType;
  counter: countStoreType;
  news: newsStoreType;
}

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  router,
  counter,
  news,
});

const middleware = [sagaMiddleware];

const store = configureStore({ reducer, middleware });

sagaMiddleware.run(rootSaga);

export default store;
