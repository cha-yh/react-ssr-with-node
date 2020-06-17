import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => (
  <header>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/news">News</Link></li>
    </ul>
  </header>
);

export default Header;
