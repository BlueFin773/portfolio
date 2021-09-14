import React, {Fragment} from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/projects/Projects';
import Resume from './components/resume/Resume';
import Footer from './components/Footer';
import CssBaseline from '@material-ui/core/CssBaseline';

//TODO: add links to header to navigate to appropriate section
//TODO: contact me button should navigate to contact section
//TODO: add content to project cards
//TODO: add visual effects, background parallax, about page fade in in load
//TODO: skills icons should form a second row on mobile
//TODO: cchange skills icon background and color theme to match
//TODO: finish projects section
//TODO: finish education section
//TODO: finish contact section


function App() {
  return (
    <Fragment>
      <CssBaseline />
        <Header />
        <About />
        <Projects />
        <Resume />
        <Footer />
    </Fragment>
  );
}

export default App;





