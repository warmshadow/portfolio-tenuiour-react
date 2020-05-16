import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import './App.css';
import Work from './Work';
import Navbar from './Navbar';
import Bottom from './Bottom';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '"Hind"',
      'sans-serif',
    ].join(','),
  },
  overrides: {
    MuiButton: {
      root: {
        lineHeight: 1.6,
        textTransform: 'none',
        borderRadius: 0,
        justifyContent: 'start',
        transition: 'all 0.7s',
        '&:hover': {
          backgroundColor: '#000',
          color: '#fff',
        },
      },
    },
  },
});

function App() {
  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <Work />
      <Navbar />
      <Bottom />
    </ThemeProvider>
  );
}

export default App;
