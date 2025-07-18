import { useEffect } from "react";
import { useGetAllDiscoveryMovies } from "../../../controller/home.controller";
import { useFetchData } from "@/app/global/hooks/useFetchData";
import {
  Stack,
  Box,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Avatar,
  Pagination,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Tooltip,
} from "@mui/material";
import dayjs from "dayjs";
import { Icon } from "@/app/global/components";
import { sortFilterOptions } from "../../../interface/home.interface";
import { toSentenceCase } from "@/app/global/utility/helper";

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
          <Box component={Stack} direction="row" spacing={1}>
            <FormControl size="small" disabled={DataList.isFetching}>
              <InputLabel>Sort by</InputLabel>
              <Select
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                }}
                label="Sort by"
              >
                {sortFilterOptions.map((d) => (
                  <MenuItem value={d.value}>{d.label}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <Tooltip title={toSentenceCase(orderBy)}>
              <Button
                color="secondary"
                onClick={() => setOrderBy(orderBy == "asc" ? "desc" : "asc")}
                sx={{
                  minWidth: "2rem",
                }}
                disabled={DataList.isFetching}
              >
                <Icon
                  width={18}
                  icon={
                    orderBy == "asc"
                      ? "tabler:sort-ascending"
                      : "tabler:sort-descending"
                  }
                />
              </Button>
            </Tooltip>
          </Box>
        </Stack>
      </Box>
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
                    <Stack>
                      <Avatar
                        alt={`Poster of ${d.title}`}
                        variant="rounded"
                        src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${d.posterPath}`}
                        sx={{
                          height: "100%",
                          width: "auto",
                        }}
                      />

                      <Box>
                        <Typography variant="subtitle1">{d.title}</Typography>
                        <Typography variant="body1" color="text.secondary">
                          {d.releaseDate
                            ? `(${dayjs(d.releaseDate).format("YYYY")})`
                            : ""}
                        </Typography>
                      </Box>
                    </Stack>
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
