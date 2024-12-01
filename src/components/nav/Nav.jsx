import React from 'react'
import { NavLink } from "react-router-dom"


function Nav() {
  return (
    <nav className="nav">
      <NavLink to="/">
        <span className="nav__logo">
          <img src="../public/logo.png" alt="logo" className="nav__logo--img" />
        </span>
      </NavLink>
      <ul className="nav__list">
        <li>
          <NavLink className="clr-white text uppercase" to="/pricing">
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink className="clr-white text uppercase" to="/product">
            Product
          </NavLink>
        </li>
        <li>
          <NavLink className="cta" to="/login">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav