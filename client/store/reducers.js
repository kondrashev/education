import { combineReducers } from "redux";
import { checkUserReducer } from "./authorization/reducer";
import { disciplineReducer } from "./disciplines/reducer_get";
import { updateItemsReducer } from "./disciplines/reducer_update";
import { groupReducer } from "./groups/reducer_get";

export default combineReducers({
  checkUserReducer,
  disciplineReducer,
  updateItemsReducer,
  groupReducer,
});
