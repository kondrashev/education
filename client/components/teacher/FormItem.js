import React, { useContext, useRef } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ApplictationContext } from "../../App";
import { useDispatch } from "react-redux";
import endpoints from "../constants/Endpoints";
import { addDisciplineFetchData } from "../../store/disciplines/action_add";
import Alert from "@mui/material/Alert";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

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
  const changeNameDiscipline = (event) => {
    setValues({ ...values, nameDiscipline: event.target.value });
  };
  const onPressKey = (event) => {
    if (event.key === "Enter") {
      addDiscipline();
    }
  };
  const addDiscipline = () => {
    const data = {
      url: endpoints.addDiscipline,
      values,
      setValues,
    };
    dispatch(addDisciplineFetchData(data));
  };
  const choseItem = (event) => {
    switch (event.target.value) {
      case "Discipline":
        setValues({
          ...values,
          showNameGroup: false,
          showSurNameStudent: false,
          disabledDiscipline: false,
        });
        break;
      case "Group":
        setValues({
          ...values,
          showNameGroup: true,
          showSurNameStudent: false,
        });
        break;
      case "Student":
        setValues({
          ...values,
          showNameGroup: true,
          showSurNameStudent: true,
        });
        break;
    }
  };
  return (
    <Box mt={1} ml={1} sx={styles.container}>
      <Box mt={-3} ml={46}>
        <button
          ref={hover}
          style={styles.buttonClose}
          onClick={() => setValues({ ...values, showFormDiscipline: false })}
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
          />
          <FormControlLabel
            value="Group"
            control={<Radio />}
            label="Група"
            onChange={choseItem}
          />
          <FormControlLabel
            value="Student"
            control={<Radio />}
            label="Студент"
            onChange={choseItem}
          />
        </RadioGroup>
      </FormControl>
      <TextField
        label="Дисципліна"
        value={values.nameDiscipline}
        variant="outlined"
        style={styles.fields}
        onChange={changeNameDiscipline}
        onKeyPress={onPressKey}
        disabled={values.disabledDiscipline}
      />
      {values.showNameGroup && (
        <TextField
          label="Група"
          // value={values.nameDiscipline}
          variant="outlined"
          style={styles.fields}
          // onChange={changeNameGroup}
          onKeyPress={onPressKey}
        />
      )}
      {values.showSurNameStudent && (
        <TextField
          label="Студент"
          // value={values.nameDiscipline}
          variant="outlined"
          style={styles.fields}
          // onChange={changeSurNameStudent}
          onKeyPress={onPressKey}
        />
      )}
      <Button
        variant="contained"
        disabled={values.nameDiscipline ? false : true}
        color="primary"
        disableElevation
        style={styles.fields}
        onClick={addDiscipline}
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
