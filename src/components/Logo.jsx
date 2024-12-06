import React from 'react'
import { NavLink } from 'react-router-dom';

function Logo() {
  return (
    <NavLink to="/">
      <span className="nav__logo">
        <img src="../public/logo.png" alt="logo" className="nav__logo--img" />
      </span>
    </NavLink>
  );
}

export default Logo