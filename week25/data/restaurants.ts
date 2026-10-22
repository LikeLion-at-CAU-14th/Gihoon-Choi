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
    name: "놀부부대찌개",
    category: "한식",
    emoji: "🍲",
    menu: "우삼겹부대찌개",
    price: 9000,
    comment: "밥 한 공기가 금방 사라지는 맛",
  },
  {
    id: 2,
    name: "가쯔레쯔",
    category: "일식",
    emoji: "🍱",
    menu: "치즈 돈까스",
    price: 11000,
    comment: "바삭한 튀김옷과 치즈의 조합",
  },
  {
    id: 3,
    name: "한촌설렁탕",
    category: "한식",
    emoji: "🍚",
    menu: "설렁탕",
    price: 10000,
    comment: "든든하게 한 끼 먹기 좋은 곳",
  },
  {
    id: 4,
    name: "프랭크버거",
    category: "양식",
    emoji: "🍔",
    menu: "더블 비프 치즈버거",
    price: 12000,
    comment: "패티와 치즈가 잘 어울리는 버거",
  },
  {
    id: 5,
    name: "멘야마쯔리",
    category: "일식",
    emoji: "🍜",
    menu: "돈코츠 라멘",
    price: 10500,
    comment: "진한 국물이 생각날 때 찾는 곳",
  },
  {
    id: 6,
    name: "롤링파스타",
    category: "양식",
    emoji: "🍝",
    menu: "까르보나라",
    price: 13500,
    comment: "꾸덕한 소스가 맛있는 곳",
  },
];