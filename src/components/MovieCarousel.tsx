import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Movie } from "@/types/Types";
import MovieCard from "./MovieCard";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  movies: Movie[];
};

function MovieCarousel({ title, movies }: Props) {
  return (
    <div className="z-50">
      <h2 className="text-xl font-bold mx-10">{title}</h2>
      <ScrollArea className="whitespace-nowrap rounded-md border mx-5 lg:mx-10 my-5">
        <div className={cn("flex w-max space-x-4 p-4")}>
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}

export default MovieCarousel;
