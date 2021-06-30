import React from 'react';
import styled from 'styled-components';

function ImgResult(props) {
  const { text } = props;
  return (
    <>
      <ImgWrap>
        <Text isTitle>{text}</Text>
        <img
          src='https://afterwork-webservice-static.s3.ap-northeast-2.amazonaws.com/logo/default_image.jpg'
          alt='img'
        />
        <Text>00점</Text>
      </ImgWrap>
    </>
  );
}

const ImgWrap = styled.div`
  margin-right: 12px;
  & img {
    width: 65px;
    height: 65px;
    border-radius: 50%;
  }
`;

const Text = styled.p`
  margin: 8px 0;
  text-align: center;
  font: normal normal normal 13px/19px AppleSDGothicNeoB00;
  letter-spacing: 0px;
  color: #333333;
  font-weight: ${(props) => (props.isTitle ? 'bold' : 'nomal')};
`;

export default ImgResult;
