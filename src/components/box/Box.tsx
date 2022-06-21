/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
/* eslint-disable react/require-default-props */
/* eslint-disable no-undef */

import React from "react";

interface BoxProps{
    children: JSX.Element | JSX.Element[];
    mt?: Number;
    mb?: Number
}

function Box({children, mt = 0, mb = 0}: BoxProps): JSX.Element {
  return <div style={{marginTop:`${mt}px`, marginBottom:`${mb}px`}} > {children} </div>;
}

export default Box;
