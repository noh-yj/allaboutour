// 정규식 처리 생년월일

// 생년월일 8자
export const birthCheck = (birth) => {
  let reg = /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/;

  return reg.test(birth);
};
