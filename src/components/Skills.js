import React from 'react';
import {
  Typography,
  makeStyles,
  Divider,
  ImageList,
  ImageListItem,
  Avatar,
} from '@material-ui/core';
import jsImage from '../images/js.svg';
import htmlImage from '../images/html5.svg';
import cssImage from '../images/css3.svg';
import javaImage from '../images/java.svg';
import nodeImage from '../images/node.svg';
import reactImage from '../images/react.svg';
import sqlImage from '../images/sql.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  imageList: {
    maxWidth: 750,
    minWidth: 450,
    justifyContent: 'center',
    paddingTop: 10,
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 10,
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },

  image: {
    heigth: 40,
    width: 40,
    paddingLeft: 10,
    paddingRight: 10,
  },
}));

const itemData = [
  {
    img: jsImage,
    title: 'JavaScript',
  },
  {
    img: htmlImage,
    title: 'HTML5',
  },
  {
    img: cssImage,
    title: 'CSS3',
  },
  {
    img: reactImage,
    title: 'React',
  },
  {
    img: nodeImage,
    title: 'NodeJS',
  },

  {
    img: sqlImage,
    title: 'SQL',
  },
  {
    img: javaImage,
    title: 'Java',
  },
];

const Skills = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <Divider />
        <ImageList className={classes.imageList} rowHeight={75} cols={7}>
          {itemData.map((item) => (
            <ImageListItem className={classes.imageListItem} key={item.img}>
              <img
                className={classes.image}
                src={item.img}
                alt={item.title}
                loading='lazy'
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Divider />
      </div>
    </div>
  );
};

export default Skills;
