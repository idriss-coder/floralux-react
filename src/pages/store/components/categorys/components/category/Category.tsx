/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from "react";
import { Link } from "react-router-dom";
import { CategoryProps } from "../../../../../../interfaces/componentsProps";
import "./Category.scss"

// eslint-disable-next-line no-undef
function Category({link, title, img}:CategoryProps): JSX.Element {
  return <Link style={{textDecoration:"none", color:"#1d2424"}} to={link}>
    <div className="category">
        <div className="image">
            <img src={img} alt={title} />
        </div>
        <div className="title">{title}</div>
    </div>
  </Link>
}

export default Category;
