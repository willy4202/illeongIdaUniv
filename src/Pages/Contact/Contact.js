import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Container>
      <Wrap>
        <Text>CONTACT US</Text>
      </Wrap>
      <ContactWrap>
        <TxtBox>
          <ContactTxt>
            CEO
            <hr />
            광고문의
            <hr />
            협업 문의
            <hr />
            방송 문의
            <hr />
          </ContactTxt>
        </TxtBox>
        <Person>
          조현찬
          <hr />
          010.4325.5105
          <hr />
          010.3471.1604
          <hr />
          010.4736.9139
          <hr />
        </Person>
      </ContactWrap>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  background-color: black;
  height: 80vw;
`;

const Text = styled.h1`
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

const ContactWrap = styled.div`
  display: flex;
  text-align: center;
  position: absolute;
  left: 33%;
  top: 40%;
`;

const TxtBox = styled.div`
  background-color: #797979;
  width: 280px;
  height: 200px;
  border-radius: 10px;
`;

const Person = styled.div`
  font-size: ${({ theme }) => theme.fontRegular};
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 130%;
  position: relative;
  left: 40px;
`;

const ContactTxt = styled.div`
  font-size: ${({ theme }) => theme.fontRegular};
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  line-height: 105%;
  white-space: pre-line;
`;
