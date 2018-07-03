import React from 'react';

import { Navbar, Row } from 'react-materialize';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <Row>
    <Navbar className="green darken-1">
      <li><NavLink to='/home'>Home</NavLink> </li>
      <li><NavLink to='/contact'>Contact</NavLink> </li>
    </Navbar>
  </Row>
);

export default Header;