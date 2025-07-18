import { useEffect, useState } from "react";
import { useGetAllMovieList } from "../../../controller/home.controller";
import { useFetchData } from "@/app/global/hooks/useFetchData";
import {
  Stack,
  Box,
  Typography,
  Grid,
  Pagination,
  Skeleton,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import dayjs from "dayjs";
import { movieCategoryOptions } from "../../../interface/home.interface";
import MovieCard from "../card/MovieCard";
import { toSentenceCase } from "@/app/global/utility/helper";
import { Icon } from "@/app/global/components";
import MenuCategoryFilter from "../filter/MenuCategoryFilter";

export default function SectionList() {
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);

  const open = Boolean(anchor);

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

  const DataList = useGetAllMovieList({
    page,
    sortBy,
    orderBy,
    ...filter,
  });

  useEffect(() => {
    setFilter((prev) => ({
      ...prev,
      category: "now_playing",
    }));
  }, []);

  useEffect(() => {
    if (filter !== null) {
      if (filter.category !== "") {
        DataList.refetch();
      }
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
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="h5">Movies that are</Typography>
            {filter !== null ? (
              <MenuCategoryFilter
                filter={filter}
                setFilter={setFilter}
                options={movieCategoryOptions}
                name={"category"}
              />
            ) : (
              "..."
            )}
          </Stack>
        </Stack>
      </Box>
      {DataList.isFetching && (
        <Grid
          container
          spacing={2}
          columns={{ sm: 2, md: 5 }}
          justifyContent="center"
        >
          {Array.from({ length: 20 }, (_, i) => (
            <Grid
              key={i}
              size={{
                xs: 6,
                md: Math.floor(5 / Math.min(20, 5)),
              }}
            >
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
                columns={{ sm: 2, md: 5 }}
                justifyContent="center"
              >
                {DataList.data.data.map((d) => (
                  <Grid
                    key={JSON.stringify(d)}
                    size={{
                      xs: 6,
                      md: Math.floor(
                        5 / Math.min(DataList.data.data?.length ?? 12, 5),
                      ),
                    }}
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
