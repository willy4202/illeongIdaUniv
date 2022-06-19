import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Abouts from "./Pages/Abouts/Abouts";
import ContestDetail from "./Pages/ContestDetail/ContestDetail";
import Main from "./Pages/Main/Main";
import SingDetail from "./Pages/SingDetail/SingDetail";
import GlobalStyles from "./Styles/GlobalStyles";

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
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
