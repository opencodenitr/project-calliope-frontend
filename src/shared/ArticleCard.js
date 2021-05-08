import React from 'react';
import { Typography, Card, CardActionArea, CardContent, CardMedia } from '@material-ui/core';

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
