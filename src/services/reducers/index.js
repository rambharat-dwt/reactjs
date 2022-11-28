import { combineReducers } from "redux";
import {
  loginReducer,
  changeTheNumber,
  productReducer,
  getListReducer,
} from "./Reducer";

export const rootReducer = combineReducers({
  loginReducer,
  changeTheNumber,
  productReducer,
  getListReducer,
});
