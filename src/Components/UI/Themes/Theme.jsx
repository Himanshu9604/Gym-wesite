import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#0971f1",
      darker: "#FF0000",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});

export default theme;
