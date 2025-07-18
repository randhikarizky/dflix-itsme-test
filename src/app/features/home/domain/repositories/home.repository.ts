import { FilterRequest, List } from "@/app/global/interfaces/datatable.interface";
import { DiscoverMovieEntity } from "../entities/home.entity";

export interface HomeRepository {
  getAllDiscoverMovies(
    request: FilterRequest & Record<string, any>,
  ): Promise<List<DiscoverMovieEntity>>;
}