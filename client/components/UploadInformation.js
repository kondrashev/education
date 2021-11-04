import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const Input = styled("input")({
  display: "none",
});

export default function UploadInformation() {
  const getFile = async (event) => {
    const formData = new FormData();
    formData.append("discipline", "ТКМ");
    formData.append("group", "ІМЗ-12ПМ");
    formData.append("csvFile", event.target.files[0]);
    try {
      const response = await fetch("/discipline/reload", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      console.log("Success:", JSON.stringify(result));
      event.target.value = "";
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <label htmlFor="contained-button-file">
      <Input
        accept="csv/*"
        id="contained-button-file"
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
