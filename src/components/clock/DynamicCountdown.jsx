import React, { useState, useEffect } from 'react';
import Countdown from 'react-countdown';
import moment from 'moment';
import { AxiosWithAuth } from '../../utils/AxiosWithAuth';

export default function DynamicCountdown({ setCurrent, current }) {
  const [time, setTime] = useState();
  const [end, setEnd] = useState();
  const [newGame, setNewGame] = useState();
  const [countdown, setCountdown] = useState(Date.now());

  // production time slots
  // const subEnd = moment(Number(end)).subtract({ hours: 0, minutes: 30 });
  // const voteStart = moment(Number(end));
  // const voteEndTime = moment(Number(end)).add({ hours: 2, minutes: 30 });

  //development time slots, counted backwards from the end of the game, since the server does not give timeframes for individual events
  const subEnd = moment(Number(end)).subtract({ hours: 16, minutes: 12 });
  const voteStart = moment(Number(end)).subtract({ hours: 16, minutes: 8 });
  const voteEndTime = moment(Number(end)).subtract({ hours: 16, minutes: 0 });
  // const voteEndTime = moment(Number(end)).add({ hours: 2, minutes: 30 });

  const endGame = moment(Number(end)).add({ hours: 3 });
  // const winnerTime = Number(end);

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
    if (currentTime < endGame) {
      //game has already begun
      if (currentTime >= time) {
        //submission time
        if (currentTime < subEnd) {
          console.log('submission time');
          setCurrent(0);
          setCountdown(routes[0].end);
        }
        //deliberation
        if (currentTime >= subEnd && currentTime < voteStart) {
          setCurrent(1);
          setCountdown(routes[1].end);
        }
        //voting time
        else if (currentTime >= voteStart && currentTime < voteEndTime) {
          console.log('voting time');
          setCurrent(2);
          setCountdown(routes[2].end);
          //livestream happening
        } else if (currentTime >= voteEndTime) {
          console.log('livestream time');
          setCurrent(3);
          setCountdown(routes[3].start);
        }
      }
    } else {
      setCurrent(4);
    }
  };

  const routes = [
    {
      subtitle: 'left to submit!',
      start: Number(time),
      end: subEnd,
    },
    {
      subtitle: 'until voting starts!',
      start: subEnd,
      end: voteStart,
    },
    {
      subtitle: 'left to vote!',
      start: voteStart,
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
      {current < 3 && (
        <div className="countDiv d-flex justify-content-center align-items-center flex-column">
          {time && end && newGame ? (
            <Countdown date={Number(countdown)} renderer={renderer} />
          ) : null}
          <p className="currentInstruction">{routes[current].subtitle}</p>
        </div>
      )}
    </>
  );
}
