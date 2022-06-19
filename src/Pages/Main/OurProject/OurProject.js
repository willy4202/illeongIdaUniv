import React from "react";
import styled from "styled-components";
import logo from "Images/MainImage/logo.png";
import singLogo from "Images/MainImage/sing_logo.png";
const OurProject = () => {
  return (
    <Section>
      <div>OurProject</div>
      <div>우리가 만들어나가는 파형, 파장 그리고 일렁임</div>
      <ArticleWraper>
        <Article>
          <ImgWrapper>
            <Img src={logo} alt="일렁이다 로고" />
          </ImgWrapper>
          <div>독립보훈프로젝트</div>
          <div>
            대한을 기억하는 행위의 중심이 되고자합니다. 독립선대의 희생이 더
            명예로울 수 있도록 그들의 명예가 끊이지 않을 수 있도록 그들을
            기억하는 행위의 중심이 되고자. 문을 열고 나아갑니다.
          </div>
        </Article>
        <Article>
          <ImgWrapper>
            <Img src={singLogo} alt="일렁이다 로고" />
          </ImgWrapper>
          <div>대학가요,재</div>
          <div>
            대한을 기억하는 행위의 중심이 되고자합니다. 독립선대의 희생이 더
            명예로울 수 있도록 그들의 명예가 끊이지 않을 수 있도록 그들을
            기억하는 행위의 중심이 되고자 문을 열고 나아갑니다.
          </div>
        </Article>
      </ArticleWraper>
    </Section>
  );
};

export default OurProject;

const Section = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 200px;
  width: 1120px;
`;
const ArticleWraper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Article = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
`;

const Img = styled.img`
  width: 40%;
  align-self: center;
`;
