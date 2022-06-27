/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
import React,{lazy, Suspense} from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// eslint-disable-next-line import/no-unresolved
import Navbar from './layouts/navbar/Navbar';
// eslint-disable-next-line import/no-unresolved
import Loading from './components/loading/Loading';


// eslint-disable-next-line import/no-unresolved
const Store  = lazy(() => import("./pages/store/Store"));
// eslint-disable-next-line import/no-unresolved
const Articles = lazy(() => import("./pages/articles/Articles"));
// eslint-disable-next-line import/no-unresolved
const Article = lazy(() => import("./pages/article/Article"));
// eslint-disable-next-line import/no-unresolved
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

export default function AppRouter() {
  return (
    <div>
        <Navbar />
         <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<Store />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/articles/:id" element={<Article />} />
                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<Navigate to="/404" />} />
              </Routes>
        </Suspense>
    </div>
  );
}
