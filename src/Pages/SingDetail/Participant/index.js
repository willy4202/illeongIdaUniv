import React, { useEffect, useState } from "react";
import styled from "styled-components";
import lee from "Images/Top10/profile.png";

const MOCKSINGER = [
  {
    profileImg: lee,
    singer: "리무진",
  },
  {
    profileImg: lee,
    singer: "리무진",
  },
  {
    profileImg: lee,
    singer: "리무진",
  },
  {
    profileImg: lee,
    singer: "리무진",
  },
  {
    profileImg: lee,
    singer: "리무진",
  },
  {
    profileImg: lee,
    singer: "리무진",
  },
  {
    profileImg: lee,
    singer: "리무진",
  },
  {
    profileImg: lee,
    singer: "리무진",
  },
  {
    profileImg: lee,
    singer: "리무진",
  },
  {
    profileImg: lee,
    singer: "리무진",
  },
];

const Participant = () => {
  const [data, setData] = useState([]);

  useEffect(() => setData(MOCKSINGER), []);

  return (
    <Container>
      <Title>TOP 10</Title>
      <Grid>
        {data.map((item, i) => {
          <Wrapper key={i}>
            <Album>
              <AlbumImg src={item.profileImg} />
            </Album>
            <AlbumTitle>{item.singer}</AlbumTitle>
          </Wrapper>;
        })}
      </Grid>
    </Container>
  );
};

export default Participant;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 200px 0;
  background-color: white;
  margin-top: 200px;
  width: 100%;
  color: black;
  position: relative;
  @media screen and (max-width: 500px) {
    padding: 200px 0;
  }
`;

const Title = styled.div`
  font-size: 70px;
  font-weight: 400;
  margin-bottom: 100px;

  @media screen and (max-width: 500px) {
    font-size: 40px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Album = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 20px;
  background-color: gray;
  overflow: hidden;
  box-shadow: 3px 3px 10px;
  @media screen and (max-width: 500px) {
    width: 140px;
    height: 140px;
  }
`;

const AlbumImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  &:hover {
    filter: blur(5px);
    transform: scale(1.1, 1.1);
    transition-duration: 500ms;
    transition-timing-function: ease;
  }
`;

const AlbumTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSmall};
  font-weight: 500;
  padding: 10px;
`;

const Singer = styled.div`
  font-size: ${({ theme }) => theme.fontSmall};
`;
