import React from "react";
import styled from "styled-components";
import ilimg from "Images/MainImage/logo.png";
import singlogo from "Images/MainImage/sing_logo.png";
import group_img from "Images/MainImage/contact.png";

const Contact = () => {
  return (
    <Container>
      <Wrap>
        <Text>CONTACT US</Text>
        <Box>
          <Groupimg src={group_img}></Groupimg>
        </Box>
      </Wrap>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  background-color: black;
  height: 80vw;
`;

const Text = styled.h1`
  position: absloute;
  color: white;
  display: flex;
  font-weight: ${({ theme }) => theme.weightRegular};
  font-size: 50px;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  color: white;
`;

const Groupimg = styled.img`
  margin-top: 150px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
`;

const Ceo = styled.div``;
