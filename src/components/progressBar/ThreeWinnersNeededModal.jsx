import React from "react";

export default function ThreeWinnersNeededModal({closeModal}) {

    return (
<div className="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>You are early!</strong> Check back around 3:30pm Eastern / 12:30 Pacific
to see today's finalists
  <button onClick={closeModal} type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
    );
}
