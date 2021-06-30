import React from 'react';
import styled, { keyframes } from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';
import { actionCreators as infoActions } from '../redux/modules/info';
import { useDispatch } from 'react-redux';
import { history } from '../redux/configureStore';

function BloodModal(props) {
  const { status, close } = props;
  const dispatch = useDispatch();
  const type = history.location.pathname;

  return (
    <>
      {status ? (
        <>
          <Component onClick={close} />
          <ModalContainer>
            <Title>
              <h2>혈액형</h2>
              <CloseOutlined
                style={{ fontSize: '18px', cursor: 'pointer' }}
                onClick={close}
              />
            </Title>
            <Main>
              <div
                onClick={() => {
                  type === '/myProfile'
                    ? dispatch(infoActions.myBlood('A형'))
                    : dispatch(infoActions.yourBlood('A형'));
                  close();
                }}
              >
                <span>A형</span>
              </div>
              <div
                onClick={() => {
                  type === '/myProfile'
                    ? dispatch(infoActions.myBlood('B형'))
                    : dispatch(infoActions.yourBlood('B형'));
                  close();
                }}
              >
                <span>B형</span>
              </div>
              <div
                onClick={() => {
                  type === '/myProfile'
                    ? dispatch(infoActions.myBlood('O형'))
                    : dispatch(infoActions.yourBlood('O형'));
                  close();
                }}
              >
                <span>O형</span>
              </div>
              <div
                onClick={() => {
                  type === '/myProfile'
                    ? dispatch(infoActions.myBlood('AB형'))
                    : dispatch(infoActions.yourBlood('AB형'));
                  close();
                }}
              >
                <span>AB형</span>
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
       height:337px;
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
  min-width: 414px;
  height: 337px;
  z-index: 3000;
  animation: ${openScale} 0.6s cubic-bezier(0.17, 0.67, 0.5, 1) forwards;
  @media only screen and (max-width: 413px) {
    min-width: 100%;
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
  & div {
    margin-top: 30px;
    padding: 0 30px;
    cursor: pointer;
  }
  & div:first-child {
    margin-top: 0;
  }
  & span {
    text-align: left;
    font: normal normal normal 16px/19px AppleSDGothicNeoM00;
    letter-spacing: 0px;
    color: #333333;
  }
`;

export default BloodModal;
