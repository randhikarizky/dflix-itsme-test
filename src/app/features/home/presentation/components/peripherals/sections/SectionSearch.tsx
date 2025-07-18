import { useEffect } from "react";
import { useGetSearch } from "../../../controller/home.controller";
import { useFetchData } from "@/app/global/hooks/useFetchData";
import {
  Stack,
  Box,
  Grid,
  Pagination,
  Skeleton,
  TextField,
  InputAdornment,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import MovieCard from "../card/MovieCard";
import { useForm } from "react-hook-form";
import MenuCategoryFilter from "../filter/MenuCategoryFilter";
import { Icon } from "@/app/global/components";

export default function SectionSearch() {
  const { watch, register, reset, handleSubmit } = useForm({
    mode: "onChange",
    defaultValues: {
      query: "",
    },
  });

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
    sortBy: "",
    orderBy: "asc",
  });

  const DataList = useGetSearch({
    page,
    sortBy,
    orderBy,
    ...filter,
  });

  useEffect(() => {
    setFilter((prev) => ({
      ...prev,
      query: "",
      category: "movie",
    }));
  }, []);

  useEffect(() => {
    if (filter !== null) {
      if (filter.query !== "") {
        DataList.refetch();
      }
    }
  }, [page, filter, sortBy, orderBy]);

  const onSubmit = handleSubmit((data) => {
    if (data) {
      const payload = {
        ...data,
      };

      return setFilter((prev) => ({
        ...prev,
        ...payload,
      }));
    }
  });

  return (
    <Stack direction="column" spacing={2}>
      <Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <form
            onSubmit={onSubmit}
            inert={DataList.isFetching}
            style={{ width: "100%" }}
          >
            <Box
              sx={{
                display: "flex",
                flexGrow: 1,
              }}
            >
              <TextField
                fullWidth
                variant="outlined"
                label="Search"
                size="medium"
                placeholder="Enter Search..."
                {...register("query")}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    onSubmit();
                  }
                }}
                slotProps={{
                  input: {
                    startAdornment:
                      filter !== null ? (
                        <InputAdornment position="start">
                          <MenuCategoryFilter
                            filter={filter}
                            setFilter={setFilter}
                            name="category"
                            options={[
                              { label: "Movie", value: "movie" },
                              { label: "TV Series", value: "tv" },
                            ]}
                          />
                        </InputAdornment>
                      ) : (
                        <></>
                      ),
                    endAdornment:
                      filter !== null ? (
                        <InputAdornment position="end">
                          <Tooltip title="Clear">
                            <IconButton
                              onClick={() => {
                                reset({ query: "" });
                                setFilter((prev) => ({ ...prev, query: "" }));
                              }}
                            >
                              <Icon
                                width={18}
                                icon="material-symbols:cancel-rounded"
                              />
                            </IconButton>
                          </Tooltip>
                        </InputAdornment>
                      ) : (
                        <></>
                      ),
                  },
                }}
              />
            </Box>
            <Box></Box>
          </form>
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
      {filter !== null &&
        filter.query !== "" &&
        DataList.data !== undefined &&
        DataList.data !== null &&
        (DataList.data.data.length > 0 ? (
          <Grid container spacing={2}>
            <Grid size={12}>
              <Grid
                container
                spacing={2}
                columns={{ sm: 2, md: 5 }}
                justifyContent={
                  DataList.data.data.length >= 5 ? "center" : "flex-start"
                }
              >
                {DataList.data.data.map((d) => (
                  <Grid
                    key={JSON.stringify(d)}
                    size={{
                      xs: 6,
                      md: 1,
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
        ) : (
          <Grid size={12}>
            <Typography variant="body2">
              No result was found for{" "}
              <i>
                <b>"{filter.query}."</b>
              </i>{" "}
              You might need to check your keywords and try to search again.
            </Typography>
          </Grid>
        ))}
    </Stack>
  );
}
