import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { Menu, Close } from '@material-ui/icons';
import logo from '../../assets/images/logo.png';
import './Navbar.css';

export default function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const Menuitems = [
    { item: 'home', url: '/' },
    { item: 'about', url: '/about' },
    { item: 'team', url: '/team' },
    { item: 'Editors-Desk', url: '/Editors' },
    { item: 'contacts', url: '/contacts' },
    { item: 'admin', url: '/admin' },
  ];

  return (
    <nav className='NavbarItems'>
      <img className='navbar-logo' src={logo} />
      <div className='menu-icon' onClick={handleClick}>
        {click ? <Close /> : <Menu />}
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        {Menuitems.map((navItem, index) => {
          return (
            <li key={index}>
              <Button onClick={handleClick} style={{ size: '15px' }}>
                <NavLink style={{ textDecoration: 'none' }} to={navItem.url}>
                  {navItem.item.toUpperCase()}
                </NavLink>
              </Button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
