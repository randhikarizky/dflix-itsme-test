import { Fab, Stack, Typography } from "@mui/material";
import { Grid } from "@mui/system";
import { useRouter } from "next/router";
import BackButton from "./BackButton";
import Icon from "./Icon";

interface Props {
  title: string;
  previousPath: string;
  noBackButton?: boolean;
  onUpdate?: () => void;
  onDelete?: () => void;
  onExport?: () => void;
}

export default function DetailHeader({
  title,
  previousPath,
  noBackButton,
  onUpdate,
  onDelete,
  onExport,
  ...other
}: Props) {
  const router = useRouter();

  return (
    <Grid size={12}>
      <Stack direction="row" justifyContent={"space-between"}>
        <Stack direction={"row"} spacing={2} alignItems="center">
          {!noBackButton && <BackButton previousPath={previousPath} />}
          <Typography variant={"h6"}>{title}</Typography>
        </Stack>
      </Stack>
    </Grid>
  );
}
