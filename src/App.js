import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import './App.css';
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
      <Navbar />
      <div className="App">
        <Typography variant="h1">TENUIOUR</Typography>
      </div>
      <Bottom />
    </ThemeProvider>
  );
}

export default App;
