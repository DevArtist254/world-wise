import React from 'react'
import Nav from '../components/nav/Nav';

function Pricing() {
  return (
    <>
    <Nav />
      <div className="pricing">
        <div className="text">
          <h1>
            Simple pricing.
            <br />
            Just $9/month
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa,
            laborum repudiandae cum necessitatibus molestias esse dicta vel a
            perspiciatis autem?
          </p>
        </div>
        <div className="image">
          <img src="../public/img-2.jpg" alt="pricing" />
        </div>
      </div>
    </>
  );
}

export default Pricing