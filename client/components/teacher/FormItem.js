// @ts-ignore
import React, { useContext, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ApplictationContext } from "../../App";
// @ts-ignore
import { useDispatch, useSelector } from "react-redux";
import endpoints from "../constants/Endpoints";
import { addItemFetchData } from "../../store/disciplines/action_add";
import { loadGroupsFetchData } from "../../store/groups/action_get";
import { uploadFileFetchData } from "../../store/upload_csv/action";
import Alert from "@mui/material/Alert";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import SelectPosition from "./SelectPosition";
import ButtonFormItem from "./ButtonFormItem";

const styles = {
  container: {
    width: "400px",
    height: "auto",
    background: "#F1F3F4",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  buttonClose: {
    width: "30px",
    height: "30px",
    alignSelf: "flex-end",
    border: "none",
    backgroundColor: "initial",
    cursor: "pointer",
  },
  fields: {
    width: "360px",
    height: "50px",
    marginBottom: "20px",
  },
};
const FormItem = () => {
  const hover = useRef(false);
  const dispatch = useDispatch();
  const { values, setValues } = useContext(ApplictationContext);
  const hoverOn = () => {
    // @ts-ignore
    hover.current.style.borderRadius = "50%";
    // @ts-ignore
    hover.current.style.backgroundColor = "grey";
  };
  const hoverOff = () => {
    // @ts-ignore
    hover.current.style.borderRadius = "inherit";
    // @ts-ignore
    hover.current.style.backgroundColor = "inherit";
  };
  const changeNameItem = (event) => {
    values.checkedRadioDiscipline &&
      setValues({ ...values, nameDiscipline: event.target.value });
    values.checkedRadioGroup &&
      setValues({ ...values, nameGroup: event.target.value });
    values.checkedRadioStudent &&
      setValues({ ...values, nameStudent: event.target.value });
  };
  const onPressKey = (event) => {
    if (event.key === "Enter") {
      addItem();
    }
  };
  const addItem = () => {
    const { current } = itemId;
    const data = {
      url: values.checkedRadioDiscipline
        ? endpoints.addDiscipline
        : values.checkedRadioGroup
        ? endpoints.addGroup
        : endpoints.addStudent,
      values,
      setValues,
      id: current,
    };
    dispatch(addItemFetchData(data));
  };
  const itemId = useRef([]);
  const uploadFile = (event) => {
    const data = new FormData();
    data.append("url", endpoints.uploadCSV);
    data.append("disciplineId", itemId.current[0]);
    data.append("groupId", itemId.current[1]);
    data.append("csvFile", event.target.files[0]);
    event.target.value = "";
    dispatch(uploadFileFetchData(data));
  };
  const choseItem = (event) => {
    switch (event.target.value) {
      case "Discipline":
        setValues({
          ...values,
          showNameGroup: false,
          showSurNameStudent: false,
          disabledDiscipline: false,
          checkedRadioDiscipline: true,
          checkedRadioGroup: false,
          checkedRadioStudent: false,
        });
        break;
      case "Group":
        setValues({
          ...values,
          showNameGroup: true,
          showSurNameStudent: false,
          checkedRadioDiscipline: false,
          checkedRadioGroup: true,
          checkedRadioStudent: false,
        });
        break;
      case "Student":
        setValues({
          ...values,
          showNameGroup: true,
          showSurNameStudent: true,
          checkedRadioDiscipline: false,
          checkedRadioGroup: false,
          checkedRadioStudent: true,
        });
        break;
    }
  };
  const handleChangePosition = (event, type) => {
    const { current } = itemId;
    type === "Discipline"
      ? // @ts-ignore
        (current[0] = event.target.value)
      : // @ts-ignore
        (current[1] = event.target.value);
    if (type === "Discipline") {
      const data = {
        url: `${endpoints.getGroups}?disciplineId=${event.target.value}`,
        values,
        setValues,
      };
      dispatch(loadGroupsFetchData(data));
    }
    current.length === 2 && setValues({ ...values, upLoadFileButton: false });
  };
  return (
    <Box
      mt={1}
      ml={1}
      // @ts-ignore
      sx={styles.container}
    >
      <Box mt={-3} ml={46}>
        <button
          // @ts-ignore
          ref={hover}
          style={styles.buttonClose}
          onClick={() => {
            setValues({
              ...values,
              showFormItem: false,
              showNameGroup: false,
              showSurNameStudent: false,
              checkedRadioDiscipline: false,
              checkedRadioGroup: false,
              checkedRadioStudent: false,
              upLoadFileButton: true,
            });
          }}
          onMouseOver={hoverOn}
          onMouseOut={hoverOff}
        >
          <svg width="12" height="12" viewBox="0 0 12 12">
            <path
              d="M6 4.36L10.02.34a1.16 1.16 0 0 1 1.64 1.64L7.64 6l4.02 4.02a1.16 1.16 0 0 1-1.64 1.64L6 7.64l-4.02 4.02a1.16 1.16 0 0 1-1.64-1.64L4.36 6 .34 1.98A1.16 1.16 0 1 1 1.98.34L6 4.36z"
              fill="black"
            ></path>
          </svg>
        </button>
      </Box>
      {values.showRadioButtons && (
        <FormControl component="fieldset">
          <FormLabel component="legend">Додати</FormLabel>
          <RadioGroup row aria-label="Додати" name="row-radio-buttons-group">
            <FormControlLabel
              value="Discipline"
              control={<Radio />}
              label="Дисципліна"
              onChange={choseItem}
              checked={values.checkedRadioDiscipline}
            />
            <FormControlLabel
              value="Group"
              control={<Radio />}
              label="Група"
              onChange={choseItem}
              checked={values.checkedRadioGroup}
            />
            <FormControlLabel
              value="Student"
              control={<Radio />}
              label="Студент"
              onChange={choseItem}
              checked={values.checkedRadioStudent}
            />
          </RadioGroup>
        </FormControl>
      )}
      {!values.showNameGroup ? (
        <TextField
          label="Дисципліна"
          value={values.nameDiscipline}
          variant="outlined"
          style={styles.fields}
          onChange={changeNameItem}
          onKeyPress={onPressKey}
          disabled={values.disabledDiscipline}
        />
      ) : (
        <SelectPosition
          type="Discipline"
          styles={styles}
          handleChangePosition={handleChangePosition}
        />
      )}
      {values.showNameGroup && !values.showSurNameStudent && (
        <TextField
          label="Група"
          value={values.nameGroup}
          variant="outlined"
          style={styles.fields}
          onChange={changeNameItem}
          onKeyPress={onPressKey}
        />
      )}
      {values.showSurNameStudent && (
        <SelectPosition
          type="Group"
          styles={styles}
          handleChangePosition={handleChangePosition}
        />
      )}
      {values.showSurNameStudent && values.showRadioButtons && (
        <TextField
          label="Студент"
          value={values.nameStudent}
          variant="outlined"
          style={styles.fields}
          onChange={changeNameItem}
          onKeyPress={onPressKey}
        />
      )}
      <ButtonFormItem
        values={values}
        setValues={setValues}
        styles={styles}
        addItem={addItem}
        uploadFile={uploadFile}
      />
      {values.errorForm && (
        <Alert
          onClose={() => {
            setValues({
              ...values,
              errorForm: false,
              nameDiscipline: "",
            });
          }}
        >
          {values.errorMessage}
        </Alert>
      )}
    </Box>
  );
};
export default FormItem;
