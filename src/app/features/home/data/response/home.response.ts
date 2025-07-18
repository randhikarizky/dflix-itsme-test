import { BaseDataResponse } from "@/app/global/interfaces/data.interface";

export interface MovieResponse {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: string | null;
  budget: number;
  genres: BaseDataResponse[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: BaseDataResponse[];
  production_countries: BaseDataResponse[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: BaseDataResponse[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface DiscoverMovieResponse {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface DiscoverTVResponse {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  original_name: string;
  origin_country: string[];
  overview: string;
  name: string;
  popularity: number;
  poster_path: string;
  first_air_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
