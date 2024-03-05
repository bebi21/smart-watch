import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer = () => {
  return (
    <>
      <Box>
        {" "}
        <footer className='site-footer'>
          <Container className='container' style={{ display: "flex" }}>
            <Box
              className='row'
              style={{ display: "flex", justifyContent: "center" }}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Box>
                    <Typography variant='h3' component='h2'>
                      About
                    </Typography>
                    <Typography variant='h6' component='span'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolore a mollitia eligendi natus sapiente eveniet quis
                      ducimus harum illo, reprehenderit, minus minima numquam!
                      Labore ipsam inventore unde molestiae, doloremque quas?
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box>
                    <h6>Categories</h6>
                    <ul className='footer-links'>
                      <li>
                        <a href='http://scanfcode.com/category/c-language/'>
                          C
                        </a>
                      </li>
                      <li>
                        <a href='http://scanfcode.com/category/front-end-development/'>
                          UI Design
                        </a>
                      </li>
                      <li>
                        <a href='http://scanfcode.com/category/back-end-development/'>
                          PHP
                        </a>
                      </li>
                      <li>
                        <a href='http://scanfcode.com/category/java-programming-language/'>
                          Java
                        </a>
                      </li>
                      <li>
                        <a href='http://scanfcode.com/category/android/'>
                          Android
                        </a>
                      </li>
                      <li>
                        <a href='http://scanfcode.com/category/templates/'>
                          Templates
                        </a>
                      </li>
                    </ul>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box className='col-xs-6 col-md-3'>
                    <h6>Quick Links</h6>
                    <ul className='footer-links'>
                      <li>
                        <a href='http://scanfcode.com/about/'>About Us</a>
                      </li>
                      <li>
                        <a href='http://scanfcode.com/contact/'>Contact Us</a>
                      </li>
                      <li>
                        <a href='http://scanfcode.com/contribute-at-scanfcode/'>
                          Contribute
                        </a>
                      </li>
                      <li>
                        <a href='http://scanfcode.com/privacy-policy/'>
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a href='http://scanfcode.com/sitemap/'>Sitemap</a>
                      </li>
                    </ul>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>

          <Container>
            <Divider sx={{ color: "white", bgcolor: "white" }} />
            <Container
              className='container'
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}>
              <Container
                className='row'
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}>
                <div className='col-md-8 col-sm-6 col-xs-12'>
                  <p className='copyright-text'>
                    Copyright © 2017 All Rights Reserved by
                    <a href='#'>Scanfcode</a>.
                  </p>
                </div>
                <div className='col-md-4 col-sm-6 col-xs-12'>
                  <ul className='social-icons'>
                    <li style={{ padding: "0 10px" }}>
                      <FacebookIcon />
                    </li>
                    <li style={{ padding: "0 10px" }}>
                      <YouTubeIcon />
                    </li>
                    <li style={{ padding: "0 10px" }}>
                      <XIcon />
                    </li>
                    <li style={{ padding: "0 10px" }}>
                      <InstagramIcon />
                    </li>
                  </ul>
                </div>
              </Container>
            </Container>
          </Container>
        </footer>
      </Box>
    </>
  );
};

export default Footer;
