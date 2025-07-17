import { ButtonProps } from "@mui/material";
import React from "react";

export interface DTConfig {
  title: string;
  subtitle?: string;

  table: {
    customColumns?: Record<
      string,
      {
        label?: string;
        render: (row: any) => React.ReactNode;
        maxWidth?: number; //in pixel
      }
    >;
    customHideColumns?: string[];
    customLabelHeaders?: Record<string, string>;
    sortableColumns?: Record<string, boolean>;

    defaultRowPerPageOptions: number[];
    defaultOrderColumns?: string[];
    defaultOrder: "ASC" | "DESC";
    defaultSort: string;
    filters?: Filter[];
    toolbar: {
      refresh: boolean;
      create: boolean;
      export: boolean;
      delete?: boolean;
      customActions?: ActionButton[];
    };
  };
  endpoints: {
    root: string;
    create?: string;
    read?: string;
    update?: string;
    delete?: string;
    export?: string;
    customActions?: ActionButton[];
  };
  paths: {
    root: string;
    create?: string;
    detail?: string;
    update?: string;
    customActions?: ActionButton[];
  };
}

interface Filter {
  name: string;
  value: any;
}

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
  showing: number;
}

export interface List<T> {
  data: T[];
  meta: BaseDTOResponse;
}

export interface ListDTO<T> extends BaseDTOResponse {
  code: number;
  data: T[];
}

export interface SingleDTO<T> extends BaseDTOResponse {
  data: T;
  id: string;
}

export interface FilterRequest {
  page: number;
  size: number;
  columnSort: string;
  direction: "ASC" | "DESC";
  search?: string | any;
}
