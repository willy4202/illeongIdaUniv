import React from "react";
import styled from "styled-components";
import ilimg from "Images/MainImage/logo.png";

const Contact = () => {
  return (
    <Wrap>
      <Image src={ilimg} />
    </Wrap>
  );
};

export default Contact;

const Wrap = styled.div`
  backgroubd-color: pink;
`;

const Image = styled.img`
  width: 20px;
`;
