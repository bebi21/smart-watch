import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea } from "@mui/material";
import watch1 from "~/image/watch1.jpeg";
import watch2 from "~/image/watch2.jpeg";
import watch3 from "~/image/watch3.jpeg";
import watch4 from "~/image/watch4.jpeg";
import watch5 from "~/image/watch5.jpeg";
import watch6 from "~/image/watch6.jpeg";
import watch7 from "~/image/watch7.jpeg";
import watch8 from "~/image/watch8.jpeg";
import watch9 from "~/image/watch9.jpeg";
import Rating from "@mui/material/Rating";

export default function CardMenu({ image }: any) {
  const arrImage = [
    watch1,
    watch2,
    watch3,
    watch4,
    watch5,
    watch6,
    watch7,
    watch8,
    watch9,
  ];

  return (
    <Card sx={{ width: "100%" }}>
      <CardActionArea>
        <CardMedia
          component='img'
          height='250px'
          alt='green iguana'
          image={arrImage[image]}
          sx={{ padding: "10px" }}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Lizard
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <Box
            sx={{
              "& > legend": { mt: 2 },
            }}>
            <Rating
              name='read-only'
              value={image + 2}
              precision={0.5}
              readOnly
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignContent: "center",
            }}>
            {" "}
            <Button variant='contained'>Add To Card</Button>
            <Typography component='legend' sx={{ fontSize: "2rem" }}>
              200$
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
