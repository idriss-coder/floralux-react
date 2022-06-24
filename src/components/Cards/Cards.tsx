/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from "react";
import "./Cards.scss"
import Box from "../box/Box";
import Display from "../display/Display";
import Card from "../card/Card";
import demo from "../../assets/illustration/demo.webp"
import demo2 from "../../assets/illustration/demo-permut.webp"
import { CardsProps } from "../../interfaces/componentsProps";

function Cards({nodesc = false}:CardsProps) {
  return <Box mb={20} mt={40}>
    <Display title="Articles recents" link="/" nodesc={nodesc}>
        <Card title="1" image={demo} simage={demo2} link="/fleur" ctg="fleur" price={2500} />
        <Card title="2" image={demo} simage={demo2} link="/fleur" ctg="fleur" price={25000} />
        <Card title="3" image={demo} simage={demo2} link="/fleur" ctg="fleur" price={2500} />
        <Card title="4" image={demo} simage={demo2} link="/fleur" ctg="fleur" price={2500} />        
        <Card title="5" image={demo} simage={demo2} link="/fleur" ctg="fleur" price={2500} />                        
        <Card title="6" image={demo} simage={demo2} link="/fleur" ctg="fleur" price={2500} />                        
        <Card title="7" image={demo} simage={demo2} link="/fleur" ctg="fleur" price={2500} />                        
        <Card title="9" image={demo} simage={demo2} link="/fleur" ctg="fleur" price={2500} />                        
        <Card title="10" image={demo} simage={demo2} link="/fleur" ctg="fleur" price={2500} />                        
        <Card title="11" image={demo} simage={demo2} link="/fleur" ctg="fleur" price={2500} />                        
        <Card title="12" image={demo} simage={demo2} link="/fleur" ctg="fleur" price={2500} />                        
        <Card title="13" image={demo} simage={demo2} link="/fleur" ctg="fleur" price={2500} />                        
    </Display>
  </Box>
}

export default Cards;
