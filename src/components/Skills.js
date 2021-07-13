import React from 'react';
import {
  Typography,
  makeStyles,
  Divider,
  ImageList,
  ImageListItem,
  Avatar,
  Box,
} from '@material-ui/core';
import { ReactComponent as JSLogo } from '../images/js.svg';
import { ReactComponent as HTMLLogo } from '../images/html5.svg';
import { ReactComponent as CSSLogo } from '../images/css3.svg';
import { ReactComponent as JAVALogo } from '../images/java.svg';
import { ReactComponent as NODELogo } from '../images/node.svg';
import { ReactComponent as REACTLogo } from '../images/react.svg';
import { ReactComponent as SQLLogo } from '../images/sql.svg';

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
    paddingTop: 75,
    paddingBottom: 10,
    flexWrap: 'nowrap',
  },

  image: {
    width: 50,
    height: 50,
    paddingLeft: 6,
    paddingRight: 6,
    color: '#838383',
    transition: 'transform 250ms ease-out',
    '&:hover': {
      color: '#DC4371',
      transform: 'scale(1.1)',
      transformOrigin: 'center',
    },
  },
}));

const Skills = () => {
  const classes = useStyles();
  return (
    <div>
      <div>
        <div className={classes.imageList}>
          <REACTLogo className={classes.image} />
          <JSLogo className={classes.image} />
          <HTMLLogo className={classes.image} />
          <CSSLogo className={classes.image} />
          <NODELogo className={classes.image} />
          <SQLLogo className={classes.image} />
          <JAVALogo className={classes.image} />
        </div>
        {/* <ImageList className={classes.imageList} rowHeight={75} cols={7}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                className={classes.image}
                src={item.img}
                alt={item.title}
                loading='lazy'
              />
            </ImageListItem>
          ))}
        </ImageList> */}
      </div>
    </div>
  );
};

export default Skills;
