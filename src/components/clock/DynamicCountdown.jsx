import React, { useState, useEffect } from 'react';
import Countdown from 'react-countdown';
import moment from 'moment';
import { AxiosWithAuth } from '../../utils/AxiosWithAuth';

export default function DynamicCountdown({ setCurrent }) {
  const [time, setTime] = useState();
  const [end, setEnd] = useState();
  const [newGame, setNewGame] = useState();
  const [countdown, setCountdown] = useState(Date.now());

  // production time slots
  // const subEndVoteStart = moment(Number(end)).subtract({ hours: 3 });
  // const voteStartTime = moment(Number(end)).subtract({ hours: 3 });
  // const voteEndTime = moment(Number(end)).subtract({ minutes: 30 });
  // const winnerTime = Number(end);

  //development time slots, counted backwards from the end of the game, since the server does not give timeframes for individual events
  const subEndVoteStart = moment(Number(end)).subtract({
    hours: 9,
    minutes: 49,
  });
  const voteEndTime = moment(Number(end)).subtract({ hours: 9, minutes: 34 });
  const winnerTime = Number(end);

  useEffect(() => {
    AxiosWithAuth()
      .get('upload/time')
      .then((response) => {
        setTime(response.data.time.start.time);
        setEnd(response.data.time.end.end);
        setNewGame(response.data.time.newGame.newGame);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (time && end) {
      incrementTimeSlot();
    }
  }, [time, end]);

  //function to change countdown clock to match current activity
  const incrementTimeSlot = () => {
    console.log('from increment time slot');
    let currentTime = Date.now();
    //game is still going for today
    if (currentTime < winnerTime) {
      //game has already begun
      if (currentTime >= time) {
        //submission time
        if (currentTime < subEndVoteStart) {
          console.log('submission time');
          setCurrent(0);
          setCountdown(routes[0].end);
        }
        //voting time
        else if (currentTime >= subEndVoteStart && currentTime < voteEndTime) {
          console.log('voting time');
          setCurrent(1);
          setCountdown(routes[1].end);
        } else if (currentTime >= voteEndTime && currentTime < winnerTime) {
          console.log('livestream time');
          setCurrent(2);
          setCountdown(routes[2].start);
        }
      }
    } else {
      setCurrent(3);
    }
  };

  const routes = [
    {
      subtitle: 'left to submit!',
      start: Number(time),
      end: subEndVoteStart,
    },
    {
      subtitle: 'left to vote!',
      start: subEndVoteStart,
      end: voteEndTime,
    },
    {
      subtitle: '',
      start: Number(end),
    },
    {
      subtitle: '',
    },
  ];

  //handles display of countdown clock based on whether or not countdown is at 0. If it is, it triggers a page reload which will call the incrementTimeSlot function and start a new countdown for the next activity
  const renderer = ({ hours, minutes, completed }) => {
    if (completed) {
      console.log('completed!');
      window.location.reload();
      return <p>reloading</p>;
    } else {
      return (
        <span>
          <h2 className="clock">
            {hours} hr {minutes} min
          </h2>
        </span>
      );
    }
  };
  return (
    <>
      {time && end && newGame ? (
        <Countdown date={countdown} renderer={renderer} />
      ) : null}
    </>
  );
}
