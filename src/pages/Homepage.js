import React from 'react';
import styled from 'styled-components';
import { Container, Typography } from '@material-ui/core';
import Typist from 'react-typist';

import { Landing, RecentArticles, EditorDesk } from '../components';

const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled(Typography)`
  margin: 50px auto;
  color: #087d45;
  @media (max-width: 650px) {
    font-size: 50px;
  }
  @media (max-width: 400px) {
    font-size: 30px;
  }
`;

const information = {
  tagline: 'Imagine. Create. Soar',
};

function Homepage() {
  return (
    <Wrapper>
      <Heading variant='h2'>
        <Typist cursor={{ show: true, hideWhenDone: true, blink: true }}>
          {information.tagline}
        </Typist>
      </Heading>
      <Landing />
      <RecentArticles />
      <EditorDesk />
    </Wrapper>
  );
}

export default Homepage;
