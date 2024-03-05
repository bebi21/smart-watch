import { Box, Container, Grid, Typography } from "@mui/material";
import MediaCard from "~/components/Card/Card";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import MediaCard1 from "~/components/Card/Card1";
import MediaCard2 from "~/components/Card/Card2";
import MediaCard3 from "~/components/Card/Card3";
const Main2 = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "secondary.main",
          padding: "120px 0",
          marginTop: "120px",
        }}>
        <Container>
          <Typography variant='h3' component='p' className='text-main2'>
            Top Courses That are open for Students
          </Typography>
          <Typography
            component='p'
            sx={{ textAlign: "center", color: "rgb(119, 119, 119)" }}>
            Top Courses That are open for Students
          </Typography>
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              rowSpacing={2}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={4} container rowSpacing={1} gap={2}>
                <MediaCard title={`abc`} />

                <MediaCard1 />
              </Grid>
              <Grid item xs={4} sx={{ marginTop: "100px" }}>
                <img
                  src='https://themewagon.github.io/watch/img/c1.png'
                  alt=''
                />
              </Grid>
              <Grid item xs={4} container rowSpacing={1} gap={2}>
                <MediaCard2 />
                <MediaCard3 />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Main2;
