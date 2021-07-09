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
  font: normal normal normal 32px/36px;
  font-family: 'Nanum BaReunHiPi';
  letter-spacing: 0px;
  color: #333333;
  opacity: 1;
  margin: 0;
  display: block;
  padding-top: 97.5px;
`;

export default Title;
