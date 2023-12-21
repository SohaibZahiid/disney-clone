import { SearchResults } from "@/types/Types"

async function fetchFromIMDB(url: URL) {

  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`
    }
  }

  const res = await fetch(url.toString(), options)
  const data = await res.json() as SearchResults
  return data
}

export async function getUpcomingMovies() {
  const url = new URL("https://api.themoviedb.org/3/movie/upcoming")
  const data = await fetchFromIMDB(url)
  return data.results
}

export async function getTopRatedMovies() {
  const url = new URL("https://api.themoviedb.org/3/movie/top_rated")
  const data = await fetchFromIMDB(url)
  return data.results
}

export async function getPopularMovies() {
  const url = new URL("https://api.themoviedb.org/3/movie/popular")
  const data = await fetchFromIMDB(url)
  return data.results
}

export async function getDiscoverMovies(id?: string, keywords?: string) {
  const url = new URL("https://api.themoviedb.org/3/discover/movie")
  keywords && url.searchParams.set("with_keywords", keywords)
  id && url.searchParams.set("with_genres", id)

  const data = await fetchFromIMDB(url)
  return data.results;
}

export async function getSearchedMovies(term: string) {
  const url = new URL("https://api.themoviedb.org/3/search/movie")
  url.searchParams.set("query", term)
  const data = fetchFromIMDB(url)
  return (await data).results
}