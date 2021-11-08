import React from "react";
import { makeStyles } from "@mui/styles";
import MainMenu from "./MainMenu";
import MenuNavigation from "./MenuNavigation";

const useStyles = makeStyles({
  globalStyle: {
    margin: "0px",
    width: "100%",
  },
});
const Teacher = () => {
  const classes = useStyles();
  return (
    <div className={classes.globalStyle}>
      <MainMenu />
      <MenuNavigation />
    </div>
  );
};
export default Teacher;
