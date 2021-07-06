import react from 'react';
import { Grid } from '@material-ui/core';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <Grid container direction='column'>
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <About />
          <Projects />
          <Skills />
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </Grid>
  );
}

export default App;
