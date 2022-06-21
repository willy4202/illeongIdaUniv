import React, { useState, useEffect } from "react";
import styled from "styled-components";
import singLogo from "Images/MainImage/sing_logo.png";

const MOCK_LOGO = [
  {
    img: singLogo,
  },
  {
    img: singLogo,
  },
  {
    img: singLogo,
  },
  {
    img: singLogo,
  },
  {
    img: singLogo,
  },
  {
    img: singLogo,
  },
  {
    img: singLogo,
  },
  {
    img: singLogo,
  },
  {
    img: singLogo,
  },
  {
    img: singLogo,
  },
  {
    img: singLogo,
  },
];

const Support = () => {
  const [logo, setLogo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/Mock/Main/LOGOS.json")
      .then(res => res.json())
      .then(data => setLogo(data.result));
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
`;

const Title = styled.div`
  font-size: ${({ theme, main }) => (main ? "110px" : theme.fontLarge)};
  font-weight: ${({ theme }) => theme.weightLight};
  line-height: 120%;
`;

const Bold = styled.span`
  font-weight: ${({ theme }) => theme.weightBold};
  justify-self: center;
`;

const Body = styled.div`
  margin-top: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  width: 220px;
  margin: 20px;
`;

const LogoName = styled.div`
  color: ${({ theme }) => theme.mainGrey};
`;
