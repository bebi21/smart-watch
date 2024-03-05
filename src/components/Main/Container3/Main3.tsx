import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
} from "@mui/material";

const Main3 = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          height: "50vh",
        }}>
        <Box>
          {" "}
          <img
            src='https://themewagon.github.io/watch/img/about-img.jpg'
            alt=''
            style={{ width: "50vw", height: "50vh" }}
          />
        </Box>
        <Container>
          <Card sx={{ minWidth: 275, boxShadow: 0 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: "3rem" }}
                color='text.secondary'
                gutterBottom>
                Word of the Day
              </Typography>
              <Typography
                variant='h3'
                component='div'
                sx={{ fontWeight: "900" }}>
                Globally Connected by Large Network
              </Typography>
              <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                We are here to listen from you deliver exellence
              </Typography>
              <Typography variant='body2'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit, sed do eiusmod tempor.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant='contained'
                sx={{ borderRadius: "20px", boxShadow: 0 }}
                className='btn-css1'>
                Contained
              </Button>
            </CardActions>
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default Main3;
