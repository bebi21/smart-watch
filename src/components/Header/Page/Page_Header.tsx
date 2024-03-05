import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Page_Header = () => {
  return (
    <>
      {" "}
      <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
        <Link className='link-css' to={"./"}>
          Home
        </Link>
        <Link className='link-css' to={"./about"}>
          About
        </Link>
        <Link className='link-css' to={"./services"}>
          Contacts
        </Link>
        <Link className='link-css' to={"./event"}>
          Events
        </Link>
        <Link className='link-css' to={"./menu"}>
          Menu
        </Link>
        <Link className='link-css' to={"./contact"}>
          Contact
        </Link>
      </Box>
    </>
  );
};

export default Page_Header;
