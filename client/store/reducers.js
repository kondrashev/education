import { combineReducers } from "redux";
import { checkUserReducer } from "./authorization/reducer";
import { disciplineReducer } from "./disciplines/reducer_get";
import { updateDisciplinesReducer } from "./disciplines/reducer_update";
import { groupReducer } from "./groups/reducer_get";
import { updateGroupsReducer } from "./groups/reducer_update";

export default combineReducers({
  checkUserReducer,
  disciplineReducer,
  updateDisciplinesReducer,
  groupReducer,
  updateGroupsReducer,
});
