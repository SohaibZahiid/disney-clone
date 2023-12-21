import MoviesList from "@/components/MoviesList";
import { getSearchedMovies } from "@/lib/getMovies";
import { Movie } from "@/types/Types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type SearchParams = {
  term: string;
};

function Search() {
  const { term } = useParams<SearchParams>();
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getSearchedMovies(term!);
      setMovies(data);
    };
    fetchMovies();
  }, [term]);

  return (
    <div className="max-w-7xl mx-auto ">
      <div className="flex flex-col space-y-4 mt-32 xl:mt-42">
        <h1 className="text-4xl md:text-6xl font-bold px-10 lg:px-5 pb-10">
          Results for {term}
        </h1>
        <MoviesList movies={movies} />
      </div>
    </div>
  );
}

export default Search;
