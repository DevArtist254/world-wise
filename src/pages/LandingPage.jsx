import React from 'react'
import Nav from '../components/nav/Nav';
import { NavLink } from 'react-router-dom';

function LandingPage() {
  return (
    <>
      <Nav />
      <div className="landing-page">
        <h1 className="landing-page__pri pri-text">
          You travel the world. <br /> WorldWise keeps track of your adventures
        </h1>
        <h3 className="landing-page__sec sec-text">
          A world map that tracks your footsteps into every city you can think
          of. Never forget <br /> your wonderful experiences, and show your
          friends how you have wandered the world.
        </h3>
        <NavLink className="cta" to="/login">
          Start tracking now
        </NavLink>
      </div>
    </>
  );
}

export default LandingPage