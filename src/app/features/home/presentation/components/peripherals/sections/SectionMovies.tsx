import { useEffect } from "react";
import { useGetAllDiscoveryMovies } from "../../../controller/home.controller";
import { useFetchData } from "@/app/global/hooks/useFetchData";
import {
  Stack,
  Box,
  Typography,
  Grid,
  Pagination,
  Skeleton,
} from "@mui/material";
import dayjs from "dayjs";
import { sortFilterOptions } from "../../../interface/home.interface";
import MovieCard from "../card/MovieCard";
import DiscoverFilter from "../filter/DiscoverFilter";

export default function SectionMovies() {
  const {
    page,
    setPage,
    sortBy,
    setSortBy,
    orderBy,
    setOrderBy,
    filter,
    setFilter,
  } = useFetchData({
    sortBy: "vote_count",
    orderBy: "asc",
  });

  const DataList = useGetAllDiscoveryMovies({
    page,
    sortBy,
    orderBy,
    ...filter,
  });

  useEffect(() => {
    if (sortBy !== "") {
      DataList.refetch();
    }
  }, [page, filter, sortBy, orderBy]);

  return (
    <Stack direction="column" spacing={2}>
      <Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography variant="h5">Discover Movies</Typography>
            <Typography variant="subtitle2" color="text.secondary">
              Curated by Members
            </Typography>
          </Box>

          <DiscoverFilter
            DataList={DataList}
            params={{
              sortBy,
              setSortBy,
              sortOptions: sortFilterOptions,
              orderBy,
              setOrderBy,
            }}
          />
        </Stack>
      </Box>
      {DataList.isFetching && (
        <Grid
          container
          spacing={2}
          columns={{ sm: 1, md: 5 }}
          justifyContent="center"
        >
          {Array.from({ length: 20 }, (_, i) => (
            <Grid key={i} size={Math.floor(5 / Math.min(20, 5))}>
              <Skeleton
                sx={{
                  height: 375,
                  transform: "unset",
                }}
              />
            </Grid>
          ))}
        </Grid>
      )}
      {DataList.data !== undefined &&
        DataList.data !== null &&
        DataList.data.data.length > 0 && (
          <Grid container spacing={2}>
            <Grid size={12}>
              <Grid
                container
                spacing={2}
                columns={{ sm: 1, md: 5 }}
                justifyContent="center"
              >
                {DataList.data.data.map((d) => (
                  <Grid
                    key={JSON.stringify(d)}
                    size={Math.floor(
                      5 / Math.min(DataList.data.data?.length ?? 12, 5),
                    )}
                    sx={{ cursor: "pointer" }}
                  >
                    <MovieCard
                      data={d}
                      title={d.title}
                      subtitle={
                        d.releaseDate
                          ? `(${dayjs(d.releaseDate).format("YYYY")})`
                          : ""
                      }
                      poster={d.posterPath}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid size={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Pagination
                  shape="circular"
                  count={
                    (DataList.data.meta.totalPages >= 500
                      ? 500
                      : DataList.data.meta.totalPages) ?? 1
                  }
                  defaultPage={page ?? 1}
                  onChange={(_, newPage) => setPage(newPage)}
                  showFirstButton
                  showLastButton
                />
              </Box>
            </Grid>
          </Grid>
        )}
    </Stack>
  );
}
