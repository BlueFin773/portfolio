import React, {Fragment} from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import CssBaseline from '@material-ui/core/CssBaseline';


//color pallete: https://colorhunt.co/palette/f0e5cff7f6f2c8c6c64b6587


//TODO: add links to header to navigate to appropriate section
//TODO: contact me button should navigate to contact section
//TODO: add content to project cards
//TODO: add visual effects, background parallax, about page fade in in load
//TODO: add git svg icon
//TODO: display skill name dynamically on icon hover
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
        <Skills />
        <Projects />
        <Footer />
    </Fragment>
  );
}

export default App;





