import React from 'react';
import styled from 'styled-components';
import { Container } from '@material-ui/core';

import background from '../assets/images/landing.svg';

const Wrapper = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

function Landing() {
  return (
    <Wrapper maxWidth='md'>
      <Image src={background} alt='Landing Background' />
    </Wrapper>
  );
}

export default Landing;
