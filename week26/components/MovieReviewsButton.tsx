"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const MovieReviews = dynamic(
  () => import("@/components/MovieReviews"),
  {
    loading: () => <p>관람평을 불러오는 중...</p>,
  }
);

export default function MovieReviewsButton() {
  const [showReviews, setShowReviews] = useState(false);

  return (
    <section>
      <button
        className="movie-reviews-button"
        onClick={() => setShowReviews((prev) => !prev)}
      >
        {showReviews ? "관람평 숨기기" : "관람평 보기"}
      </button>

      {showReviews && <MovieReviews />}
    </section>
  );
}