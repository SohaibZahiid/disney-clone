import MoviesList from "@/components/MoviesList";
import { getDiscoverMovies } from "@/lib/getMovies";
import { Movie } from "@/types/Types";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

function Genre() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState<Movie[]>([]);

  console.log(searchParams.get("genre"));
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDiscoverMovies(id, searchParams.get("genre")!);
      setMovies(data);
    };
    fetchData();
  }, [searchParams, id]);

  return (
    <div className="max-w-7xl mx-auto ">
      <div className="flex flex-col space-y-4 mt-32 xl:mt-42">
        <h1 className="text-4xl md:text-6xl font-bold px-10 lg:px-5 pb-10">
          Results for {searchParams.get("genre")}
        </h1>
        <MoviesList movies={movies} />
      </div>
    </div>
  );
}

export default Genre;
