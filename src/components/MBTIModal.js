import React from 'react';
import styled, { keyframes } from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';

function MBTIModal(props) {
  const { status, close } = props;
  return (
    <>
      {status ? (
        <>
          <Component onClick={close} />
          <ModalContainer>
            <Title>
              <h2>MBTI</h2>
              <CloseOutlined
                style={{ fontSize: '18px', cursor: 'pointer' }}
                onClick={close}
              />
            </Title>
            <Main>
              <div onClick={close}>
                <span>mbti</span>
              </div>
              <div onClick={close}>
                <span>mbti</span>
              </div>
              <div onClick={close}>
                <span>mbti</span>
              </div>
              <div onClick={close}>
                <span>mbti</span>
              </div>
              <div onClick={close}>
                <span>mbti</span>
              </div>
              <div onClick={close}>
                <span>mbti</span>
              </div>
              <div onClick={close}>
                <span>mbti</span>
              </div>
              <div onClick={close}>
                <span>mbti</span>
              </div>
              <div onClick={close}>
                <span>mbti</span>
              </div>
              <div onClick={close}>
                <span>mbti</span>
              </div>
              <div onClick={close}>
                <span>mbti</span>
              </div>
              <div onClick={close}>
                <span>mbti</span>
              </div>
              <div onClick={close}>
                <span>mbti</span>
              </div>
              <div onClick={close}>
                <span>mbti</span>
              </div>
              <div onClick={close}>
                <span>mbti</span>
              </div>
              <div onClick={close}>
                <span>mbti</span>
              </div>
            </Main>
          </ModalContainer>
        </>
      ) : null}
    </>
  );
}

const Component = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2000;
`;

const openScale = keyframes`
    0%{
       height:0px;
       opacity:0;
    }
    100% {
       height:504px;
       opacity:1;
    }
`;

const ModalContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: #fff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  width: 414px;
  height: 504px;
  z-index: 3000;
  animation: ${openScale} 0.6s cubic-bezier(0.17, 0.67, 0.5, 1) forwards;
  @media only screen and (max-width: 413px) {
    min-width: 100%;
    width: 100%;
  }
`;

const Title = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 36px 30px;
  & h2 {
    text-align: left;
    font: normal normal normal 19px/19px AppleSDGothicNeoB00;
    letter-spacing: 0px;
    color: #333333;
    font-weight: bold;
    margin: 0;
    cursor: default;
  }
`;

const Main = styled.main`
  display: flex;
  flex-wrap: wrap;

  & div {
    margin-top: 30px;
    padding: 0 30px;
    cursor: pointer;
    width: 150px;
  }
  & div:first-child {
    margin-top: 0;
  }
  & div:nth-child(2) {
    margin-top: 0;
  }
  & div:nth-child(2n) {
    margin-left: 30px;
  }
  & span {
    text-align: left;
    font: normal normal normal 16px/19px AppleSDGothicNeoM00;
    letter-spacing: 0px;
    color: #333333;
  }
`;

export default MBTIModal;
