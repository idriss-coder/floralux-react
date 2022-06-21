/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */

import { MouseEventHandler } from "react";

export interface BoxIconProps {
  children: JSX.Element,
  handleClick: MouseEventHandler<HTMLButtonElement>,
  color?: string,
  contentColor?: string,
  padding?: number,
}

export interface ContainerProps {
  children: JSX.Element
}