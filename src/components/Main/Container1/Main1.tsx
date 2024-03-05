import { Box, Container, Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
const Main1 = () => {
  return (
    <>
      {" "}
      <Container sx={{ marginTop: "50px" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Typography className='text-video'>
              BRAND NEW APP TO BLOW YOUR MIND
            </Typography>
            <Typography
              variant='h2'
              component='p'
              sx={{ fontWeight: "600", lineHeight: "1.2em" }}>
              We’ve made a life that will change you
            </Typography>
            <br />
            <Typography variant='h7' component='p'>
              We are here to listen from you deliver exellence
            </Typography>
            <br />
            <Typography
              variant='h7'
              component='p'
              sx={{
                color: "rgb(119, 119, 119)",
              }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim.
            </Typography>
            <Button
              variant='outlined'
              sx={{ borderRadius: "20px", marginTop: "20px" }}>
              GET STARTED NOW
            </Button>
          </Grid>
          <Grid item xs={6} sx={{ borderRadius: "20px" }}>
            <Box>
              <iframe
                width='560'
                height='315'
                src='https://www.youtube.com/embed/Nvb_Kta7v6U?si=m6cNeT7ZuuowYE8S'
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowfullscreen></iframe>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Main1;
