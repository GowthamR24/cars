import React from 'react';
import { Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar expand='lg' variant='dark' bg='dark' className='px-5'>
      <Navbar.Brand href='#'>Car Zone</Navbar.Brand>
    </Navbar>
  );
};

export default Header;
