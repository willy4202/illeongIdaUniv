import Nav from "Components/Nav";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollTop from "ScrollTop";
import Abouts from "./Pages/Abouts/Abouts";
import ContestDetail from "./Pages/ContestDetail/ContestDetail";
import Main from "./Pages/Main/Main";
import SingDetail from "./Pages/SingDetail/SingDetail";
import GlobalStyles from "./Styles/GlobalStyles";

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <ScrollTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/1" element={<ContestDetail />} />
        <Route path="/2" element={<SingDetail />} />
        <Route path="/abouts" element={<Abouts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
