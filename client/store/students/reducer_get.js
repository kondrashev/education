import { LOAD_STUDENTS_DATA_SUCCESS } from "./action_get";

export const studentReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_STUDENTS_DATA_SUCCESS:
      return action.students;
    default:
      return state;
  }
};
