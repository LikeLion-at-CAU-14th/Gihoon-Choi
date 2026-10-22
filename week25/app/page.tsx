import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center gap-6 py-16 text-center">
      <p className="text-6xl">🍚</p>
      <h1 className="text-4xl font-bold">오늘 뭐 먹지?</h1>
      <p className="text-gray-600">
        아기사자들이 직접 먹어보고 모은 학교 앞 맛집 도감
      </p>
      <Link
        href="/restaurants"
        className="rounded-full bg-orange-500 px-6 py-3 font-bold text-white hover:bg-orange-600"
      >
        맛집 보러 가기
      </Link>
    </div>
  );
}