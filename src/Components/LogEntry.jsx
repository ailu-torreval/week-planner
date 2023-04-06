import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import IconButton from "@mui/material/IconButton";

function LogEntry(props) {
  return (
    <>
      <p>{props.entry}</p>

      <IconButton color="secondary" aria-label="upload picture" component="label">
        <DeleteOutlineIcon />
      </IconButton>
    </>
  );
}

export default LogEntry;
