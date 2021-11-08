import { combineReducers } from "redux";
import { checkUserReducer } from "./authorization/reducer";
import { disciplineReducer } from "./disciplines/reducer";

export default combineReducers({
  checkUserReducer,
  disciplineReducer,
});
