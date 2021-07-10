import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import styled from 'styled-components';
import { InfoCircleOutlined } from '@ant-design/icons';
import Button from '../Elements/Button';
import { config } from '../config';
import InfoModal from '../components/InfoModal';
import BackGround from '../shared/img/bg.jpg';
import { useDispatch } from 'react-redux';
import { actionCreators as infoActions } from '../redux/modules/info';
import { message } from 'antd';
import { copyToClipboard } from '../shared/exp';

function Main(props) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const start = () => {
    window.scrollTo({ top: 0, left: 0 });
    props.history.push('/myProfile');
  };

  useEffect(() => {
    dispatch(infoActions.clearInfo());
    axios({
      method: 'get',
      url: `${config.api}/count`,
    })
      .then((res) => {
        setCount(res.data.result.count);
      })
      .catch((e) => {
        console.log('error', e);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [infoModal, setInfoModal] = useState(false);

  const OpenInfoModal = () => {
    setInfoModal(true);
  };
  const CloseInfoModal = () => {
    setInfoModal(false);
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
          <header>
            <InfoWrap onClick={OpenInfoModal}>
              <InfoCircleOutlined style={{ fontSize: '20px' }} />
            </InfoWrap>
            <Title>우리의 모든 것</Title>
            <SubTitle>
              <span>
                mbti 별자리 띠 혈액형
                <br />
                모든 궁합을 한번에 확인해보세요!
              </span>
            </SubTitle>
          </header>
          <main>
            <ImgWrap>
              <Img
                src='https://1.bp.blogspot.com/-1BQ8UpCrv6k/YOP6tHLiJ7I/AAAAAAAAAWI/_22820FChB8CFAh3QQB1RW3Vwfop_ilfwCLcBGAsYHQ/s320/100.png'
                alt='img'
              />
            </ImgWrap>
            <Member>
              현재까지 <strong>{count}명</strong>이 참여했어요
            </Member>
            <BtnWrap>
              <Button startBtn _onClick={start}>
                시작하기
              </Button>
              <Button _onClick={copy}>테스트 공유</Button>
            </BtnWrap>
          </main>
        </Wrap>
      </Container>
      <InfoModal status={infoModal} close={CloseInfoModal} />
    </>
  );
}

const Container = styled.div`
  max-width: 375px;
  margin: 0 auto;
  cursor: default;
  background-image: url(${BackGround});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
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

const InfoWrap = styled.div`
  position: absolute;
  top: 47px;
  left: 325px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 40px;
  font-family: 'Nanum BaReunHiPi';
  letter-spacing: 0px;
  color: #333333;
  margin: 0;
  display: block;
  padding-top: 111px;
`;
const SubTitle = styled.div`
  text-align: center;
  & span {
    margin-top: 19px;
    max-width: 200px;
    display: inline-block;
    text-align: center;
    font: normal normal normal 15px/22px AppleSDGothicNeoM00;
    letter-spacing: 0px;
    color: #999999;
  }
`;

const ImgWrap = styled.div`
  width: 250px;
  margin: 0 auto;
`;

const Img = styled.img`
  margin-top: 39px;
  width: 250px;
  height: 250px;
  opacity: 1;
`;

const Member = styled.div`
  font-size: 16px;
  color: #333;
  letter-spacing: 0;
  text-align: center;
  margin-top: 19px;
  margin-bottom: 80px;
`;

const BtnWrap = styled.div`
  text-align: center;
  width: 100%;
`;

export default Main;
