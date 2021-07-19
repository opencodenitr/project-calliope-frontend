import React from 'react';
import { Layout, Container, Cards } from '../components';
import { getContentList } from '../lib/content';

const FanFiction = () => {
  return (
    <Layout
      pathname={'/fan-fiction'}
      pageTitle='Fan Fiction'
      pageDescription='Articles and technical blogs about Full Stack Web Development, Open-source and Communities'
    >
      <Container>
        <p className='page-intro'>Fan Fiction Page</p>
      </Container>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const articles = getContentList('articles');
  return {
    props: { articles },
  };
};

export default FanFiction;
