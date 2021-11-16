import React, { useContext, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import { ApplictationContext } from "../../App";
import { useDispatch, useSelector } from "react-redux";
import { loadDisciplinesFetchData } from "../../store/disciplines/action_get";
import { deleteDisciplineFetchData } from "../../store/disciplines/action_delete";
import endpoints from "../constants/Endpoints";
import CreateIcon from "@mui/icons-material/Create";
import FormDiscipline from "./FormDiscipline";
import { useSpring, animated as a } from "react-spring";

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
  iconEdit: { marginLeft: "10px" },
  listItemText: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "50px",
  },
};
const ListDisciplines = () => {
  const { values, setValues } = useContext(ApplictationContext);
  const dispatch = useDispatch();
  const getDisciplines = (data) => dispatch(loadDisciplinesFetchData(data));
  const listDisciplines = useSelector((state) => state.disciplineReducer);
  useEffect(() => {
    const data = {
      url: endpoints.getDiscipline,
      values,
      setValues,
    };
    getDisciplines(data);
  }, [values.updateDiscipline]);
  const showNavigation = (name) => {
    setValues({
      ...values,
      shwoNavigationItemDiscipline: true,
      valueNavigationItemDiscipline: name,
    });
  };
  const animationFormDiscipline = useSpring({
    marginLeft: values.showFormDiscipline ? -727 : -1127,
    config: { duration: 1000 },
  });
  const listIdDisciplines = useRef([]);
  const getListIdDisciplines = (event) => {
    if (event.target.checked) {
      listIdDisciplines.current = [
        ...listIdDisciplines.current,
        parseInt(event.target.value),
      ];
    } else {
      listIdDisciplines.current = listIdDisciplines.current.filter(
        (item) => item !== parseInt(event.target.value)
      );
    }
    setValues({
      ...values,
      showIconDeleteDiscipline: Boolean(listIdDisciplines.current.length),
    });
  };
  const deleteDiscipline = () => {
    const { current } = listIdDisciplines;
    const data = {
      url: endpoints.deleteDiscipline,
      values,
      setValues,
      listId: current,
    };
    listIdDisciplines.current = [];
    dispatch(deleteDisciplineFetchData(data));
  };
  return (
    <Box mt={2} sx={styles.container}>
      <Typography style={styles.title}>Список дисциплін</Typography>
      <IconButton
        edge="end"
        aria-label="delete"
        style={styles.deleteIcon}
        onClick={deleteDiscipline}
      >
        {values.showIconDeleteDiscipline && <DeleteIcon />}
      </IconButton>
      <List>
        {listDisciplines.map((item) => (
          <div style={styles.listItem} key={item.id}>
            <Checkbox value={item.id} onChange={getListIdDisciplines} />
            <IconButton style={styles.iconEdit}>
              <CreateIcon />
            </IconButton>
            <ListItem
              style={styles.listItemText}
              onClick={() => showNavigation(item.name)}
            >
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={item.name} />
            </ListItem>
          </div>
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
export default ListDisciplines;