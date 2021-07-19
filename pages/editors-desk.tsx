import React from 'react';
import { Layout, Container, Cards } from '../components';
import { getContentList } from '../lib/content';

const EditorsDesk = () => {
  return (
    <Layout
      pathname={'/editorsDesk'}
      pageTitle="Editor's Desk"
      pageDescription='Articles and technical blogs about Full Stack Web Development, Open-source and Communities'
    >
      <Container>
        <p className='page-intro'>EditorsDesk Page</p>
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

export default EditorsDesk;
