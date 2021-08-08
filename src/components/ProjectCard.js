import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Autorenew } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    minWidth: 500,
    display: 'flex',
    marginTop: '30px',
  },
  media: {
    width: 200,
    height: 200,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
  },
  buttons: {
    justifyContent: 'flex-end',
    marginTop: 'auto',
  },
  details: {
    display: 'flex',
    flexDirection: 'row',

    width: '100%',
  },
});

export default function ProjectCard({ image, title, description }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardMedia
          className={classes.media}
          image={image}
          title='Project Image'
        />
        <div className={classes.content}>
          <CardContent>
            <Typography>{title}</Typography>
            <Typography>{description}</Typography>
          </CardContent>
          <CardActions className={classes.buttons}>
            <Button>Live</Button>
            <Button>Github</Button>
          </CardActions>
        </div>
      </div>
    </Card>
  );
}
