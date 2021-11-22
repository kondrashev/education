import { LOAD_GROUPS_DATA_SUCCESS } from "./action_get";

export const groupReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_GROUPS_DATA_SUCCESS:
      return action.groups;
    default:
      return state;
  }
};
