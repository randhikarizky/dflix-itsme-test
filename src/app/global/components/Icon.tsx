import { forwardRef } from "react";
import React from "react";
import { disableCache, Icon as Iconify, IconProps } from "@iconify/react";
import { Box, BoxProps, NoSsr } from "@mui/material";

type Props = BoxProps & IconProps;

const Icon = forwardRef<SVGElement, Props>(
  ({ icon, width = 20, sx, ...other }, ref) => (
    <NoSsr>
      <Box
        ssr
        ref={ref}
        component={Iconify}
        className="component-iconify"
        icon={icon}
        sx={{
          width,
          height: width,
          flexShrink: 0,
          display: "inline-flex",
          ...sx,
        }}
        {...other}
      />
    </NoSsr>
  ),
);
disableCache("local");

export default Icon;
