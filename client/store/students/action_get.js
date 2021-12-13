export const LOAD_STUDENTS_DATA_SUCCESS = "LOAD_STUDENTS_DATA_SUCCESS";

const loadStudentsFetchDataSuccess = (students) => {
  return {
    type: LOAD_STUDENTS_DATA_SUCCESS,
    students,
  };
};
export const loadStudentsFetchData = (data) => async (dispatch) => {
  const { url, values, setValues } = data;
  let response = await fetch(url, {
    headers: {
      Authorization: localStorage.token,
    },
  });
  if (response.status === 200) {
    response = await response.json();
    dispatch(loadStudentsFetchDataSuccess(response));
  } else {
    console.log({ message: "Error!!!" });
  }
};
