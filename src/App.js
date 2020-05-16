import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import './App.css';
import Work from './Work';
import About from "./About";
import Contact from "./Contact";
import Navbar from './Navbar';
import Bottom from './Bottom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

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
    <Router>
      <ThemeProvider theme={theme}>
        {/*<Work />*/}
        {/*<About />*/}
        <Contact />
        <Navbar />
        <Bottom />
      </ThemeProvider>
    </Router>
  );
}

export default App;
