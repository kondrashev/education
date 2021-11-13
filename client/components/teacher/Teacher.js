import React from "react";
import { makeStyles } from "@mui/styles";
import MainMenu from "./MainMenu";
import MenuNavigation from "./MenuNavigation";
import ListDisciplines from "./ListDisciplines";

const useStyles = makeStyles({
  globalStyle: {
    margin: "0px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
const Teacher = () => {
  const classes = useStyles();
  return (
    <div className={classes.globalStyle}>
      <MainMenu />
      <MenuNavigation />
      <ListDisciplines />
    </div>
  );
};
export default Teacher;
