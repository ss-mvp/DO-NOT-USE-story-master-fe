import React from "react";
import { Ranking, Navbar } from "../components";

export function RangkingPage() {
  return (
    <>
      <div className="custom-bg d-flex justify-content-center align-items-center">
        <section className="topthreewinner text-center container-sm">
          <Navbar />
          <h2 className="text-primary m-5">Rank The Stories</h2>
          <Ranking />
        </section>
      </div>
    </>
  );
}
