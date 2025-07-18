import { BaseDataResponse } from "@/app/global/interfaces/data.interface";

export interface DiscoverMovieEntity extends BaseDataResponse {
  adult: boolean;
  backdropPath: string;
  genreIds: number[];
  id: number;
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularity: number;
  posterPath: string;
  releaseDate: string;
  title: string;
  video: boolean;
  voteDverage: number;
  voteCount: number;
}

export interface DiscoverTVEntity extends DiscoverMovieEntity {
  firstAirDate: string;
  originCountry: string[];
  originalName: string;
}

export interface MovieEntity {
  adult: boolean;
  backdropPath: string;
  belongsToCollection: string | null;
  budget: number;
  genres: BaseDataResponse[];
  homepage: string;
  id: number;
  imdbId: string;
  originCountry: string[];
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularity: number;
  posterPath: string;
  productionCompanies: BaseDataResponse[];
  productionCountries: BaseDataResponse[];
  releaseDate: string;
  revenue: number;
  runtime: number;
  spokenLanguages: BaseDataResponse[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;
}

export interface TVEntity {
  adult: boolean;
  backdropPath: string;
  createdBy: Creator[];
  episodeRunTime: number[];
  firstAirDate: string;
  genres: BaseDataResponse[];
  homepage: string;
  id: number;
  inProduction: boolean;
  languages: string[];
  lastAirDate: string;
  lastEpisodeToAir: Episode;
  name: string;
  nextEpisodeToAir: Episode | null;
  networks: Network[];
  numberOfEpisodes: number;
  numberOfSeasons: number;
  originCountry: string[];
  originalLanguage: string;
  originalName: string;
  overview: string;
  popularity: number;
  posterPath: string;
  productionCompanies: Company[];
  productionCountries: BaseDataResponse[];
  seasons: Season[];
  spokenLanguages: SpokenLanguage[];
  status: string;
  tagline: string;
  type: string;
  voteAverage: number;
  voteCount: number;
}

interface Creator extends BaseDataResponse {
  creditId: string;
  originalName: string;
  gender: number;
  profilePath: string;
}

interface Episode extends BaseDataResponse {
  overview: string;
  voteAverage: number;
  voteCount: number;
  airDate: string;
  episodeNumber: number;
  episodeType: string;
  productionCode: string;
  runtime: number;
  seasonNumber: number;
  showId: number;
  stillPath: string;
}

interface Network extends BaseDataResponse {
  logoPath: string;
  originCountry: string;
}

interface Company extends BaseDataResponse {
  logoPath: string | null;
  originCountry: string;
}

interface Season {
  airDate: string;
  episodeCount: number;
  id: number;
  name: string;
  overview: string;
  posterPath: string;
  seasonNumber: number;
  voteAverage: number;
}

interface SpokenLanguage extends BaseDataResponse {
  englishName: string;
}
