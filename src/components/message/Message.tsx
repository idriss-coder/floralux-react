/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
import React from "react";
// eslint-disable-next-line import/no-unresolved
import { Title1, SubTitle } from "../typo/Typo";

function Message({title, subtitle}:any, props:any) {
  return (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <div className="message" {...props}>
    <Title1>{title}</Title1>
    <SubTitle>{subtitle}</SubTitle>
  </div>
  );
}

export default Message;
