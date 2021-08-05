import React from 'react';
import { Typography, makeStyles, Divider } from '@material-ui/core';
import ProjectCard from './ProjectCard';
import projectImageOne from '../images/portrait.jpg';

const useStyles = makeStyles((theme) => ({
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
    <div>
      <Typography className={classes.typographyTitle}>Projects</Typography>
      <Divider />
      <ProjectCard
        image={projectImageOne}
        title='Title'
        description='description........................................'
      />
    </div>
  );
};

export default Projects;
