import React from 'react';
import { Layout, Container, Cards } from '../components';
import { getContentList } from '../lib/content';

const Sundry = () => {
  return (
    <Layout
      pathname={'/sundry'}
      pageTitle='Sundry'
      pageDescription='Articles and technical blogs about Full Stack Web Development, Open-source and Communities'
    >
      <Container>
        <p className='page-intro'>Sundry Page</p>
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

export default Sundry;
