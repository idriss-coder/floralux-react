/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
import React from "react";
import { Link } from 'react-router-dom';

function User() {
  const floraluxDesign = {
    fontSize: "20px",
    fontWeight: "600",
  }

  return <div style={floraluxDesign}>
    <Link to="/articles" className="link">Articles</Link>
  </div>;
}

export default User;
