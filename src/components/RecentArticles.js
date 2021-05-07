import React from 'react';
import Color from 'color';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Typography } from '@material-ui/core';
import styled from 'styled-components';
import ArticleCard from '../shared/ArticleCard';

import article1 from '../assets/images/article1.jpg';
import article2 from '../assets/images/article2.jpg';
import article3 from '../assets/images/article3.jpg';
import article4 from '../assets/images/article4.jpg';

const useStyles = makeStyles(() => ({
  actionArea: {
    borderRadius: 16,
    transition: '0.2s',
    margin: 20,
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  card: ({ color }) => ({
    minWidth: 256,
    borderRadius: 16,
    boxShadow: 'none',
    '&:hover': {
      boxShadow: `0 6px 12px 0 ${Color(color).rotate(-12).darken(0.2).fade(0.5)}`,
    },
  }),
  content: ({ color }) => {
    return {
      backgroundColor: color,
      padding: '1rem 1.5rem 1.5rem',
    };
  },
  title: {
    fontFamily: 'Keania One',
    fontSize: '1.5rem',
    color: '#fff',
    textTransform: 'uppercase',
  },
  media: {
    height: 250,
  },
  subtitle: {
    fontFamily: 'Montserrat',
    color: '#fff',
    opacity: 0.87,
    marginTop: '2rem',
    fontWeight: 500,
    fontSize: 14,
  },
}));

const Heading = styled(Typography)`
  margin: 150px 24px 20px;
  text-align: left;
  color: #087d45;
  @media (max-width: 768px) {
    font-size: 30px;
    margin: 70px 0 20px 0;
  }
`;

const Partials = { heading: 'Recent Articles' };

const RecentArticles = React.memo(function SolidCards() {
  const styles = useStyles({ color: '#203f52' });
  const styles2 = useStyles({ color: '#4d137f' });
  const styles3 = useStyles({ color: '#ff9900' });
  return (
    <Container maxWidth='lg'>
      <Heading variant='h3'>{Partials.heading}</Heading>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Grid style={{ marginLeft: '-50px' }} item container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <ArticleCard
              classes={styles}
              title={'Article Title'}
              subtitle={'Brief tagline of the article'}
              image={article1}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ArticleCard
              classes={styles2}
              title={'Article Title'}
              subtitle={'Brief tagline of the article'}
              image={article2}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ArticleCard
              classes={styles3}
              title={'Article Title'}
              subtitle={'Brief tagline of the article'}
              image={article3}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ArticleCard
              classes={styles}
              title={'Article Title'}
              subtitle={'Brief tagline of the article'}
              image={article4}
            />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
});

export default RecentArticles;
