import React from "react";
import { makeStyles } from "@mui/styles";
import MainMenu from "./MainMenu";

const useStyles = makeStyles({
  globalStyle: { margin: "0px" },
});
const Teacher = () => {
  const classes = useStyles();
  return (
    <div className={classes.globalStyle}>
      <MainMenu />
    </div>
  );
};
export default Teacher;
