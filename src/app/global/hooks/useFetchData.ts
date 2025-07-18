import React, { useMemo, useState } from "react";

type DataTableStateProps = {
  size?: number;
  filter?: Record<string, string>;
  sortBy: string;
  orderBy: "desc" | "asc";
};

export function useFetchData(props: DataTableStateProps) {
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState<string>(props.sortBy);
  const [orderBy, setOrderBy] = useState<"desc" | "asc">(
    props.orderBy ?? "desc",
  );
  const [filter, setFilter] = useState<Record<string, any> | null>(
    props?.filter ?? null,
  );

  return {
    page,
    setPage,
    sortBy,
    setSortBy,
    orderBy,
    setOrderBy,
    filter,
    setFilter,
  };
}
