import React from 'react';
import {
  Typography,
  makeStyles,
  Grid,
  Avatar,
  Divider,
} from '@material-ui/core';
import image from '../images/code.svg';
import Button from '@material-ui/core/Button';
import background from '../images/background.svg';
import Skills from './Skills';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    marginLeft:20,
    marginTop: 40,
    color: "#DC4371",
    [theme.breakpoints.down('sm')]: {margin: "auto", marginTop:40,},
  },
  container: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    minHeight: '95vh',
    justifyContent: 'center',
    margin:"auto",
    paddingTop: 200,
    //paddingBottom: 200, 1170
    [theme.breakpoints.down('sm')]: {paddingTop: 0},
  },
  content: {
    margin: 0,
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: 200,
    alignItems: 'top',

  },
  flex: {
    display: "flex",
  },
  column: {
    marginTop:110,
    display: "flex",
  },
  bottomAligned: {
    marginTop: 110,
  },
  image: {
    width: 550,
    height: 550,
    marginTop: 0,
    paddingTop: 0,
  },
  typography: {
    fontFamily: 'Roboto',
    color: '#888',
    fontSize: 16,
    paddingLeft: 20,
    maxWidth: 600,
    [theme.breakpoints.down('sm')]: {textAlign: "center",},
  },
  typographySubtitle: {
    fontFamily: 'Roboto',
    color: '#888',
    fontSize: 20,
    paddingLeft: 20,
    [theme.breakpoints.down('sm')]: {textAlign: "center",},
  },
  typographyTitle: {
    fontFamily: 'Roboto',
    color: '#888',
    fontSize: 20,
    paddingLeft: 20,
    [theme.breakpoints.down('sm')]: {textAlign: "center",},
  },
  typographyName: {
    fontFamily: 'Roboto',
    color: '#DC4371',
    fontSize: 60,
    fontWeight: 500,
    component: 'span',
    [theme.breakpoints.down('sm')]: {textAlign: "center",},
  },
}));
// TODO: Add fade in effect on load
const About = () => {
  const classes = useStyles();
  const developer = '<Developer />';
  return (
    <div className={classes.root}>
      <Grid container className={classes.container}>
        <Grid container className={classes.content} spacing={2}>
          <Grid direction='column' className={classes.column}>
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
              <Typography className={classes.typographySubtitle}>
                {developer}
              </Typography>
            </Grid>
            <Grid item className={classes.bottomAligned}>
              <Typography className={classes.typography}> I am a full stack web developer who enjoys creating beautiful, dynamic, and responsive web applications.</Typography>
            </Grid>
            <Grid item className={classes.flex}>
              <Button className={classes.button} variant="outlined">Contact Me</Button>
            </Grid>
          </Grid>

          <Grid item >
            <Avatar className={classes.image} alt='portrait' src={image} />
          </Grid>
          {/* <Grid item>
            <Skills />
          </Grid> */}
        </Grid>
        <Grid item >
          <Divider />
        </Grid>
        <Grid item>
          <Skills />
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
