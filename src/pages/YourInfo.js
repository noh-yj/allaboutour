import React, { useState } from 'react';
import styled from 'styled-components';
import Title from '../Elements/Title';
import Button from '../Elements/Button';
import { Input, Radio } from 'antd';
import Swal from 'sweetalert2';
import BloodModal from '../components/BloodModal';
import MBTIModal from '../components/MBTIModal';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as infoActions } from '../redux/modules/info';
import { birthCheck } from '../shared/exp';
import BackGround from '../shared/img/bg.jpg';

function YourInfo(props) {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('male');
  const [birth, setBirth] = useState('');
  const [bloodModal, setBloodModal] = useState(false);
  const [mbtiModal, setMbtiModal] = useState(false);

  const dispatch = useDispatch();

  const yourBlood = useSelector((state) => state.info.yourBlood);
  const bloodInfo = yourBlood.split('형')[0];
  const yourMbti = useSelector((state) => state.info.yourMbti);

  // 이름 상태
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  // 성별 상태
  const onChangeSex = (e) => {
    setGender(e.target.value);
  };

  // 생년월일 상태
  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  };

  const result = () => {
    if (name === '' || birth === '' || yourBlood === '' || yourMbti === '') {
      Swal.fire({
        title: '정보를 모두 입력하세요.',
        icon: 'warning',
      });
      return;
    }

    if (name.length > 10) {
      Swal.fire({
        text: '이름은 10글자 이내로 입력해주세요.',
        icon: 'warning',
      });
      return;
    }

    if (!birthCheck(birth)) {
      Swal.fire({
        text: '생년월일 형식이 옳바르지 않습니다. \n 19991111 형식으로 입력하세요.',
        icon: 'warning',
      });
      return;
    }

    dispatch(
      infoActions.yourInfo({
        name: name,
        gender: gender,
        birth: Number(birth),
        blood: bloodInfo,
        mbti: yourMbti,
      }),
    );
    window.scrollTo({ top: 0, left: 0 });
    props.history.push('/loading');
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
      <>
        <Container>
          <Wrap>
            <Title>상대의 정보를 입력해주세요</Title>
            <main>
              <SortWrap>
                <Text>이름</Text>
                <Input
                  placeholder='이름을 입력해주세요'
                  bordered={false}
                  onChange={onChangeName}
                  maxLength={10}
                />
              </SortWrap>
              <SortWrap>
                <Text>성별</Text>
                <Radio.Group onChange={onChangeSex} value={gender}>
                  <Radio value={'male'} style={{ marginRight: '58px' }}>
                    남
                  </Radio>
                  <Radio value={'female'}>여</Radio>
                </Radio.Group>
              </SortWrap>
              <SortWrap>
                <Text birth>생년월일</Text>
                <Input
                  placeholder='8자리를 입력해주세요'
                  bordered={false}
                  onChange={onChangeBirth}
                  maxLength={8}
                />
              </SortWrap>
              <SortWrap>
                <Text>혈액형</Text>
                <Modal onClick={OpenBloodModal} isBoolean={Boolean(yourBlood)}>
                  {yourBlood === '' ? '혈액형을 입력해주세요' : yourBlood}
                </Modal>
              </SortWrap>
              <SortWrap findMbti>
                <Text>MBTI</Text>
                <Modal onClick={OpenMbtiModal} isBoolean={Boolean(yourMbti)}>
                  {yourMbti === '' ? '혈액형을 입력해주세요' : yourMbti}
                </Modal>
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
            </main>
            <BtnWrap>
              <Button startBtn _onClick={result}>
                결과보기
              </Button>
            </BtnWrap>
          </Wrap>
        </Container>
        <BloodModal status={bloodModal} close={CloseBloodModal} />
        <MBTIModal status={mbtiModal} close={CloseMbtiModal} />
      </>
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
  & main {
    margin-top: 22.5px;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 10px #00000012;
    border: 1px solid #f1f1f1;
    border-radius: 13px;
    padding: 46px 23px 36px;
  }
`;

const SortWrap = styled.div`
  padding-bottom: 11px;
  margin-bottom: ${(props) => (props.findMbti ? '20px' : '40px')};
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
  width: ${(props) => (props.birth ? '90px' : '60px')};
  display: inline-block;
  margin-right: ${(props) => (props.birth ? '20px' : '30px')};
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
  margin-top: 36px;
  width: 100%;
  height: 100px;
  text-align: center;
`;

export default YourInfo;
