import { Box, Button, Container } from "@mui/material";
import AccordionUsage from "./AccordionUsage/AccordionUsage";

const Main5 = () => {
  return (
    <>
      {" "}
      <Box className='bg-css'>
        <Box sx={{ textAlign: "center", paddingTop: "20pxw" }}>
          <h2 style={{ fontSize: "3rem" }}>Frequently Asked Questions</h2>
          <p style={{ color: "rgb(119, 119, 119)" }}>
            Who are in extremely love with eco friendly system.
          </p>
        </Box>
        <Container sx={{ width: "50%" }}>
          <AccordionUsage />
          <AccordionUsage />
          <AccordionUsage />
          <AccordionUsage />
        </Container>
      </Box>
    </>
  );
};

export default Main5;
