import { ButtonProps } from "@mui/material";
import React from "react";

export type ActionButton = ButtonProps & {
  name: string;
  label: string;
  icon: string;
  path?: string;
  endpoint?: string;
};

export interface BaseDTOResponse {
  total: number;
  totalPages: number;
  currentPage: number;
}

export interface List<T> {
  data: T[];
  meta: BaseDTOResponse;
}

export interface ListDTO<T> extends BaseDTOResponse {
  results: T[];
  page: number;
  total_pages: number;
  total_results: number;
}

export interface SingleDTO<T> extends BaseDTOResponse {
  result: T;
  id: string;
}

export interface FilterRequest {
  page: number;
  sortBy: string;
  orderBy: "asc" | "desc";
}
