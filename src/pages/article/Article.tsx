/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from "react";
import Page from "../../components/page/Page";
import Upload from "../../components/upload/Upload";

export default function Article() {
  return (
    <Page title="Article title">
        <h1>Details sur votre article</h1>
        <Upload />
    </Page>
  );
}
