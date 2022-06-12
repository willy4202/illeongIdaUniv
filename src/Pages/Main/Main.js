import React from "react";
import styled from "styled-components";
import mainBack from "Images/MainVideo/mainBack.mp4";

const Main = () => {
  return (
    <Container>
      <VideoHeader>
        <video controls>
          <source src={mainBack}></source>
        </video>
      </VideoHeader>
      <Body>Mafdsfin</Body>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  width: 100vw;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VideoHeader = styled.div`
  width: 100%;
`;

const Body = styled.div`
  width: 1180px;
  background-color: yellow;
`;
