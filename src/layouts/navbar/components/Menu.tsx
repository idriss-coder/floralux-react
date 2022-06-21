/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
import React from "react";
import {MenuOutlined} from "@mui/icons-material";
// eslint-disable-next-line import/no-unresolved
import BoxIcon from "../../../components/boxIcon/BoxIcon";

function Menu() {
  const handleToggleMenu = () => {}
  return <BoxIcon handleClick={()=>handleToggleMenu} color="transparent" contentColor="#1d2424">
    <MenuOutlined />
  </BoxIcon>
}

export default Menu;
