// 게시글 제목과 내용을 입력받고, 제출 시 부모 컴포넌트에 전달하는 폼 컴포넌트
import { useState } from 'react';
import styled from 'styled-components';

interface PostFormProps {
  // [실습] 제목과 내용을 부모에게 전달하는 onAdd 함수 타입 작성하기
  onAdd: (title: string, content: string) => void;
}

export default function PostForm({ onAdd }: PostFormProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      return;
    }
    onAdd(title, content);
    setTitle('');
    setContent('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="게시글 제목을 입력하세요"
      />

      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="게시글 내용을 입력하세요"
      />

      <Button type="submit">추가</Button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
`;

const Input = styled.input`
  padding: 14px 16px;
  border: 1.5px solid #e0e0e0;
  border-radius: 10px;
  outline: none;

  &:focus {
    border-color: #ff6b35;
  }
`;

const Textarea = styled.textarea`
  min-height: 120px;
  padding: 14px 16px;
  border: 1.5px solid #e0e0e0;
  border-radius: 10px;
  outline: none;
  resize: vertical;

  &:focus {
    border-color: #ff6b35;
  }
`;

const Button = styled.button`
  padding: 14px 22px;
  border: none;
  border-radius: 10px;
  background: #ff6b35;
  color: white;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background: #e85a2a;
  }
`;