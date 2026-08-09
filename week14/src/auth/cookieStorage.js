// 브라우저 쿠키에 데이터를 저장하는 함수
export const setCookie = (name, value, days = 7) => {
  // 쿠키가 언제 사라질지 만료 날짜를 계산하는 자바스크립트 내장 문법
  const expires = new Date(
    Date.now() + days * 24 * 60 * 60 * 1000,
  ).toUTCString();
  // 한글이나 특수문자가 깨지지 않도록 encodeURIComponent로 감싸서 쿠키에 저장
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
};

// 저장된 쿠키 문자열 속에서 내가 원하는 이름의 쿠키 값만 골라내서 가져오는 함수
export const getCookie = (name) => {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  // 찾았으면 디코딩해서 돌려주고, 없으면 없다고 null을 리턴
  return match ? decodeURIComponent(match[1]) : null;
};

// 쿠키를 지우는 함수
// 쿠키의 만료일을 1970년 등 아주 먼 과거로 설정해 버리면,
// 브라우저가 이미 지난 쿠키라 인삭하고 그 즉시 자동으로 파기하는 원리를 이용
export const removeCookie = (name) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
};
