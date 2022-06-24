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

  const size = {
    width: window.innerWidth || document.body.clientWidth,
    height: window.innerHeight || document.body.clientHeight,
  };

  let width = size.width;

  return (
    <Container>
      {width > 500 ? <MainVideo /> : null}
      <Wrapper width={width}>
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
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  width: 100%;
  margin-top: ${({ width }) => (width > 500 ? "100vh" : "0")};

  padding: 0 20px 300px;
`;
