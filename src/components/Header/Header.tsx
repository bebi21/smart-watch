import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import Page_Header from "./Page/Page_Header";
import Logo from "./Logo/Logo";
import ModeSelect from "../Theme/Theme";

function Header() {
  return (
    <AppBar position='static'>
      <Container
        maxWidth='lg'
        sx={{
          height: "80px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          alignContent: "center",
        }}>
        <Toolbar disableGutters>
          <Logo />
          <Box
            sx={{
              gap: 2,
              overflowX: "hidden",
              width: "100%",
            }}>
            <Page_Header />
          </Box>
        </Toolbar>
        <Box>
          {" "}
          <Link
            className='link-css'
            to={"./login"}
            style={{ display: "flex", gap: 2 }}>
            Login
          </Link>
        </Box>
      </Container>
    </AppBar>
  );
}
export default Header;
