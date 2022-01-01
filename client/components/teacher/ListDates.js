// @ts-nocheck
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
import { DateContext } from "../teacher/FormItem";
import { loadStudentsFetchData } from "../../store/students/action_get";
import { loadListDatesFetchData } from "../../store/students/action_dates";
import PickerDate from "./PickerDate";

export default function ListDates(props) {
  const dispatch = useDispatch();
  const { values, setValues } = useContext(ApplictationContext);
  const { itemId, datesList } = useContext(DateContext);
  useEffect(() => {
    if (values.getListDates) {
      let data = {
        url: `${endpoints.getStudents}?groupId=${itemId.current[1]}`,
        values,
        setValues,
      };
      dispatch(loadStudentsFetchData(data));
      data = {
        url: `${endpoints.getListDates}?groupId=${itemId.current[1]}`,
        values,
        setValues,
      };
      dispatch(loadListDatesFetchData(data));
    }
  }, [itemId.current[1]]);
  const [item] = useSelector((state) => state.studentReducer.students);
  const listTests = Object.keys(JSON.parse(item?.options || "[]")).map(
    (item) => {
      datesList.current.set(item.slice(-2), "");
      return item.slice(-2);
    }
  );
  const { listDates } = useSelector((state) => state.studentReducer.dates);
  function createData(test, date) {
    return { test, date };
  }
  const listSortDates = JSON.parse(listDates || "[]").sort((a, b) =>
    a[0] > b[0] ? 1 : -1
  );
  const rows = listTests.map((item, index) => {
    const [_, date] = listSortDates[index] || [["", ""]];
    return createData(item, <PickerDate item={item} dateNew={date} />);
  });
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
