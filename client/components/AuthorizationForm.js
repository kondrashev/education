import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { ApplictationContext } from "../App";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  formAuthorization: {
    width: "400px",
    height: "350px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    background: "#F1F3F4",
    borderRadius: "10px",
    position: "absolute",
    left: "50%",
    transform: "translate(-50%, 30%)",
  },
  fields: {
    width: "360px",
    height: "50px",
  },
});
const AuthorizationForm = () => {
  const history = useHistory();
  const classes = useStyles();
  const { values, setValues } = useContext(ApplictationContext);
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const redirect = () => {
    history.push("/teacher");
  };
  return (
    <div className={classes.formAuthorization}>
      <TextField
        id="outlined-search"
        label="Login"
        variant="outlined"
        className={classes.fields}
      />
      <FormControl>
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          className={classes.fields}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        disableElevation
        className={classes.fields}
        onClick={redirect}
      >
        Authorization
      </Button>
    </div>
  );
};
export default AuthorizationForm;
