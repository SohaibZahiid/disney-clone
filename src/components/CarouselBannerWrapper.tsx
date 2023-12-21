import { getTopRatedMovies } from "@/lib/getMovies";
import { Movie } from "@/types/Types";
import { useEffect, useState } from "react";
import CarouselBanner from "./CarouselBanner";

function CarouselBannerWrapper() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTopRatedMovies();
      setMovies(data);
    };

    fetchData();
  }, []);

  return <CarouselBanner movies={movies} />;
}

export default CarouselBannerWrapper;
