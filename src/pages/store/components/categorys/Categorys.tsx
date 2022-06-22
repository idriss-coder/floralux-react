/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from "react";
import "./Categorys.scss"
import Box from "../../../../components/box/Box";
import Display from "../../../../components/display/Display";
import Category from './components/category/Category';


function Categorys() {
  return <Box mb={20} mt={20}>
    <Display title="Categories" link="/">
        <Category title="Fleur" img="http://localhost:3000/static/media/bouquet-illus.815f5d9c3346985f457e.png" link="/fleur" />
        <Category title="Fleur" img="http://localhost:3000/static/media/bouquet-illus.815f5d9c3346985f457e.png" link="/fleur" />
        <Category title="Fleur" img="http://localhost:3000/static/media/bouquet-illus.815f5d9c3346985f457e.png" link="/fleur" />
        <Category title="Fleur" img="http://localhost:3000/static/media/bouquet-illus.815f5d9c3346985f457e.png" link="/fleur" />
    </Display>
  </Box>
}

export default Categorys;
