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
});
