import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

// Create a theme instance.
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        secondary: {
          main: "#f9f9ff",
        },
      },
    },
    dark: {
      palette: {
        secondary: {
          main: grey[400],
        },
      },
    },
  },
  components: {},
});

export default theme;
