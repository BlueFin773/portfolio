import React from 'react';
import { Typography, makeStyles, Grid, Avatar } from '@material-ui/core';
import image from '../images/portrait.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    padding: 0,
    height: '100vh',
  },
  content: {
    maxWidth: 750,
    minWidth: 450,
    margin: 'auto',
    display: 'flex',
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
    fontSize: 25,
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
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
