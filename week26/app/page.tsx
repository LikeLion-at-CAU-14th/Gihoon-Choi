import Link from "next/link";

export default function Home() {
  return (
    <section className="home">
      <h2>영화 아카이브</h2>

      <p>
        영화를 선택하고,
        영화 정보를 회상해보세요.
      </p>

      {/* 실습 - Link Prefetching */}
      <Link href="/movies" className="button">영화 목록 보기</Link>

    </section>
  );
}