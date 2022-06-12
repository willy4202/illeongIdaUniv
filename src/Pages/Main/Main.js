import React from "react";
import styled from "styled-components";
import mainBack from "Images/MainVideo/mainBack.mp4";

const Main = () => {
  return (
    <Container>
      <VideoHeader>
        <Video autoPlay loop>
          <source src={mainBack} />
        </Video>
      </VideoHeader>
      <Wrapper>
        <Body>여긴 본문</Body>
      </Wrapper>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  width: 100vw;
  height: 200vh;
  position: relative;
  background-color: black;
`;

const VideoHeader = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: -10;
`;

const Video = styled.video`
  width: 100vw;
`;

const Wrapper = styled.div`
  width: 100vw;
  margin-top: 1000px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Body = styled.div`
  width: 1180px;
  background-color: yellow;
`;
