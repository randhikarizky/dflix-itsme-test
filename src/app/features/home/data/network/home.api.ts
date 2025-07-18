import {
  FilterRequest,
  List,
  ListDTO,
} from "@/app/global/interfaces/datatable.interface";
import { DiscoverMovieEntity, DiscoverTVEntity } from "../../domain/entities/home.entity";
import { api } from "@/app/global/utility/axios";
import { DiscoverMovieResponse, DiscoverTVResponse } from "../response/home.response";
import { objectKeyConverter, objectKeyRemover } from "@/app/global/utility/helper";

const rootEndpoint = "discover";

export const homeAPI = {
  async getAllDiscoverMovies(
    request: FilterRequest & Record<string, any>,
  ): Promise<List<DiscoverMovieEntity>> {
    const response = await api.get<ListDTO<DiscoverMovieResponse>>(
      `${process.env.NEXT_PUBLIC_ENDPOINT}/${rootEndpoint}/movie`,
      {
        params: {
          ...(request.sortBy && {
            sort_by: `${request.sortBy}.${request.orderBy ?? "desc"}`,
          }),
          ...objectKeyRemover(request, ["sortBy", "orderBy"]),
        },
      },
    );

    const { results } = response.data;

    const mapped = {
      data: results.map(
        (d: DiscoverMovieResponse) =>
          objectKeyConverter(d) as DiscoverMovieEntity,
      ),
      meta: {
        total: response.data.total_results,
        totalPages: response.data.total_pages,
        currentPage: response.data.page,
      },
    };

    return mapped;
  },

  async getAllDiscoverTVs(
    request: FilterRequest & Record<string, any>,
  ): Promise<List<DiscoverTVEntity>> {
    const response = await api.get<ListDTO<DiscoverTVResponse>>(
      `${process.env.NEXT_PUBLIC_ENDPOINT}/${rootEndpoint}/tv`,
      {
        params: {
          ...(request.sortBy && {
            sort_by: `${request.sortBy}.${request.orderBy ?? "desc"}`,
          }),
          ...objectKeyRemover(request, ["sortBy", "orderBy"]),
        },
      },
    );

    const { results } = response.data;

    const mapped = {
      data: results.map(
        (d: DiscoverTVResponse) =>
          objectKeyConverter(d) as DiscoverTVEntity,
      ),
      meta: {
        total: response.data.total_results,
        totalPages: response.data.total_pages,
        currentPage: response.data.page,
      },
    };

    return mapped;
  },
};
