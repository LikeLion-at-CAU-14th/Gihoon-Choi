// 앱 제목과 간단한 설명을 보여주는 헤더 컴포넌트
import styled from 'styled-components';

export default function Header() {
  return (
    <Container>
      <Title>🦁Mini Board🦁</Title>
      <Description>TanStack Query로 게시글을 관리해보기.</Description>
    </Container>
  );
}

const Container = styled.header`
  margin-bottom: 28px;
  padding-bottom: 20px;
  border-bottom: 2px solid #f1f1f1;
`;

const Title = styled.h1`
  margin: 0 0 8px;
  font-size: 32px;
  font-weight: 700;
`;

const Description = styled.p`
  margin: 0;
  color: #777;
  font-size: 15px;
`;