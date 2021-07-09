import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
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
        background: 'transparent',
        boxShadow: 'none',
      }}
    >
      <Toolbar>
        <Typography className={classes.typographyStyles}>Portfolio</Typography>
        <IconButton className={classes.iconButton}>
          <LinkedInIcon className={classes.iconStyles} />
        </IconButton>
        <IconButton className={classes.iconButton}>
          <GitHubIcon className={classes.iconStyles} />
        </IconButton>
        <IconButton className={classes.iconButton}>
          <EmailIcon className={classes.iconStyles} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
