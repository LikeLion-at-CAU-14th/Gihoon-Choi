import MovieCard from "@/components/MovieCard";
import { movies } from "@/data/movies";

export default function MoviesPage() {
  return (
    <main>
      <h1>영화 목록</h1>

      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}

      </div>
    </main>
  )
}