import React, { useContext, useRef } from "react";
import MainMenu from "./MainMenu";
import MenuNavigation from "./MenuNavigation";
import ListItems from "./ListItems";
import ListStudents from "./ListStudents";
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
  const { values } = useContext(ApplictationContext);
  const suffixDisciplineURL = useRef("");
  const suffixGroupURL = useRef("");
  const animationFormDiscipline = useSpring({
    marginLeft: values.showFormItem ? -727 : -1127,
    config: { duration: 1000 },
  });
  return (
    <Box sx={styles.container}>
      <MainMenu />
      <MenuNavigation />
      {values.showListItems && (
        <ListItems
          suffixDisciplineURL={suffixDisciplineURL}
          suffixGroupURL={suffixGroupURL}
        />
      )}
      {values.showListStudents && (
        <ListStudents suffixGroupURL={suffixGroupURL} />
      )}
      <Box sx={{ position: "fixed", top: "150px" }}>
        <a.div style={animationFormDiscipline}>
          <FormItem />
        </a.div>
      </Box>
    </Box>
  );
};
export default Teacher;
