import React, { useEffect, useState } from "react";
import styled from "styled-components";
import lee from "Images/Top10/profile.png";
import 제원이 from "Images/Top10/제원이.png";
import 한소진 from "Images/Top10/한소진.png";
import 이준행 from "Images/Top10/이준행.png";
// import 전자연 from "Images/Top10/전자연.png";
import 석동진 from "Images/Top10/석동진.png";
import 권민 from "Images/Top10/권민.png";
import 김민지 from "Images/Top10/김민지.png";
import 공대너드 from "Images/Top10/공대너드.png";
import top8img from "Images/Top10/본선진출자.jpeg";

const MOCKSINGER = [
  {
    profileImg: 제원이,
    singer: "제원이",
  },
  {
    profileImg: 한소진,
    singer: "한소진",
  },
  {
    profileImg: 이준행,
    singer: "이준행",
  },
  {
    profileImg: 이준행,
    singer: "전자연",
  },
  {
    profileImg: 석동진,
    singer: "석동진",
  },
  {
    profileImg: 권민,
    singer: "권민",
  },
  {
    profileImg: 김민지,
    singer: "김민지",
  },
  {
    profileImg: 공대너드,
    singer: "공대너드",
  },
  {
    profileImg: lee,
    singer: "수평적 관계",
  },
];

const Participant = () => {
  const [profileData, seProfiletData] = useState([]);

  useEffect(() => seProfiletData(MOCKSINGER), []);

  return (
    <Container>
      {/* <Title>TOP 10</Title> */}
      {/* <Grid>
        {profileData &&
          profileData.map((item, i) => {
            return (
              <Wrapper key={i}>
                <Album>
                  <AlbumImg src={item.profileImg} />
                </Album>
                <AlbumTitle>{item.singer}</AlbumTitle>
              </Wrapper>
            );
          })}
      </Grid> */}
      <Top8 src={top8img} />
    </Container>
  );
};

export default Participant;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 200px 0;
  // background-color: white;
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
  grid-template-columns: 1fr 1fr 1fr;
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
  border: none;
  overflow: hidden;
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

const Top8 = styled.img`
  width: 80vw;
`;
