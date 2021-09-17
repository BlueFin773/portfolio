import React from 'react';
import { AppBar, Toolbar, Typography, Link, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  typographyStyles: {
    flex: 1,
    fontFamily: 'Roboto',
    color: 'white',
  },
  link:{
    fontFamily: 'Roboto',
    color: '#white',
    paddingRight: 30,
  },
  iconStyles: {
    fontSize: 25,
  },
  iconButton: {
    '&:hover': {
      color: '#DC4371',
    },
  },
  button: {
    color: 'white',
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar
      position='static'
      style={{
        backgroundColor: "#C93C67",
        boxShadow: '1',
      }}
    >
      <Toolbar>
        <Typography className={classes.typographyStyles}>Portfolio</Typography>
        <Typography >
        <Button className={classes.button} onClick={()=>{
            document.getElementById("projects").scrollIntoView({behavior: 'smooth'});
          }}>Projects</Button>
        <Button className={classes.button} onClick={()=>{
            document.getElementById("resume").scrollIntoView({behavior: 'smooth'});
          }}>Resume</Button>
          <Button className={classes.button} onClick={()=>{
            document.getElementById("contact").scrollIntoView({behavior: 'smooth'});
          }}>Contact</Button>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
