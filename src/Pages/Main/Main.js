import React, { useEffect } from "react";
import styled from "styled-components";
import MainText from "Pages/Main/MainText/";
import AOS from "aos";
import "aos/dist/aos.css";
import OurProject from "./OurProject/OurProject";
import MainVideo from "./MainVideo";

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
      </Wrapper>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  width: 100vw;
  position: relative;
`;

const Wrapper = styled.div`
  width: 100vw;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
`;
