import { Box, Typography } from "@mui/material";
import Logo_image from "~/image/logo.png";

const Logo = () => {
  return (
    <>
      <Box sx={{ marginRight: "20px" }}>
        <img src={Logo_image} alt='logo' />
      </Box>
    </>
  );
};

export default Logo;
