import { DiscoverTVEntity } from "@/app/features/home/domain/entities/home.entity";
import { Icon } from "@/app/global/components";
import { Stack, Avatar, Box, Typography, useTheme } from "@mui/material";

interface Props {
  poster: string | null;
  title: string;
  subtitle: string;
  data: Partial<DiscoverTVEntity>;
}

export default function MovieCard({
  poster,
  title,
  subtitle,
  data,
  ...other
}: Props) {
  const theme = useTheme();
  return (
    <Stack>
      {poster !== null ? (
        <Avatar
          alt={`Poster of ${title}`}
          variant="rounded"
          src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${poster}`}
          sx={{
            height: "100%",
            width: "auto",
            borderRadius: (theme) => theme.shape.borderRadius,
            aspectRatio: "2/3",
          }}
        />
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "stretch",
            flexGrow: 1,
            flexDirection: "column",
            height: "100%",
            width: "100%",
            backgroundColor: (theme) => theme.palette.action.disabled,
            borderRadius: (theme) => theme.shape.borderRadius,
            aspectRatio: "2/3",
          }}
        >
          <Icon
            width={24}
            icon="material-symbols:hide-image-outline-rounded"
            sx={{
              color: (theme) => theme.palette.text.secondary,
            }}
          />
          <Typography variant="caption" color="text.secondary">
            No poster is available.
          </Typography>
        </Box>
      )}

      <Box>
        <Typography variant="subtitle1">{title}</Typography>
        <Typography variant="body1" color="text.secondary">
          {subtitle ? subtitle : ""}
        </Typography>
      </Box>
    </Stack>
  );
}
