export const LOAD_GROUPS_DATA_SUCCESS = "LOAD_GROUPS_DATA_SUCCESS";

const loadGroupsFetchDataSuccess = (groups) => {
  return {
    type: LOAD_GROUPS_DATA_SUCCESS,
    groups,
  };
};
export const loadGroupsFetchData = (data) => async (dispatch) => {
  const { url, values, setValues } = data;
  let response = await fetch(url, {
    headers: {
      Authorization: localStorage.token,
    },
  });
  if (response.status === 200) {
    response = await response.json();
    dispatch(loadGroupsFetchDataSuccess(response));
  } else {
    console.log({ message: "Error!!!" });
  }
};
