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
import { makeStyles } from "@mui/styles";
import CreateIcon from "@mui/icons-material/Create";

const useStyles = makeStyles({
  listItem: {
    cursor: "pointer",
  },
  listItemDiv: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
const ListDisciplines = () => {
  const classes = useStyles();
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
    <div>
      <Typography>Список дисциплін</Typography>
      <IconButton edge="end" aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <List className={classes.listItem}>
        {listDisciplines.map((item) => (
          <div className={classes.listItemDiv}>
            <Checkbox />
            <IconButton>
              <CreateIcon />
            </IconButton>
            <ListItem key={item.id} onClick={() => showNavigation(item.name)}>
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
