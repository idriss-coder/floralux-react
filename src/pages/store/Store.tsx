/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from "react";
import Page from "../../components/page/Page";
import Welcome from './components/welcome/Welcome';
import Search from './components/search/Search';

export default function Store() {
  return (
    <Page title="App de vente en ligne">
      <Welcome />
      <Search />
    </Page>
  );
}
