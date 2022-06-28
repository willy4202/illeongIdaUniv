import React from "react";
import styled from "styled-components";
import Support from "Pages/Main/Support";
import sing_logo from "Images/MainImage/winner_img.png";

const Winner = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default Winner;

const Container = styled.div`
  position: relative;
`;

const Winnerimg = styled.img`
  padding-bottom: 20%;
`;

const Youtube = styled.div`
  position: relative;
  padding-bottom: 10%;
`;
