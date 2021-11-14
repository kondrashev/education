import React, { useContext, useRef } from "react";
import Box from "@mui/material/Box";
import { ApplictationContext } from "../../App";

const styles = {
  container: {
    width: "400px",
    height: "300px",
    background: "#F1F3F4",
    borderRadius: "10px",
  },
  buttonClose: {
    width: "30px",
    height: "30px",
    alignSelf: "flex-end",
    border: "none",
    backgroundColor: "initial",
    cursor: "pointer",
  },
};
const FormDiscipline = () => {
  const { values, setValues } = useContext(ApplictationContext);
  const hover = useRef("");
  const hoverOn = () => {
    hover.current.style.borderRadius = "50%";
    hover.current.style.backgroundColor = "grey";
  };
  const hoverOff = () => {
    hover.current.style.borderRadius = "inherit";
    hover.current.style.backgroundColor = "inherit";
  };
  return (
    <Box mt={1} ml={1} sx={styles.container}>
      <Box ml={46}>
        <button
          ref={hover}
          style={styles.buttonClose}
          onClick={() => setValues({ ...values, showFormDiscipline: false })}
          onMouseOver={hoverOn}
          onMouseOut={hoverOff}
        >
          <svg width="12" height="12" viewBox="0 0 12 12">
            <path
              d="M6 4.36L10.02.34a1.16 1.16 0 0 1 1.64 1.64L7.64 6l4.02 4.02a1.16 1.16 0 0 1-1.64 1.64L6 7.64l-4.02 4.02a1.16 1.16 0 0 1-1.64-1.64L4.36 6 .34 1.98A1.16 1.16 0 1 1 1.98.34L6 4.36z"
              fill="black"
            ></path>
          </svg>
        </button>
      </Box>
    </Box>
  );
};
export default FormDiscipline;
