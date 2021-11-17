export const UPDATE_DISCIPLINES_DATA_SUCCESS =
  "UPDATE_DISCIPLINES_DATA_SUCCESS";

const addDisciplineFetchDataSuccess = (payload) => {
  return {
    type: UPDATE_DISCIPLINES_DATA_SUCCESS,
    payload,
  };
};

export const addDisciplineFetchData = (data) => async (dispatch) => {
  const { url, values, setValues } = data;
  const { nameDiscipline } = values;
  let response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: localStorage.token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: nameDiscipline }),
  });
  if (response.status === 200) {
    response = await response.json();
    dispatch(addDisciplineFetchDataSuccess(response));
    if (response.name) {
      setValues({
        ...values,
        nameDiscipline: "",
      });
    } else {
      setValues({
        ...values,
        errorForm: true,
        errorMessage: "This discipline has already created!!!",
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
