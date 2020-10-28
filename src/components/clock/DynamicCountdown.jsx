import React, { useState, useEffect } from 'react';
import Countdown from 'react-countdown';
import { AxiosWithAuth } from '../../utils/AxiosWithAuth';
import {
  subCountStart,
  subCountEnd,
  voteCountStart,
  voteCountEnd,
  winnerStreamCountStart,
  winnerStreamCountEnd,
  isSubmissionTime,
  isDeliberationTime,
  isVotingTime,
  isStreamingTime,
  isInterim,
  interimCountStart,
  interimCountEnd,
  delibCountEnd,
  delibCountStart,
  //comment out to use development schedule => see devSchedule to change time increment
} from '../../utils/schedule';
//uncomment to use dev schedule
// from '../../utils/devSchedule'

export default function DynamicCountdown({ setCurrent, current }) {
  const [time, setTime] = useState();
  const [end, setEnd] = useState();
  const [newGame, setNewGame] = useState();
  const [countdown, setCountdown] = useState(Date.now());

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

  const routes = [
    {
      subtitle: 'left to submit!',
      start: subCountStart,
      end: subCountEnd,
    },
    {
      subtitle: 'until voting starts!',
      start: delibCountStart,
      end: delibCountEnd,
    },
    {
      subtitle: 'left to vote!',
      start: voteCountStart,
      end: voteCountEnd,
    },
    {
      subtitle: '',
      start: winnerStreamCountStart,
      end: winnerStreamCountEnd,
    },
    {
      subtitle: '',
      start: interimCountStart,
      end: interimCountEnd,
    },
  ];

  useEffect(() => {
    if (time && end) {
      incrementTimeSlot();
      // console.log('actual current state', current)
    }

    // console.log('countdown from dyn', countdown)
  }, [time, end]);

  //function to change countdown clock to match current activity
  const incrementTimeSlot = () => {
    //submission
    if (isSubmissionTime()) {
      setCurrent(0);
      setCountdown(routes[0].end);
    }
    //deliberation
    else if (isDeliberationTime()) {
      console.log('the liberty behind deliberation');
      setCurrent(1);
      setCountdown(routes[1].end);
    }
    //voting time
    else if (isVotingTime()) {
      console.log('voting time');
      setCurrent(2);
      setCountdown(routes[2].end);
      //livestream happening
    } else if (isStreamingTime()) {
      console.log('livestream time');
      setCurrent(3);
      setCountdown(routes[3].start);
    }
    //waiting for next prompt
    else if (isInterim()) {
      setCurrent(4);
    }
  };

  //function to change countdown clock to match current activity

  //handles display of countdown clock based on whether or not countdown is at 0. If it is, it triggers a page reload which will call the incrementTimeSlot function and start a new countdown for the next activity

  const renderer = ({ hours, minutes, completed }) => {
    if (completed) {
      console.log('completed!');
      // console.log(countdown)
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
