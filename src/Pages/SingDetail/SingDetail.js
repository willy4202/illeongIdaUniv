import React from "react";
import styled from "styled-components";
import Albums from "Pages/SingDetail/Albums";
import Header from "Pages/SingDetail/Header";
import Participant from "Pages/SingDetail/Participant";
import Winner from "Pages/SingDetail/Winner";

const SingDetail = () => {
  return (
    <Container>
      <Wrapper>
        <Header />
        <Participant />
        <Albums />
        <Winner />
      </Wrapper>
    </Container>
  );
};

export default SingDetail;

const Container = styled.div`
  width: 100%;
  background-color: black;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 200px;
  color: white;
`;
