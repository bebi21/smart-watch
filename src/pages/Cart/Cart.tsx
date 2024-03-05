import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import watch1 from "~/image/watch1.jpeg";

const Cart = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alightItem: "center",
        }}>
        <Box sx={{ width: "70%" }}>
          {" "}
          <Container>
            <Typography sx={{ fontSize: "3rem" }}>Cart</Typography>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableBody>
                  <TableCell component='th' scope='row'>
                    <Card sx={{ display: "flex" }}>
                      <img
                        src={watch1}
                        title='green iguana'
                        style={{
                          width: "200px",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      />
                      <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>
                          Watch Apple 2
                        </Typography>
                        <Typography
                          variant='body2'
                          color='text.secondary'
                          sx={{ fontSize: "1.3rem" }}>
                          Location: <span style={{ color: "black" }}>VN</span>
                        </Typography>
                        <Typography
                          variant='body2'
                          color='text.secondary'
                          sx={{ fontSize: "1.3rem" }}>
                          Color: <span style={{ color: "black" }}>red</span>
                        </Typography>
                        <Typography
                          variant='body2'
                          color='text.secondary'
                          sx={{ fontSize: "1.3rem" }}>
                          Size: <span style={{ color: "black" }}>N</span>
                        </Typography>
                      </CardContent>
                      <CardActions
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}>
                        <Box sx={{ paddingX: "20px" }}>
                          <Button variant='outlined'>+</Button>
                          <span style={{ padding: "20px" }}>2</span>
                          <Button variant='outlined'>-</Button>
                        </Box>
                        <Typography
                          sx={{ fontSize: "2rem", paddingLeft: "30px" }}>
                          20$
                        </Typography>
                      </CardActions>
                    </Card>
                  </TableCell>
                </TableBody>
              </Table>
            </TableContainer>
          </Container>
        </Box>
        <Box sx={{ width: "30%" }}>
          <Typography sx={{ fontSize: "2rem" }}>The total amount of</Typography>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
            <ListItem>
              <ListItemText primary='Temporary amount' />
              <span>20$</span>
            </ListItem>
            <ListItem>
              <ListItemText primary='Shipping' />
              <span>20$</span>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary='The total amount of (Including VAT)' />
              <span>20$</span>
            </ListItem>
          </List>
          <Button variant='contained'>Disable elevation</Button>
        </Box>
      </Box>
    </>
  );
};

export default Cart;
