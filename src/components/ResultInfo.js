import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

function ResultInfo(props) {
  // mbti 별자리 혈액형 12지신
  const { text } = props;

  const resultInfo = useSelector((state) => state.info.resultInfo.result);
  const meName = resultInfo.name.meName;
  const youName = resultInfo.name.youName;

  // mbti
  const mbtiResult = resultInfo.content.mbti
    .replace(/me/gi, meName)
    .replace(/you/gi, youName);

  // 별자리
  const zodiacSignResult = resultInfo.content.zodiacSign
    .replace(/me/gi, meName)
    .replace(/you/gi, youName);
  // 혈액형
  const bloodResult = resultInfo.content.blood
    .replace(/me/gi, meName)
    .replace(/you/gi, youName);
  // 12지신
  const constellationResult = resultInfo.content.constellation
    .replace(/me/gi, meName)
    .replace(/you/gi, youName);

  console.log(resultInfo);

  return (
    <>
      <Wrap>
        <Container>
          <Title>{text}</Title>

          <TextWrap>
            <span>
              {mbtiResult}
              <br />
              <br />
              {zodiacSignResult}
              <br />
              <br />
              {bloodResult}
              <br />
              <br />
              {constellationResult}
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
