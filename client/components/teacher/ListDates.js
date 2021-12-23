import React, { useEffect, useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import endpoints from "../constants/Endpoints";
import { ApplictationContext } from "../../App";
import { loadStudentsFetchData } from "../../store/students/action_get";
import PickerDate from "./PickerDate";

export default function ListDates(props) {
  // @ts-ignore
  const dispatch = useDispatch();
  const { values, setValues } = useContext(ApplictationContext);
  const { itemId } = props;
  useEffect(() => {
    if (values.getListDates) {
      const data = {
        url: `${endpoints.getStudents}?groupId=${itemId.current[1]}`,
        values,
        setValues,
      };
      dispatch(loadStudentsFetchData(data));
    }
  }, [itemId.current[1]]);
  // @ts-ignore
  const [item] = useSelector((state) => state.studentReducer);
  const listTests = Object.keys(JSON.parse(item?.options || "[]")).map((item) =>
    item.slice(-2)
  );
  function createData(test, date) {
    return { test, date };
  }
  const rows = listTests.map((item) => createData(item, <PickerDate />));
  return (
    <TableContainer
      component={Paper}
      style={{
        width: "360px",
        height: "auto",
        marginBottom: "20px",
      }}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Тести</TableCell>
            <TableCell align="right">Дати</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.test}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.test}
              </TableCell>
              <TableCell align="right">{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
