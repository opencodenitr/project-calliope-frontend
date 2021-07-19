import React, { useContext } from 'react';
import Link from 'next/link';

import { NavSection, StyledHamburger, StyledLogo } from '../styles/nav.styles';
import { Container } from './container';
// import SiteConfig from '../config/index.json';
import { MenuContext } from '.';
import Dropdown from './dropdown';

const Nav = () => {
  const menuContext = useContext(MenuContext);

  const { toggleMenuOpen, menuOpen } = menuContext;

  return (
    <NavSection>
      <Container>
        <nav className='navWrapper'>
          <div className='navLeft'>
            <Link href='/'>
              <StyledLogo src='logo.png' />
            </Link>
          </div>

          <div className='navRight'>
            <StyledHamburger menuOpen={menuOpen} onClick={toggleMenuOpen}></StyledHamburger>

            <ul className='navLinkList'>
              <li className='navLinkItem'>
                <Link href='/'>
                  <a className='navLink'>Home</a>
                </Link>
              </li>
              <li className='navLinkItem'>
                <Link href='/about'>
                  <a className='navLink'>About</a>
                </Link>
              </li>
              <li className='navLinkItem'>
                <Link href='/team'>
                  <a className='navLink'>Team</a>
                </Link>
              </li>
              <li className='navLinkItem'>
                <Dropdown />
              </li>
              <li className='navLinkItem'>
                <Link href='/contacts'>
                  <a className='navLink'>Contacts</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </Container>
    </NavSection>
  );
};

export default Nav;
