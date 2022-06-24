import React from "react";
import styled from "styled-components";
import ilimg from "Images/MainImage/logo.png";
import singlogo from "Images/MainImage/sing_logo.png";

const Contact = () => {
  return (
    <Container>
      <Wrap>
        <Image src={ilimg} />
        <Singimg src={singlogo} />
      </Wrap>
      <Box>
        <h1>협의문의 조현찬</h1>
      </Box>
    </Container>
  );
};

export default Contact;

const Wrap = styled.div`
  width: 100vw;
  display: flex;
  margin-top: 100px;
  justify-content: center;
  background-color: #2e2e2e;
`;

const Image = styled.img`
  width: 200px;
`;

const Singimg = styled.img``;

const Box = styled.div``;

const Container = styled.div`
  width: 100vw;
  position: relative;
`;
