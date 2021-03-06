import React from "react";
import styled from "styled-components";
import ilimage from "Images/MainImage/il_logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Wrapper>
      <Navbar>
        <Navmenu>
          <Logo>
            <Link to="/">
              <Navimage src={ilimage} />
            </Link>
          </Logo>
          <Navli>
            <Nava to="/">HOME</Nava>
          </Navli>
          <Navli>
            <Nava to="/2">대학가요,재</Nava>
          </Navli>
          <Navli>
            <Nava to="/contact">CONTACT US</Nava>
          </Navli>
        </Navmenu>
      </Navbar>
    </Wrapper>
  );
};

export default Nav;

const Wrapper = styled.div`
  background-color: black;
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
`;

const Logo = styled.div`
  position: absolute;
  left: 20px;
`;

const Navimage = styled.img`
  height: 70px;
  justify-content: center;
  align-items: center;
  &:hover {
    transform: scale(1.1, 1.1);
    transition-duration: 500ms;
    transition-timing-function: ease;
  }
  @media screen and (max-width: 500px) {
    height: 40px;
  }
`;

const Navmenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1120px;
  @media screen and (max-width: 500px) {
    width: 250px;
  }
`;

const Navli = styled.li`
  color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nava = styled(Link)`
  text-decoration: none;
  &:hover {
    transform: scale(1.1, 1.1);
    transition-duration: 500ms;
    transition-timing-function: ease;
    color: #f7f7f7;
  }
  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;
