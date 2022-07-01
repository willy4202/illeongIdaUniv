import React from "react";
import styled from "styled-components";
import ilimg from "Images/MainImage/il_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container>
      <Wrap>
        <Link to="/">
          <Img src={ilimg} />
        </Link>
        <Copy>
          copyright 새롭게 일렁이다 All pictures cannot be copied witout
          permission
          <hr />
          <Copywrap>
            <Copytext1>대표 조현찬 | tel: 010.4915.1437</Copytext1>
            <Copytext2>Email illeongida.univ@gmail.com</Copytext2>
          </Copywrap>
        </Copy>
        <Logowrap>
          <Logo1>
            <Test href="https://www.youtube.com/channel/UC2mIXgIU1k_JYKGtduHQEeg">
              <FontAwesomeIcon icon={faYoutube} />
            </Test>
          </Logo1>
          <Logo2>
            <Test2 href="https://www.instagram.com/illeong_ida/">
              <FontAwesomeIcon icon={faInstagram} />
            </Test2>
          </Logo2>
        </Logowrap>
      </Wrap>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  background-color: black;
  padding-bottom: 30px;

  @media screen and (max-width: 500px) {
    width: 400px;
  }
`;

const Wrap = styled.div`
  display: flex;
  width: 60%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 500px) {
    width: 400px;
    display: block;
  }
`;

const Img = styled.img`
  height: 70px;
  &:hover {
    transform: scale(1.1, 1.1);
    transition-duration: 500ms;
    transition-timing-function: ease;
  }
`;

const Copy = styled.div`
  color: white;
  font-size: 14px;

  @media screen and (max-width: 500px) {
    font-size: 8px;
    padding: 10px;
  }
`;

const Copywrap = styled.div`
  display: flex;
`;

const Copytext1 = styled.div`
  color: white;
  padding-right: 20px;
`;

const Copytext2 = styled.div`
  color: white;
`;

const Logowrap = styled.div`
  width: 60px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 500px) {
    padding: 10px;
  }
`;

const Logo1 = styled.div`
  color: gray;
  nsition-duration: 500ms;
  transition-timing-function: ease;
  font-size: 20px;

  &:hover {
    transform: scale(1.1, 1.1);
    transition-duration: 500ms;
    transition-timing-function: ease;
    color: red;
  }

  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`;

const Test = styled.a`
  &:hover {
    transform: scale(1.1, 1.1);
    transition-duration: 500ms;
    transition-timing-function: ease;
    color: red;
  }
`;

const Test2 = styled.a`
  &:hover {
    transform: scale(1.1, 1.1);
    transition-duration: 500ms;
    transition-timing-function: ease;
    color: #d4445a;
  }
`;

const Logo2 = styled.div`
  color: gray;
  nsition-duration: 500ms;
  transition-timing-function: ease;
  font-size: 20px;

  &:hover {
    transform: scale(1.1, 1.1);
    transition-duration: 500ms;
    transition-timing-function: ease;
    color: pink;
  }

  @media screen and (max-width: 500px) {
    font-size: 20px;
    padding-left: 10px;
  }
`;
