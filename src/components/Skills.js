import React from 'react';
import { makeStyles } from '@material-ui/core';
import { ReactComponent as JSLogo } from '../images/js.svg';
import { ReactComponent as HTMLLogo } from '../images/html5.svg';
import { ReactComponent as CSSLogo } from '../images/css3.svg';
import { ReactComponent as JAVALogo } from '../images/java.svg';
import { ReactComponent as NODELogo } from '../images/node.svg';
import { ReactComponent as REACTLogo } from '../images/react.svg';
import { ReactComponent as DATALogo } from '../images/data.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  imageList: {
    maxWidth: 750,
    minWidth: 450,
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: 10,
    flexWrap: 'nowrap',
  },

  image: {
    width: 50,
    height: 50,
    paddingLeft: 6,
    paddingRight: 6,
    color: '#838383',
    transition: 'transform 500ms ease-out',
    '&:hover': {
      color: '#DC4371',
      transform: 'scale(1.2)',
      transformOrigin: 'center',
    },
  },
}));

const Skills = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <div className={classes.imageList}>
          <REACTLogo className={classes.image} />
          <JSLogo className={classes.image} />
          <HTMLLogo className={classes.image} />
          <CSSLogo className={classes.image} />
          <NODELogo className={classes.image} />
          <DATALogo className={classes.image} />
          <JAVALogo className={classes.image} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
