/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React,{useEffect, useState} from "react";
import axios from "axios"
import Page from "../../components/page/Page";
import Welcome from './components/welcome/Welcome';
import Search from './components/search/Search';
import Box from "../../components/box/Box";
import Banner from './components/Banner/Banner';
import Cards from "../../components/Cards/Cards";
import CtgCards from "../../components/ctgCards/CtgCards";
// import articlesData from "../../mooks/articlesData";
import env from "../../constants/env";

export default function Store() {
  const [articles, setArticles] = useState([])
  useEffect(()=>{
    axios.get(`${env.apiUlr}articles`)
    .then(res=>setArticles(res.data.articles))
  },[])
  return (
    <Page title="App de vente en ligne">
      <Box mt={30}>
        <Welcome />
      </Box> 
      <Box mt={30} mb={20}>
        <Search />
      </Box>  
      <Box mb={20}>
        <Banner />
      </Box>
      <CtgCards /> 
      <Cards title="Articles recents" data={articles} link="/articles" />
    </Page>
  );
}
