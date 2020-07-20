import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export function SignUp(props) {

  const [newUser, setNewUser] = useState({
    email: "",
    username: "",
    password: "",
    confirm: "",
  });

  const handleChanges = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const sendUser = {
      email: newUser.email,
      username: newUser.username,
      password: newUser.password,
    };
    axios
      // .post("https://ss-mvp.herokuapp.com/email/register", sendUser)
      .post("http://localhost:5000/email/register", sendUser)
      .then(() => {
        alert("New user registered. Please activate your email.");
      })
      .catch((err) => console.log(err));
  };
  
  return (
    <>
      <h2 className="text-center mb-5">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group d-flex flex-column">
          <div className="form-group">
            <input
              required
              type="text"
              name="email"
              className="form-control"
              value={newUser.email}
              onChange={handleChanges}
            />
            <label>Email</label>
          </div>
          <div className="form-group">
            <input
              required
              type="text"
              name="username"
              className="form-control"
              value={newUser.username}
              onChange={handleChanges}
            />
            <label>Username</label>
          </div>
          <div className="form-group">
            <input
              required
              type="password"
              name="password"
              value={newUser.password}
              className="form-control"
              onChange={handleChanges}
            />
            <label>Password</label>
          </div>
          <div className="form-group">
            <input
              className={`form-control ${
                newUser.password === newUser.confirm
                  ? "border border-success"
                  : "border border-danger"
              }`}
              required
              type="password"
              name="confirm"
              onChange={handleChanges}
            />
            <label>Confirm Password</label>
          </div>
          {newUser.password !== newUser.confirm ? (
            <p style={{ color: "red" }}>Passwords do not match</p>
          ) : null}
          <button
            disabled={newUser.password !== newUser.confirm}
            className="mb-3 btn btn-primary"
            type="submit"
          >
            Continue
          </button>
          <button className="mb-3 btn btn-primary">Privacy Policy</button>
        </div>
        <p>
          Already have an account? Click here to{" "}
          <Link to={`/signin`}>sign in</Link>
        </p>
      </form>
    </>
  );
}
