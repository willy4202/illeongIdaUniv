import React, { useEffect } from "react";
import styled from "styled-components";
import MainText from "Pages/Main/MainText/";
import AOS from "aos";
import "aos/dist/aos.css";
import OurProject from "./OurProject/OurProject";
import MainVideo from "./MainVideo";
import Support from "./Support";

const Main = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <Container>
      <MainVideo />
      <Wrapper>
        <MainText />
        <OurProject />
        <Support />
      </Wrapper>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  width: 100%;
  position: relative;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 0 20px 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
`;
