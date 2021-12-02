import { updateDisciplineFetchDataSuccess } from "./action_add";
import { updateGroupFetchDataSuccess } from "../groups/action_add";

export const deleteDisciplinesFetchData = (data) => async (dispatch) => {
  const { url, values, setValues, listId } = data;
  let response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: localStorage.token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ listId }),
  });
  if (response.status === 200) {
    response = await response.json();
    setValues({
      ...values,
      showIconDeleteItems: false,
    });
    dispatch(
      !values.getGroups
        ? updateDisciplineFetchDataSuccess(response)
        : updateGroupFetchDataSuccess(response)
    );
  } else {
    setValues({
      ...values,
      errorForm: true,
      errorMessage: `Error from server №${response.status} ${response.statusText}!!!`,
    });
  }
};
