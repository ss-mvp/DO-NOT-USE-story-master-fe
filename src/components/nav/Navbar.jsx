import React from "react";
import Menu from "./Menu";
import List from "./List.svg"
import { Link } from 'react-router-dom'

export function Navbar() {

  return (
    <div className="desktopNav">
      <nav className="nav justify-content-between align-items-center fixed-top p-2">
        <div className="navbrand p-2">
          <h1 className="text-left ss-title text-primary display-3 ">
            Story Squad
          </h1>
        </div>
        <div className="d-flex p-2">
          <Link to="/submission" className="nav-link">
            <h3>Submit your story</h3>
          </Link>
          <Link to="/winners" className="nav-link">
            <h3>Top 3</h3>
          </Link>
          <Link to="/ranking" className="nav-link">
            <h3>Rank your favorites</h3>
          </Link>
          <Link to="/announcement" className="nav-link">
            <h3>Winner Announcement</h3>
          </Link>

          <Link
            to="/signin"
            onClick={() => {
              localStorage.clear();
            }}
            className="nav-link"
          >
            <h3>Logout</h3>
          </Link>
        </div>
      </nav>
    </div>
  );
}
