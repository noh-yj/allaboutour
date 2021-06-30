import React from 'react';
import styled from 'styled-components';
import Button from '../Elements/Button';

function Main(props) {
  const start = () => {
    window.scrollTo({ top: 0, left: 0 });
    props.history.push('/myProfile');
  };

  return (
    <>
      <Container>
        <Wrap>
          <header>
            <Title>인간 궁합</Title>
            <SubTitle>
              설명설명설명설명설명
              <br /> 설명설명설명설명 확인해보세요!
            </SubTitle>
          </header>
          <main>
            <Img
              src='https://afterwork-webservice-static.s3.ap-northeast-2.amazonaws.com/logo/default_image.jpg'
              alt='img'
            />
            <BtnWrap>
              <Button startBtn _onClick={start}>
                시작하기
              </Button>
              <Button>테스트 공유</Button>
            </BtnWrap>
          </main>
          <Footer>
            현재까지 <strong>1234명</strong>이 참여했어요
          </Footer>
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

const Title = styled.h1`
  text-align: left;
  font: normal normal normal 30px/43px AppleSDGothicNeoEB00;
  letter-spacing: 0px;
  color: #333333;
  margin: 0;
  font-weight: 800;
  display: block;
  padding-top: 95px;
`;
const SubTitle = styled.span`
  margin-top: 26px;
  max-width: 180px;
  display: inline-block;
  text-align: left;
  font: normal normal normal 14px/20px AppleSDGothicNeoM00;
  letter-spacing: 0px;
  color: #999999;
`;

const Img = styled.img`
  margin-top: 45px;
  width: 341px;
  height: 270px;
  border: 1px solid #707070;
  opacity: 1;
`;

const BtnWrap = styled.div`
  margin-top: 50px;
  width: 100%;
`;

const Footer = styled.footer`
  font-size: 16px;
  color: #333;
  letter-spacing: 0;
  text-align: center;
  margin-top: 33px;
  padding-bottom: 85px;
`;

export default Main;
