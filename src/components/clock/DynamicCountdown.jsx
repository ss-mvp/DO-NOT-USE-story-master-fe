import React, { useState, useEffect } from 'react';
import Countdown from 'react-countdown';
import moment from 'moment';
import { AxiosWithAuth } from '../../utils/AxiosWithAuth';
import {startSubHr, startSubMin, subCountStart, endSubHr, endSubMin, subCountEnd, voteStartHr, voteStartMin, voteCountStart, voteEndHr, voteEndMin, voteCountEnd, winnerStreamStartHr, winnerStreamStartMin, winnerStreamCountStart, winnerStreamEndHr, winnerStreamEndMin, winnerStreamCountEnd, currentHr, currentMin, isSubmissionTime, isDeliberationTime, isVotingTime} from '../../utils/schedule'

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
    // if (currentTime < endGame) {
      //game has already begun
      if (isSubmissionTime()) {
        //submission time
        // if (currentTime < subEnd) {
          console.log('submission time');
          setCurrent(0);
          setCountdown(routes[0].end);
        // }
        //deliberation
        if (isDeliberationTime()) {
          setCurrent(1);
          setCountdown(routes[1].end);
        }
        //voting time
        else if (isVotingTime()) {
          console.log('voting time');
          setCurrent(2);
          setCountdown(routes[2].end);
          //livestream happening
        } else if (currentHr >= winnerStreamStartHr) {
          console.log('livestream time');
          setCurrent(3);
          setCountdown(routes[3].start);
        }
      // }
    } else {
      setCurrent(4);
    }
  };


  console.log('issub', isSubmissionTime())
  console.log('isdelib', isDeliberationTime())
  //function to change countdown clock to match current activity
 

  const routes = [
    {
      subtitle: 'left to submit!',
      start: subCountStart,
      end: subCountEnd,
    },
    {
      subtitle: 'until voting starts!',
      start: subCountEnd,
      end: voteCountStart,
    },
    {
      subtitle: 'left to vote!',
      start: voteCountStart,
      end: voteCountEnd,
    },
    {
      subtitle: '',
      start: winnerStreamCountStart,
    },
    {
      subtitle: '',
    },
  ];

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
