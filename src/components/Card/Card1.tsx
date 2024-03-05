import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import SettingsIcon from "@mui/icons-material/Settings";

export default function MediaCard1({ title }: any) {
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
        <SettingsIcon
          sx={{ fontSize: "3rem", color: "blue", fontWeight: 100 }}
        />

        <Typography gutterBottom variant='h5' component='div'>
          High Performance
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Lorem ipsum dolor sit amet, consectetur adipisic ing elit, seddo
          eiusmod tempor incid.idunt ut labore et dolore magna aliqua.
        </Typography>
      </CardContent>
    </Card>
  );
}
