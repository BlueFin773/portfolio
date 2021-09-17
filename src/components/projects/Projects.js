import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import ProjectCard from './ProjectCard';
import projectImageOne from '../../images/starfin.png';
import projectImageTwo from '../../images/store-logo.png';
//Infographic vector created by vectorjuice
import projectImageThree from '../../images/contact.jpg';

const useStyles = makeStyles((theme) => ({
  container: {
    flexGrow: 1,
    backgroundColor: "#C93C67",
    paddingBottom: 50,
    paddingTop: 30,
  },
  typographyTitle: {
    fontFamily: 'Roboto',
    color: 'white',
    fontSize: 20,
    fontWeight: 500,
    textAlign: 'center',
    marginRight: 10,
    marginLeft: 10,
  },
  test: {

  },
}));

const Projects = () => {
  const classes = useStyles();
  return (
    <div className={classes.container} id="projects">
      <Typography className={classes.typographyTitle}>Take a look at some of the projects I have worked on.</Typography>
      <div className={classes.test}>
      <ProjectCard
        image={projectImageOne}
        title='StarFin'
        description='A mobile app to match tourist destinations to user preferences utilizing a recommendation system. Creates a route on a map between the tourist destinations the user selected. The route can also be passed to the users default maps application for navigation.'
        link="https://github.com/bluedev773/starfin"
      />
      </div>
      <ProjectCard
        image={projectImageTwo}
        title='E-commerce Website'
        description='An E-commerce site for a computer store. Users can select different computer systems and customize hardware components before adding to cart. Users can log in and manage their order.'
        link="https://github.com/bluedev773/ComputerStore"
      />
      <ProjectCard
        image={projectImageThree}
        title='Contact Tracker'
        description='Full stack MERN contact manager with React hooks, context & JWT authentication.'
        link="https://github.com/bluedev773/ContactTracker"
      />
    </div>
  );
};

export default Projects;
