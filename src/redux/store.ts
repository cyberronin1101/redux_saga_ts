import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import counter from "./counter/counter.reducer";
import { countStoreType } from "./counter/counter.types";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga";
import news from "./news/news.reducer";
import { newsStoreType } from "./news/news.types";

export interface IStore {
  counter: countStoreType;
  news: newsStoreType;
}

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  counter,
  news,
});

const middleware = [sagaMiddleware];

const store = configureStore({ reducer, middleware });

sagaMiddleware.run(rootSaga);

export default store;
