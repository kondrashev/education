import React, { useContext, useEffect, useRef, useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Checkbox from "@mui/material/Checkbox";
import FolderIcon from "@mui/icons-material/Folder";
import CreateIcon from "@mui/icons-material/Create";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { ApplictationContext } from "../../App";
import endpoints from "../constants/Endpoints";
import { useDispatch } from "react-redux";
import { updateDisciplineFetchData } from "../../store/disciplines/action_edit";

const styles = {
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
const Item = (props) => {
  const refInput = useRef("");
  const dispatch = useDispatch();
  const [showInputEditItem, setShowInputEditItem] = useState(false);
  const { values, setValues } = useContext(ApplictationContext);
  const { item, showNavigation, getListIdItems } = props;
  const editNameItem = (event) => {
    setValues({ ...values, nameDiscipline: event.target.value });
  };
  const editItem = () => {
    setShowInputEditItem(!showInputEditItem);
  };
  const nameEditItem = (id, event) => {
    if (event.key === "Enter") {
      const data = {
        url: endpoints.updateDiscipline,
        values,
        setValues,
        id,
        setShowInputEditItem,
      };
      dispatch(updateDisciplineFetchData(data));
    }
  };
  useEffect(() => {
    showInputEditItem && refInput.current.focus();
  }, [showInputEditItem]);
  return (
    <Box sx={styles.listItem}>
      <Checkbox value={item.id} onChange={getListIdItems} />
      <IconButton style={styles.iconEdit} onClick={editItem}>
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
      <ListItem style={styles.listItemText}>
        {showInputEditItem && (
          <input
            ref={refInput}
            value={values.nameDiscipline}
            onChange={editNameItem}
            onKeyPress={(event) => nameEditItem(item.id, event)}
          />
        )}
      </ListItem>
    </Box>
  );
};
export default Item;
