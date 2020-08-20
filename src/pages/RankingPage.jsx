import React from "react";
import { Ranking, Navbar } from "../components";

export function RangkingPage(props) {

  const token = localStorage.getItem("token")

  return (
    <>
      <div className="custom-bg d-flex justify-content-center align-items-center">
        <section className="topthreewinner text-center container-sm">
          { token ? <Navbar /> : <></> }
          <h2 className="text-center m-5">Rank the Stories</h2>
          <Ranking props={props}/>
        </section>
      </div>
    </>
  );
}
