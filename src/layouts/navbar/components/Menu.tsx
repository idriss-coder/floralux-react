/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
import React from "react";
import {MenuOutlined} from "@mui/icons-material";
// eslint-disable-next-line import/no-unresolved
import BoxIcon from "../../../components/boxIcon/BoxIcon";
import "./Menu.scss";

export function MainMenu() {
  return <div className="mainMenu">
      <div className="mainMenuBody">
        <div className="mainMenuHead">
            User informations here
        </div>
        <div className="mainMenuContent">
          <ul>
            <li>Home</li>
            <li>Articles</li>
            <li>Favoris</li>
          </ul>
        </div>
      </div>
  </div>
}

function Menu() {
  const handleToggleMenu = () => {}
  return <div className="menu">
    <div className="menu-btn">
        <BoxIcon handleClick={()=>handleToggleMenu} color="transparent" contentColor="#1d2424">
          <MenuOutlined />
        </BoxIcon>
    </div>
    <div className="menu-container">
      <MainMenu/>
    </div>
  </div>
}

export default Menu
