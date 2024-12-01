import React from 'react'
import Nav from '../components/nav/Nav';

function Login() {
  return (
    <div>
      <Nav />
      <form className="form">
        <div className="form__email">
          <label className="form__email--label">Email Address</label>
          <input
            type="email"
            name="email"
            className="form__email--input"
            value="jack@example.com"
          />
        </div>
        <div className="form__password">
          <label htmlFor="password" className="form__password--label">
            password
          </label>
          <input
            type="password"
            name="password"
            className="form__password--input"
            required
            value="1231"
          />
        </div>
        <button type="submit" className="form__submit btn">
          LOGIN
        </button>
      </form>
    </div>
  );
}

export default Login