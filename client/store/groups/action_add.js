export const UPDATE_GROUPS_DATA_SUCCESS = "UPDATE_GROUPS_DATA_SUCCESS";

export const updateGroupFetchDataSuccess = (payload) => {
  return {
    type: UPDATE_GROUPS_DATA_SUCCESS,
    payload,
  };
};

export const addGroupFetchData = (data) => async (dispatch) => {
  const { url, values, setValues, id } = data;
  const { nameGroup } = values;
  let response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: localStorage.token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: nameGroup, disciplineId: id }),
  });
  if (response.status === 200) {
    response = await response.json();
    dispatch(updateGroupFetchDataSuccess(response));
    if (response.name) {
      setValues({
        ...values,
        nameGroup: "",
      });
    } else {
      setValues({
        ...values,
        errorForm: true,
        errorMessage: "This group has already created!!!",
      });
    }
  } else {
    setValues({
      ...values,
      errorForm: true,
      errorMessage: `Error from server №${response.status} ${response.statusText}!!!`,
    });
  }
};
