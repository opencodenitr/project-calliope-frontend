import React from 'react';
import styled from 'styled-components';
import { Container, Typography } from '@material-ui/core';

import { Landing, RecentArticles } from '../components';
import { ArticleCard } from '../shared';

const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled(Typography)`
  margin: 50px auto;
`;

const information = {
  tagline: 'Imagine. Create. Soar',
};

function Homepage() {
  return (
    <Wrapper>
      <Heading variant='h2'>{information.tagline}</Heading>
      <Landing />
      <RecentArticles />
    </Wrapper>
  );
}

export default Homepage;
