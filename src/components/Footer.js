import React, {Fragment} from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root:{
    backgroundColor: 'white',
    paddingTop: 50,
  },
  appbar: {
    boxShadow: 'none',
    alignItems:"center",
    backgroundColor: "#FFF",
    marginTop: 0,
  },
  iconStyles: {
    fontSize: 25,
  },
  typography: {
    textAlign: 'center',
    fontSize: 12,
  },
  iconButton: {
    '&:hover': {
      color: '#DC4371',
    },
  },
}));


const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <AppBar
      className={classes.appbar}
      position='static'
    >
      <Toolbar>
        <IconButton className={classes.iconButton} href="https://www.linkedin.com/in/matthewlitvinov/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon className={classes.iconStyles} />
        </IconButton>
        <IconButton className={classes.iconButton} href="https://github.com/bluedev773" target="_blank" rel="noopener noreferrer">
          <GitHubIcon className={classes.iconStyles} />
        </IconButton>
        <IconButton className={classes.iconButton} href="mailto:matthew.litvinov@gmail.com">
          <EmailIcon className={classes.iconStyles}  />
        </IconButton>
      </Toolbar>
    </AppBar>
    <Typography className={classes.typography}>Designed by Matthew Litvinov</Typography>
    </div>
  );
};

export default Footer;
