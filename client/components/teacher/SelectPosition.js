import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useSelector } from "react-redux";

const SelectPosition = ({ type, styles, handleChangePosition }) => {
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
        onChange={(event) => handleChangePosition(event, type)}
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
export default SelectPosition;
