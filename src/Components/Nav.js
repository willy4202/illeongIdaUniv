import React from "react";
import styled from "styled-components";
import ilimage from "Images/MainImage/logo.png";
import { Link } from "react-router-dom";
import Main from "Pages/Main/Main";

const Nav = () => {
  return (
    <Wrapper>
      <Navbar>
        <Logo>
          <Link to="/">
            <Navimage src={ilimage} />
          </Link>
        </Logo>
        <Navmenu>
          <Navli>
            <Nava to="/">HOME</Nava>
          </Navli>
          <Navli>
            <Nava to="/2">SING</Nava>
          </Navli>
          <Navli>
            <Nava to="/">CONTACT US</Nava>
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

const Nava = styled(Link)`
  text-decoration: none;
  padding: 5px 40px;
`;
