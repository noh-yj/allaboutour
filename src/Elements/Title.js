import React from 'react';
import styled from 'styled-components';

function Title(props) {
  const { children } = props;
  return (
    <>
      <header>
        <H1>{children}</H1>
      </header>
    </>
  );
}

const H1 = styled.h1`
  text-align: left;
  font: normal normal normal 26px/36px AppleSDGothicNeoB00;
  letter-spacing: 0px;
  color: #333333;
  opacity: 1;
  margin: 0;
  font-weight: 800;
  display: block;
  padding-top: 106px;
`;

export default Title;
