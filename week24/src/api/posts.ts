import type { Post } from '../types/post';

const STORAGE_KEY = 'mini-board-posts';

// 처음 실행했을 때 보여줄 기본 게시글 데이터
const initialPosts: Post[] = [
  {
    id: 1,
    title: 'TanStack Query 시작하기',
    content: '서버 상태를 더 편하게 관리할 수 있습니다.',
  },
  {
    id: 2,
    title: 'queryKey란?',
    content: 'queryKey는 캐시된 데이터를 구분하는 이름표입니다.',
  },
  {
    id: 3,
    title: 'Mutation이란?',
    content: '서버 데이터를 추가, 수정, 삭제할 때 사용합니다.',
  },
];

interface AddPostInput {
  title: string;
  content: string;
}

const loadPosts = (): Post[] => {
  const savedPosts = localStorage.getItem(STORAGE_KEY);

  if (!savedPosts) {
    return initialPosts;
  }

  return JSON.parse(savedPosts);
};

const savePosts = (posts: Post[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
};

let posts: Post[] = loadPosts();

const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// [실습] 게시글 목록 조회 함수 작성하기
export async function getPosts() : Promise<Post[]> {
  await delay(500);
  return posts;
}

// [실습] 게시글 추가 함수 작성하기
export async function addPost({ title, content }: AddPostInput) : Promise<Post> {
  await delay(500);
  const newPost:Post = { id: Date.now(), title, content, };
  posts = [newPost, ...posts];
  savePosts(posts);
  return newPost;
}

// [과제 1-1] 게시글 상세 조회 함수 작성하기

// [과제 1-2] 게시글 삭제 함수 작성하기