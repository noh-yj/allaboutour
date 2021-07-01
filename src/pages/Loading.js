import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators as infoActions } from '../redux/modules/info';

function Loading() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(infoActions.resultInfoDB());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <>loading...</>;
}

export default Loading;
