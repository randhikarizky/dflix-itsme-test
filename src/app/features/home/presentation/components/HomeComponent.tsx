import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import SectionMovies from "./peripherals/sections/SectionMovies";
import SectionTV from "./peripherals/sections/SectionTV";

export default function HomeComponent() {

  return (
    <>
      <Grid container spacing={3}>
        <Grid size={12}></Grid>
        <Grid size={12}>
          <SectionMovies />
        </Grid>
        <Grid size={12}>
          <Divider flexItem />
        </Grid>
        <Grid size={12}>
          <SectionTV />
        </Grid>
      </Grid>
    </>
  );
}
