import {
  FilterRequest,
  List,
} from "@/app/global/interfaces/datatable.interface";
import {
  DiscoverMovieEntity,
  DiscoverTVEntity,
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
}

export const homeService = Object.freeze(new HomeRepositoryImpl());
