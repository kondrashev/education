import React, { useContext, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import { ApplictationContext } from "../../App";
import { useDispatch, useSelector } from "react-redux";
import { loadDisciplinesFetchData } from "../../store/disciplines/action_get";
import { loadGroupsFetchData } from "../../store/groups/action_get";
import { deleteDisciplinesFetchData } from "../../store/disciplines/action_delete";
import endpoints from "../constants/Endpoints";
import FormDiscipline from "./FormDiscipline";
import { useSpring, animated as a } from "react-spring";
import Item from "./Item";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: "20px",
  },
  deleteIcon: {
    alignSelf: "flex-start",
    zIndex: 10000,
  },
  listItem: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
  },
  iconEdit: { marginLeft: "20px", cursor: "pointer", zIndex: 1000 },
  listItemText: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "50px",
  },
};
const ListItems = () => {
  const dispatch = useDispatch();
  const { values, setValues } = useContext(ApplictationContext);
  const itemsList = useSelector((state) =>
    !values.getGroups ? state.disciplineReducer : state.groupReducer
  );
  const updateItems = useSelector((state) => state.updateDisciplinesReducer);
  const suffixURL = useRef("");
  useEffect(() => {
    const data = {
      url: !values.getGroups
        ? endpoints.getDisciplines
        : `${endpoints.getGroups}?disciplineId=${suffixURL.current}`,
      values,
      setValues,
    };
    dispatch(
      !values.getGroups
        ? loadDisciplinesFetchData(data)
        : loadGroupsFetchData(data)
    );
  }, [updateItems, values.getGroups]);
  const showNavigation = (name, disciplineId) => {
    setValues({
      ...values,
      shwoNavigationItemDiscipline: true,
      valueNavigationItemDiscipline: name,
      getGroups: true,
    });
    suffixURL.current = disciplineId;
  };
  const animationFormDiscipline = useSpring({
    marginLeft: values.showFormDiscipline ? -727 : -1127,
    config: { duration: 1000 },
  });
  const listIdItems = useRef([]);
  const getListIdItems = (event) => {
    if (event.target.checked) {
      listIdItems.current = [
        ...listIdItems.current,
        parseInt(event.target.value),
      ];
    } else {
      listIdItems.current = listIdItems.current.filter(
        (item) => item !== parseInt(event.target.value)
      );
    }
    setValues({
      ...values,
      showIconDeleteItems: Boolean(listIdItems.current.length),
    });
  };
  const deleteItems = () => {
    const { current } = listIdItems;
    listIdItems.current = [];
    const data = {
      url: endpoints.deleteDisciplines,
      values,
      setValues,
      listId: current,
    };
    dispatch(deleteDisciplinesFetchData(data));
  };
  return (
    <Box mt={2} sx={styles.container}>
      <Typography style={styles.title}>
        {!values.getGroups ? "Дисципліни" : "Групи"}
      </Typography>
      <IconButton
        edge="end"
        aria-label="delete"
        style={styles.deleteIcon}
        onClick={deleteItems}
      >
        {values.showIconDeleteItems && <DeleteIcon />}
      </IconButton>
      <List>
        {itemsList.map((item) => (
          <Item
            item={item}
            showNavigation={() => showNavigation(item.name, item.id)}
            getListIdItems={getListIdItems}
            key={item.id}
          />
        ))}
      </List>
      <Box sx={{ position: "fixed", top: "150px" }}>
        <a.div style={animationFormDiscipline}>
          <FormDiscipline />
        </a.div>
      </Box>
    </Box>
  );
};
export default ListItems;
