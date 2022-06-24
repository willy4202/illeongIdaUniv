import React from "react";
import mainBack from "Images/MainVideo/mainBack.mp4";
import styled from "styled-components";

const MainVideo = () => {
  return (
    <>
      <VideoHeader>
        <Video autoPlay muted loop>
          <source src={mainBack} />
        </Video>
      </VideoHeader>
      <ScrollDiv />
    </>
  );
};

export default MainVideo;

const VideoHeader = styled.div`
  position: fixed;
  top: 0;
  z-index: -1;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const Video = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const ScrollDiv = styled.div`
  width: 100%;
  height: 100%;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
