import { Link } from "react-router-dom";
import React from 'react'

export default function Menu({loc}) {
  if(!loc){
    return (
      <>
        <Link to="/dashboard" className="nav-item nav-link">
          <h4 className="ss-title h4-nav">My Dashboard</h4>
        </Link>
        <Link to="/submission" className="nav-item nav-link">
          <h4 className="ss-title h4-nav">Submit your story</h4>
        </Link>
        <Link to="/winners" className="nav-item nav-link">
          <h4 className="ss-title h4-nav">Leaderboard</h4>
        </Link>
        <Link to="/ranking" className="nav-item nav-link">
          <h4 className="ss-title h4-nav">Rank your favorites</h4>
        </Link>
        <Link to="/announcement" className="nav-item nav-link">
          <h4 className="ss-title h4-nav">Winner Announcement</h4>
        </Link>
        <Link
          to="/signin"
          onClick={() => {
            localStorage.removeItem('username');
            window.localStorage.removeItem('token');
            // setUsername('');
          }}
          className="nav-link"
        >
          <h4 className="ss-title text-secondary">Logout</h4>
        </Link>
    </>
    )
  } else {
    return (
      <>
        <Link
          to="/signin"
          onClick={() => {
            localStorage.removeItem('username');
            window.localStorage.removeItem('token')
            // setUsername('');
          }}
          className="nav-link"
        >
          <h4 className="ss-title text-secondary">Logout</h4>
        </Link>
    </>
    )
  }
}
