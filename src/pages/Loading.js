import React from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators as infoActions } from '../redux/modules/info';
import BackGround from '../shared/img/bg.jpg';
import Img from '../shared/img/90.png';

function Loading() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(infoActions.resultInfoDB());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Container>
        <main>
          <Image src={Img} alt='img' />
          <Text>잠시만 기다려주세요</Text>
        </main>
      </Container>
    </>
  );
}

const Container = styled.div`
  max-width: 375px;
  height: 100vh;
  margin: 0 auto;
  cursor: default;
  background-image: url(${BackGround});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const Image = styled.img`
  position: absolute;
  top: 314px;
  left: 130px;
  width: 115px;
  height: 115px;
`;

const Text = styled.p`
  position: absolute;
  top: 445px;
  left: 127px;
  text-align: left;
  font: normal normal normal 20px/23px Nanum BaReunHiPi;
  letter-spacing: 0px;
  color: #333333;
`;

export default Loading;
