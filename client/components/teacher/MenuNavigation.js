import React, { useContext } from "react";
import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import { makeStyles } from "@mui/styles";
import { ApplictationContext } from "../../App";

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
    cursor: "pointer",
  };
});
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
const useStyles = makeStyles({
  navigation: {
    marginTop: "80px",
    marginLeft: "50px",
    width: "800px",
  },
  styledBreadcrumbItem: {
    cursor: "pointer",
  },
});
export default function MenuNavigation() {
  const classes = useStyles();
  const { values, setValues } = useContext(ApplictationContext);
  return (
    <div
      role="presentation"
      onClick={handleClick}
      className={classes.navigation}
    >
      <Breadcrumbs aria-label="breadcrumb">
        <StyledBreadcrumb
          label="Курси"
          icon={<HomeIcon fontSize="small" />}
          onClick={() => {
            setValues({ ...values, shwoNavigationItemDiscipline: false });
          }}
        />
        {values.shwoNavigationItemDiscipline && (
          <StyledBreadcrumb label={values.valueNavigationItemDiscipline} />
        )}
        {/* <StyledBreadcrumb label="МЛ-61" /> */}
        {/* <StyledBreadcrumb label="Іванов" /> */}
      </Breadcrumbs>
    </div>
  );
}
