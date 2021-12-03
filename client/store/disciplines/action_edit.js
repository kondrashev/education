import {
  updateDisciplineFetchDataSuccess,
  updateGroupFetchDataSuccess,
} from "./action_add";

export const updateItemFetchData = (data) => async (dispatch) => {
  const { url, id, setShowInputEditItem, values, setValues } = data;
  const { nameDiscipline, nameGroup } = values;
  let response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: localStorage.token,
      "Content-Type": "application/json",
    },
    body: !values.getGroups
      ? JSON.stringify({ id, name: nameDiscipline })
      : JSON.stringify({ id, name: nameGroup }),
  });
  if (response.status === 200) {
    response = await response.json();
    dispatch(
      !values.getGroups
        ? updateDisciplineFetchDataSuccess(response)
        : updateGroupFetchDataSuccess(response)
    );
    setValues({ ...values, nameDiscipline: "", nameGroup: "" });
    setShowInputEditItem(false);
  } else {
    setValues({
      ...values,
      errorForm: true,
      errorMessage: `Error from server №${response.status} ${response.statusText}!!!`,
    });
  }
};
