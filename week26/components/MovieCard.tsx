import Image from "next/image";
import { Movie } from "@/data/movies";
import Link from "next/link";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <article className="movie-card">
      <Image
  src={movie.image}
  alt={movie.title}
  width={250}
  height={350}
/>

      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.year}, {movie.genre}</p>
        <Link href={`/movies/${movie.id}`}>상세 정보</Link>
      </div>
    </article>
  );
}