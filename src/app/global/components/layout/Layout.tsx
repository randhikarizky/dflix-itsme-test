"use client";

import { Box, Container } from "@mui/material";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function Layout(props: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        flex: "1 1 auto",
        minHeight: "100%",
        flexDirection: "column",
      }}
    >
      <Box
        component={"main"}
        sx={{
          display: "flex",
          flex: "1 1 auto",
          flexDirection: "column",
        }}
      >
        <Container
          sx={{
            display: "flex",
            flex: "1 1 auto",
            flexDirection: "column",
            pt: "var(--layout-dashboard-content-pt)",
            pb: "var(--layout-dashboard-content-pb)",
            my: 5,
          }}
        >
          {props.children}
        </Container>
      </Box>
    </Box>
  );
}
