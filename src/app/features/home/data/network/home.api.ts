import {
  FilterRequest,
  List,
  ListDTO,
} from "@/app/global/interfaces/datatable.interface";
import {
  DiscoverMovieEntity,
  DiscoverTVEntity,
} from "../../domain/entities/home.entity";
import { api } from "@/app/global/utility/axios";
import {
  DiscoverMovieResponse,
  DiscoverTVResponse,
} from "../response/home.response";
import {
  objectKeyConverter,
  objectKeyRemover,
} from "@/app/global/utility/helper";

export const homeAPI = {
  async getAllDiscoverMovies(
    request: FilterRequest & Record<string, any>,
  ): Promise<List<DiscoverMovieEntity>> {
    const response = await api.get<ListDTO<DiscoverMovieResponse>>(
      `${process.env.NEXT_PUBLIC_ENDPOINT}/discover/movie`,
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
      `${process.env.NEXT_PUBLIC_ENDPOINT}/discover/tv`,
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
        (d: DiscoverTVResponse) => objectKeyConverter(d) as DiscoverTVEntity,
      ),
      meta: {
        total: response.data.total_results,
        totalPages: response.data.total_pages,
        currentPage: response.data.page,
      },
    };

    return mapped;
  },

  async getAllMovieList(
    request: FilterRequest & Record<string, any>,
  ): Promise<List<DiscoverMovieEntity>> {
    const response = await api.get<ListDTO<DiscoverMovieResponse>>(
      `${process.env.NEXT_PUBLIC_ENDPOINT}/movie/${request.category ?? "now_playing"}`,
      {
        params: {
          ...objectKeyRemover(request, ["sortBy", "orderBy", "category"]),
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

  async getSearch(
    request: FilterRequest & Record<string, any>,
  ): Promise<List<DiscoverTVEntity>> {
    const response = await api.get<ListDTO<DiscoverTVResponse>>(
      `${process.env.NEXT_PUBLIC_ENDPOINT}/search/${request.category}`,
      {
        params: {
          ...objectKeyRemover(request, ["sortBy", "orderBy", "category"]),
        },
      },
    );

    const { results } = response.data;

    const mapped = {
      data: results.map((d: DiscoverTVResponse) => ({
        ...(objectKeyConverter(d) as DiscoverTVEntity),
        title: request.category == "tv" ? d.name : d.title,
        releaseDate:
          request.category == "tv" ? d.first_air_date : (d.release_date ?? ""),
      })),
      meta: {
        total: response.data.total_results,
        totalPages: response.data.total_pages,
        currentPage: response.data.page,
      },
    };

    return mapped;
  },
};
