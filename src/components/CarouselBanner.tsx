import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Movie } from "@/types/Types";

Autoplay.globalOptions = { delay: 5000 };

function CarouselBanner({ movies }: { movies: Movie[] }) {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 80 });

  return (
    <div
      className="overflow-hidden lg:-mt-40 relative cursor-pointer"
      ref={emblaRef}
    >
      <div className="flex">
        {movies.map((movie) => (
          <div key={movie.id} className="flex-full min-w-0 relative">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt={movie.title}
              width={1920}
              height={1080}
            />
            <div
              className="hidden md:inline absolute mt-0 top-0 left-0 pt-40 
              xl:pt-52 lg:mt-40 bg-transparent h-full w-full bg-gradient-to-r
            from-gray-900/90 to-transparent z-20 p-10 space-y-5"
            >
              <h2 className="text-5xl font-bold max-w-xl z-50 text-white">
                {movie.title}
              </h2>
              <p className="max-w-xl line-clamp-3 text-white">
                {movie.overview}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="dark:absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-gray-300 dark:to-[#020817]"></div>
    </div>
  );
}

export default CarouselBanner;
