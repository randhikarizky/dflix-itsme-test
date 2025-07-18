"use client";

import { Box, Container } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";

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
      <Navbar />
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
            my: 5,
          }}
        >
          {props.children}
        </Container>
      </Box>
    </Box>
  );
}
