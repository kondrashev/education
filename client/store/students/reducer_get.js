import { LOAD_STUDENTS_DATA_SUCCESS } from "./action_get";
import { UPDATE_STUDENT_DATA_SUCCESS } from "./action_add";
import {
  LOAD_DATES_DATA_SUCCESS,
  UPDATE_DATES_DATA_SUCCESS,
} from "./action_dates";

const initialState = {
  students: [],
  updateStudent: {},
  dates: {},
  updateDate: {},
};

export const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_STUDENTS_DATA_SUCCESS:
      return { ...state, students: action.students };
    case UPDATE_STUDENT_DATA_SUCCESS:
      return { ...state, updateStudent: action.student };
    case LOAD_DATES_DATA_SUCCESS:
      return { ...state, dates: action.dates };
    case UPDATE_DATES_DATA_SUCCESS:
      return { ...state, updateDate: action.dates };
    default:
      return state;
  }
};
