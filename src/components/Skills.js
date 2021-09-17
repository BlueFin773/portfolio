import React from 'react';
import { makeStyles, Typography, Divider } from '@material-ui/core';
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
    backgroundColor: "transparent",
  },
  image: {
    width: 60,
    height: 60,
    paddingLeft: 8,
    paddingRight: 8,
    marginTop: 20,
    color: '#838383',
    transition: 'transform 400ms ease-out',
    '&:hover': {
      color: '#DC4371',
      transform: 'scale(1.2)',
      transformOrigin: 'center',
    },
  },
  imageList: {
    maxWidth: 750,
    minWidth: 450,
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: 10,
    flexWrap: 'nowrap',
  },
  typographyTitle: {
    fontFamily: 'Roboto',
    color: '#DC4371',
    fontSize: 40,
    fontWeight: 500,
    component: 'span',
    textAlign: 'center',
  },
  typographyName: {
    fontFamily: 'Roboto',
    color: '#DC4371',
    fontSize: 20,
    fontWeight: 500,
    marginTop: 15,
    component: 'span',
    textAlign: 'center',
    minHeight: 45,
  }
}));


const Skills = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
      <Divider />
        <div className={classes.imageList}>
          <REACTLogo name="React" onMouseEnter={() => document.getElementById("skillName").innerHTML = "ReactJS"}  onMouseLeave={() => document.getElementById("skillName").innerHTML = ""} className={classes.image} />
          <JSLogo name="JavaScript" onMouseEnter={() => document.getElementById("skillName").innerHTML = "JavaScript"}  onMouseLeave={() => document.getElementById("skillName").innerHTML = ""} className={classes.image} />
          <HTMLLogo name="HTML" onMouseEnter={() => document.getElementById("skillName").innerHTML = "HTML"}  onMouseLeave={() => document.getElementById("skillName").innerHTML = ""} className={classes.image} />
          <CSSLogo name="CSS" onMouseEnter={() => document.getElementById("skillName").innerHTML = "CSS"}  onMouseLeave={() => document.getElementById("skillName").innerHTML = ""} className={classes.image} />
          <NODELogo name="NodeJS" onMouseEnter={() => document.getElementById("skillName").innerHTML = "NodeJS"}  onMouseLeave={() => document.getElementById("skillName").innerHTML = ""} className={classes.image} />
          <DATALogo name="Database" onMouseEnter={() => document.getElementById("skillName").innerHTML = "Database"}  onMouseLeave={() => document.getElementById("skillName").innerHTML = ""} className={classes.image} />
          <JAVALogo name="Java" onMouseEnter={() => document.getElementById("skillName").innerHTML = "Java"}  onMouseLeave={() => document.getElementById("skillName").innerHTML = ""} className={classes.image} />
        </div>
        <Typography id="skillName" className={classes.typographyName}> </Typography>
      </div>
    </div>
  );
};

export default Skills;
