import { UPDATE_DISCIPLINES_DATA_SUCCESS } from "./action_add";

export const updateDisciplinesReducer = (state = [], action) => {
  switch (action.type) {
    case UPDATE_DISCIPLINES_DATA_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
