import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "Images/MainImage/logo.png";
import { Link } from "react-router-dom";

const MOCK_SONG = [
  { imgCover: logo, title: "제목", singer: "황석영" },
  { imgCover: logo, title: "제목", singer: "황석영" },
  { imgCover: logo, title: "제목", singer: "황석영" },
  { imgCover: logo, title: "제목", singer: "황석영" },
  { imgCover: logo, title: "제목", singer: "황석영" },
  { imgCover: logo, title: "제목", singer: "황석영" },
  { imgCover: logo, title: "제목", singer: "황석영" },
];

const Albums = () => {
  const [songData, setSongData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/Mock/SingDetail/Song.json")
      .then(res => res.json())
      .then(data => setSongData(data.result));
  }, []);

  return (
    <Container>
      <Title>Album</Title>
      <Grid>
        {songData &&
          songData.map((item, i) => (
            <Wrapper key={i}>
              <Album href={item.link}>
                <AlbumImg src={item.imgCover} />
              </Album>
              <AlbumTitle>{item.title}</AlbumTitle>
              <Singer>{item.singer}</Singer>
            </Wrapper>
          ))}
      </Grid>
    </Container>
  );
};

export default Albums;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 300px 0;
`;

const Title = styled.div`
  font-size: 70px;
  font-weight: 700;
  margin-bottom: 100px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Album = styled.a`
  width: 200px;
  height: 200px;
  background-color: gray;
  overflow: hidden;
`;

const AlbumImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  &:hover {
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
