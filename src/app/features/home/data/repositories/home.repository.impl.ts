import {
  FilterRequest,
  List,
} from "@/app/global/interfaces/datatable.interface";
import {
  DiscoverMovieEntity,
  DiscoverTVEntity,
  MovieEntity,
  TVEntity,
} from "../../domain/entities/home.entity";
import { HomeRepository } from "../../domain/repositories/home.repository";
import { homeAPI } from "../network/home.api";

class HomeRepositoryImpl implements HomeRepository {
  async getAllDiscoverMovies(
    request: FilterRequest & Record<string, any>,
  ): Promise<List<DiscoverMovieEntity>> {
    return homeAPI.getAllDiscoverMovies(request);
  }

  async getAllDiscoverTVs(
    request: FilterRequest & Record<string, any>,
  ): Promise<List<DiscoverTVEntity>> {
    return homeAPI.getAllDiscoverTVs(request);
  }

  async getAllMovieList(
    request: FilterRequest & Record<string, any>,
  ): Promise<List<DiscoverMovieEntity>> {
    return homeAPI.getAllMovieList(request);
  }

  async getSearch(
    request: FilterRequest & Record<string, any>,
  ): Promise<List<DiscoverTVEntity>> {
    return homeAPI.getSearch(request);
  }

  async getByMovieID(request: Record<string, any>): Promise<MovieEntity> {
    return homeAPI.getByMovieID(request);
  }
  async getBySeriesID(request: Record<string, any>): Promise<TVEntity> {
    return homeAPI.getBySeriesID(request);
  }
}

export const homeService = Object.freeze(new HomeRepositoryImpl());
