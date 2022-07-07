/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */

import React from "react";
import "./Categorys.scss"
import Box from "../../../../components/box/Box";
import Display from "../../../../components/display/Display";
import Category from './components/category/Category';
import { CategorysProps } from "../../../../interfaces/componentsProps";
import { ctgProps } from "../../../../interfaces/dataProps";

function Categorys({data}:CategorysProps):JSX.Element {
  return (
    <Box mt={60} mb={-50}>
      <Display title="Categories" link="/articles">
        {data.map((ctg:ctgProps) => (
          <Category key={ctg.id} title={ctg.title} img={ctg.image} link={ctg.slug} active = {ctg.id === 1}  />
        ))}
      </Display>
    </Box>
  );
}

export default Categorys;
