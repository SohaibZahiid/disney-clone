import { Movie } from "@/types/Types";
import MovieCard from "./MovieCard";

function MoviesList({ movies }: { movies: Movie[] }) {
  return (
    <div>
      {movies?.map((movie) => (
        <div
          key={movie.id}
          className="flex flex-col space-y-5 px-5 mb-5 items-center lg:flex-row space-x-5"
        >
          <MovieCard movie={movie} />
          <div className="max-w-2xl">
            <p className="font-bold">
              {movie.title} ({movie.release_date.split("-")[0]})
            </p>
            <hr className="mb-3" />
            <p>{movie.overview}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MoviesList;
