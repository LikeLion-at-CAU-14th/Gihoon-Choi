import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { signup } from "../apis/auth";
import { useForm } from "../hooks/useForm";

const Signup = () => {
  const [id, onChangeId] = useForm();
  const [pw, onChangePw] = useForm();
  const [name, onChangeName] = useForm();
  const [age, onChangeAge] = useForm();

  const [errorMessage, setErrorMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const navigate = useNavigate();

  const onClick = async () => {
    setErrorMessage("");

    try {
      await signup(id, pw, name, Number(age));
      setShowToast(true);
      setTimeout(() => navigate("/"), 1200);
    } catch (error) {
      if (error.response?.status === 409) {
        setErrorMessage("이미 가입된 아이디입니다.");
      } else {
        setErrorMessage(
          "회원가입에 실패했습니다. 입력한 정보를 확인해주세요"
        );
      }
    }
  };

  return (
    <Wrapper>
      {showToast && <Toast>회원가입이 완료되었습니다!</Toast>}

      <Title>회원가입</Title>

      <Inputs>
        <div>아이디</div>
        <input value={id} onChange={onChangeId} />

        <div>비밀번호</div>
        <input value={pw} onChange={onChangePw} />

        <div>이름</div>
        <input value={name} onChange={onChangeName} />

        <div>나이</div>
        <input value={age} onChange={onChangeAge} />
      </Inputs>

      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}

      <button onClick={onClick}>가입하기</button>
    </Wrapper>
  );
};

export default Signup;

const Wrapper = styled.div`
  position: relative;
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 28px;
  border: none;
  background: #ffffff;
  box-shadow: 0 12px 32px rgba(80, 130, 180, 0.14);
  padding: 44px 36px 36px;

  button {
    width: 100%;
    background-color: #89cdf6;
    color: white;
    font-weight: 700;
    font-size: 15px;
    padding: 14px;
    border-radius: 12px;
    border: none;
    margin-top: 1.5rem;
    cursor: pointer;
    transition: background-color 0.15s ease, box-shadow 0.15s ease, transform 0.05s ease;
    &:hover {
      background-color: #6fb8ea;
      box-shadow: 0 6px 16px rgba(111, 184, 234, 0.35);
    }
    &:active {
      transform: translateY(1px);
    }
  }
`;

const Title = styled.div`
  font-size: 26px;
  font-weight: 800;
  margin-bottom: 28px;
  color: #43505c;
  font-family: 'SUITE Variable', sans-serif;
`;

const ErrorText = styled.div`
  width: 100%;
  color: #e5484d;
  font-size: 13px;
  font-weight: 600;
  margin-top: -2px;
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

const Inputs = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  div {
    font-size: 13px;
    font-weight: 600;
    color: #94a3b8;
    margin-top: 4px;
  }
  input {
    font-size: 15px;
    width: 100%;
    border-radius: 12px;
    border: 1.5px solid #e3e9f0;
    background: #f8fafc;
    padding: 13px 14px;
    margin-bottom: 4px;
    outline: none;
    transition: border-color 0.15s ease, box-shadow 0.15s ease, background-color 0.15s ease;

    &::placeholder {
      color: #b3bdc9;
      font-size: 14px;
      font-weight: 500;
    }

    &:focus {
      border-color: #89cdf6;
      background: #ffffff;
      box-shadow: 0 0 0 3px rgba(137, 205, 246, 0.25);
    }
  }
`;
