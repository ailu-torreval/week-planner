import React from 'react'
import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function Task(props) {
  return (
    <div>{props.item}
    <IconButton onClick={props.action} color="secondary" aria-label="upload picture" component="label">
    <DeleteOutlineIcon />
  </IconButton>
  </div>
  )
}

export default Task