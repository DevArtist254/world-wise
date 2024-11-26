import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Homepage</NavLink>
        </li>
        <li>
          <NavLink to="/product">Prduct</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav