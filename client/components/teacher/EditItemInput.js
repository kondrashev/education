// @ts-nocheck
import React, { useState } from "react";
import TableCell from "@mui/material/TableCell";

const styles = {
  cellInput: {
    width: "40px",
    cursor: "pointer",
  },
};
const EditItemInput = ({ row, id }) => {
  const [item, setItem] = useState("");
  const changeItem = (event) => {
    setItem(event.target.value);
  };
  const onPressKey = (event) => {
    if (event.key === "Enter") {
      console.log(`studentId:${row.id}; ${id}:${item ? parseInt(item) : 0}`);
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
        />
      ) : (
        row[id]
      )}
    </TableCell>
  );
};
export default EditItemInput;
