import { UPDATE_DISCIPLINES_DATA_SUCCESS } from "./action_add";

const updateDisciplineFetchDataSuccess = (payload) => {
  return {
    type: UPDATE_DISCIPLINES_DATA_SUCCESS,
    payload,
  };
};

export const updateDisciplineFetchData = (data) => async (dispatch) => {
  const { url, id, setShowInputEditItem, values, setValues } = data;
  const { nameDiscipline } = values;
  let response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: localStorage.token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, name: nameDiscipline }),
  });
  if (response.status === 200) {
    response = await response.json();
    dispatch(updateDisciplineFetchDataSuccess(response));
    setValues({ ...values, nameDiscipline: "" });
    setShowInputEditItem(false);
  } else {
    setValues({
      ...values,
      errorForm: true,
      errorMessage: `Error from server №${response.status} ${response.statusText}!!!`,
    });
  }
};
