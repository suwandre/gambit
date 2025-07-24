import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiDialog: {
      styleOverrides: {
        paper: {
          // Dark grey modals
          backgroundColor: '#262522',
          color: '#fff',
        },
      },
    },
  },
  typography: {
    fontFamily: 'var(--font-atgambit), Arial, sans-serif',
  },
  // ...add palette or other config if needed
});

export default theme;
