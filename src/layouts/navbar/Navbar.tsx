/* eslint-disable prettier/prettier */
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
        <nav>
          <ul>
            <li>
              Floralux
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/articles">Articles</Link>
            </li>
          </ul>
        </nav>
  );
}
