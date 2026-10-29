
import { movies } from "@/data/movies";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Noto_Serif_KR } from "next/font/google";
import MovieReviewsButton from "@/components/MovieReviewsButton";

const detailFont = Noto_Serif_KR({
  weight: "400",
  subsets: ["latin"],
});

interface MovieDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function MovieDetailPage({
  params,
}: MovieDetailPageProps) {
  const { id } = await params;

  const movie = movies.find(
    (movie) => movie.id === Number(id)
  );

  if (!movie) {
    notFound();
  }

  return (
    <main>
      <div className={`movie-detail ${detailFont.className}`}>
        <Image
          src={movie.image}
          alt={movie.title}
          width={300}
          height={420}
        />

        <section>
          <h1>{movie.title}</h1>

          <p>
            {movie.year} · {movie.genre} · {movie.director}
          </p>

          <p style={{ whiteSpace: "pre-line" }}>
            {movie.description}
          </p>

          <MovieReviewsButton />
        </section>
      </div>
    </main>
  );
}