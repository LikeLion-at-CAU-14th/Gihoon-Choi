
"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="w-fit rounded-full border border-orange-500 px-4 py-2 font-bold text-orange-500 hover:bg-orange-500 hover:text-white"
    >
      ← 이전 페이지로 돌아가기
    </button>
  );
}