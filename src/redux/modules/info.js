import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

// 액션
const MYBLOOD = 'MYBLOOD';
const YOURBLOOD = 'YOURBLOOD';
const MYMBTI = 'MYMBTI';
const YOURMBTI = 'YOURMBTI';
const MYINFO = 'MYINFO';

// 액션 생성 함수
const myBlood = createAction(MYBLOOD, (blood) => ({ blood }));
const yourBlood = createAction(YOURBLOOD, (blood) => ({ blood }));
const myMbti = createAction(MYMBTI, (mbti) => ({ mbti }));
const yourMbti = createAction(YOURMBTI, (mbti) => ({ mbti }));
const myInfo = createAction(MYINFO, (info) => ({ info }));

const initialState = {
  myBlood: '',
  myMbti: '',
  yourBlood: '',
  yourMbti: '',
  myInfo: {},
  yourInfo: {},
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
  },
  initialState,
);

const actionCreators = {
  myInfo,
  myBlood,
  yourBlood,
  myMbti,
  yourMbti,
};

export { actionCreators };
