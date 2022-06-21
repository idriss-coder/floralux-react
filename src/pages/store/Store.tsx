/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from "react";
import Page from "../../components/page/Page";
import Welcome from './components/welcome/Welcome';
import Search from './components/search/Search';
import Box from "../../components/box/Box";
import Banner from './components/Banner/Banner';

export default function Store() {
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
    </Page>
  );
}
