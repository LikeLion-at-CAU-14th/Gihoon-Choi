export interface Movie {
  id: number;
  title: string;
  year: number;
  genre: string;
  director: string;
  description: string;
  image: string;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: '이터널 선샤인',
    year: 2004,
    genre: '로맨스, SF',
    director: '미셸 공드리',
    description:
      '헤어진 연인의 기억을 지우기로 한 남녀의 이야기입니다.\n기억을 지우는 과정에서 서로를 사랑했던 순간들을 다시 마주하게 됩니다.',
    image: '/posters/eternal sunshine.jpg',
  },
  {
    id: 2,
    title: '킬 빌',
    year: 2003,
    genre: '액션',
    director: '쿠엔틴 타란티노',
    description:
      '복수를 위해 자신을 배신한 사람들을 찾아 나서는 여자의 이야기입니다.\n강렬한 액션과 독특한 연출이 돋보이는 복수극입니다.',
    image: '/posters/kill bill.jpg',
  },
  {
    id: 3,
    title: '센티멘탈 밸류',
    year: 2025,
    genre: '드라마',
    director: '요아킴 트리에',
    description:
      '한 가족이 오랜 시간 동안 쌓아온 관계와 갈등을 마주하는 이야기입니다.\n가족과 사랑, 예술에 대한 복잡한 감정을 섬세하게 그려냅니다.',
    image: '/posters/sentimental value.jpg',
  },
  {
    id: 4,
    title: '중경상림',
    year: 1994,
    genre: '로맨스, 드라마',
    director: '왕가위',
    description:
      '홍콩을 배경으로 서로 다른 두 남녀의 만남과 사랑을 그린 이야기입니다.\n도시의 쓸쓸함과 사랑의 순간을 감각적으로 담아냅니다.',
    image: '/posters/chungking express.jpg',
  },
  {
    id: 5,
    title: '듄',
    year: 2021,
    genre: 'SF',
    director: '드니 빌뇌브',
    description:
      '사막 행성 아라키스를 둘러싼 거대한 운명과 갈등을 그린 이야기입니다.\n한 청년이 자신의 운명을 받아들이며 성장해가는 과정을 담고 있습니다.',
    image: '/posters/dune.jpg',
  },
  {
    id: 6,
    title: '매트릭스',
    year: 1999,
    genre: 'SF, 액션',
    director: '릴리 워쇼스키, 라나 워쇼스키',
    description:
      '현실이라고 믿었던 세계가 거대한 가상현실임을 알게 된 한 남자의 이야기입니다.\n진짜 현실을 찾기 위한 선택과 싸움을 그린 SF 액션 영화입니다.',
    image: '/posters/matrix.jpg',
  },
];