import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";
import { AxiosWithAuth } from "../../utils";

const Completionist = () => <span>Game is over until 10:30PM.</span>;

const renderer = ({ hours, minutes, seconds, completed }) => {
  // console.log(completed)
  if (completed) {
    return <Completionist />;
  } else {
    return (
      <span>
        <h2>
          Game is over in {hours} hours, {minutes} minutes and {seconds}{" "}
          seconds.
        </h2>
      </span>
    );
  }
};

export function CountDownClock() {
  const [time, setTime] = useState();
  const [end, setEnd] = useState();
  const [newGame, setNewGame] = useState();

  console.log("end", end);

  useEffect(() => {
    AxiosWithAuth()
      .get("upload/time")
      .then(response => {
        setTime(response.data.time.start.time);
        setEnd(response.data.time.end.end);
        setNewGame(response.data.time.newGame.newGame);
      })
      .catch(err => console.log(err));
  }, []);

  return time && end && newGame ? (
    <Countdown date={parseInt(end)} renderer={renderer} />
  ) : null;
}
