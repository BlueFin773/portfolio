import React, {Fragment} from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import CssBaseline from '@material-ui/core/CssBaseline';

import background from './images/background11.jpg';

const useStyles = makeStyles(() => ({
  // parallax: {
  //   backgroundImage: "url(" + background + ")",
  //   backgroundAttachment: 'fixed',
  //   backgroundPosition: 'center',
  //   backgroundSize: 'cover',
  // }
}))

//TODO: add links to header
//TODO: add content to project cards
//TODO: add visual effects, background parallax, about page fade in in load
//TODO: add git svg icon

function App() {
  const classes = useStyles();
  return (
    <Fragment>
      <CssBaseline />
        <Header />
        <About />
        <Projects />
        <Footer />
    </Fragment>
  );
}

export default App;



/* background by SVGBackgrounds.com */



