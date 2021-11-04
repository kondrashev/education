import React, { useRef } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const Input = styled("input")({
  display: "none",
});

export default function UploadInformation() {
  const uploadFile = async (formData) => {
    try {
      const response = await fetch("/discipline/reload", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      console.log("Success:", JSON.stringify(result));
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const pathCSV = useRef("");
  const getFile = () => {
    const formData = new FormData();
    formData.append("discipline", "ТКМ");
    formData.append("group", "ІМЗ-12ПМ");
    formData.append("csvFile", pathCSV.current.files[0]);
    uploadFile(formData);
  };
  return (
    <label htmlFor="contained-button-file">
      <Input
        accept="csv/*"
        id="contained-button-file"
        ref={pathCSV}
        multiple
        type="file"
        onChange={getFile}
      />
      <Button variant="contained" component="span">
        Upload
      </Button>
    </label>
  );
}
