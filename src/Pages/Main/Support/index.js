import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ilimage from "Images/MainImage/il_logo.png";

const MOCK_LOGO = [
  {
    img: ilimage,
    name: "기업명",
  },
  {
    img: ilimage,
    name: "기업명",
  },
  {
    img: ilimage,
    name: "기업명",
  },
  {
    img: ilimage,
    name: "기업명",
  },
  {
    img: ilimage,
    name: "기업명",
  },
  {
    img: ilimage,
    name: "기업명",
  },
  {
    img: ilimage,
    name: "기업명",
  },
  {
    img: ilimage,
    name: "기업명",
  },
  {
    img: ilimage,
    name: "기업명",
  },
  {
    img: ilimage,
    name: "기업명",
  },
  {
    img: ilimage,
    name: "기업명",
  },
  {
    img: ilimage,
    name: "기업명",
  },
];

const Support = () => {
  const [logo, setLogo] = useState([]);

  useEffect(() => {
    // fetch(`/Mock/Main/Logos.json`)
    //   .then(res => res.json())
    //   .then(data => setLogo(data.result));
    setLogo(MOCK_LOGO);
  }, [logo]);

  return (
    <Container>
      <Title main>
        <Bold>SUPPORT</Bold>
      </Title>
      <Body>
        {logo.length ? (
          <>
            {logo.map((item, i) => (
              <LogoWrapper key={i}>
                <Img src={item.img} />
                <LogoName>{item.name}</LogoName>
              </LogoWrapper>
            ))}
          </>
        ) : null}
      </Body>
    </Container>
  );
};

export default Support;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 400px;
  @media screen and (max-width: 500px) {
    margin-top: 50%;
  }
`;

const Title = styled.div`
  font-size: ${({ theme, main }) => (main ? "110px" : theme.fontLarge)};
  font-weight: ${({ theme }) => theme.weightLight};
  line-height: 120%;
  @media screen and (max-width: 500px) {
    font-size: ${({ main }) => (main ? "45px" : "14px")};
  }
`;

const Bold = styled.span`
  font-weight: ${({ theme }) => theme.weightBold};
  justify-self: center;
`;

const Body = styled.div`
  margin-top: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  width: 220px;
  margin: 20px;
  @media screen and (max-width: 500px) {
    width: 120px;
  }
`;

const LogoName = styled.div`
  color: ${({ theme }) => theme.mainGrey};
`;
