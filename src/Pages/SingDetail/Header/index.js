import React from "react";
import styled from "styled-components";
import singLogo from "Images/MainImage/sing_logo.png";

const Header = () => {
  return (
    <Body>
      <TitleWrapper>
        <Title>ABOUT </Title>
        <TitleImg src={singLogo} />
      </TitleWrapper>
      <Img src="https://publy.imgix.net/images/2019/04/23/1555998249_3vqHPbga0Tf5Ezy0MQOy8YWxbQMtAUUtwIeUaReP.jpeg?fm=pjpg" />
      <Bold>대학가요,재는 [새롭게 일렁이다]의 두번째 세계관입니다.</Bold>
      <Text>
        과거를 기억하고, 이를 현재에 적용하여 더 나은 미래를 만드는 데
        일조하겠다는 기업 비전에 의거하여 생성되었습니다. <br />
        <br /> 과거 대학 대중 문화의 기틀을 형성했던 ‘대학가요제’를 기억하며,
        이를 현재 멈춰버린 대학 문화에 적용시켜, <br /> 대학 대중 문화의 활발한
        재계를 도모하고 활성화시켜 더 나은 대학 문화의 미래를 만들고자
        [대학가요,재]가 탄생했습니다.
      </Text>
      <Bold>[대학가요,재]는 [대학,재]의 하위 카테고리입니다.</Bold>
      <Text>
        대학,재에서 진행되는 ‘대학가요,재 / 대학영상,재 / 대학작품,재’ 등
        대학생들의 끼와 재능을 담을 수 있는 <br /> 거대한 ‘대학 문화의 구심점’을
        형성시켜 나갑니다. <br />
        이를 통해, 대학 대중 문화가 새로운 K-문화의 반열에 올라 대한민국
        <br />
        <br />
        대학생들의 끼와, 재능, 그리고 능력을 전 세계에 알리고자 합니다.
      </Text>
    </Body>
  );
};

export default Header;
const Body = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 1120px;
  font-size: ${({ theme }) => theme.fontSmall};
`;

const TitleWrapper = styled.div`
  align-self: center;
  position: relative;
  margin-bottom: 70px;
`;

const Title = styled.div`
  font-size: 100px;
  font-weight: 600;
  float: left;
`;

const TitleImg = styled.img`
  width: 500px;
`;

const Img = styled.img`
  width: 100%;
`;
const Bold = styled.span`
  font-size: ${({ theme }) => theme.fontMedium};
  font-weight: ${({ theme }) => theme.weightSemiBold};
  margin: 60px 0;
`;

const Text = styled.div`
  white-space: pre-wrap;
  line-height: 150%;
`;
