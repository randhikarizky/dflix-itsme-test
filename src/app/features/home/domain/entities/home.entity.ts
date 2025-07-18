import {
  BaseDataResponse,
} from "@/app/global/interfaces/data.interface";

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
