import { getCookie, removeCookie, setCookie } from "../auth/cookieStorage";
import { useEffect, useState } from "react";
import { login } from "../apis/auth";
import { getAccessToken, setTokens } from "../auth/tokenStorage";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import styled from "styled-components";

const SAVED_ID_COOKIE = "saveId";

const Home = () => {
  const [id, onChangeId] = useForm();
  const [pw, onChangePw] = useForm();
  const [errorMessage, setErrorMessage] = useState("");
  const [rememberId, setRememberId] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = getAccessToken();

    if (accessToken) {
      navigate("/mypage");
      return;
    }

    const saveId = getCookie(SAVED_ID_COOKIE);

    if (saveId) {
      onChangeId({ target: { value: saveId } });
      setRememberId(true);
    }
  }, [navigate]);

  const onClick = async () => {
    setErrorMessage("");

    try {
      const result = await login(id, pw);
      setTokens(result);

      if (rememberId) {
        setCookie(SAVED_ID_COOKIE, id);
      } else {
        removeCookie(SAVED_ID_COOKIE);
      }

      navigate("/mypage");
    } catch (error) {
      setErrorMessage("아이디 또는 비밀번호를 확인해주세요.");
    }
  };

  return (
    <>
      <Wrapper>
        <Title>로그인</Title>

        <Form>
          <Inputs>
            <div>아이디</div>
            <input value={id} onChange={onChangeId} />

            <div>비밀번호</div>
            <input
              type="password"
              value={pw}
              onChange={onChangePw}
            />
          </Inputs>

          <RememberRow>
            <input
              type="checkbox"
              id="rememberId"
              checked={rememberId}
              onChange={(e) => setRememberId(e.target.checked)}
            />
            <label htmlFor="rememberId">아이디 저장</label>
          </RememberRow>

          {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
        </Form>

        <BtnWrapper>
          <button onClick={onClick}>로그인</button>

          <SignupFooter>
            아직 계정이 없으신가요?
            <SignupLink to="/signup">회원가입</SignupLink>
          </SignupFooter>
        </BtnWrapper>
      </Wrapper>
    </>
  );
};

export default Home;

const Wrapper = styled.div`
  width: 360px;
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  flex-shrink: 0;
  border-radius: 28px;
  border: none;
  background: #ffffff;
  box-shadow: 0 12px 32px rgba(80, 130, 180, 0.14);
  padding: 44px 36px 36px;
  margin-bottom: 5%;
  z-index: 1;
`;

const RememberRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 2px;
  font-size: 13px;
  color: #94a3b8;

  input[type="checkbox"] {
    width: 14px;
    height: 14px;
    accent-color: #89cdf6;
    cursor: pointer;
  }

  label {
    cursor: pointer;
  }
`;

const ErrorText = styled.div`
  width: 100%;
  color: #e5484d;
  font-size: 13px;
  font-weight: 600;
  margin-top: 6px;
`;

const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 1.75rem;

  button {
    font-weight: 700;
    font-size: 15px;
    background-color: #89cdf6;
    color: white;
    padding: 14px;
    border-radius: 12px;
    border: none;
    width: 100%;
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
  line-height: normal;
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Inputs = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 6px;
  width: 100%;

  div {
    font-weight: 600;
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

const SignupFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  margin-top: 6px;
  font-size: 13px;
  color: #9aa5b1;
`;

const SignupLink = styled(Link)`
  color: #6fb1e0;
  font-family: 'SUITE Variable', sans-serif;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.15s ease;
  &:hover {
    color: #43505c;
    text-decoration: underline;
  }
`;
