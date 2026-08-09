import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { getMyPage } from "../apis/user";
import { clearTokens } from "../auth/tokenStorage";

const Mypage = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [toastMessage, setToastMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getMyPage()
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        // Refresh Token 만료 시 privateAxios에서 처리
      });
  }, []);

  const onLogout = () => {
    clearTokens();
    navigate("/");
  };

  if (loading)
    return (
      <Wrapper>
        {toastMessage && <Toast>{toastMessage}</Toast>}
        <Loading>불러오는 중...</Loading>
      </Wrapper>
    );

  return (
    <Wrapper>
      {toastMessage && <Toast>{toastMessage}</Toast>}

      <Avatar>{data.name?.[0]}</Avatar>

      <Title>마이페이지</Title>

      <InfoList>
        <InfoRow>
          <span>이름</span>
          <strong>{data.name}</strong>
        </InfoRow>

        <InfoRow>
          <span>나이</span>
          <strong>{data.age}</strong>
        </InfoRow>
      </InfoList>

      <LogoutButton onClick={onLogout}>
        로그아웃
      </LogoutButton>
    </Wrapper>
  );
};

export default Mypage;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  border: none;
  background: #ffffff;
  box-shadow: 0 12px 32px rgba(80, 130, 180, 0.14);
  padding: 44px 36px 36px;
  border-radius: 28px;
  width: 320px;
`;

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, 6px);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
`;

const Toast = styled.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translate(-50%, 0);
  margin-bottom: 14px;
  white-space: nowrap;
  background: #2f9e64;
  color: white;
  font-size: 14px;
  font-weight: 700;
  padding: 12px 20px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(47, 158, 100, 0.35);
  animation: ${slideDown} 0.25s ease-out;
  z-index: 10;
`;

const Avatar = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(145deg, #89cdf6, #6fb1e0);
  color: white;
  font-size: 26px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
`;

const Title = styled.div`
  font-size: 24px;
  margin-bottom: 28px;
  color: #43505c;
  font-family: 'SUITE Variable', sans-serif;
  font-weight: 800;
  line-height: normal;
`;

const InfoList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 8px;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 14px 16px;
  border-radius: 12px;
  background: #f8fafc;

  span {
    font-size: 13px;
    font-weight: 600;
    color: #94a3b8;
  }

  strong {
    font-size: 16px;
    font-weight: 700;
    color: #43505c;
  }
`;

const Loading = styled.div`
  font-size: 14px;
  color: #94a3b8;
  padding: 20px 0;
`;

const LogoutButton = styled.button`
  margin-top: 1.75rem;
  width: 100%;
  font-weight: 700;
  font-size: 15px;
  background-color: #89cdf6;
  color: white;
  padding: 14px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: background-color 0.15s ease, box-shadow 0.15s ease, transform 0.05s ease;
  &:hover {
    background-color: #6fb8ea;
    box-shadow: 0 6px 16px rgba(111, 184, 234, 0.35);
  }
  &:active {
    transform: translateY(1px);
  }
`;
