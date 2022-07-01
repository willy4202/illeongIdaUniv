import Nav from "Components/Nav";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollTop from "ScrollTop";
import Abouts from "./Pages/Abouts/Abouts";
import ContestDetail from "./Pages/ContestDetail/ContestDetail";
import Main from "./Pages/Main/Main";
import SingDetail from "./Pages/SingDetail/SingDetail";
import Contact from "./Pages/Contact/Contact";
import GlobalStyles from "./Styles/GlobalStyles";
import Footer from "Components/Footer";

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
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
