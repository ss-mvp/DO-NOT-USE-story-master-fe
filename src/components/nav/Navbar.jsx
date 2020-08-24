import React from "react";
import Menu from "./Menu";

export function Navbar({loc}) {

  return (
    <div className="desktopNav">
      <nav className="nav justify-content-between align-items-center fixed-top p-2">
        <div className="navbrand p-2">
          <h1 className="text-left ss-title text-primary display-3 ">
            Story Squad
          </h1>
        </div>
        <div className="d-flex p-2">
          <Menu loc={loc} />
        </div>
      </nav>
    </div>
  );
}
