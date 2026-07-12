import React, { useContext, useState } from 'react';
import { ThemeColorContext } from '../../context/context';

import { Wrapper, Card, Title, Button } from '../layout/common';
import Form from './Form';
import { useNavigate } from 'react-router-dom';

import { useUserInfo } from '../../context/UserInfoContext';

const FormSection = () => {
  const mode = useContext(ThemeColorContext);
  const navigate = useNavigate();

  const { dispatch } = useUserInfo();

  const [form, setForm] = useState({
    name: '',
    email: '',
    birth: '',
    gender: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    dispatch({
      type: 'SET_USER',
      payload: form,
    });

    navigate('/mypage');
  };

  return (
    <Wrapper>
      <Card>
        <Title>회원 정보 입력</Title>

        <Form
          type="text"
          label="이름"
          name="name"
          value={form.name}
          onChange={handleChange}
        />

        <Form
          type="email"
          label="이메일"
          name="email"
          value={form.email}
          onChange={handleChange}
        />

        <Form
          type="date"
          label="생년월일"
          name="birth"
          value={form.birth}
          onChange={handleChange}
        />

        <Form
          label="성별"
          name="gender"
          value={form.gender}
          onChange={handleChange}
        />

        <Button
          mode={mode.button}
          onClick={handleSubmit}
        >
          제출하기
        </Button>
      </Card>
    </Wrapper>
  );
};

export default FormSection;