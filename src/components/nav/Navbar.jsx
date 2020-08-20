import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div>
      <nav className="navbar justify-content-between align-items-center fixed-top p-2">
        <a className="navbrand p-2">
          <h1 className="text-left ss-title text-primary display-3 ">
            Story Squad
          </h1>
        </a>
        <div className="">
          <button className="btn btn-primary navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">Menu</span>
          </button>
        </div>
      </nav>
      <div style={{maxWidth: '200px'}} className="bg-white collapse navbar-collapse text-right" id="navbarNavDropdown">
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
    </div>
  );
}
