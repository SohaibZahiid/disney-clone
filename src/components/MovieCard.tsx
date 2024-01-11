import { Movie } from "@/types/Types";

function MovieCard({ movie }: { movie: Movie }) {
  return (
    <figure className="relative mb-6 cursor-pointer flex-shrink-0 hover:scale-[1.030] transition-transform duration-100">
      <div className="absolute inset-0 dark:bg-gradient-to-b from-gray-200/0 via-gray-900/10 to-gray-300 dark:to-[#020817]/80 z-10" />
      <figcaption className="absolute z-20 bottom-5 left-5 text-white">
        {movie.title}
      </figcaption>
      <img
        className="w-fit lg:min-w-[400px] h-56 object-cover shadow-md
         shadow-gray-900 drop-shadow-2xl rounded-md"
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        width={1920}
        height={1080}
        alt={movie.title}
      />
    </figure>
  );
}

export default MovieCard;
