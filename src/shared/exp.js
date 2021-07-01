// 정규식 처리 이름, 생년월일

// 이름 한글 2~4자 이내, 영문 2~10자 이내 혼용 x
export const nameCheck = (name) => {
  let reg = /^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/;

  return reg.test(name);
};

// 생년월일 8자
export const birthCheck = (birth) => {
  let reg = /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/;

  return reg.test(birth);
};
