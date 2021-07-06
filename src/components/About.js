import React from 'react';
import {
  Typography,
  Paper,
  makeStyles,
  Grid,
  ButtonBase,
  Avatar,
} from '@material-ui/core';
import image from '../images/portrait.jpg';
import { mergeClasses } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    padding: 0,
    margin: 'auto',
    maxWidth: 700,
    minWidth: 350,
    display: 'flex',
    height: '92vh',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    width: 250,
    height: 250,
  },
  typography: {
    fontFamily: 'Roboto',
    color: '#888',
  },
  typographyTitle: {
    fontFamily: 'Roboto',
    color: '#888',
    fontSize: 30,
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container className={classes.container} spacing={2}>
        <Grid direction='column'>
          {' '}
          <Grid item>
            <Typography className={classes.typographyTitle}>
              Matthew Litvinov
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.typography}>
              This is a subtitle
            </Typography>
          </Grid>
        </Grid>

        <Grid item>
          <Avatar className={classes.image} alt='portrait' src={image} />
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
