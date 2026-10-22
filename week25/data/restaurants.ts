// data/restaurants.ts
export type Restaurant = {
  id: number;
  name: string;
  category: string;
  emoji: string;
  menu: string;
  price: number;
  comment: string;
};

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "아기사자 분식",
    category: "분식",
    emoji: "🍜",
    menu: "라볶이",
    price: 6000,
    comment: "시험기간에 여기 없었으면 못 버텼다",
  },
  {
    id: 2,
    name: "멋사 돈까스",
    category: "일식",
    emoji: "🍱",
    menu: "치즈 돈까스",
    price: 9500,
    comment: "치즈가 접시 밖으로 탈출함",
  },
  {
    id: 3,
    name: "새벽 국밥",
    category: "한식",
    emoji: "🍲",
    menu: "순대국밥",
    price: 9000,
    comment: "해커톤 끝나고 먹으면 눈물 나는 맛",
  },
  {
    id: 4,
    name: "코딩 버거",
    category: "양식",
    emoji: "🍔",
    menu: "더블 치즈버거",
    price: 8500,
    comment: "한 손엔 버거, 한 손엔 키보드",
  },
];