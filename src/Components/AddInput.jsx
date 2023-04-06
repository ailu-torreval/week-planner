import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import IconButton from "@mui/material/IconButton";

function AddInput(props) {
  return (
    <div>
      <input type="text" placeholder={props.txt} />
      <IconButton
        color="secondary"
        aria-label="add item"
        component="label"
        onClick={props.action}
      >
        <AddCircleOutlineIcon />
      </IconButton>
    </div>
  );
}

export default AddInput;
