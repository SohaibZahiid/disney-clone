import { Genre, Genres } from "@/types/Types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

function GenreDropdown() {
  const [data, setData] = useState<Genres | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";

      const options: RequestInit = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
        },
      };

      const response = await fetch(url, options);
      const result = (await response.json()) as Genres;

      setData(result);
    };
    fetchData();
  }, []);

  // const fetchData = async () => {
  //   const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";

  //   const options: RequestInit = {
  //     method: "GET",
  //     headers: {
  //       accept: "application/json",
  //       Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
  //     },
  //   };

  //   const response = await fetch(url, options);
  //   const data = (await response.json()) as Genres;
  //   return data;
  // };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"}>
          Genre <ChevronDown size={15} className="ml-1" />{" "}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>Select a Genre</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {data?.genres.map((genre) => (
          <Link key={genre.id} to={`/genre/${genre.id}?genre=${genre.name}`}>
            <DropdownMenuItem>{genre.name}</DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default GenreDropdown;
