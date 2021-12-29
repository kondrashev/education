import { LOAD_STUDENTS_DATA_SUCCESS } from "./action_get";
import { UPDATE_DATES_DATA_SUCCESS } from "./action_dates";

const initialState = { students: [], dates: [] };

export const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_STUDENTS_DATA_SUCCESS:
      return { ...state, students: action.students };
    case UPDATE_DATES_DATA_SUCCESS:
      return { ...state, dates: action.dates };
    default:
      return state;
  }
};
