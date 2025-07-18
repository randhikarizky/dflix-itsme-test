import { SelectOption } from "@/app/global/interfaces/form.interface";
import { toSentenceCase } from "@/app/global/utility/helper";
import { Box, Button, Typography, Menu, MenuItem } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { Icon } from "@/app/global/components";

interface Props {
  filter: Record<string, any>;
  setFilter: Dispatch<SetStateAction<Record<string, any>>>;
  options: SelectOption[];
  name: string;
}

export default function MenuCategoryFilter({
  filter,
  setFilter,
  options,
  name,
  ...other
}: Props) {
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);

  const open = Boolean(anchor);
  return (
    <Box>
      <Button
        onClick={(e) => setAnchor(e.currentTarget)}
        endIcon={<Icon icon="material-symbols:arrow-drop-down-rounded" />}
      >
        <Typography variant="h6">
          {toSentenceCase(filter[name].replaceAll("_", " "))}
        </Typography>
      </Button>
      <Menu open={open} anchorEl={anchor} onClose={() => setAnchor(null)}>
        {options.map((d) => (
          <MenuItem
            key={JSON.stringify(d)}
            onClick={() =>
              setFilter((prev) => ({
                ...prev,
                [name]: d.value,
              }))
            }
            selected={filter[name] == d.value}
          >
            <Typography variant="h6">{d.label}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
