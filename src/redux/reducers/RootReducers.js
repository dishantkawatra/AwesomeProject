import { combineReducers } from "redux";
import AddItemReducer from "./Reducers";


export const RootReducers = combineReducers({
  AddItemReducer,
 
});

// export default (state: any, action: any) =>
//   RootReducers(action.type === LOGOUT.LOGOUT ? undefined : state, action);