export const deleteDisciplineFetchData = (data) => async (dispatch) => {
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
      updateDiscipline: true,
    });
    console.log(response[0]);
  } else {
    setValues({
      ...values,
      errorForm: true,
      errorMessage: `Error from server №${response.status} ${response.statusText}!!!`,
    });
  }
};
