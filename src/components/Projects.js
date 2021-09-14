import React from 'react';
import { Typography, makeStyles, Divider } from '@material-ui/core';
import ProjectCard from './ProjectCard';
import projectImageOne from '../images/portrait.jpg';
import projectImageTwo from '../images/portrait.jpg';
import projectImageThree from '../images/portrait.jpg';

const useStyles = makeStyles((theme) => ({
  container: {
    flexGrow: 1,
    backgroundColor: "#C93C67",
    paddingBottom: 50,
  },
  typographyTitle: {
    fontFamily: 'Roboto',
    color: 'white',
    fontSize: 20,
    fontWeight: 500,
    textAlign: 'center',
    marginTop: 20,
  },
  test: {

  },
}));

const Projects = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Divider />
      <Typography className={classes.typographyTitle}>Take a look at some of the projects I have worked on.</Typography>
      <div className={classes.test}>
      <ProjectCard
        image={projectImageOne}
        title='Project One'
        description='description........................................'
      />
      </div>
      <ProjectCard
        image={projectImageTwo}
        title='Project Two'
        description='description........................................'
      />
      <ProjectCard
        image={projectImageThree}
        title='Project Three'
        description='description........................................'
      />
    </div>
  );
};

export default Projects;
