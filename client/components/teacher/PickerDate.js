// @ts-ignore
import React from "react";
import ruLocale from "date-fns/locale/ru";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

export default function PickerDate() {
  const [value, setValue] = React.useState(new Date());
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
      <div>
        <DatePicker
          // @ts-ignore
          mask="__.__.____"
          value={value}
          // @ts-ignore
          onChange={(newValue) => setValue(newValue)}
          renderInput={(params) => <TextField {...params} />}
        />
      </div>
    </LocalizationProvider>
  );
}
