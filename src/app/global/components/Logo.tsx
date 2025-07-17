import { Stack, Typography, Box, BoxProps } from "@mui/material";
import Image from "next/image";

import ArtdecoLogo from "@/assets/ARTDECO_LOGO.svg";

type Props = BoxProps & {
  size: "small" | "medium" | "large";
  noText?: boolean;
};

export default function Logo(props: Props) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{ cursor: "default", ...props.sx }}
    >
      <Box
        sx={{
          width:
            props.size === "small" ? 32 : props.size === "medium" ? 48 : 72,
        }}
      >
        <ArtdecoLogo />
      </Box>
      {!props.noText && (
        <Typography
          variant={
            props.size === "small"
              ? "h5"
              : props.size === "medium"
                ? "h4"
                : "h1"
          }
          fontWeight="500"
          ml={2}
          sx={{
            textTransform: "uppercase",
          }}
        >
          Artdeco
        </Typography>
      )}
    </Stack>
  );
}
