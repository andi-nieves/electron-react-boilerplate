import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#009be5"
    },
    secondary: {
      main: "#000"
    },
    background: {
      default: "#333",
      drawerPaper: "#333"
    },
    borderColor: {
      main: "#EEEEEE"
    }
  },
  overrides: {
    MuiTypography: {
      h1: {
        color: '#fff'
      }
    },
    MuiTypography: {
      h1: {
        fontWeight: "bold",
        fontSize: 24,
        color: "#fff",
        letterSpacing: 1
      },
      h2: {
        fontSize: 18,
        color: "#000",
        letterSpacing: 1
      },
      h3: {
        fontSize: 16,
        color: "#000",
        letterSpacing: 1
      },
      p: { color: '#fff' },
      body2: {
        fontSize: 16,
        color: "#000"
      }
    }
  }
});

export default theme;
