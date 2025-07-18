import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import SectionMovies from "./peripherals/sections/SectionMovies";

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
          <Stack>
            <Box>
              <Typography variant="h5">Discover TV Shows</Typography>
              <Typography variant="subtitle2" color="text.secondary">
                Voted by Members
              </Typography>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}
