import React from "react";
import styled from "styled-components";
import Support from "Pages/Main/Support";
import sing_logo from "Images/MainImage/winnerimg2.png";

const Winner = () => {
  return (
    <Container>
<<<<<<< HEAD
      <Winnerfirst>
        <Winnerimg src={sing_logo} />
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
=======
      <Wrap>
        <Winnerimg src={sing_logo} />
        <Youtube>
          <iframe
            width="1320"
            height="741"
            src="https://www.youtube.com/embed/SVxiqGiLMCM?start=78"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </Youtube>
        <Support />
      </Wrap>
>>>>>>> master
    </Container>
  );
};

export default Winner;

const Container = styled.div`
  position: relative;
  @media screen and (max-width: 500px) {
<<<<<<< HEAD
    width: 320px;
  
`;

const Winnerfirst = styled.div`
  width: 70vw;
  margin:100px auto;

  @media screen and (max-width: 500px) {
    width: 70vw;
    height: 150px;
    margin:100px auto;
`;

const Winnerimg = styled.img`
  paddign: 10px;
  width: 70vw;
  
  @media screen and (max-width: 500px) {

=======
    padding: 200px 0;
`;

const Wrap = styled.div`
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

const Winnerimg = styled.img`
  padding-bottom: 20%;
  @media screen and (max-width: 500px) {
    width: 140px;
    height: 140px;
>>>>>>> master
`;

const Youtube = styled.div`
  position: relative;
  padding-bottom: 10%;
<<<<<<< HEAD

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
=======
  @media screen and (max-width: 500px) {
    height: 40px;
  }
>>>>>>> master
`;
