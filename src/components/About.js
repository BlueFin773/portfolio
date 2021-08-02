import React from 'react';
import {
  Typography,
  makeStyles,
  Grid,
  Avatar,
  Divider,
} from '@material-ui/core';
import image from '../images/portrait.jpg';
import Skills from './Skills';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    padding: 0,
    height: '100vh',
    margin: 'auto',
    alignItems: 'center',
  },
  content: {
    maxWidth: 750,
    minWidth: 450,
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    width: 250,
    height: 250,
    marginBottom: 40,
  },
  typography: {
    fontFamily: 'Roboto',
    color: '#888',
    paddingLeft: 20,
  },
  typographyTitle: {
    fontFamily: 'Roboto',
    color: '#888',
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20,
  },
  typographyName: {
    fontFamily: 'Roboto',
    color: '#DC4371',
    fontSize: 40,
    fontWeight: 500,
    component: 'span',
    paddingLeft: 8,
  },
}));

const About = () => {
  const classes = useStyles();
  const developer = '<Developer />';
  return (
    <div className={classes.root}>
      <Grid container className={classes.container}>
        <Grid container className={classes.content} spacing={2}>
          <Grid direction='column'>
            <Grid item>
              <Typography className={classes.typographyTitle}>
                Hi, I'm{' '}
                <Typography component='span' className={classes.typographyName}>
                  Matthew Litvinov
                </Typography>
                .
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.typography}>
                {developer}
              </Typography>
            </Grid>
          </Grid>

          <Grid item>
            <Avatar className={classes.image} alt='portrait' src={image} />
          </Grid>
          <Grid item>
            <Skills />
          </Grid>
        </Grid>
        <Grid item>
          <Divider />
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
