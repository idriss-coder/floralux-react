/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
import React from "react";
import {Typography} from "@mui/material";
import { Link } from 'react-router-dom';
import { DisplayProps } from "../../interfaces/componentsProps";
import Container from "../container/Container";
import "./Display.scss"

function Display({title, link, children}:DisplayProps): JSX.Element {
  return <Container>
        <div className="display">
            <div className="display-head">
                <div className="title">
                    <Typography variant="h5">{title}</Typography>
                </div>
                <div className="link">
                    <Link to={link}>Tout aficher</Link>
                </div>
            </div>        
            <div className="categorys-content">
                {children}
            </div>
        </div>
    </Container>
}

export default Display;
