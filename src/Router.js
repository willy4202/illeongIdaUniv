import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Abouts from "./Pages/Abouts/Abouts";
import ContestDetail from "./Pages/ContestDetail/ContestDetail";
import Main from "./Pages/Main/Main";
import SingDetail from "./Pages/SingDetail/SingDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contest" element={<ContestDetail />} />
        <Route path="/sing" element={<SingDetail />} />
        <Route path="/abouts" element={<Abouts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
