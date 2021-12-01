import { UPDATE_DISCIPLINES_DATA_SUCCESS } from "./action_add";
import { updateGroupFetchDataSuccess } from "../groups/action_add";

const deleteDisciplinesFetchDataSuccess = (payload) => {
  return {
    type: UPDATE_DISCIPLINES_DATA_SUCCESS,
    payload,
  };
};

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
        ? deleteDisciplinesFetchDataSuccess(response)
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
