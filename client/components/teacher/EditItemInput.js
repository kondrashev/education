// @ts-nocheck
import React, { useState, useContext } from "react";
import TableCell from "@mui/material/TableCell";
import endpoints from "../constants/Endpoints";
import { useDispatch } from "react-redux";
import { ApplictationContext } from "../../App";
import { updateStudentFetchData } from "../../store/students/action_edit";

const styles = {
  cellInput: {
    width: "40px",
    cursor: "pointer",
  },
};
const EditItemInput = ({ row, id }) => {
  const { values, setValues } = useContext(ApplictationContext);
  const dispatch = useDispatch();
  const [item, setItem] = useState("");
  const changeItem = (event) => {
    setItem(event.target.value);
  };
  const clearInput = (event) => {
    event.target.value = "";
  };
  const onPressKey = (event) => {
    if (event.key === "Enter") {
      const data = {
        url: endpoints.updateStudent,
        studentId: row.id,
        item: id,
        valueItem: item,
        values,
        setValues,
      };
      dispatch(updateStudentFetchData(data));
    }
  };
  return (
    <TableCell align="right">
      {id === "report" ||
      id === "teacher" ||
      id === "conspectus" ||
      id === "exercise" ? (
        <input
          style={styles.cellInput}
          value={item ? item : row[id]}
          onChange={changeItem}
          onKeyPress={onPressKey}
          onClick={clearInput}
        />
      ) : (
        row[id]
      )}
    </TableCell>
  );
};
export default EditItemInput;
