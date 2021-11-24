import React, { useContext } from "react";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Logout from "@mui/icons-material/Logout";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { ApplictationContext } from "../../App";

export default function OpenMenu() {
  const { values, setValues } = useContext(ApplictationContext);
  const handleClick = (event) => {
    setValues({
      ...values,
      openMenu: !values.openMenu ? event.currentTarget : false,
    });
  };
  const openFormItem = () => {
    setValues({ ...values, openMenu: false, showFormItem: true });
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
      </Box>
      <Menu
        anchorEl={values.openMenu}
        open={values.openMenu}
        style={{ zIndex: 0 }}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 5,
              right: 111,
              width: 15,
              height: 15,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={openFormItem}>
          <ListItemIcon>
            <AddBusinessIcon fontSize="small" />
          </ListItemIcon>
          Додати дисципліну
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <AddBoxIcon fontSize="small" />
          </ListItemIcon>
          Додати групу
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Додати студента
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Завантажити інформацію
        </MenuItem>
      </Menu>
    </>
  );
}
