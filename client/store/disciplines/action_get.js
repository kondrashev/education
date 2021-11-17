export const LOAD_DISCIPLINES_DATA_SUCCESS = "LOAD_DISCIPLINES_DATA_SUCCESS";

const loadDisciplinesFetchDataSuccess = (disciplines) => {
  return {
    type: LOAD_DISCIPLINES_DATA_SUCCESS,
    disciplines,
  };
};
export const loadDisciplinesFetchData = (data) => async (dispatch) => {
  const { url, values, setValues } = data;
  let response = await fetch(url, {
    headers: {
      Authorization: localStorage.token,
    },
  });
  if (response.status === 200) {
    response = await response.json();
    console.log(response);
    dispatch(loadDisciplinesFetchDataSuccess(response));
  } else {
    console.log({ message: "Error!!!" });
  }
};
