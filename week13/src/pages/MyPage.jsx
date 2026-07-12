import React from 'react';
import { useUserInfo } from '../context/UserInfoContext';

const MyPage = () => {
  const { state } = useUserInfo();

  return (
    <div>
      <h2>회원 정보</h2>

      <p>이름 : {state.name}</p>
      <p>이메일 : {state.email}</p>
      <p>생년월일 : {state.birth}</p>
      <p>성별 : {state.gender}</p>
    </div>
  );
};

export default MyPage;