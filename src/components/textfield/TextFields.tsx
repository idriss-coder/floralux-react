/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
import React from "react";
import TextField from '@mui/material/TextField'

export default function TextFields({id, label, value, onChange}:any) {
  return (
    <div className="textfield">
      <div className="fIcon">icon</div>
      <div className="fiead">
        <TextField
          id={id}
          label={label}
          value={value}
          onChange={onChange}
          
        />
      </div>
      <div className="sIcon">icon</div>
    </div>
  );
}
