import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

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
    dispatch(resultInfo());
    setTimeout(() => {
      history.push('/result');
    }, 1000);
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
