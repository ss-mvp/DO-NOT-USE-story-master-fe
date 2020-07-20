import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div>
      <nav className="nav justify-content-around align-items-center fixed-top ">
        <h1 className="text-left ss-title text-primary display-3 ">
          Story Squad
        </h1>
        <Link
          to="/submission"
          style={{ fontSize: "36px" }}
          className="  nav-link font-weight-bold   "
        >
          Prompt
        </Link>
        <Link
          to="/ranking"
          style={{ fontSize: "36px" }}
          className="  nav-link font-weight-bold  "
        >
          Ranking
        </Link>
        <Link
          to="/winners"
          style={{ fontSize: "36px" }}
          className=" nav-link font-weight-bold  "
        >
          Top 3
        </Link>
        <Link
          to="/signin"
          onClick={() => {
            localStorage.clear();
          }}
          style={{ fontSize: "36px" }}
          className="nav-link font-weight-bold  "
        >
          Logout
        </Link>
      </nav>
    </div>
  );
}
