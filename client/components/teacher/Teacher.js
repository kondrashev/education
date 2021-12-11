import React, { useContext } from "react";
import MainMenu from "./MainMenu";
import MenuNavigation from "./MenuNavigation";
import ListItems from "./ListItems";
import Box from "@mui/material/Box";
import { ApplictationContext } from "../../App";
import FormItem from "./FormItem";
import { useSpring, animated as a } from "react-spring";

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
  const animationFormDiscipline = useSpring({
    marginLeft: values.showFormItem ? -727 : -1127,
    config: { duration: 1000 },
  });
  return (
    <Box sx={styles.container}>
      <MainMenu />
      <MenuNavigation />
      {values.showListItems && <ListItems />}
      <Box sx={{ position: "fixed", top: "150px" }}>
        <a.div style={animationFormDiscipline}>
          <FormItem />
        </a.div>
      </Box>
    </Box>
  );
};
export default Teacher;
