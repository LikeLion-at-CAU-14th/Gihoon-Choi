import styled from 'styled-components';
import type { Todo } from '../types/todo';

// TODO [STEP 4]: Props 인터페이스를 작성하고 아래 컴포넌트에 연결하기
interface TodoItemProps {
    todo: Todo;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

export default function TodoItem({todo, onToggle, onDelete}: TodoItemProps) {
	return (
	<Item>
	<Text $isDone={todo.isDone}>{todo.text}</Text>
	<ButtonGroup>
	<CheckButton onClick={() => onToggle(todo.id)}>{todo.isDone ? '취소' : '완료'}</CheckButton>
	<DeleteButton onClick={() => onDelete(todo.id)}>삭제</DeleteButton>
	</ButtonGroup>
	</Item>
	);
}

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 18px 20px;
  background: #fafafa;
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  list-style: none;
`;
const Text = styled.span<{ $isDone: boolean }>`
font-size: 16px;
color: ${({ $isDone }) => ($isDone ? '#aaa' : '#1a1a1a')};
text-decoration: ${({ $isDone }) => ($isDone ? 'line-through' : 'none')};
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  flex-shrink: 0;
`;

const CheckButton = styled.button`
  padding: 8px 14px;
  font-size: 13px;
  border-radius: 6px;
  border: 1px solid #ff6b35;
  background: #fff;
  color: #ff6b35;
  cursor: pointer;

  &:hover {
    background: #ff6b35;
    color: #fff;
  }
`;

const DeleteButton = styled.button`
  padding: 8px 14px;
  font-size: 13px;
  border-radius: 6px;
  border: 1px solid #d33;
  background: #fff;
  color: #d33;
  cursor: pointer;

  &:hover {
    background: #d33;
    color: #fff;
  }
`;