import React from 'react';
import Color from 'color';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Typography } from '@material-ui/core';
import styled from 'styled-components';
import EditorDeskCard from '../shared/EditorDeskCard';

import article1 from '../assets/images/article1.jpg';
import article2 from '../assets/images/article2.jpg';
import article3 from '../assets/images/article3.jpg';
import article4 from '../assets/images/article4.jpg';

const useStyles = makeStyles(() => ({
  actionArea: {
    borderRadius: 16,
  },
  card: ({ color }) => ({
    maxWidth: 256,
    borderRadius: 16,
    boxShadow: 'none',
  }),
  content: ({ color }) => {
    return {
      backgroundColor: color,
      padding: '1rem 1.5rem 1.5rem',
    };
  },
  title: {
    fontFamily: 'Poppins',
    fontSize: '1.5rem',
    color: '#fff',
    textTransform: 'uppercase',
  },
  media: {
    height: 250,
  },
  subtitle: {
    fontFamily: 'Poppins',
    color: '#fff',
    opacity: 0.87,
    marginTop: '2rem',
    fontWeight: 500,
    fontSize: 14,
  },
}));

const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 768px) {
    margin-left: 30px 0 20px;
    font-size: 30px;
  }
`;

const Heading = styled(Typography)`
  margin: 150px 24px 20px;
  text-align: left;
  color: #087d45;
  @media (max-width: 768px) {
    margin-left: 30px 0 20px;
    font-size: 30px;
  }
`;

const Partials = { heading: `Editor's Desk` };

const EditorDesk = React.memo(function SolidCards() {
  const styles = useStyles({ color: '#203f52' });
  const styles2 = useStyles({ color: '#4d137f' });
  const styles3 = useStyles({ color: '#ff9900' });
  return (
    <Wrapper maxWidth='lg'>
      <Heading variant='h3'>{Partials.heading}</Heading>
      <>
        <Grid item container spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
            <EditorDeskCard classes={styles} image={article1} />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <EditorDeskCard classes={styles} image={article2} />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <EditorDeskCard classes={styles} image={article3} />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <EditorDeskCard classes={styles} image={article4} />
          </Grid>
        </Grid>
      </>
    </Wrapper>
  );
});

export default EditorDesk;
