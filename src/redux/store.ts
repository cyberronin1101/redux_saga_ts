import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import counter from "./counter/counter.reducer";
import { countStoreType } from "./counter/counter.types";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga";

export interface IStore {
  counter: countStoreType;
}

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  counter,
});

const middleware = [sagaMiddleware];

const store = configureStore({ reducer, middleware });

sagaMiddleware.run(rootSaga);

export default store;
