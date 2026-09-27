// 게시글 하나의 화면과 클릭 이벤트를 담당하는 컴포넌트
import styled from 'styled-components';
import type { Post } from '../types/post';

interface PostItemProps {
  post: Post;
	onSelect: (id: number) => void;
}

export default function PostItem({ post, onSelect }: PostItemProps) {
  return (
    <Item onClick={() => onSelect(post.id)}>
      <Title>{post.title}</Title>
      <Content>{post.content}</Content>
    </Item>
  );
}

const Item = styled.li`
  padding: 18px 20px;
  border: 1px solid #ededed;
  border-radius: 10px;
  list-style: none;
  cursor: pointer;
  background: #fafafa;

  &:hover {
    border-color: #ff6b35;
  }
`;

const Title = styled.h3`
  margin: 0 0 8px;
  font-size: 17px;
`;

const Content = styled.p`
  margin: 0;
  color: #777;
  font-size: 14px;
`;