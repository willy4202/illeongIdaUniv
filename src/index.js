import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalStyles from "Styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "Styles/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </>
);
