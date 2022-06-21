/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import "./Typo.css"

export function Title1({children}:any, props:any) {
  return <h1 className="title1" {...props}>{children}</h1>;
}

export function Title2({children}:any, props:any) {
  return <h2 className="title2" {...props}>{children}</h2>;
}


export function Title3({children}:any, props:any) {
  return <h3 className="title3" {...props}>{children}</h3>;
}


export function SubTitle({children}:any, props:any) {
  return <h4 className="subtitle" {...props}>{children}</h4>;
}

export function Text({children}:any, props:any) {
  return <p className="text" {...props}>{children}</p>;
}


