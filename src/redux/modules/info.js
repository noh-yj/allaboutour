import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

// 액션
const MYBLOOD = 'MYBLOOD';
const YOURBLOOD = 'YOURBLOOD';
const MYINFO = 'MYINFO';

// 액션 생성 함수
const myBlood = createAction(MYBLOOD, (blood) => ({ blood }));
const yourBlood = createAction(YOURBLOOD, (blood) => ({ blood }));
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
    [MYINFO]: (state, action) =>
      produce(state, (draft) => {
        draft.info = action.payload.info;
      }),
  },
  initialState,
);

const actionCreators = {
  myInfo,
  myBlood,
  yourBlood,
};

export { actionCreators };
