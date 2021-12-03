import {
  UPDATE_DISCIPLINES_DATA_SUCCESS,
  UPDATE_GROUPS_DATA_SUCCESS,
} from "./action_add";

export const updateItemsReducer = (state = [], action) => {
  switch (action.type) {
    case UPDATE_DISCIPLINES_DATA_SUCCESS:
      return action.payload;
    case UPDATE_GROUPS_DATA_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
