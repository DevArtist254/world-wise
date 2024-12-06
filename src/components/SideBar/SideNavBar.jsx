import React from 'react'
import { NavLink } from 'react-router-dom'

function SideNavBar() {
  return (
    <div className="sidenavbar">
      <ul className="sidenavbar__list">
        <li className="sidenavbar__item">
          <NavLink to="cities">cities</NavLink>
        </li>
        <li className={`sidenavbar__item`}>
          <NavLink to="countries">coutries</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SideNavBar