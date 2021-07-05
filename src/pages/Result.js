import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import ProgressBar from '../components/ProgressBar';
import ResultInfo from '../components/ResultInfo';
import Button from '../Elements/Button';
import { actionCreators as infoActions } from '../redux/modules/info';

function Result(props) {
  const dispatch = useDispatch();
  const main = () => {
    dispatch(infoActions.clearInfo());
    window.scrollTo({ top: 0, left: 0 });
    props.history.push('/');
  };

  return (
    <>
      <Container>
        <Wrap>
          <ProgressBar />
          <ResultInfo text='결과 해석' />

          <BtnWrap>
            <Button _onClick={main}>다시하기</Button>
            <Button startBtn>결과 링크 공유하기</Button>
          </BtnWrap>
        </Wrap>
      </Container>
    </>
  );
}

const Container = styled.div`
  max-width: 375px;
  margin: 0 auto;
  cursor: default;
`;

const Wrap = styled.div`
  margin: 0 17px;
`;

const BtnWrap = styled.div`
  margin-top: 60px;
  width: 100%;
  height: 180px;
`;

export default Result;
