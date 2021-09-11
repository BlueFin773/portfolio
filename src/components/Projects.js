import React from 'react';
import { Typography, makeStyles, Divider } from '@material-ui/core';
import ProjectCard from './ProjectCard';
import projectImageOne from '../images/portrait.jpg';
import projectImageTwo from '../images/portrait.jpg';
import projectImageThree from '../images/portrait.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  typographyTitle: {
    fontFamily: 'Roboto',
    color: '#DC4371',
    fontSize: 40,
    fontWeight: 500,
  },
}));

const Projects = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.typographyTitle}>Projects</Typography>
      <Divider />
      <ProjectCard
        image={projectImageOne}
        title='Project One'
        description='description........................................'
      />
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
