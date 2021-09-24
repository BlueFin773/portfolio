import React, {Fragment} from 'react';
import About from './components/About';
import Projects from './components/projects/Projects';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';
import Footer from './components/Footer';
import CssBaseline from '@material-ui/core/CssBaseline';


//TODO: change project cards for mobile size
//TODO: add visual effects, background parallax, about page fade in in load
//TODO: form validation
//TODO: add confirmation of sent email
//TODO: return to top button after contact section
//TODO: import font


function App() {
  return (
    <Fragment>
      <CssBaseline />
        <About />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
    </Fragment>
  );
}

export default App;





