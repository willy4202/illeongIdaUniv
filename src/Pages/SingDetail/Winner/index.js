import React from "react";
import styled from "styled-components";
import Support from "Pages/Main/Support";
import sing_logo from "Images/MainImage/winner_img.png";

const Winner = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default Winner;

const Container = styled.div`
  position: relative;
  @media screen and (max-width: 500px) {
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
`;

const Youtube = styled.div`
  position: relative;
  padding-bottom: 10%;
  @media screen and (max-width: 500px) {
    height: 40px;
  }
`;
