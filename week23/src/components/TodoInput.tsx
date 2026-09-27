import { useState } from 'react';
import styled from 'styled-components';

// TODO [실습 2단계]: TodoInputProps 정의 (onAdd 함수 타입)
interface TodoInputProps {
    onAdd: (text: string) => void;
}
export default function TodoInput({onAdd}: TodoInputProps) {
const [text, setText] = useState('');
// TODO [실습 2단계]: ChangeEvent 타이핑 및 상태 업데이트
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
setText(e.target.value);
};
// TODO [실습 2단계]: FormEvent 타이핑 및 onAdd 호출
const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
e.preventDefault();
if (!text.trim()) return;
onAdd(text);
setText('');
};

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="할 일을 입력하고 Enter를 누르세요..."
        value={text}
        onChange={handleChange}
      />
      <Button type="submit">추가 </Button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  gap: 12px;
  margin-bottom: 32px;
`;

const Input = styled.input`
  flex: 1;
  padding: 16px 20px;
  background-color: #ffffff;
  color: #1a1a1a;
  border: 1.5px solid #e0e0e0;
  border-radius: 12px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.2s;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    border-color: #ff6b35;
  }
`;

const Button = styled.button`
  padding: 16px 32px;
  background: #ff6b35;
  color: #fff;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background: #e85a2a;
  }
`;