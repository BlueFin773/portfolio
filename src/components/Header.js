import React from 'react';
import { AppBar, Toolbar, Typography, Link } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  typographyStyles: {
    flex: 1,
    fontFamily: 'Roboto',
    color: '#DC4371',
  },
  link:{
    fontFamily: 'Roboto',
    color: '#DC4371',
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
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar
      position='static'
      style={{
        backgroundColor: "white",
        background: 'transparent',
        boxShadow: 'none',
        minHeight: '5vh',
      }}
    >
      <Toolbar>
        <Typography className={classes.typographyStyles}>Portfolio</Typography>
        <Typography >
          <Link className={classes.link} href=''  color="inherit">Skills</Link>
          <Link className={classes.link} href=''  color="inherit">Projects</Link>
          <Link className={classes.link} href=''  color="inherit">Education</Link>
          <Link className={classes.link} href=''  color="inherit">Contact</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
