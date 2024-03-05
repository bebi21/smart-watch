import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import ActionAreaCard from "~/components/Main/Container4/Card/Card4";
import CardMenu from "./Card_menu/CardMenu";
const Menu = () => {
  return (
    <>
      <Box sx={{ marginBottom: "50px" }}>
        <Typography variant='h1' component='h2' sx={{ textAlign: "center" }}>
          Product
        </Typography>
        <Container sx={{ display: "flex" }}>
          <Box
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
            <nav aria-label='secondary mailbox folders'>
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary='Trash' />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component='a' href='#simple-list'>
                    <ListItemText primary='Spam' />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Box>
          <Box>
            <Grid container spacing={1}>
              {
                
              }
              <Grid item xs={4}>
                <CardMenu image={1} />
              </Grid>
              <Grid item xs={4}>
                <CardMenu image={2} />
              </Grid>
              <Grid item xs={4}>
                <CardMenu image={3} />
              </Grid>
              <Grid item xs={4}>
                <CardMenu image={4} />
              </Grid>
              <Grid item xs={4}>
                <CardMenu image={5} />
              </Grid>
              <Grid item xs={4}>
                <CardMenu image={6} />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Menu;
