import React, { useState, createContext } from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers";
import thunk from "redux-thunk";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import AuthorizationForm from "./components/AuthorizationForm";
import { makeStyles } from "@mui/styles";
import { context } from "./components/Context";
import Teacher from "./components/Teacher";
import Student from "./components/Student";

const useStyles = makeStyles({
  globalStyle: {
    margin: "0px",
    padding: "0px",
    position: "relative",
  },
});
const store = createStore(rootReducer, applyMiddleware(thunk));
export const ApplictationContext = createContext();

const App = () => {
  const classes = useStyles();
  const [values, setValues] = useState(context);
  return (
    <Provider store={store}>
      <ApplictationContext.Provider
        value={{
          values: values,
          setValues: setValues,
        }}
      >
        <div className={classes.globalStyle}>
          <Switch>
            <Route exact path="/" component={AuthorizationForm} />
            <Route path="/teacher" component={Teacher} />
            <Route path="/student" component={Student} />
          </Switch>
        </div>
      </ApplictationContext.Provider>
    </Provider>
  );
};
ReactDOM.render(<App />, document.querySelector("#app"));
