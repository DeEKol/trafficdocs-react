import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Link to='/about'>О сайте</Link>
      <Link to='/counterparty'>Контрагенты</Link>
    </div>
  )
}

export default Navbar;