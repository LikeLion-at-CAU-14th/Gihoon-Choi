import styled from 'styled-components';
import Header from './components/Header';
import TodoStats from './components/TodoStats';
import TodoInput from './components/TodoInput';
import { useState } from 'react';
import type { QuoteResponse, Todo, FilterType } from './types/todo';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      isDone: false,
    };

    setTodos([...todos, newTodo]);
  };

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isDone: !todo.isDone }
          : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completedCount = todos.filter((todo) => todo.isDone).length;

  const [filter, setFilter] = useState<FilterType>('all');

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') {
      return !todo.isDone;
    }

    if (filter === 'completed') {
      return todo.isDone;
    }

    return true;
  });

  const [quote, setQuote] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFetchQuote = async () => {
    try {
      setIsLoading(true);

      const res = await fetch('https://dummyjson.com/quotes/random');
      const data: QuoteResponse = await res.json();

      setQuote(data.quote);
      setAuthor(data.author);
    } catch (error) {
      console.error('API 연동 중 오류 발생:', error);
      alert('오늘의 명언을 불러오는데 실패했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Wrapper>
      <Container>
        <Header />

        <TodoStats
          total={todos.length}
          completed={completedCount}
        />

        <AdviceSection>
          <RecommendButton
            onClick={handleFetchQuote}
            disabled={isLoading}
          >
            {isLoading
              ? '명언가져오는중...'
              : '오늘의 동기부여 명언 보기'}
          </RecommendButton>

          {quote && (
            <AdviceBox>
              <QuoteText>"{quote}"</QuoteText>
              <QuoteAuthor>- {author} -</QuoteAuthor>
            </AdviceBox>
          )}
        </AdviceSection>

        <TodoInput onAdd={handleAdd} />

        <FilterContainer>
          <FilterButton
            $active={filter === 'all'}
            onClick={() => setFilter('all')}
          >
            전체
          </FilterButton>

          <FilterButton
            $active={filter === 'active'}
            onClick={() => setFilter('active')}
          >
            진행 중
          </FilterButton>

          <FilterButton
            $active={filter === 'completed'}
            onClick={() => setFilter('completed')}
          >
            완료
          </FilterButton>
        </FilterContainer>

        <TodoList>
          {filteredTodos.length === 0 ? (
            <Empty>해당하는 할 일이 없습니다.</Empty>
          ) : (
            filteredTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={handleToggle}
                onDelete={handleDelete}
              />
            ))
          )}
        </TodoList>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background: #ffffff;
`;

const Container = styled.div`
  width: 100%;
  max-width: 640px;
  padding: 60px 24px;
`;

const TodoList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Empty = styled.p`
  text-align: center;
  color: #aaa;
  font-size: 15px;
  padding: 40px 0;
`;

const AdviceSection = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const AdviceBox = styled.div`
  padding: 16px 20px;
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const QuoteText = styled.p`
  font-size: 15px;
  color: #343a40;
  line-height: 1.5;
  margin: 0;
  font-style: italic;
`;

const QuoteAuthor = styled.p`
  font-size: 13px;
  color: #868e96;
  text-align: right;
  margin: 0;
  font-weight: 600;
`;

const RecommendButton = styled.button`
  width: 100%;
  padding: 14px;
  background-color: #f0f4ff;
  color: #4c6ef5;
  border: 1px dashed #748ffc;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #dbe4ff;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
`;

const FilterButton = styled.button<{ $active: boolean }>`
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid
    ${({ $active }) =>
      $active ? '#ff6b35' : '#e0e0e0'};
  background-color: ${({ $active }) =>
    $active ? '#ff6b35' : '#ffffff'};
  color: ${({ $active }) =>
    $active ? '#ffffff' : '#666666'};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #ff6b35;
  }
`;