import { Link } from "react-router-dom";
import React from 'react'

export default function Menu() {
    return (
      <>
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
            localStorage.clear();
          }}
          className="nav-link"
        >
          <h4 className="ss-title text-secondary">Logout</h4>
        </Link>
    </>
    )
}
