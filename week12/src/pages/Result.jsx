import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const score = location.state?.score ?? 0;

  const [result, setResult] = useState({
    score: 0,
    message: "",
  });

  useEffect(() => {
    const fetchResult = async () => {
      const response = await axios.get(
        `https://week12-api-rcwo.onrender.com/api/result?score=${score}`
      );

      setResult(response.data);
    };

    fetchResult();
  }, [score]);

  const goHome = () => {
    navigate("/");
  };

  return (
    <Container>
      <Title>퀴즈 결과</Title>

      <Score>
        점수 : {result.score} / 5
      </Score>

      <Message>
        {result.message}
      </Message>

      <Button onClick={goHome}>
        홈으로 돌아가기
      </Button>
    </Container>
  );
};

export default Result;

const Container = styled.div`
  width: 600px;
  background: white;
  padding: 40px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Title = styled.h1`
  margin: 0;
`;

const Score = styled.h2`
  color: #3d9dfd;
`;

const Message = styled.h3`
  color: #555;
`;

const Button = styled.button`
  margin-top: 20px;
`;