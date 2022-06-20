/* eslint-disable import/extensions */
import React from "react";
// eslint-disable-next-line import/extensions
// eslint-disable-next-line import/no-unresolved
import { BrowserRouter } from "react-router-dom";
// eslint-disable-next-line import/no-unresolved
import AppRouter from "./Router";

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
