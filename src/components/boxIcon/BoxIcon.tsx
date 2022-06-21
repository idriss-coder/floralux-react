/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */
import React from "react";
import "./BoxIcon.scss";
import { BoxIconProps } from "../../interfaces/componentsProps";
import couleurs from "../../constants/couleur";

export default function BoxIcon({children, handleClick, padding=10, color=couleurs.primary, contentColor="#fff"}:BoxIconProps) : JSX.Element {
  return (
    <button className="icon" style={{background:color, padding:`${padding}px`, color: contentColor}} onClick={handleClick}>
        {children}
    </button>
  );
}
