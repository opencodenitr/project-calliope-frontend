import React from 'react';
import { Layout, Container } from '../components';

const Contacts = () => {
  return (
    <Layout
      pathname={'/contacts'}
      pageTitle='Contacts'
      pageDescription='Articles and technical blogs about Full Stack Web Development, Open-source and Communities'
    >
      <Container>
        <p className='page-intro'>Contacts Page</p>
      </Container>
    </Layout>
  );
};

export default Contacts;
