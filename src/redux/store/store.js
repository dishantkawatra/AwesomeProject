import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RootReducers from "../reducers/RootReducers";

const initialState = {};

export default function configureStore() {
  return createStore(RootReducers, initialState, applyMiddleware(thunk));
}