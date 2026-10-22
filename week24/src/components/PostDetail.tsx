// 선택된 게시글의 상세 내용과 삭제 버튼을 보여주는 컴포넌트
import styled from 'styled-components';
import type { Post } from '../types/post';

interface PostDetailProps {
  post?: Post;
  isPending: boolean;
	isError: boolean;
  onDelete: () => void;
}

export default function PostDetail({
  post,
  isPending,
  isError,
  onDelete,
}: PostDetailProps) {
  if (isPending) {
    return <Box>상세 정보를 불러오는 중입니다...</Box>;
  }
  
  if (isError) {
    return <Box>상세 정보를 불러오지 못했습니다.</Box>;
  }
  
  if (!post) {
    return <Box>게시글을 선택해보세요.</Box>;
  }

  return (
    <Box>
      <Title>{post.title}</Title>
      <Content>{post.content}</Content>
      <DeleteButton onClick={onDelete}>삭제</DeleteButton>
    </Box>
  );
}

const Box = styled.section`
  padding: 24px;
  border: 1px solid #ededed;
  border-radius: 10px;
  background: #ffffff;
`;

const Title = styled.h2`
  margin: 0 0 12px;
  font-size: 24px;
`;

const Content = styled.p`
  margin: 0;
  color: #555;
  line-height: 1.7;
  white-space: pre-wrap;
`;

const DeleteButton = styled.button`
  margin-top: 20px;
  padding: 10px 14px;
  border: 1px solid #d33;
  border-radius: 8px;
  background: white;
  color: #d33;
  cursor: pointer;

  &:hover {
    background: #d33;
    color: white;
  }
`;