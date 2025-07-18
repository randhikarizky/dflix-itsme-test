import { FilterRequest, List } from "@/app/global/interfaces/datatable.interface";
import { DiscoverMovieEntity } from "../../domain/entities/home.entity";
import { HomeRepository } from "../../domain/repositories/home.repository";
import { homeAPI } from "../network/home.api";

class HomeRepositoryImpl implements HomeRepository {
  async getAllDiscoverMovies(
    request: FilterRequest & Record<string, any>,
  ): Promise<List<DiscoverMovieEntity>> {
    return homeAPI.getAllDiscoverMovies(request);
  }
}

export const homeService = Object.freeze(new HomeRepositoryImpl());
