import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import counter from "./counter/counter.reducer";
import { countStoreType } from "./counter/counter.types";

export interface IStore {
  counter: countStoreType;
}

const reducer = combineReducers({
  counter,
});

const store = configureStore({ reducer });

export default store;
