/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from "react";
import "./Cards.scss"
import Box from "../box/Box";
import Display from "../display/Display";
import Card from "../card/Card";
import { CardsProps } from "../../interfaces/componentsProps";
import { articleProps } from "../../interfaces/dataProps";
// import CardSkeleton from "../skeleton/CardSkeleton";


function Cards({nodesc = false, wrap=false, data, title="", link="/"}:CardsProps) {
  return (
    <Box mb={20} mt={40}>
      <Display title={title} link={link} nodesc={nodesc} wrap={wrap}>
        {data &&
          data.map((article: articleProps) => (
            <Card
              key={article.id}
              title={article.title}
              image={article.image}
              simage={article.galery[0]}
              link={`/articles/${article.slug}`}
              ctg={article.ctg}
              price={article.price}
            />
          ))}
      </Display>
    </Box>
  );
}

export default Cards;
