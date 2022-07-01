import React, { useEffect, useState } from "react";
import styled from "styled-components";
import albumImg from "Images/Top10/Album.png";

const MOCK_SONG = [
  {
    imgCover: albumImg,
    link: "https://youtu.be/ngr9kV1ReO8",
    title: "Touch [Prod by-조창대]",
    singer: "제원이는 항상 배고프다",
  },
  {
    imgCover: albumImg,
    link: "https://youtu.be/ngr9kV1ReO8",
    title: "YS",
    singer: "한소진",
  },
  {
    imgCover: albumImg,
    link: "https://youtu.be/ngr9kV1ReO8",
    title: "bottoms up [Prod by-Jizalo]",
    singer: "이준행",
  },
  {
    imgCover: albumImg,
    link: "https://youtu.be/ngr9kV1ReO8",
    title: "제목",
    singer: "전자연",
  },
  {
    imgCover: albumImg,
    link: "https://youtu.be/ngr9kV1ReO8",
    title: "CG [Prod by-Jizalo]",
    singer: "석동진",
  },
  {
    imgCover: albumImg,
    link: "https://youtu.be/ngr9kV1ReO8",
    title: "Love Story [Prod by-Muxo&황수진]",
    singer: "권민",
  },
  {
    imgCover: albumImg,
    link: "https://youtu.be/ngr9kV1ReO8",
    title: "Dullco [Prod by-Jizalo]",
    singer: "김민지",
  },
  {
    imgCover: albumImg,
    link: "https://youtu.be/ngr9kV1ReO8",
    title: "Just want a better day [Prod by-Jizalo]",
    singer: "공대너드",
  },
  {
    imgCover: albumImg,
    link: "https://youtu.be/ngr9kV1ReO8",
    title: "HOPE [Prod by-이진한]",
    singer: "수평적 관계",
  },
];

const Albums = () => {
  const [songData, setSongData] = useState([]);

  useEffect(() => {
    // fetch("http://localhost:3000/Mock/SingDetail/Song.json")
    //   .then(res => res.json())
    //   .then(data => setSongData(data.result));
    setSongData(MOCK_SONG);
  }, []);

  return (
    <Container>
      <Title>Album</Title>
      {/* <Box /> */}
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
  padding: 200px 0;
  background-color: black;

  width: 100%;
  color: white;
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

const Box = styled.div`
  background-color: #e0e0e0;
  width: 100%;
  height: 600px;
  position: absolute;
  top: 450px;
  z-index: 0;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  z-index: 2;
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

const Album = styled.a`
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
