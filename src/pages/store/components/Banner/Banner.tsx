/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from "react";
import {Typography} from "@mui/material";
import Container from "../../../../components/container/Container";
import "./Banner.scss"
import fleur from "../../../../assets/illustration/bouquet-illus.png"
import Box from "../../../../components/box/Box";


function Banner() {
  return <div className="banner">
    <Container>
        <div className="banner-content">
            <Typography variant="h4" color="white">Today special offer</Typography>
            <Typography variant="h4" color="white">Up to 30%</Typography>
            <Box mt={10}>
                <Typography variant="subtitle1" color="white">From Bam to 4pm</Typography>
            </Box>
            <img src={fleur} alt="ilustration fleur" className="banner-img" />
        </div>
    </Container>
  </div>
}

export default Banner;
