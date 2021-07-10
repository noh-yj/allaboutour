import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import ProgressBar from '../components/ProgressBar';
import ResultInfo from '../components/ResultInfo';
import Button from '../Elements/Button';
import { history } from '../redux/configureStore';
import { actionCreators as infoActions } from '../redux/modules/info';
import BackGround from '../shared/img/bg.jpg';
import { message } from 'antd';
import { copyToClipboard } from '../shared/exp';

function Result(props) {
  const dispatch = useDispatch();
  const resultInfo = useSelector((state) => state.info.resultInfo);

  useEffect(() => {
    if (Object.keys(resultInfo).length === 0) {
      history.replace('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const main = () => {
    dispatch(infoActions.clearInfo());
    window.scrollTo({ top: 0, left: 0 });
    props.history.push('/');
  };

  const url = window.location.origin;
  const copy = () => {
    copyToClipboard(url)
      .then(() => {
        message.success('링크가 클립보드에 복사되었습니다.');
      })
      .catch(() => {
        message.error('에러가 발생했습니다! 다시시도해주세요.');
      });
  };

  return (
    <>
      <Container>
        <Wrap>
          <ProgressBar />
          <ResultInfo text='결과 해석' />

          <BtnWrap>
            <Button startBtn _onClick={main}>
              다시하기
            </Button>
            <Button _onClick={copy}>링크 공유하기</Button>
          </BtnWrap>
        </Wrap>
      </Container>
    </>
  );
}

const Container = styled.div`
  max-width: 375px;
  margin: 0 auto;
  padding-top: 24px;
  cursor: default;
  background-image: url(${BackGround});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  @media only screen and (max-width: 414px) {
    max-width: 414px;
  }
  @media only screen and (max-width: 375px) {
    max-width: 375px;
  }
`;

const Wrap = styled.div`
  margin: 0 17px;
`;

const BtnWrap = styled.div`
  margin-top: 60px;
  width: 100%;
  height: 180px;
  text-align: center;
`;

export default Result;
