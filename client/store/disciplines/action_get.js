export const LOAD_DISCIPLINES_DATA_SUCCESS = "LOAD_DISCIPLINES_DATA_SUCCESS";

const loadItemsFetchDataSuccess = (disciplines) => {
  return {
    type: LOAD_DISCIPLINES_DATA_SUCCESS,
    disciplines,
  };
};
export const loadItemsFetchData = (data) => async (dispatch) => {
  const { url, values, setValues } = data;
  let response = await fetch(url, {
    headers: {
      Authorization: localStorage.token,
    },
  });
  if (response.status === 200) {
    response = await response.json();
    dispatch(loadItemsFetchDataSuccess(response));
  } else {
    console.log({ message: "Error!!!" });
  }
};
