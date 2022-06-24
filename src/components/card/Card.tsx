/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
import React from "react";
import { Link } from 'react-router-dom';

import { CardProps } from "../../interfaces/componentsProps";
import "./Card.scss"
import AddWishList from "../addWishList/AddWithList";

function Card({title, link, ctg, image, simage="", price}:CardProps): JSX.Element {

    const imageStyle = {
        background: `url(${image}) no-repeat`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",

    }

    const imageStyle2 = {
        background: `url(${simage}) no-repeat`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",

    }

    const titleStyle = {
        color: "#1d2424",
        fontWeight: "500",
    }

  return <div className="card">
                <Link to={link}>
                    <div className="thumbnail">
                        <div className="image first" style={imageStyle} title={ctg} />
                        <div className="image second" style={imageStyle2} title={ctg} />
                        <div className="add">
                            <AddWishList />
                        </div>
                    </div>
                    <div className="content">
                        <div>
                            <div className="title" style={titleStyle}>
                                {title}
                            </div>
                        </div>
                        <div className="price">{price.toString()} FCFA</div>
                    </div>
                </Link>
            </div>
}

export default Card;
