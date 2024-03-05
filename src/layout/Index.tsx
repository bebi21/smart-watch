import { Box, Container, Fab, Typography } from "@mui/material";
import ButtonCustom from "~/components/Button/Button";
import Footer from "~/components/Footer/Footer";
import Banner from "~/components/Header/Banner/Banner";
import Header from "~/components/Header/Header";
import Main1 from "~/components/Main/Container1/Main1";
import Main2 from "~/components/Main/Container2/Main2";
import Main from "~/components/Main/Main";
import PermanentDrawerLeft from "~/components/Test/Test";
import OpenIconSpeedDial from "~/components/Theme/Theme";
import Cart from "~/pages/Cart/Cart";
import Menu from "~/pages/Menu/Menu";
export default function Home() {
  return (
    <>
      <Container disableGutters maxWidth={false}>
        <Header></Header>
        <Banner />
        <Main />
        {/* <Menu /> */}
        {/* <Cart /> */}

        <OpenIconSpeedDial />
        <Footer />
      </Container>
    </>
  );
}
