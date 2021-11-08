import { LOAD_DISCIPLINES_DATA_SUCCESS } from "./action_get";

export const disciplineReducer = (state = "", action) => {
  switch (action.type) {
    case LOAD_DISCIPLINES_DATA_SUCCESS:
      return action.disciplines;
    default:
      return state;
  }
};
