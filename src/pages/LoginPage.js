import React from 'react';
import styled from 'styled-components';
import { Container } from '@material-ui/core';
import { Login } from '../components';

const Wrapper = styled(Container)`
  display: flex;
  justify-content: center;
  margin: 2% auto;
`;

function LoginPage() {
  return (
    <Wrapper>
      <Login />
    </Wrapper>
  );
}

export default LoginPage;
