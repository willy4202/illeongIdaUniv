import React from "react";
import styled from "styled-components";
import Support from "Pages/Main/Support";
import winner_img from "Images/MainImage/winnerimg2.png";

const Winner = () => {
  return (
    <Container>
      {/* <<<<<<< HEAD */}
      <Winnerfirst>
        <Winnerimg src={winner_img} />
      </Winnerfirst>
      <Youtube>
        <Video
          width="1320"
          height="741"
          src="https://www.youtube.com/embed/SVxiqGiLMCM?start=78"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </Youtube>
      <Supportwrrap>
        <Support />
      </Supportwrrap>
    </Container>
  );
};

export default Winner;

const Container = styled.div`
  position: relative;
  @media screen and (max-width: 500px) {
    width: 320px;
  
`;

const Winnerfirst = styled.div`
  width: 1120px;
  margin:100px auto;

  @media screen and (max-width: 500px) {
    width: 70vw;
    height: 150px;
    margin:100px auto;
`;

const Winnerimg = styled.img`
  width: 1120px;
  marign: 0 auto;
  @media screen and (max-width: 500px) {

`;

const Youtube = styled.div`
  position: relative;
  padding-bottom: 10%;

  @media screen and (max-width: 500px) {
    width: 320px;
    height:300px;
    margin-top:100px;
 

`;

const Video = styled.iframe`
@media screen and (max-width: 500px) {
width: 320px;
height:300px;
`;

const Supportwrrap = styled.div`
  margin-bottom: 200px;
`;
