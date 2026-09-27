import { useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addPost, getPosts } from './api/posts';

export default function App() {
	// 선택된 게시글 id 상태 만들기
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

  // [실습] queryClient 가져오기
  const queryClient = useQueryClient();

  // [실습] useQuery로 게시글 목록 조회하기
  const postsQuery = useQuery ({
    queryKey: ['posts'],
    queryFn:  getPosts,
  });

  // [실습] useMutation으로 게시글 추가 기능 만들기
  const addPostMutation = useMutation({
    mutationFn: addPost,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['posts']});
    },
  });
  
  // [과제2] useQuery로 선택된 게시글 상세 조회하기(staleTime 추가해보기)


  // [과제3] useMutation으로 게시글 삭제 기능 만들기

  return (
    <Wrapper>
      <Container>
        <Header />

        <PostForm
          // [실습] 게시글 추가 mutation 연결하기
          onAdd={(title, content) => {
            addPostMutation.mutate({title, content});
          }}
        />

        <ContentLayout>
          <ListSection>
            <PostList
              // [실습] 게시글 목록 데이터 전달하기
              posts={postsQuery.data ?? []}
              // [실습] 목록 로딩 상태 전달하기
              isPending={postsQuery.isPending}
              // [실습] 목록 에러 상태 전달하기
              isError={postsQuery.isError}
              // [실습] 게시글 클릭 시 선택된 id 저장하기
              onSelect={setSelectedPostId}
            />
          </ListSection>
          
					{/*
          <DetailSection>
	          {selectedPostId === null ? (
		          <EmptyDetail>게시글을 선택하면 상세 내용이 여기에 표시됩니다.</EmptyDetail>
		        ) : (
			        <PostDetail 
				        // [과제4-1] 상세 조회 결과를 상세 컴포넌트에 전달.
				        // [과제4-2] 상세 조회의 로딩 상태를 전달.
				        // [과제4-3] 상세 조회의 에러 상태를 전달.
				        // [과제4-4] 삭제 버튼을 누르면 현재 선택된 게시글 id로 삭제 mutation을 실행.
			        />
			       )}
          </DetailSection>
          */}
        </ContentLayout>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background: #ffffff;
`;

const Container = styled.main`
  width: 100%;
  max-width: 1200px;
  padding: 60px 32px;
`;

const ContentLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 360px;
  gap: 24px;
  align-items: start;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const ListSection = styled.section`
  min-width: 0;
`;

const DetailSection = styled.aside`
  position: sticky;
  top: 24px;
`;

const EmptyDetail = styled.div`
  padding: 24px;
  border: 1px solid #ededed;
  border-radius: 10px;
  background: #fafafa;
  color: #888;
  line-height: 1.6;
`;