import { Box, Container, Grid } from "@mui/material";
import ActionAreaCard from "./Card/Card4";

const Main4 = () => {
  return (
    <>
      <Box>
        <Box sx={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "3rem" }}>
            Some Features that Made us Unique
          </h2>
          <p style={{ color: "rgb(119, 119, 119)" }}>
            Who are in extremely love with eco friendly system.
          </p>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Container>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 4, sm: 4, md: 4 }}>
              <Grid item xs={4} sx={{ marginTop: "20px" }}>
                <ActionAreaCard image={1}></ActionAreaCard>
              </Grid>
              <Grid item xs={4} sx={{ marginTop: "20px" }}>
                <ActionAreaCard image={2}></ActionAreaCard>
              </Grid>
              <Grid item xs={4} sx={{ marginTop: "20px" }}>
                <ActionAreaCard image={3}></ActionAreaCard>
              </Grid>
              <Grid item xs={4} sx={{ marginTop: "20px" }}>
                <ActionAreaCard image={4}></ActionAreaCard>
              </Grid>
              <Grid item xs={4} sx={{ marginTop: "20px" }}>
                <ActionAreaCard image={6}></ActionAreaCard>
              </Grid>
              <Grid item xs={4} sx={{ marginTop: "20px" }}>
                <ActionAreaCard image={6}></ActionAreaCard>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Main4;
