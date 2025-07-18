import {
  FilterRequest,
  List,
} from "@/app/global/interfaces/datatable.interface";
import { DiscoverMovieEntity, DiscoverTVEntity } from "../entities/home.entity";

export interface HomeRepository {
  getAllDiscoverMovies(
    request: FilterRequest & Record<string, any>,
  ): Promise<List<DiscoverMovieEntity>>;

  getAllDiscoverTVs(
    request: FilterRequest & Record<string, any>,
  ): Promise<List<DiscoverTVEntity>>;
}
