import {
  FilterRequest,
  List,
} from "@/app/global/interfaces/datatable.interface";
import {
  DiscoverMovieEntity,
  DiscoverTVEntity,
  MovieEntity,
  TVEntity,
} from "../entities/home.entity";

export interface HomeRepository {
  getAllDiscoverMovies(
    request: FilterRequest & Record<string, any>,
  ): Promise<List<DiscoverMovieEntity>>;

  getAllDiscoverTVs(
    request: FilterRequest & Record<string, any>,
  ): Promise<List<DiscoverTVEntity>>;

  getAllMovieList(
    request: FilterRequest & Record<string, any>,
  ): Promise<List<DiscoverMovieEntity>>;

  getSearch(
    request: FilterRequest & Record<string, any>,
  ): Promise<List<DiscoverTVEntity>>;

  getByMovieID(request: Record<string, any>): Promise<MovieEntity>;
  getBySeriesID(request: Record<string, any>): Promise<TVEntity>;
}
