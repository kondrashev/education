// @ts-nocheck
import React, { useState } from "react";
import TableCell from "@mui/material/TableCell";

const styles = {
  cellInput: {
    width: "40px",
    cursor: "pointer",
  },
};
const EditItemInput = ({ row, id, editItem }) => {
  const [item, setItem] = useState("");
  const changeItem = (event) => {
    setItem(event.target.value);
  };
  const clearInput = (event) => {
    event.target.value = "";
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
          onKeyPress={(event) => editItem(event, row.id, id, item)}
          onClick={clearInput}
        />
      ) : (
        row[id]
      )}
    </TableCell>
  );
};
export default EditItemInput;
