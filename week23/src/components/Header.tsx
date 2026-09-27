import styled from 'styled-components';

export default function Header() {
  const today = new Date().toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  });

  return (
    <Container>
      <Title>TodoList</Title>
      <DateText>{today}</DateText>
    </Container>
  );
}

const Container = styled.header`
  padding-bottom: 24px;
  border-bottom: 2px solid #f1f1f1;
  margin-bottom: 32px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 8px;
`;

const DateText = styled.p`
  font-size: 15px;
  color: #888;
`;