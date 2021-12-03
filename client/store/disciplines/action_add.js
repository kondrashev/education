export const UPDATE_DISCIPLINES_DATA_SUCCESS =
  "UPDATE_DISCIPLINES_DATA_SUCCESS";
export const UPDATE_GROUPS_DATA_SUCCESS = "UPDATE_GROUPS_DATA_SUCCESS";

export const updateDisciplineFetchDataSuccess = (payload) => {
  return {
    type: UPDATE_DISCIPLINES_DATA_SUCCESS,
    payload,
  };
};

export const updateGroupFetchDataSuccess = (payload) => {
  return {
    type: UPDATE_GROUPS_DATA_SUCCESS,
    payload,
  };
};

export const addItemFetchData = (data) => async (dispatch) => {
  const { url, values, setValues, id } = data;
  const { nameDiscipline, nameGroup } = values;
  let response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: localStorage.token,
      "Content-Type": "application/json",
    },
    body: !values.getGroups
      ? JSON.stringify({ name: nameDiscipline })
      : JSON.stringify({ name: nameGroup, disciplineId: id }),
  });
  if (response.status === 200) {
    response = await response.json();
    dispatch(
      !values.getGroups
        ? updateDisciplineFetchDataSuccess(response)
        : updateGroupFetchDataSuccess(response)
    );
    if (response.name) {
      setValues({
        ...values,
        nameDiscipline: "",
        nameGroup: "",
        nameStudent: "",
      });
    } else {
      setValues({
        ...values,
        errorForm: true,
        errorMessage: `This ${
          !values.getGroups ? "discipline" : "group"
        } has already created!!!`,
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
