import React from 'react'
import Nav from '../components/nav/Nav';

function Pricing() {
  return (
    <>
      <Nav />
      <div className="pricing">
        <div className="pricing__text">
          <h1 className='pri-text'>
            Simple pricing.
            <br />
            Just $9/month
          </h1>
          <p className='text'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa,
            laborum repudiandae cum necessitatibus molestias esse dicta vel a
            perspiciatis autem?
          </p>
        </div>
        <div className="pricing__image">
          <img className='image' src="../public/img-2.jpg" alt="pricing" />
        </div>
      </div>
    </>
  );
}

export default Pricing