import React from 'react';
import styled from 'styled-components';
import { CssBaseline, Typography, Container } from '@material-ui/core';
import { Email, GitHub, Instagram } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import logo from '../assets/images/logo.png';

function Copyright() {
  return (
    <Typography variant='h6' color='textPrimary'>
      {'Copyright © '}
      <Link color='inherit' href='#'>
        Some XYZ Brand
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Wrapper = styled.div`
  background-color: #a4ebf3;
  color: #fff;
  margin-top: 10px;
  padding: 20px auto 10px;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '20vh',
    textAlign: 'center',
    paddingTop: '20px',
  },
  main: {
    // marginTop: theme.spacing(8),
  },
  logo: {
    height: '40px',
  },
  footerIcon: {
    margin: '0 20px',
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Wrapper className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container maxWidth='sm'>
          <img className={classes.logo} src={logo} alt='logo'></img>
          <Copyright className={classes.footerIcon} />
          <Email className={classes.footerIcon} />
          <Instagram className={classes.footerIcon} />
          <GitHub className={classes.footerIcon} />
        </Container>
      </footer>
    </Wrapper>
  );
}
