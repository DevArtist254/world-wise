import React from 'react'
import Nav from '../components/nav/Nav';

function Product() {
  return (
    <>
    <Nav />
      <div className="product">
        <div className="text">
          <h1>About WorldWise</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            voluptate, dicta ea quaerat, nam quas quam, porro laborum ab at
            consequuntur earum autem velit mollitia est excepturi doloribus.
            Optio, quae?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            ipsum soluta quia perspiciatis autem beatae deserunt nam aliquam
            doloremque nisi.
          </p>
        </div>
        <div className="image">
          <img src="../public/img-1.jpg" alt="product" />
        </div>
      </div>
    </>
  );
}

export default Product