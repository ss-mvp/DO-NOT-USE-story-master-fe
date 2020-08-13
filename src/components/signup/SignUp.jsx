import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export function SignUp(props) {
  const [newUser, setNewUser] = useState({
    email: "",
    username: "",
    password: "",
    confirm: "",
    age: "",
    parentEmail: "",
  });

  const baseUrl = process.env.REACT_APP_FE_ENV === 'development' ? 'http://localhost:5000' : 'https://ss-mvp.herokuapp.com'
  const [error, setError] = useState('')
  console.log('baseUrl', baseUrl)
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
      age: newUser.age,
      parentEmail: newUser.parentEmail,
    };
    //checks if password is required length with required elements before submitting to server
    if(validatePassword(newUser.password)){
      axios
      .post(`${baseUrl}/email/register`, sendUser)
      // .post("http://localhost:5000/email/register", sendUser)
      .then(() => {
        alert("New user registered. Please activate your email.");
      })
      .catch((err) => {
        console.log('error', err.message)
        //if server returns a 400 error, duplicate info was submitted and that user already exists
        if (err.message.match(/[400]/)){
          setError('User already exists. Please sign in.')
        }
      });
    }
  };

  //validates that password contains letters and numbers, and length is between 8 and 32
  const validatePassword = (pass) => {
    let letterRegex = /[a-z]/gi;
    let nums = /[0-9]/g
    if(!pass.match(letterRegex) || !pass.match(nums) || pass.length < 8 || pass.length > 32){
      setError("password must be between 8 and 32 characters in length and contain both letters and numbers")
    } else{
      setError("")
      return pass;
    }
  }

  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems: 'center'}}>
      <h2 className="text-center mb-5">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group d-flex flex-column">
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
              type="email"
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
          <div className="form-group">
            <input
              required
              type="number"
              name="age"
              min={0}
              max={150}
              value={newUser.age}
              className="form-control"
              onChange={handleChanges}
            />
            <label>Age</label>
          </div>
          {newUser.age && parseInt(newUser.age) < 13 && (
            <div className="form-group">
              <input
                required
                type="email"
                name="parentEmail"
                value={newUser.parentEmail}
                className="form-control"
                onChange={handleChanges}
              />
              <label>Parent Email</label>
            </div>
          )}
          {error && <p style={{ color: "red", textAlign: 'center' }}>{error}</p>}
          <button
              disabled={newUser.password !== newUser.confirm}
              className=" mb-3 btn btn-primary font-weight-bold pt-3 pb-3 mr-4 ml-4"
              style={{ fontSize: "24px" }}
              type="submit"
            >
              Sign Up
            </button>
          {/* <p>
            Already have an account? Click here to{" "}<Link to={`/Login`}>sign in</Link>
          </p> */}
          <div className="ml-4">
            By clicking the “Sign Up” button above, you agree to the <Link to={`/signin`}>Terms & Conditions</Link> and <Link to={`/signin`}>Privacy Policy</Link>.  Already have an account? Click here to{" "}<Link to={`/signin`}>sign in</Link>
          </div>
            
          </div>
      </form>
            <button
              style={{ fontSize: "24px"}}
              className="mb-3 btn btn-outline-primary font-weight-bold pt-3 pb-3 mr-4 ml-4 mt-5"
            >
              Just want to Vote?
            </button>
    </div>
  );
}
