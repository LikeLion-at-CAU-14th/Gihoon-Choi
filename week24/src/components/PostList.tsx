// 게시글 목록과 목록 조회 상태를 화면에 보여주는 컴포넌트
import styled from 'styled-components';
import type { Post } from '../types/post';
import PostItem from './PostItem';

interface PostListProps {
  posts: Post[];
  // [실습] useQuery가 제공하는 로딩, 에러상태
  isPending: boolean;
  isError: boolean;
  onSelect: (id: number) => void;
}

export default function PostList({
  posts,
  isPending,
  isError,
  onSelect,
}: PostListProps) {
  // [실습] 로딩 상태일 때 보여줄 화면 작성하기
  if (isPending) {
    return <Message>게시글을 불러오는 중입니다..</Message>;
  }

  // [실습] 에러 상태일 때 보여줄 화면 작성하기
  if (isError) {
    return <Message>게시글을 불러오지 못했습니다.</Message>;
  }

  return (
    <List>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} onSelect={onSelect} />
      ))}
    </List>
  );
}

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0;
  margin: 0;
`;

const Message = styled.p`
  padding: 40px 0;
  text-align: center;
  color: #999;
`;