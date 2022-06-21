/* eslint-disable import/extensions */
import React from "react";
// eslint-disable-next-line import/extensions
// eslint-disable-next-line import/no-unresolved
import { BrowserRouter } from "react-router-dom";
// eslint-disable-next-line import/no-unresolved
import AppRouter from "./Router";
import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
