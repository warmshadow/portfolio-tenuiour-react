import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Work from './Work';
import About from "./About";
import Contact from "./Contact";
import Navbar from './Navbar';
import Bottom from './Bottom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

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
        minWidth: '6%',
        lineHeight: 1.3,
        padding: 0,
        fontWeight: 400,
        borderRadius: 0,
        justifyContent: 'flex-start',
        transition: 'all 0.2s ease-in',
        color: '#828579',
        fontSize: '0.8em',
        letterSpacing: 1.3,
        '&:hover': {
          backgroundColor: 'none',
          color: '#333330',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path={["/","/:route"]} component={Work} />
          <Redirect to="/" />
        </Switch>
        <Bottom />
      </Router>
    </ThemeProvider>
  );
}

export default App;
