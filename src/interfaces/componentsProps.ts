/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */

import { MouseEventHandler } from "react";
import { LinkProps } from "react-router-dom";

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

export interface DisplayProps{
  title: String;
  link: LinkProps["to"];
  children: JSX.Element | JSX.Element[]
}

export interface CategoryProps{
  title: string;
  img: string;
  link: LinkProps["to"]
}

export interface CategorysProps{
  children: JSX.Element | JSX.Element[]
}

export interface CardProps{
  title: string;
  link: LinkProps["to"];
  ctg: String;
  image: string;
  price: Number
}