import React from 'react';
import { Layout, Container, Cards } from '../components';
import { getContentList } from '../lib/content';

const Scribbles = () => {
  return (
    <Layout
      pathname={'/scribbles'}
      pageTitle='Scribbles'
      pageDescription='Articles and technical blogs about Full Stack Web Development, Open-source and Communities'
    >
      <Container>
        <p className='page-intro'>Scribbles Page</p>
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

export default Scribbles;
