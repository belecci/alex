import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#de20e8",
    },
    secondary: {
      main: "#edc7ed",
    },
    error: {
      main: red.A100,
    },
  },
});

export default theme;
