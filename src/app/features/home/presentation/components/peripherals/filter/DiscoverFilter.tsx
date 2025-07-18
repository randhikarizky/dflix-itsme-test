import { List } from "@/app/global/interfaces/datatable.interface";
import { toSentenceCase } from "@/app/global/utility/helper";
import {
  Box,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Tooltip,
  Button,
} from "@mui/material";
import { UseQueryResult } from "@tanstack/react-query";
import { Icon } from "@/app/global/components";
import { SelectOption } from "@/app/global/interfaces/form.interface";

interface Props {
  DataList: UseQueryResult<List<any>, unknown>;
  params: {
    sortBy: string;
    setSortBy: (value: string) => void;
    sortOptions: SelectOption[];
    orderBy: string;
    setOrderBy: (value: "asc" | "desc") => void;
  };
}

export default function DiscoverFilter({ DataList, params, ...other }: Props) {
  return (
    <Box component={Stack} direction="row" spacing={1}>
      <FormControl size="small" disabled={DataList.isFetching}>
        <InputLabel>Sort by</InputLabel>
        <Select
          value={params.sortBy}
          onChange={(e) => {
            params.setSortBy(e.target.value);
          }}
          label="Sort by"
        >
          {params.sortOptions.map((d) => (
            <MenuItem value={d.value}>{d.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Tooltip title={toSentenceCase(params.orderBy)}>
        <Button
          color="secondary"
          onClick={() =>
            params.setOrderBy(params.orderBy == "asc" ? "desc" : "asc")
          }
          sx={{
            minWidth: "2rem",
          }}
          disabled={DataList.isFetching}
        >
          <Icon
            width={18}
            icon={
              params.orderBy == "asc"
                ? "tabler:sort-ascending"
                : "tabler:sort-descending"
            }
          />
        </Button>
      </Tooltip>
    </Box>
  );
}
