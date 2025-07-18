import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import SectionMovies from "./peripherals/sections/SectionMovies";
import SectionTV from "./peripherals/sections/SectionTV";
import SectionList from "./peripherals/sections/SectionList";
import SectionSearch from "./peripherals/sections/SectionSearch";

export default function HomeComponent() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid size={12}>
          <SectionSearch />
        </Grid>
        <Grid size={12}>
          <Divider flexItem />
        </Grid>
        <Grid size={12}>
          <SectionList />
        </Grid>
        <Grid size={12}>
          <Divider flexItem />
        </Grid>
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
