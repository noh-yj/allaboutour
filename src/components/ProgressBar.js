import React from 'react';
import styled from 'styled-components';
import { Progress } from 'antd';
import ImgResult from '../components/ImgResult';

function ProgressBar() {
  return (
    <>
      <Wrap>
        <TextWrap>
          <p>나와 상대의 궁합은</p>
          <h1>99점</h1>
        </TextWrap>
        <ProgressWrap>
          <Progress
            strokeColor={{
              '0%': '#C2C2C2',
              '100%': '#eee',
            }}
            percent={99}
            showInfo={false}
          />
        </ProgressWrap>
        <ImgWrap>
          <ImgResult text='별자리' />
          <ImgResult text='12지신' />
          <ImgResult text='혈액형' />
          <ImgResult text='MBTI' />
        </ImgWrap>
      </Wrap>
    </>
  );
}

const Wrap = styled.main`
  width: 341px;
  height: 401px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 10px #00000012;
  border-radius: 13px;
  position: relative;
`;
const TextWrap = styled.div`
  position: absolute;
  top: 37px;
  left: 25px;
  & p {
    margin: 0;
    text-align: left;
    font: normal normal normal 18px/45px AppleSDGothicNeoSB00;
    letter-spacing: 0px;
    color: #333333;
  }
  & h1 {
    margin: 0;
    text-align: left;
    font: normal normal normal 37px/45px AppleSDGothicNeoEB00;
    letter-spacing: 0px;
    color: #333333;
    font-weight: bold;
  }
`;

const ProgressWrap = styled.div`
  position: absolute;
  top: 170px;
  left: 25px;
  width: 291px;
`;

const ImgWrap = styled.div`
  position: absolute;
  top: 224px;
  left: 25px;
  display: flex;
  width: 300px;
`;

export default ProgressBar;
