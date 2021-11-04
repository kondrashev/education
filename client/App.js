import React from "react";
import ReactDOM from "react-dom";
import UploadInformation from "./components/UploadInformation";

const App = () => {
  return (
    <div>
      <UploadInformation />
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#app"));
