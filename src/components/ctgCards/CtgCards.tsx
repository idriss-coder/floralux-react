/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
import React from "react";
// eslint-disable-next-line import/no-unresolved
import Cards from "../Cards/Cards";
// eslint-disable-next-line import/no-unresolved
import Categorys from "../../pages/store/components/categorys/Categorys";

function CtgCards() {

  return <div>
    <Categorys />
    <Cards nodesc/>
  </div>;
}

export default CtgCards;
