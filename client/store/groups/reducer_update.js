import { UPDATE_GROUPS_DATA_SUCCESS } from "../disciplines/action_add";

export const updateGroupsReducer = (state = [], action) => {
  switch (action.type) {
    case UPDATE_GROUPS_DATA_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
