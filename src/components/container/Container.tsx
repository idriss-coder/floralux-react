/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */

import React from "react";
import { ContainerProps } from "../../interfaces/componentsProps";
import "./Container.scss";

export default function Container({children}:ContainerProps):JSX.Element {
  return (
    <div className="container">
      {children}
    </div>
  );
}
