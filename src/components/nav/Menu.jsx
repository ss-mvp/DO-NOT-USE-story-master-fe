import { Link } from "react-router-dom";
import React from 'react'

export default function Menu() {
    return (
        <div style={{ maxWidth: '200px', right: 0, top: 100}}className="bg-white collapse navbar-collapse position-absolute text-right" id="navbarNavDropdown">
            <Link to="/submission" className="nav-item nav-link">
              Submit your story
            </Link>
            <Link to="/winners" className="nav-item nav-link">
              Top 3
            </Link>
            <Link to="/ranking" className="nav-item nav-link">
              Rank your favorites
            </Link>
            <Link to="/announcement" className="nav-item nav-link">
              Winner Announcement
            </Link>
            <Link to="/signin" onClick={() => { localStorage.clear() }} className="nav-item nav-link">
              Logout
            </Link>
        </div>
    )
}
