import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import '../../styling/mobileNav.css';

export default function Navbar() {
  const history = useHistory();
  const location = useLocation().pathname;

  const [username, setUsername] = useState('');
  const [checked, setChecked] = useState(false);

  const unCheck = () => {
    setChecked(false);
  };

  useEffect(() => {
    unCheck();
    if (localStorage.getItem('username') && username === '') {
      setUsername(localStorage.getItem('username'));
    }
  }, [location]);

  useEffect(() => {}, []);
  return (
    <div className="mobileNavContainer">
      <input
        type="checkbox"
        className="blue"
        id="menu"
        onChange={() => setChecked(!checked)}
        checked={checked}
        onClick={() => setChecked(!checked)}
      />
      <label htmlFor="menu" className="icon">
        <div className="menu"></div>
      </label>
      <nav className="mobilenav">
        <p
          style={{
            position: 'absolute',
            top: '10px',
            left: '25px',
            fontSize: '25px',
          }}
        >
          {username}
        </p>
        <div>
          <h1 style={{ fontFamily: "'Bangers', cursive" }}>Story Squad</h1>
        </div>

        <div>
          <Link to="/dashboard">
            <h3>Dashboard</h3>
          </Link>
          <Link to="/submission">
            <h3>Submit your story</h3>
          </Link>
          <Link to="/winners">
            <h3>Top 3</h3>
          </Link>
          <Link to="/ranking">
            <h3>Rank your favorites</h3>
          </Link>
          <Link to="/announcement">
            <h3>Winner Announcement</h3>
          </Link>

          <Link
            to="/signin"
            onClick={() => {
              localStorage.clear();
              setUsername('');
            }}
          >
            <h3>Logout</h3>
          </Link>
        </div>
      </nav>
    </div>
  );
}
