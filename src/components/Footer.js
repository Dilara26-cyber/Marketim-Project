import React from 'react';
import styled from 'styled-components';
import { BsDot } from 'react-icons/bs';
const FooterContainer = styled.footer`
  position: relative;
  bottom: 0;
  left: 0;
  height: 5vh;
  margin-top: 5em;
  width: 100%;
`;
const FooterCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2em;
  color: ${(props) => props.theme.primaryColor};
`;
const Footer = () => {
  return (
    <FooterContainer>
      <FooterCenter>
        <p>&copy;2019 Market</p>
        <BsDot />
        <p>Privacy Policy</p>
      </FooterCenter>
    </FooterContainer>
  );
};

export default Footer;
