import React from 'react';
import Color from 'color';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import image from '../assets/images/article1.jpg';

const ArticleCard = ({ classes, image, title, subtitle }) => {
  return (
    <CardActionArea id='feature-cards' className={classes.actionArea}>
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={image} />
        <CardContent className={classes.content}>
          <Typography className={classes.title} variant={'h2'}>
            {title}
          </Typography>
          <Typography className={classes.subtitle}>{subtitle}</Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

export default ArticleCard;
