import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styling/mobileNav.css';
import { AxiosWithAuth } from "../../utils"


export default function Navbar({username, setUsername}) {
  const location = useLocation().pathname;

  const [checked, setChecked] = useState(false);

  const unCheck = () => {
    setChecked(false);
  };

  useEffect(() => {
    unCheck();
    if (localStorage.getItem('username') && username === "") {
      // console.log('setting username')
      setUsername(()=>localStorage.getItem('username'));
    }
  }, [location, username, setUsername]);

    // const history = useHistory();
    const [winners, setWinners] = useState([]);
  

    useEffect(() => {
      
      AxiosWithAuth()
        .get('/ranking')
        .then((res) => {
          let response = res.data;
          // console.log("RESPONSE", response)
          if(response.length > 0){
            setWinners(response);
          }
        }).catch(console.error);
    }, []);

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
          <Link  to={winners.length === 3 ? "/ranking" : "/submission" }>
            <h3>Rank your favorites</h3>
          </Link>
          <Link to="/announcement">
            <h3>Winner Announcement</h3>
          </Link>

          <Link
            to="/signin"
            onClick={() => {
              localStorage.removeItem('username');
              localStorage.removeItem('token');
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
