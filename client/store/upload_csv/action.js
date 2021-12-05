export const UPLOAD_FILE_DATA_SUCCESS = "UPLOAD_FILE_DATA_SUCCESS";

const uploadFileFetchDataSuccess = (payload) => {
  return {
    type: UPLOAD_FILE_DATA_SUCCESS,
    payload,
  };
};

export const uploadFileFetchData = (data) => async (dispatch) => {
  const { url, formData, values, setValues } = data;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: localStorage.token,
      },
      body: formData,
    });
    const result = await response.json();
    dispatch(uploadFileFetchDataSuccess(response));
    console.log("Success:", JSON.stringify(result));
  } catch (error) {
    console.error("Error:", error);
  }
};
