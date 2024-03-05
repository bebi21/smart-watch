import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";

export default function MediaCard({ title }: any) {
  console.log(title);

  return (
    <Card
      square={true}
      sx={{
        maxWidth: 345,
        backgroundColor: "secondary.main",
        boxShadow: 0,
      }}>
      <CardContent>
        <RocketLaunchOutlinedIcon
          sx={{ fontSize: "3rem", color: "blue", fontWeight: 100 }}
        />

        <Typography gutterBottom variant='h5' component='div'>
          Lizard
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
  );
}
