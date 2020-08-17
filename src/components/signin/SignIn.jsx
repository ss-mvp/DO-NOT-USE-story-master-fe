import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import { SEO } from "../../utils";

export function SignIn(props) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [activated, setActivated] = useState(false);

  const history = useHistory();

  const handleChanges = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://ss-mvp.herokuapp.com/email/activation/${credentials.email}`
        // `http://localhost:5000/email/activation/${credentials.email}`
      )
      .then((validation) => {
        console.log(validation);
        setActivated(validation.data.validated);
        if (validation.data.validated === true) {
          axios
            .post("https://ss-mvp.herokuapp.com/email/login", credentials)
            // .post("http://localhost:5000/email/login", credentials)
            .then((response) => {
              localStorage.setItem("token", response.data.token);
            });
        } else {
          alert("You need to activate your email!");
        }
      });
    history.push("/submission");
  };

  return (
    <>
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
          <button className="btn btn-primary" type="submit">
            Login
          </button>
          <p className="text-center mt-3" style={{ fontSize: "18px" }}>
             Don't have an account? <Link to="/">Sign Up Now!</Link>
          </p>
        </div>
      </form>
    </>
  );
}
