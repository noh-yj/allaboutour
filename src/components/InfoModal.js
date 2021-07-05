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
                <span>
                  <strong>출처</strong> : <br />
                  <a
                    href='https://www.youtube.com/watch?v=9ifq-L7Fytg'
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    - MBTI 유형별 궁합
                  </a>
                  <br />
                  <a
                    href='https://www.youtube.com/watch?v=9ifq-L7Fytg'
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    - INTJ 와 INFP 궁합
                  </a>
                  <br />
                  <a
                    href='http://www.idotong.com/data/gunghab/gunghab.html'
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    - 별자리 궁합
                  </a>{' '}
                  <br />
                  <a
                    href='https://terms.naver.com/entry.naver?docId=561476&cid=46670&categoryId=46670'
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    - 네이버 지식백과 '쥐띠'
                  </a>
                </span>
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
      & a {
        color: #333333;
      }
    }
  }
`;

export default Info;
