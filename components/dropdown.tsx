import React from 'react';
import Link from 'next/link';
import { Typography, Menu, MenuItem } from '@material-ui/core';

export default function Dropdown() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Typography
        style={{ cursor: 'pointer' }}
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        Legacy
      </Typography>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link href='/fan-fiction'>
            <a style={{ textDecoration: 'none' }}>Fan Fiction</a>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href='/sundry'>
            <a style={{ textDecoration: 'none' }}>Sundry</a>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href='/scribbles'>
            <a style={{ textDecoration: 'none' }}>Scribbles</a>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href='/editors-desk'>
            <a style={{ textDecoration: 'none' }}>Editor's Desk</a>
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
