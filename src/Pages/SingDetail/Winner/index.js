import React from "react";
import styled from "styled-components";
import YouTube from "react-youtube";
import Support from "Pages/Main/Support";

const Winner = () => {
  return (
    <Container>
      <Youtube>
        <iframe
          width="1320"
          height="741"
          src="https://www.youtube.com/embed/SVxiqGiLMCM?start=78"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Youtube>
      <Support />
    </Container>
  );
};

export default Winner;

const Container = styled.div`
  position: relative;
`;

const Singwinner = styled.div``;

const Youtube = styled.div`
  position: relative;
  padding-bottom: 10%;
`;
