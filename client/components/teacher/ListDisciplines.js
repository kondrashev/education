import React, { useContext, useEffect } from "react";
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
import endpoints from "../constants/Endpoints";
import CreateIcon from "@mui/icons-material/Create";

const styles = {
  container: {
    marginTop: "10px",
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
  }, []);
  const showNavigation = (name) => {
    setValues({
      ...values,
      shwoNavigationItemDiscipline: true,
      valueNavigationItemDiscipline: name,
    });
  };
  return (
    <div style={styles.container}>
      <Typography style={styles.title}>Список дисциплін</Typography>
      <IconButton edge="end" aria-label="delete" style={styles.deleteIcon}>
        <DeleteIcon />
      </IconButton>
      <List>
        {listDisciplines.map((item) => (
          <div style={styles.listItem}>
            <Checkbox />
            <IconButton style={styles.iconEdit}>
              <CreateIcon />
            </IconButton>
            <ListItem
              style={styles.listItemText}
              key={item.id}
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
    </div>
  );
};
export default ListDisciplines;
