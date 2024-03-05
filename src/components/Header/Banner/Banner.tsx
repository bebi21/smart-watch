import { Box, Typography } from "@mui/material";
import banner_image from "~/image/header-bg.png";

const Banner = () => {
  return (
    <>
      {" "}
      <Box
        component='div'
        sx={{
          backgroundImage: `url(${banner_image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Box
          sx={{ textAlign: "center", marginBottom: "300px", color: "white" }}>
          <Typography
            variant='h5'
            component='p'
            sx={{ fontWeight: "400", letterSpacing: "3px" }}>
            NOW YOU CAN FEEL THE HEAT
          </Typography>
          <Typography
            variant='h1'
            component='h2'
            sx={{ fontWeight: "700", lineHeight: "86px" }}>
            Smart New Future
          </Typography>
          <button className='btn-banner1'>BUY NOW</button>
        </Box>
      </Box>
    </>
  );
};

export default Banner;
