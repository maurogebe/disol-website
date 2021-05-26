import {  createMuiTheme, responsiveFontSizes   } from "@material-ui/core";

let disolTheme = createMuiTheme({
  palette: {
    primary: {
      main:             '#C8102E',
      contrastText:     '#fff',
    },
    secondary: {
      main:             '#FFB81C',
      contrastText:     '#000',
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: '#FF6A13',
        "&$focused": {
          color: '#FFB81C',
        },
      }
    },
    MuiFab: {
      extended: {
        marginLeft: 5,
        marginBottom: 5,
      }
    },
    MuiCheckbox:{
      root:{
        color: '#FF6A13',
      }
    },
    MuiFormControlLabel:{
      label:{
        fontSize: "small",
        fontWeight: 600,
        color: '#000',
        textTransform: "uppercase",
      }
    }
  }
});

disolTheme = responsiveFontSizes(disolTheme);

export default disolTheme