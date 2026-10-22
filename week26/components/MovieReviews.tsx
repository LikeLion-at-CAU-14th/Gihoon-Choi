export default function MovieReviews() {
  const reviews = [
    {
      id: 1,
      rating: 5,
      text: '영화의 분위기가 정말 좋았어요.',
    },
    {
      id: 2,
      rating: 4,
      text: '배우들의 연기가 인상적이었습니다.',
    },
    {
      id: 3,
      rating: 5,
      text: '다시 보고 싶은 영화예요.',
    },
  ];

  return (
    <section className="movie-reviews">
      <h2>관람평</h2>

      <div className="review-list">
        {reviews.map((review) => (
          <article className="review-card" key={review.id}>
            <p className="review-rating">
              {'⭐'.repeat(review.rating)}
            </p>

            <p>{review.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}