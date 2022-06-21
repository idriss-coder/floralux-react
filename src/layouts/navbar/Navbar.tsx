/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
import React from "react";
import "./Navbar.scss"
// eslint-disable-next-line import/no-unresolved
import Menu from './components/Menu';
// eslint-disable-next-line import/no-unresolved
import User from './components/User';
// eslint-disable-next-line import/no-unresolved
import Cart from './components/Cart';

export default function Navbar() {
  return (
        <nav className="navbar">
          <Menu />
          <User />
          <Cart />
        </nav>
  );
}
