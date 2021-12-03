import React, { useContext, useRef } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ApplictationContext } from "../../App";
import { useDispatch, useSelector } from "react-redux";
import endpoints from "../constants/Endpoints";
import { addItemFetchData } from "../../store/disciplines/action_add";
import { loadGroupsFetchData } from "../../store/groups/action_get";
import Alert from "@mui/material/Alert";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

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
    hover.current.style.borderRadius = "50%";
    hover.current.style.backgroundColor = "grey";
  };
  const hoverOff = () => {
    hover.current.style.borderRadius = "inherit";
    hover.current.style.backgroundColor = "inherit";
  };
  const changeNameItem = (event) => {
    values.checkedRadioDiscipline &&
      setValues({ ...values, nameDiscipline: event.target.value });
    values.checkedRadioGroup &&
      setValues({ ...values, nameGroup: event.target.value });
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
  const itemId = useRef(0);
  const handleChangePosition = (event) => {
    itemId.current = event.target.value;
    const data = {
      url: `${endpoints.getGroups}?disciplineId=${event.target.value}`,
      values,
      setValues,
    };
    dispatch(loadGroupsFetchData(data));
  };
  const SelectPosition = ({ type }) => {
    const itemsList = useSelector((state) =>
      type === "Discipline" ? state.disciplineReducer : state.groupReducer
    );
    return (
      <FormControl style={styles.fields}>
        <InputLabel id="demo-simple-select-label">Поз.</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          onChange={handleChangePosition}
        >
          {itemsList.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  };
  return (
    <Box mt={1} ml={1} sx={styles.container}>
      <Box mt={-3} ml={46}>
        <button
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
        <SelectPosition type="Discipline" />
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
      {values.showSurNameStudent && <SelectPosition type="Group" />}
      {values.showSurNameStudent && (
        <TextField
          label="Студент"
          // value={values.nameStudent}
          variant="outlined"
          style={styles.fields}
          // onChange={changeNameItem}
          // onKeyPress={onPressKey}
        />
      )}
      <Button
        variant="contained"
        disabled={values.nameDiscipline ? false : true}
        color="primary"
        disableElevation
        style={styles.fields}
        onClick={addItem}
      >
        Додати
      </Button>
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
