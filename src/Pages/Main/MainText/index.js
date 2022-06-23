import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import testImg from "Images/MainImage/testImg.svg";

const MainText = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <Body>
      <DesignImg src={testImg} />
      <TextContainer>
        <LeftAlignContaienr larger>
          <Title data-aos="fade" data-aos-duration="1000">
            새롭게 일렁이다는
          </Title>
          <Title data-aos="fade" data-aos-duration="1000" data-aos-delay="300">
            과거를 기억하고 이를 현재에 적용하여
          </Title>
          <Title data-aos="fade" data-aos-duration="1000" data-aos-delay="600">
            더 나은 미래를 만드는데 일조하고자 합니다.
          </Title>
        </LeftAlignContaienr>
        <RightAlignContainer>
          <ContentText data-aos="fade-left" data-aos-duration="1000">
            <Title bold>과거</Title>
            <div>
              <Bold>독립 보훈</Bold> 우리의 선조들이 세상에 삶을 내던져 일었던
              '일렁임'을 기억합니다.
            </div>
            <div>
              <Bold>대학가요,재</Bold> 당시 대학 대중 문화의 기틀을 만든
              대학가요제를 기억합니다.
            </div>
          </ContentText>
        </RightAlignContainer>
        <LeftAlignContaienr>
          <ContentText data-aos="fade-right" data-aos-duration="1000">
            <Title bold>현재</Title>
            <div>
              <Bold>독립 보훈</Bold> 오늘 우리가 발 딛고 사는 이 나라, 이 자유는
              대가 없는 것이 아닙니다.
            </div>
            <div>
              <Bold>대학가요,재</Bold> 사라진 '대중'을 되찾기 위해 멈춰버린
              대학가요제의 새로운 재계를 도모합니다.
            </div>
          </ContentText>
        </LeftAlignContaienr>
        <RightAlignContainer>
          <ContentText data-aos="fade-up" data-aos-duration="1000">
            <Title bold>미래</Title>
            <div>
              <Bold>독립 보훈</Bold> 이 사실을 모두가 보내는 하루와 <br />그 삶
              속에서 자연스레 느끼며 호흡할 수 있도록 할 것입니다.
            </div>
            <br />
          </ContentText>
          <ContentText
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1200"
          >
            <Bold>대학가요,재</Bold>를 통해 새로운 대학 대중문화를 만들 것이며,{" "}
            <br />
            이를 통해, 새로운 K-문화의 반열에 '대학 대중 문화'가 오를 것입니다.
          </ContentText>
        </RightAlignContainer>
      </TextContainer>
    </Body>
  );
};

export default MainText;

const Body = styled.div`
  width: 1120px;
  justify-content: center;
  position: relative;
  word-break: keep-all;
  @media screen and (max-width: 500px) {
    margin-top: 10vh;
    width: 320px;
  }
`;

const TextContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  white-space: pre-wrap;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const LeftAlignContaienr = styled.div`
  text-align: start;
  margin: 40vh 0;
`;
const RightAlignContainer = styled.div`
  text-align: end;
  margin: 40px;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

const Title = styled.div`
  line-height: 170%;
  font-weight: ${({ bold }) => (bold ? 600 : 300)};
  font-size: ${({ theme }) => theme.fontLarge};
  margin-bottom: 10px;
  @media screen and (max-width: 500px) {
    font-size: 25px;
  }
`;

const ContentText = styled.div`
  line-height: 170%;
  font-size: ${({ theme }) => theme.fontMedium};
  font-weight: ${({ theme }) => theme.weightLight};
  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

const DesignImg = styled.img`
  width: 15%;
  position: absolute;
  right: 0;
  top: 20%;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const Bold = styled.span`
  font-weight: ${({ theme }) => theme.weightSemiBold};
`;
