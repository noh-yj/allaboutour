import React from 'react';
import styled from 'styled-components';

function ResultInfo(props) {
  const { text } = props;
  return (
    <>
      <Wrap>
        <Container>
          <Title>{text}</Title>

          <TextWrap>
            <span>
              당신과 상대는 어쩌구
              명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명
              당신과 상대는 어쩌구
              명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명
            </span>
          </TextWrap>
        </Container>
      </Wrap>
    </>
  );
}

const Wrap = styled.div`
  margin-top: 15px;
  width: 341px;
  height: 256px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 10px #00000012;
  border-radius: 13px;
`;

const Container = styled.div`
  padding: 34px 25px;
  height: 100%;
`;

const Title = styled.h2`
  text-align: left;
  font: normal normal normal 17px/45px AppleSDGothicNeoEB00;
  letter-spacing: 0px;
  color: #333333;
  margin: 0;
  font-weight: bold;
`;

const TextWrap = styled.div`
  width: 100%;
  height: 157px;
  overflow: auto;
  & span {
    text-align: left;
    font: normal normal normal 14px/20px AppleSDGothicNeoR00;
    letter-spacing: 0px;
    color: #333333;
  }
`;

export default ResultInfo;
