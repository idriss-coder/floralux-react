/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from "react";
import "./Categorys.scss"
import Box from "../../../../components/box/Box";
import Display from "../../../../components/display/Display";
import Category from './components/category/Category';
import demoCtg from "../../../../assets/illustration/demo-ctg.jpg"

function Categorys() {
  return <Box mt={60} mb={-50}>
    <Display title="Categories" link="/">
        <Category title="Fleur" img={demoCtg} link="/fleur" active/>
        <Category title="Fleur" img={demoCtg} link="/fleur" />
        <Category title="Fleur" img={demoCtg} link="/fleur" />
        <Category title="Fleur" img={demoCtg} link="/fleur" />
        <Category title="Fleur" img={demoCtg} link="/fleur" />
        <Category title="Fleur" img={demoCtg} link="/fleur" />
    </Display>
  </Box>
}

export default Categorys;
