/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
import React from "react";
// eslint-disable-next-line import/no-unresolved
import Cards from "../Cards/Cards";
// eslint-disable-next-line import/no-unresolved
import Categorys from "../../pages/store/components/categorys/Categorys";
// eslint-disable-next-line import/no-unresolved
import articlesData, { ctgData } from "../../mooks/articlesData";

function CtgCards() {

  return <div>
    <Categorys data={ctgData} />
    <Cards nodesc data={articlesData}/>
  </div>;
}

export default CtgCards;
