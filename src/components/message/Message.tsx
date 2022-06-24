/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
import { Typography } from "@mui/material";
import React from "react";

function Message({title, subtitle}:any, props:any) {
  return (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <div className="message" {...props}>
    <Typography variant="h3" component="h1">{title}</Typography>
    <Typography variant="subtitle1">{subtitle}</Typography>
  </div>
  );
}

export default Message;
