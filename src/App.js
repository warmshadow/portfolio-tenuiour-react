import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import './App.css';
import Navbar from './Navbar';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '"Hind"',
      'sans-serif',
    ].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <div className="App">
        <Typography variant="h1">TENUIOUR</Typography>
      </div>
    </ThemeProvider>
  );
}

export default App;
