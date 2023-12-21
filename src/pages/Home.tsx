import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import MovieCarousel from "@/components/MovieCarousel";

import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/getMovies";
import { Movie } from "@/types/Types";
import { useEffect, useState } from "react";

function Home() {
  const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [upcoming, topRated, popular] = await Promise.all([
          getUpcomingMovies(),
          getTopRatedMovies(),
          getPopularMovies(),
        ]);
        setUpcomingMovies(upcoming);
        setTopRatedMovies(topRated);
        setPopularMovies(popular);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <main>
      <CarouselBannerWrapper />
      <div className="flex flex-col space-y-2 xl:-mt-48">
        <MovieCarousel movies={upcomingMovies} title="Upcoming" />
        <MovieCarousel movies={topRatedMovies} title="Top Rated" />
        <MovieCarousel movies={popularMovies} title="Popular" />
      </div>
    </main>
  );
}

export default Home;
