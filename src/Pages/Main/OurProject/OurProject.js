import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "Images/MainImage/logo.png";
import singLogo from "Images/MainImage/sing_logo.png";

const MOCK = [
  {
    id: "1",
    logoImg: logo,
    title: "독립 보훈 프로젝트",
    content: `대한을 기억하는 행위의 중심이 되고자합니다.\n \n독립선대의 희생이 더 명예로울 수 있도록\n그들의 명예가 끊이지 않을 수 있도록\n그들을 기억하는 행위의 중심이 되고자. \n \n문을 열고 나아갑니다.`,
  },
  {
    id: "2",
    logoImg: singLogo,
    title: "대학가요,재",
    content: `대학 대중 문화를 만드는 행위의 중심이 되고자 합니다.\n\n담을 수 없는, 넘쳐 흐르는 대학생들의 끼와 재능을\n발산할 수 있는 '그들만을 위한 구심점'을 만들어\n대학 대중 문화의 기틀을 만들 것입니다.\n대학 대중 문화를 만드는 행위의 중심이 되고자\n\n문을 열고 나아갑니다.`,
  },
];

const OurProject = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("Mock/Main/OurProject/MOCK.json")
      .then(res => res.json())
      .then(data => setData(data.result));
    setData(MOCK);
  }, []);

  return (
    <Section>
      <Header>
        <Title main>
          <Bold>OUR</Bold> PROJECT
        </Title>
        <Title>
          우리가 만들어나가는 <Bold>파형, 파장 그리고 일렁임</Bold>
        </Title>
      </Header>
      <ArticleWraper>
        {data.length && (
          <>
            {data.map(item => (
              <Article key={item.id}>
                <ImgWrapper to={item.id}>
                  <Img src={item.logoImg} alt="로고" />
                </ImgWrapper>
                <SubTitle>
                  <Bold>{item.title}</Bold>
                </SubTitle>
                <hr />
                <Text>{item.content}</Text>
              </Article>
            ))}
          </>
        )}
      </ArticleWraper>
    </Section>
  );
};

export default OurProject;

const Section = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 800px;
  width: 1120px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 200px;
`;

const Title = styled.div`
  font-size: ${({ theme, main }) => (main ? "110px" : theme.fontLarge)};
  font-weight: ${({ theme }) => theme.weightLight};
  line-height: 120%;
`;

const Bold = styled.span`
  font-weight: ${({ theme }) => theme.weightBold};
`;

const ArticleWraper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Article = styled.div`
  display: flex;
  width: 420px;
  margin: 0 30px;
  padding: 30px;
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 28px;
  flex-direction: column;
`;

const ImgWrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  overflow: hidden;
`;

const Img = styled.img`
  width: 70%;
  align-self: center;
  &:hover {
    transform: scale(1.1, 1.1);
    transition-duration: 500ms;
    transition-timing-function: ease;
  }
`;

const SubTitle = styled.div`
  font-size: ${({ theme }) => theme.fontMedium};
  margin-bottom: 30px;
`;

const Text = styled.div`
  white-space: pre-wrap;
  line-height: 150%;
`;
