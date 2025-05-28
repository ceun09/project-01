const activeAlert = (elem) => {
  let msg;

  if(elem == 'menu') {
    msg = '현재 준비 중입니다.';
  } else {
    msg = '요청하신 작업에 오류가 발생했습니다.';
  };

  alert(msg);
}