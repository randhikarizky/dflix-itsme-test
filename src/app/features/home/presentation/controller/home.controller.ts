import { FilterRequest } from "@/app/global/interfaces/datatable.interface";
import { useQuery } from "@tanstack/react-query";
import { homeService } from "../../data/repositories/home.repository.impl";

export const useGetAllDiscoverMovies = (
  request: FilterRequest & Record<string, any>,
) => {

  const controller = useQuery({
    queryKey: ["get-all-discovery-movies"],
    queryFn: () => homeService.getAllDiscoverMovies(request),
    enabled: false,
    retry: false,
  });

  return controller;
};

export const useGetAllDiscoverTVs = (
  request: FilterRequest & Record<string, any>,
) => {

  const controller = useQuery({
    queryKey: ["get-all-discovery-tvs"],
    queryFn: () => homeService.getAllDiscoverTVs(request),
    enabled: false,
    retry: false,
  });

  return controller;
};
