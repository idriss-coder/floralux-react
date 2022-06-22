/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
import React from "react";
import {Typography} from "@mui/material";
import { Link } from 'react-router-dom';
import { CardProps } from "../../interfaces/componentsProps";
import "./Card.scss"

function Card({title, link, ctg, image, price}:CardProps): JSX.Element {
  return <Link to={link}>
            <div className="card">
                <div className="image">
                    <img src={image} alt={title} />
                </div>
                <div className="content">
                    <div className="ctg">{ctg}</div>
                    <div className="title">{title}</div>
                    <div className="price">{price.toString()}</div>
                </div>
            </div>
        </Link>
}

export default Card;
