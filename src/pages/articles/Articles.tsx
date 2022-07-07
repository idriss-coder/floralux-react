/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React,{useState, useEffect} from "react";
import axios from "axios"
import { Typography } from '@mui/material';
import Cards from "../../components/Cards/Cards";
import Page from "../../components/page/Page";
// import articlesData from "../../mooks/articlesData";
import env from "../../constants/env";
import Container from "../../components/container/Container";

export default function Articles() {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
      const url = `${env.apiUlr}articles`; 
      axios
        .get(url)
        .then((res) => {
          // eslint-disable-next-line no-console
          console.log(res.data.articles);
          // eslint-disable-next-line no-console
          console.log(url);
          setArticles(res.data.articles);
        });
    },[]);
  return (
    <Page title="Vos articles">
      <Container>
        <Typography variant="h4" component="h1">Articles</Typography>  
      </Container>  
      <Cards wrap nodesc data={articles}/>
    </Page>
  );
}
