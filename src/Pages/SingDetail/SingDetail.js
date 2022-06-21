import React from "react";
import styled from "styled-components";
import Albums from "./Albums";
import Header from "./Header";

const SingDetail = () => {
  return (
    <Container>
      <Wrapper>
        <Header />
        <Albums />
      </Wrapper>
    </Container>
  );
};

export default SingDetail;

const Container = styled.div`
  width: 100%;
  background-color: black;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 200px;
  color: white;
`;
