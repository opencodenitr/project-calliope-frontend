import React from 'react';
import { Layout, Container } from '../components';

const About = () => {
  return (
    <Layout
      pathname={'/about'}
      pageTitle='About'
      pageDescription='Articles and technical blogs about Full Stack Web Development, Open-source and Communities'
    >
      <Container>
        <p className='page-intro'>About Page</p>
      </Container>
    </Layout>
  );
};

export default About;
