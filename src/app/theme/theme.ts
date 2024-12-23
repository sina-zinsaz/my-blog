import { createTheme } from '@mui/material/styles';
import { Theme } from '@mui/material';

export const lightTheme: Theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000',
    },
    background: {
      default: '#ededed',
      paper: '#f5f5f5',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "&::-webkit-scrollbar": {
            width: "10px",
            height: "10px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#f0f0f0",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#f0f0f0",
            borderRadius: "5px",
            border: "1px solid rgb(0, 0, 0)",
          },
        },
      },
    },
  },
});

export const darkTheme: Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFF',
    },
    background: {
      default: '#0a0a0a',
      paper: '#121212',
    },
  },
    components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "&::-webkit-scrollbar": {
            width: "10px",
            height: "10px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#0a0a0a",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#14191e",
            borderRadius: "5px",
            border: "1px solid #f4f4f4",
          },
        },
      },
    },
  },
});

