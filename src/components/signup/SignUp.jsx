import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { PublicVoteButton } from "../home/PublicVoteButton";
import "../../styling/styles.scss";
import { SEO } from "../../utils";

export function SignUp(props) {
  const [newUser, setNewUser] = useState({
    email: "",
    username: "",
    password: "",
    confirm: "",
    age: "",
    parentEmail: "",
  });

  // REACT_APP_BE=http://ec2-3-226-91-90.compute-1.amazonaws.com
  const baseUrl =
    process.env.REACT_APP_FE_ENV === "development"
      ? "http://localhost:5000"
      : process.env.REACT_APP_BE;
  const [error, setError] = useState("");
  // console.log("baseUrl", baseUrl);
  const handleChanges = e => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    // console.log("NEW USER", newUser)
    e.preventDefault();
    const age = parseInt(newUser.age);
    const sendUser = {
      email: newUser.email,
      username: newUser.username,
      password: newUser.password,
      age,
      parentEmail: age < 13 ? newUser.parentEmail : "",
    };
    //checks if password is required length with required elements before submitting to server
    if (validatePassword(newUser.password)) {
      axios
        .post(`${baseUrl}/email/register`, sendUser)
        .then(() => {
          alert(
            "Successfully registered! Please activate your email to sign in."
          );
        })
        .catch(err => {
          console.log("error", err.message);
          //if server returns a 400 error, duplicate info was submitted and that user already exists
          if (err.message.match(/[400]/)) {
            setError("User already exists. Please sign in.");
          }
        })
        .catch(console.error);
    }

    // update parental email if student age > 12 so that DB can have a quick find
    if (newUser.age > 12) {
      newUser.parentEmail =
        "User is above age 12. No parental confirmation required.";
    }
  };

  //validates that password contains letters and numbers, and length is between 8 and 32
  const validatePassword = pass => {
    let letterRegex = /[a-z]/gi;
    let nums = /[0-9]/g;
    if (
      !pass.match(letterRegex) ||
      !pass.match(nums) ||
      pass.length < 8 ||
      pass.length > 32
    ) {
      setError(
        "password must be between 8 and 32 characters in length and contain both letters and numbers"
      );
    } else {
      setError("");
      return pass;
    }
  };

  return (
    <div className='signupMain d-flex flex-column align-items-center'>
      <SEO title='Sign up' path={props.match.path} />
      <h2 className='text-center mb-5'>Sign Up</h2>
      <form 
      className='signup-form'
      onSubmit={handleSubmit}>
        <div className='form-group d-flex flex-column'>
          <div className='form-group'>
            <input
              required
              type='text'
              name='username'
              className='form-control'
              value={newUser.username}
              onChange={handleChanges}
            />
            <label>Username</label>
          </div>
          <div className='form-group'>
            <input
              required
              type='email'
              name='email'
              className='form-control'
              value={newUser.email}
              onChange={handleChanges}
            />
            <label>Email</label>
          </div>
          <div className='form-group'>
            <input
              required
              type='password'
              name='password'
              value={newUser.password}
              className='form-control'
              onChange={handleChanges}
            />
            <label>Password</label>
          </div>
          <div className='form-group'>
            <input
              className={`form-control ${
                newUser.password === newUser.confirm
                  ? "border border-success"
                  : "border border-danger"
              }`}
              required
              type='password'
              name='confirm'
              onChange={handleChanges}
            />
            <label>Confirm Password</label>
          </div>
          {newUser.password !== newUser.confirm ? (
            <p style={{ color: "red" }}>Passwords do not match</p>
          ) : null}
          <div className='form-group'>
            <input
              required
              type='number'
              name='age'
              min={0}
              max={150}
              value={newUser.age}
              className='form-control'
              onChange={handleChanges}
            />
            <label>Age</label>
          </div>
          {newUser.age && parseInt(newUser.age) < 13 && (
            <div className='form-group'>
              <input
                required
                type='email'
                name='parentEmail'
                value={newUser.parentEmail}
                className='form-control'
                onChange={handleChanges}
              />
              <label>Parent Email</label>
            </div>
          )}
          {error && (
            <p style={{ color: "red", textAlign: "center" }}>{error}</p>
          )}
          <button
            disabled={newUser.password !== newUser.confirm}
            className='mb-3 btn btn-primary font-weight-bold'
            style={{ fontSize: "24px" }}
            type='submit'
          >
            Sign Up
          </button>
          <div className='tos'>
            By clicking the “Sign Up” button above, you agree to the{" "}
            <Link to={`/tos`}>Terms & Conditions</Link> and{" "}
            <Link to={`/tos`}>Privacy Policy</Link>.
          </div>
          <p className='text-center mt-3' style={{ fontSize: "18px" }}>
            Already have an account?{" "}
            <Link to={`/signin`}>Click Here To Login</Link>!
          </p>
        </div>
      </form>
      <PublicVoteButton />
    </div>
  );
}
