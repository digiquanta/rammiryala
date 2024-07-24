import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Rammetto+One&display=swap');
`;

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: #000000;
  border: 1px solid #000000;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 3;
  justify-content: center;
`;

const Title = styled.h1`
  color: #ff2121;
  font-size: 34px;
  font-weight: 400%;
  letter-spacing: 0.25px;
  font-family: 'Rammetto One';
  margin: 0;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: #000000;
  border: 2px solid #ff2121;
  color: #ff2121;
  white-space: nowrap;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
`;

const Header = () => (
  <>
    <GlobalStyle />
    <HeaderWrapper>
      <Title>RAM MIRYALA</Title>
      <Button>Join community</Button>
    </HeaderWrapper>
  </>
);

export default Header;
