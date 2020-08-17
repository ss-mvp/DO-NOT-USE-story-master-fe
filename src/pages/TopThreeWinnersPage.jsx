import React from "react";
import { WinnerBoard, Navbar } from "../components";
import { SEO } from "../utils";

export function TopThreeWinnersPage(props) {
  return (
    <div className="custom-bg d-flex justify-content-center align-items-center">
      <SEO title="Winners" path={props.match.path} />
      <section className="topthreewinner text-center container-sm">
        <Navbar />
        <h2 className="text-center">Top Three Winners</h2>
        <WinnerBoard />
      </section>
    </div>
  );
}
