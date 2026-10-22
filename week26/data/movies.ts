
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
    title: "너의 이름은.",
    year: 2016,
    genre: "애니메이션, 로맨스, 판타지",
    director: "신카이 마코토",
    description:
      "서로 다른 곳에 사는 소년과 소녀가 꿈속에서 몸이 바뀌는 신비한 경험을 하게 됩니다.\n두 사람은 서로의 흔적을 따라가며 운명처럼 연결된 관계를 발견합니다.",
    image: "/posters/your name.jpg",
  },
  {
    id: 2,
    title: "스즈메의 문단속",
    year: 2022,
    genre: "애니메이션, 판타지, 모험",
    director: "신카이 마코토",
    description:
      "문을 찾아 여행하는 소녀 스즈메가 재난을 막기 위해 여러 장소의 문을 닫아 갑니다.\n여정 속에서 만남과 이별, 그리고 성장의 의미를 배워 나갑니다.",
    image: "/posters/suzume.jpg",
  },
  {
    id: 3,
    title: "날씨의 아이",
    year: 2019,
    genre: "애니메이션, 판타지, 로맨스",
    director: "신카이 마코토",
    description:
      "도쿄로 온 소년 호다카는 날씨를 맑게 할 수 있는 소녀 히나를 만납니다.\n두 사람은 특별한 능력과 그에 따르는 선택을 마주하게 됩니다.",
    image: "/posters/weathering with you.jpg",
  },
  {
    id: 4,
    title: "범죄도시4",
    year: 2024,
    genre: "액션, 범죄",
    director: "허명행",
    description:
      "괴물 형사 마석도가 대규모 온라인 불법 도박 조직을 추적합니다.\n새로운 범죄에 맞서 수사팀과 함께 강력한 작전을 펼칩니다.",
    image: "/posters/the roundup punishment.jpg",
  },
  {
    id: 5,
    title: "쿵푸팬더4",
    year: 2024,
    genre: "애니메이션, 액션, 코미디",
    director: "마이크 미첼",
    description:
      "용의 전사 포는 새로운 역할을 앞두고 후계자를 찾아야 합니다.\n강력한 적과 맞서며 자신과 다른 이들의 가능성을 발견합니다.",
    image: "/posters/kung fu panda 4.jpg",
  },
  {
    id: 6,
    title: "슈퍼 마리오 브라더스",
    year: 2023,
    genre: "애니메이션, 모험, 코미디",
    director: "아론 호바스, 마이클 젤레닉",
    description:
      "배관공 마리오가 신비한 세계로 이동해 루이지를 구하기 위한 모험을 시작합니다.\n피치 공주와 동료들의 도움을 받아 쿠파에 맞섭니다.",
    image: "/posters/the super mario bros movie.jpg",
  },
];