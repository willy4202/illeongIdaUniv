import React, { useEffect } from "react";
import styled from "styled-components";
import mainBack from "Images/MainVideo/mainBack.mp4";
import MainText from "Pages/Main/MainText/";
import AOS from "aos";
import "aos/dist/aos.css";

const Main = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <Container>
      <VideoHeader>
        <Video autoPlay muted loop>
          <source src={mainBack} />
        </Video>
      </VideoHeader>
      <ScrollDiv />
      <Wrapper>
        <MainText />
      </Wrapper>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  width: 100vw;
  position: relative;
`;

const VideoHeader = styled.div`
  position: fixed;
  top: 0;
  z-index: -1;
`;

const Video = styled.video`
  height: 100vh;
`;

const ScrollDiv = styled.div`
  width: 100%;
  height: 100vh;
`;

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
`;
