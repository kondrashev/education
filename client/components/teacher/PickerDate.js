// @ts-ignore
import React, { useState, useEffect } from "react";
import ruLocale from "date-fns/locale/ru";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

export default function PickerDate(props) {
  const { item, datesList } = props;
  const [date, setDate] = useState("");
  const changeDate = (newDate) => {
    datesList.current.set(item, newDate.toLocaleDateString("uk-UK"));
    setDate(newDate);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
      <div>
        <DatePicker
          // @ts-ignore
          mask="__.__.____"
          value={date}
          // @ts-ignore
          onChange={(newDate) => changeDate(newDate)}
          renderInput={(params) => <TextField {...params} />}
        />
      </div>
    </LocalizationProvider>
  );
}
