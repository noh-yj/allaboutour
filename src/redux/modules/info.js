import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import axios from 'axios';
import { config } from '../../config';
import Swal from 'sweetalert2';

// 액션
const MYBLOOD = 'MYBLOOD';
const YOURBLOOD = 'YOURBLOOD';
const MYMBTI = 'MYMBTI';
const YOURMBTI = 'YOURMBTI';
const MYINFO = 'MYINFO';
const YOURINFO = 'YOURINFO';
const RESULTINFO = 'RESULTINFO';
const CLEARINFO = 'CLEARINFO';

// 액션 생성 함수
const myBlood = createAction(MYBLOOD, (blood) => ({ blood }));
const yourBlood = createAction(YOURBLOOD, (blood) => ({ blood }));
const myMbti = createAction(MYMBTI, (mbti) => ({ mbti }));
const yourMbti = createAction(YOURMBTI, (mbti) => ({ mbti }));
const myInfo = createAction(MYINFO, (info) => ({ info }));
const yourInfo = createAction(YOURINFO, (info) => ({ info }));
const resultInfo = createAction(RESULTINFO, (info) => ({ info }));
const clearInfo = createAction(CLEARINFO, () => ({}));

const initialState = {
  myBlood: '',
  myMbti: '',
  yourBlood: '',
  yourMbti: '',
  myInfo: {},
  yourInfo: {},
  resultInfo: {},
};

const resultInfoDB = () => {
  return function (dispatch, getState, { history }) {
    const myInfo = getState().info.myInfo;
    const yourInfo = getState().info.yourInfo;
    axios({
      method: 'post',
      url: `${config.api}/judgment`,
      data: {
        me: {
          name: myInfo.name,
          gender: myInfo.gender,
          blood: myInfo.blood,
          mbti: myInfo.mbti,
          born: myInfo.birth,
        },
        you: {
          name: yourInfo.name,
          gender: yourInfo.gender,
          blood: yourInfo.blood,
          mbti: yourInfo.mbti,
          born: yourInfo.birth,
        },
      },
    })
      .then((res) => {
        dispatch(resultInfo(res.data));
      })
      .then(() => {
        history.push('/result');
      })
      .catch((e) => {
        console.error(e);
        Swal.fire({
          title: '에러가 발생했습니다. 다시 시도해주세요 😭',
          icon: 'error',
        });
        history.replace('/');
        dispatch(clearInfo());
      });
  };
};

export default handleActions(
  {
    [MYBLOOD]: (state, action) =>
      produce(state, (draft) => {
        draft.myBlood = action.payload.blood;
      }),
    [YOURBLOOD]: (state, action) =>
      produce(state, (draft) => {
        draft.yourBlood = action.payload.blood;
      }),
    [MYMBTI]: (state, action) =>
      produce(state, (draft) => {
        draft.myMbti = action.payload.mbti;
      }),
    [YOURMBTI]: (state, action) =>
      produce(state, (draft) => {
        draft.yourMbti = action.payload.mbti;
      }),
    [MYINFO]: (state, action) =>
      produce(state, (draft) => {
        draft.myInfo = action.payload.info;
      }),
    [YOURINFO]: (state, action) =>
      produce(state, (draft) => {
        draft.yourInfo = action.payload.info;
      }),
    [RESULTINFO]: (state, action) =>
      produce(state, (draft) => {
        draft.resultInfo = action.payload.info;
      }),
    [CLEARINFO]: (state, action) =>
      produce(state, (draft) => {
        draft.myBlood = '';
        draft.myMbti = '';
        draft.yourBlood = '';
        draft.yourMbti = '';
        draft.myInfo = {};
        draft.yourInfo = {};
        draft.resultInfo = {};
      }),
  },
  initialState,
);

const actionCreators = {
  myInfo,
  yourInfo,
  myBlood,
  yourBlood,
  myMbti,
  yourMbti,
  resultInfoDB,
  clearInfo,
};

export { actionCreators };
