import React, { useState } from 'react';
import styled from 'styled-components';
import Title from '../Elements/Title';
import Button from '../Elements/Button';
import { Input, Radio } from 'antd';
import BloodModal from '../components/BloodModal';
import MBTIModal from '../components/MBTIModal';
import { useDispatch, useSelector } from 'react-redux';

function MyInfo(props) {
  const [name, setName] = useState('');
  const [sex, setSex] = useState('남');
  const [birth, setBirth] = useState('');
  const [mbti, setMbti] = useState('');

  const dispatch = useDispatch();

  const myBlood = useSelector((state) => state.info.myBlood);

  // 이름 상태
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  // 성별 상태
  const onChangeSex = (e) => {
    setSex(e.target.value);
  };

  // 생년월일 상태
  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  };

  const [bloodModal, setBloodModal] = useState(false);
  const [mbtiModal, setMbtiModal] = useState(false);

  const nextInfo = () => {
    window.scrollTo({ top: 0, left: 0 });
    props.history.push('/yourProfile');
  };

  // 혈액형 모달창
  const OpenBloodModal = () => {
    setBloodModal(true);
  };
  const CloseBloodModal = () => {
    setBloodModal(false);
  };

  // mbti 모달창
  const OpenMbtiModal = () => {
    setMbtiModal(true);
  };
  const CloseMbtiModal = () => {
    setMbtiModal(false);
  };

  return (
    <>
      <Container>
        <Wrap>
          <Title>나의 정보를 입력해주세요</Title>
          <main>
            <SortWrap>
              <Text>내이름</Text>
              <Input
                placeholder='이름을 입력해주세요'
                bordered={false}
                onChange={onChangeName}
              />
            </SortWrap>
            <SortWrap>
              <Text>성별</Text>
              <Radio.Group onChange={onChangeSex} value={sex}>
                <Radio value={'남'} style={{ marginRight: '70px' }}>
                  남
                </Radio>
                <Radio value={'여'}>여</Radio>
              </Radio.Group>
            </SortWrap>
            <SortWrap>
              <Text>생년월일</Text>
              <Input
                placeholder='8자리를 입력해주세요'
                bordered={false}
                onChange={onChangeBirth}
                maxLength={8}
              />
            </SortWrap>
            <SortWrap>
              <Text>혈액형</Text>
              <Modal onClick={OpenBloodModal} isBoolean={Boolean(myBlood)}>
                {myBlood === '' ? '혈액형을 입력해주세요' : myBlood}
              </Modal>
            </SortWrap>
            <SortWrap>
              <Text>MBTI</Text>
              <Modal onClick={OpenMbtiModal}>MBTI를 입력해주세요</Modal>
            </SortWrap>

            <FindMBTI>
              <a
                href='https://www.16personalities.com/ko/%EB%AC%B4%EB%A3%8C-%EC%84%B1%EA%B2%A9-%EC%9C%A0%ED%98%95-%EA%B2%80%EC%82%AC'
                target='_blank'
                rel='noreferrer noopener'
              >
                MBTI 검사하기
              </a>
            </FindMBTI>

            <BtnWrap>
              <Button startBtn _onClick={nextInfo}>
                다음으로
              </Button>
            </BtnWrap>
          </main>
        </Wrap>
      </Container>
      <BloodModal status={bloodModal} close={CloseBloodModal} />
      <MBTIModal status={mbtiModal} close={CloseMbtiModal} />
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
  & main {
    margin-top: 83px;
  }
`;

const SortWrap = styled.div`
  padding-bottom: 11px;
  margin-bottom: 50px;
  border-bottom: 1px solid #e4e4e4;
  display: flex;
  align-items: center;

  & input {
    max-width: 240px;
  }
  & input::placeholder {
    color: #999999;
  }
`;

const Text = styled.span`
  text-align: left;
  font: normal normal normal 17px/19px AppleSDGothicNeoB00;
  letter-spacing: 0px;
  color: #333333;
  width: 60px;
  display: inline-block;
  margin-right: 30px;
  font-weight: 700;
`;

const Modal = styled.div`
  width: 240px;
  padding: 4px 11px;
  color: ${(props) => (props.isBoolean ? 'rgba(0, 0, 0, 0.85)' : '#999999')};
  cursor: pointer;
`;

const FindMBTI = styled.div`
  width: 100%;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  & a {
    width: 129px;
    height: 38px;
    background: #eeeeee 0% 0% no-repeat padding-box;
    border-radius: 5px;
    font: normal normal normal 14px/20px AppleSDGothicNeoSB00;
    letter-spacing: 0px;
    color: #333333;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const BtnWrap = styled.div`
  margin-top: 74px;
  width: 100%;
  height: 139px;
`;

export default MyInfo;
