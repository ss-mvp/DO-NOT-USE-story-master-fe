import React from "react";
import { WinnerBoard, Navbar } from "../components";

export function TopThreeWinnersPage() {
  return (
    <div className="custom-bg d-flex justify-content-center align-items-center">
      <section className="topthreewinner text-center container-sm">
        <Navbar />
        <h2 className="text-primary m-5">Top Three Winners</h2>
        <WinnerBoard />
      </section>
    </div>
  );
}
