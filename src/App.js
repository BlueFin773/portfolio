import React from 'react';
import { Grid } from '@material-ui/core';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

//TODO: add background
//TODO: create footer
//TODO: add links to header
//TODO: add content to project cards
//TODO: add visual effects

function App() {
  return (
    <Grid container direction='column'>
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={0} sm={2} />
        <Grid item xs={12} sm={8}>
          <About />
          <Projects />
          <Footer />
        </Grid>
        <Grid item xs={0} sm={2} />
      </Grid>
    </Grid>
  );
}

export default App;
