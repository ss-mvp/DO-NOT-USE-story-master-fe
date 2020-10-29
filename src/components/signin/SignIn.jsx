import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { PublicVoteButton } from '../home/PublicVoteButton';

import { SEO } from '../../utils';

export function SignIn(props) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  // const [activated, setActivated] = useState(false);

  const baseUrl =
    process.env.REACT_APP_FE_ENV === 'development'
      ? 'http://localhost:5000'
      : process.env.REACT_APP_BE;

  const history = useHistory();

  const handleChanges = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  // TODO - add conditional statement to render "Your PARENT needs to verify their email"
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`${baseUrl}/email/activation/${credentials.email}`)
      .then((validation) => {
        // console.log('validation', validation);
        // setActivated(validation.data.validated);
        if (validation.data.validated === true) {
          axios.post(`${baseUrl}/email/login`, credentials).then((response) => {
            // console.log('response', response);
            props.setUsername(response.data.username);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('username', response.data.username);
            history.push('/dashboard');
          });
        } else {
          alert(
            'Validate your account in your email inbox! If you are under the age of 13, please have your parent validate in their email.'
          );
        }
      })
      .catch(console.error);
  };

  return (
    <div>
      <SEO title="Sign in" path={props.match.path} />
      <h2 className="text-center mb-5">Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group d-flex flex-column">
          <div className="form-group">
            <input
              required
              type="email"
              name="email"
              className="form-control"
              value={credentials.email}
              onChange={handleChanges}
            />
            <label>Email</label>
          </div>
          <div className="form-group">
            <input
              required
              type="password"
              name="password"
              value={credentials.password}
              className="form-control"
              onChange={handleChanges}
            />
            <label>Password</label>
          </div>
          <button
            className="btn btn-primary btn-lg font-weight-bold"
            type="submit"
          >
            Login
          </button>
          <p className="text-center mt-3" style={{ fontSize: '18px' }}>
            Don't have an account? <Link to="/">Sign Up Now!</Link>
          </p>
        </div>
      </form>
      <PublicVoteButton />
    </div>
  );
}
