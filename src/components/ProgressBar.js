import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ImgResult from '../components/ImgResult';
import heart from '../shared/img/heart.svg';

function ProgressBar() {
  const resultInfo = useSelector((state) => state.info?.resultInfo.result);

  const score = resultInfo?.score;

  // 별자리
  const zodiacSignScore = resultInfo?.individuallyScore.zodiacSignScore;
  const zodiacSignImg = resultInfo?.img.zodiacSignImg;
  // 12지신
  const constellationScore = resultInfo?.individuallyScore.constellationScore;
  const constellationImg = resultInfo?.img.constellationImg;
  // 혈액형
  const bloodScore = resultInfo?.individuallyScore.bloodScore;
  const bloodImg = resultInfo?.img.bloodImg;
  // mbti
  const mbtiScore = resultInfo?.individuallyScore.mbtiScore;
  const mbtiImg = resultInfo?.img.mbtiImg;

  return (
    <>
      {resultInfo && (
        <Wrap>
          <TextWrap>
            <p>나와 상대의 궁합은</p>
            <h1>{score}점</h1>
          </TextWrap>
          <ProgressWrap>
            <Progress>
              <HighLight width={(score / 100) * 100 + '%'}></HighLight>
              <Dot />
              <Heart />
            </Progress>
          </ProgressWrap>

          <ImgWrap>
            <ImgResult
              text='별자리'
              score={zodiacSignScore}
              img={zodiacSignImg}
            />
            <ImgResult
              text='12지신'
              score={constellationScore}
              img={constellationImg}
            />
            <ImgResult text='혈액형' score={bloodScore} img={bloodImg} />
            <ImgResult text='MBTI' score={mbtiScore} img={mbtiImg} />
          </ImgWrap>
        </Wrap>
      )}
    </>
  );
}

const Wrap = styled.main`
  width: 341px;
  height: 370px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 10px #00000012;
  border-radius: 13px;
  position: relative;
  margin: 0 auto;
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

const Progress = styled.div`
  background: #cfcfcf;
  width: 100%;
  height: 7px;
  display: flex;
  border-radius: 14px;
  align-items: center;
`;

const HighLight = styled.div`
  background: #333;
  width: ${(props) => props.width};
  height: 7px;
  border-radius: 14px;
  transition: 2s;
`;

const Dot = styled.div`
  background: #fff;
  border: 1px solid #707070;
  box-sizing: border-box;
  margin: 0px 0px 0px -12px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
`;

const Heart = styled.div`
  background-image: url(${heart});
  background-repeat: no-repeat;
  background-size: cover;
  width: 21px;
  height: 20px;
  margin: -50px 0px 0px -16px;
`;

const ImgWrap = styled.div`
  position: absolute;
  top: 224px;
  left: 25px;
  display: flex;
  width: 300px;
`;

export default ProgressBar;
