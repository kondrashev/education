import { combineReducers } from "redux";
import { checkUserReducer } from "./authorization/reducer";

export default combineReducers({
  checkUserReducer,
});
