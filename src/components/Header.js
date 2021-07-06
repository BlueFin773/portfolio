import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/styles';
import { Email } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  typographyStyles: {
    flex: 1,
    fontFamily: 'Roboto',
    color: '#888',
  },
  iconStyles: {
    fontSize: 25,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar
      position='static'
      style={{ background: 'transparent', boxShadow: 'none' }}
    >
      <Toolbar>
        <Typography className={classes.typographyStyles}>Portfolio</Typography>
        <IconButton>
          <LinkedInIcon className={classes.iconStyles} />
        </IconButton>
        <IconButton>
          <GitHubIcon className={classes.iconStyles} />
        </IconButton>
        <IconButton>
          <EmailIcon className={classes.iconStyles} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
