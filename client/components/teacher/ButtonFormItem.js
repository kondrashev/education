import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const Input = styled("input")({
  display: "none",
});

const ButtonFormItem = (props) => {
  const { values, styles, addItem, uploadFile } = props;
  if (values.showRadioButtons) {
    return (
      <Button
        variant="contained"
        disabled={
          values.nameDiscipline || values.nameGroup || values.nameStudent
            ? false
            : true
        }
        color="primary"
        disableElevation
        style={styles.fields}
        onClick={addItem}
      >
        Додати
      </Button>
    );
  } else {
    return (
      <label htmlFor="contained-button-file">
        <Input
          accept="csv/*"
          id="contained-button-file"
          multiple
          type="file"
          onChange={uploadFile}
        />
        <Button
          variant="contained"
          component="span"
          style={styles.fields}
          disabled={values.upLoadFileButton}
        >
          {!values.getListDates ? "Завантажити файл" : "Зформувати дати"}
        </Button>
      </label>
    );
  }
};
export default ButtonFormItem;
