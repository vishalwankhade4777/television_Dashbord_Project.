import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header style={{ padding: '1rem', background: '#333', color: '#fff' }}>
    <h1>
      <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
        TV Schedule
      </Link>
    </h1>
  </header>
);

export default Header;
