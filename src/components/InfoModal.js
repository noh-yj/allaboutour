import React from 'react';
import styled from 'styled-components';

function Info(props) {
  const { status, close } = props;
  return (
    <>
      {status ? (
        <>
          <Component onClick={close} />
          <ModalContainer>
            <main>
              <div>
                <span>
                  <strong>문의</strong> : eaydkv112@naver.com
                </span>
              </div>
              <br />
              <div>
                <strong>출처</strong> : <br />
                <span>- MBTI 유형별 궁합</span>
                <br />
                <span>- 네이버 지식백과</span>
                <br />
                <span>- 별자리 궁합표</span>
              </div>
            </main>
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

const ModalContainer = styled.div`
  position: fixed;
  top: 87px;
  left: 78px;
  background-color: #fff;
  border: 1px solid #707070;
  border-radius: 15px;
  width: 280px;
  height: 195px;
  z-index: 3000;
  @media only screen and (max-width: 415px) {
    &::after {
      content: '';
      position: absolute;
      bottom: 100%;
      left: 92%;
      margin-left: -10px;
      border-width: 10px;
      border-style: solid;
      border-color: transparent transparent #fff transparent;
    }
  }

  & main {
    padding: 24px 16px 20px 24px;
    & span {
      color: #333;
      text-align: left;
      font: normal normal normal 15px/23px AppleSDGothicNeoM00;
      letter-spacing: 0px;
      cursor: default;
    }
  }
`;

export default Info;
