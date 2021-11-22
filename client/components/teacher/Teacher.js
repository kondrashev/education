import React, { useContext } from "react";
import MainMenu from "./MainMenu";
import MenuNavigation from "./MenuNavigation";
import ListItems from "./ListItems";
import Box from "@mui/material/Box";
import { ApplictationContext } from "../../App";

const styles = {
  container: {
    margin: "0px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
};
const Teacher = () => {
  const { values, setValues } = useContext(ApplictationContext);
  return (
    <Box sx={styles.container}>
      <MainMenu />
      <MenuNavigation />
      <ListItems />
    </Box>
  );
};
export default Teacher;
