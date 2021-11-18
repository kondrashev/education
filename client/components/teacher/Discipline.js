import React, { useContext, useEffect, useRef } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Checkbox from "@mui/material/Checkbox";
import FolderIcon from "@mui/icons-material/Folder";
import CreateIcon from "@mui/icons-material/Create";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

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
const Discipline = (props) => {
  const { item, showNavigation, getListIdDisciplines } = props;
  return (
    <Box sx={styles.listItem} key={item.id}>
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
      <ListItem style={styles.listItemText}>
        <input />
      </ListItem>
    </Box>
  );
};
export default Discipline;
