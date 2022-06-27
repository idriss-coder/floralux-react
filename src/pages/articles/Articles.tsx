/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
import React,{} from "react";
// eslint-disable-next-line import/no-unresolved
import Cards from "../../components/Cards/Cards";
// eslint-disable-next-line import/no-unresolved
import Page from "../../components/page/Page";
// eslint-disable-next-line import/no-unresolved
import articlesData from "../../mooks/articlesData";

export default function Articles() {
  return (
    <Page title="Vos articles">
      <Cards wrap nodesc data={articlesData}/>
    </Page>
  );
}
