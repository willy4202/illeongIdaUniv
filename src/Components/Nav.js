import React from "react";
import styled from "styled-components";
import ilimage from "Images/MainImage/logo.png";

const Nav = () => {
  return (
    <Wrapper>
      <Navbar>
        <Logo>
          <a href="http://localhost:3000/">
            <Navimage src={ilimage} />
          </a>
        </Logo>
        <Navmenu>
          <Navli>
            <Nava href="http://localhost:3000/">HOME</Nava>
          </Navli>
          <Navli>
            <Nava href="http://localhost:3000/2">SING</Nava>
          </Navli>
          <Navli>
            <Nava href="/">CONTACT US</Nava>
          </Navli>
        </Navmenu>
      </Navbar>
    </Wrapper>
  );
};

export default Nav;

const Wrapper = styled.div`
  background-color: black;
  height: 60px;
  width: 100%;
`;

const Navbar = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  height: 60px;
`;

const Navimage = styled.img`
  height: 50px;
  margin-left: 10px;
`;

const Navmenu = styled.ul`
  list-style: none;
  padding: 10px 12px;
  display: flex;
  margin: 2px auto;
`;

const Navli = styled.li`
  color: white;
  margin: 5px auto;
`;

const Nava = styled.a`
  text-decoration: none;
  padding: 5px 40px;
`;
