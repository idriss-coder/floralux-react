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
  children: JSX.Element | JSX.Element[];
  wrap?: Boolean;
  nodesc?: Boolean
}

export interface CategoryProps{
  title: string;
  img: string;
  link: LinkProps["to"];
  active?: Boolean
}

export interface CategorysProps{
  children: JSX.Element | JSX.Element[]
}

export interface CardProps{
  title: string;
  link: LinkProps["to"];
  ctg: string;
  image: string;
  simage?: string;
  price: Number
}

export interface CardsProps{
  nodesc?: Boolean;
}