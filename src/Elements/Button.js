import React from 'react';
import styled from 'styled-components';

function Button(props) {
  const { children, _onClick, startBtn } = props;
  return (
    <>
      <Btn onClick={_onClick} startBtn={startBtn}>
        {children}
      </Btn>
    </>
  );
}

const Btn = styled.button`
  width: 341px;
  height: 53px;
  border-radius: 13px;
  margin-bottom: 10px;
  border: none;
  cursor: pointer;
  text-align: center;
  font: normal normal normal 16px/22px AppleSDGothicNeoB00;
  letter-spacing: 0px;
  background: ${(props) =>
    props.startBtn
      ? '#333333 0% 0% no-repeat padding-box'
      : '#BCBCBC 0% 0% no-repeat padding-box'};
  color: ${(props) => (props.startBtn ? '#FFFFFF' : '#333333')};
`;

export default Button;
