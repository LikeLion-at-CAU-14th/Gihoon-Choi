import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          "https://week12-api-rcwo.onrender.com/api/questions"
        );

        setQuestions(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuestions();
  }, []);

  const handleAnswer = (id, answer) => {
    setAnswers((prev) => {
      const others = prev.filter((item) => item.id !== id);

      return [...others, { id, answer }];
    });
  };

  const submitQuiz = async () => {
    if (answers.length !== 5) {
      alert("모든 문제를 풀어주세요.");
      return;
    }

    try {
      const response = await axios.post(
        "https://week12-api-rcwo.onrender.com/api/answers",
        {
          answers: answers,
        }
      );

      const score = response.data.results.filter(
        (item) => item.correct
      ).length;

      navigate("/result", {
        state: {
          score: score,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  if (questions.length === 0) {
    return <h2>Loading...</h2>;
  }

  return (
    <Container>
      <Title>퀴즈</Title>

      {questions.map((question) => (
        <QuestionBox key={question.id}>
          <Question>
            {question.id + 1}. {question.question}
          </Question>

          {question.answers.map((answer) => (
            <AnswerButton
              key={answer}
              selected={
                answers.find(
                  (item) =>
                    item.id === question.id &&
                    item.answer === answer
                )
              }
              onClick={() =>
                handleAnswer(question.id, answer)
              }
            >
              {answer}
            </AnswerButton>
          ))}
        </QuestionBox>
      ))}

      <SubmitButton onClick={submitQuiz}>
        제출하기
      </SubmitButton>
    </Container>
  );
};

export default Quiz;

const Container = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Title = styled.h1`
  text-align: center;
`;

const QuestionBox = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`;

const Question = styled.h3`
  margin-bottom: 15px;
`;

const AnswerButton = styled.button`
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.selected ? "#75b5f5" : "white"};
  color: ${(props) =>
    props.selected ? "white" : "black"};
  border: 1px solid #75b5f5;
`;

const SubmitButton = styled.button`
  margin-top: 20px;
  font-size: 18px;
  align-self: center;
  padding: 10px 20px;
`;