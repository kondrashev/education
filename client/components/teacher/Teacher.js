import React from "react";
import MainMenu from "./MainMenu";
import MenuNavigation from "./MenuNavigation";
import ListDisciplines from "./ListDisciplines";
import Box from "@mui/material/Box";
import FormDiscipline from "./FormDiscipline";

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
  return (
    <Box sx={styles.container}>
      <MainMenu />
      <MenuNavigation />
      <ListDisciplines />
      <FormDiscipline />
    </Box>
  );
};
export default Teacher;
