import {
  Skeleton,
  Typography,
  Stack,
  Link,
  IconButton,
  Tooltip,
  TypographyProps,
} from "@mui/material";
import Icon from "../../Icon";

import { copy as c } from "@/app/global/utility/helper";

type Props = TypographyProps & {
  label?: string;
  value?: string | any;
  className?: string;
  noLabel?: boolean;
  loading?: boolean;
  trim?: boolean;
  link?: boolean;
  copy?: boolean;
  helperText?: React.ReactNode;
};

export default function TextInfo({
  label,
  value,
  helperText,
  className,
  noLabel,
  loading,
  trim,
  link,
  copy,
  ...other
}: Props) {
  return (
    <Tooltip title={value}>
      <Stack sx={{ width: "100%" }}>
        {label && (
          <Typography variant="body2" color="text.secondary" {...other}>
            {label}
          </Typography>
        )}
        {loading ? (
          <Skeleton width="100%" height="2rem" animation="wave" />
        ) : (
          <Stack direction="row" gap={0.5} justifyContent={other.textAlign} sx={{ width: "100%" }}>
            <Typography
              variant={other.variant ?? "subtitle1"}
              noWrap={trim}
              {...other}
            >
              {link ? (
                <Link href={value} target="_blank">
                  Buka
                </Link>
              ) : (
                value
              )}
            </Typography>
            {copy && (
              <IconButton
                size="small"
                onClick={() => {
                  c(label ?? "", value?.toString() ?? "");
                }}
              >
                <Icon width={16} icon="solar:copy-bold" />
              </IconButton>
            )}
          </Stack>
        )}
        {helperText && (
          <Typography variant="caption" color="text.secondary" {...other}>
            {helperText}
          </Typography>
        )}
      </Stack>
    </Tooltip>
  );
}
