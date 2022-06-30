import React from "react";
import styled from "styled-components";
import ilimg from "Images/MainImage/il_logo.png";

const Footer = () => {
  return (
    <Container>
      <Wrap>
        <Img src={ilimg} />
        <Copy>
          copyright 새롭게 일렁이다 All pictures cannot be copied witout
          permission
        </Copy>
        <Logo>dd</Logo>
      </Wrap>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  background-color: black;
`;

const Wrap = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  background-color: green;
  justify-content: space-between;
`;

const Img = styled.img`
  height: 70px;
`;

const Copy = styled.div`
  color: white;
  background-color: pink;
  height: 70px;
`;

const Logo = styled.div`
  color: pink;
  background-color: blue;
  justify-content: flex-end;
`;
