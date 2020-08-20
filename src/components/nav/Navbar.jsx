import React from "react";
import Menu from "./Menu";
import List from "./List.svg"
export function Navbar() {

  return (
    <>
      <nav className="navbar justify-content-between align-items-center fixed-top p-2">
        <a className="navbrand p-2">
          <h1 className="text-left ss-title text-primary display-3 ">
            Story Squad
          </h1>
        </a>
        <button className="btn btn-primary navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <img src={List} alt="hamburger menu" />
        </button>
        <Menu />
      </nav>
    </>
  );
}
