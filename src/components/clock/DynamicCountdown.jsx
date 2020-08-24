import React, { useState, useEffect } from 'react';
import Countdown from 'react-countdown';
import moment from 'moment';
import { AxiosWithAuth } from '../../utils/AxiosWithAuth';

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



  //a new prompt is chosen and submissions become open at 2:30am UTC (10:30pm EDT)
  const startSubHr = 2
  const startSubMin = 30
  const subCountStart = moment.utc().hour('2').minute('30').valueOf()

  //the submission deadline is 7:00pm UTC (3:00pm EDT)
  const endSubHr = 19
  const endSubMin = 0
  const subCountEnd = moment.utc().hour('19').minute('0').valueOf()

  //voting starts at 7:30pm UTC (3:30pm EDT)
  const voteStartHr = 19
  const voteStartMin = 30
  const voteCountStart = moment.utc().hour('19').minute('30').valueOf()

  //voting ends at 10:00pm UTC (6:00pm EDT)
  const voteEndHr = 22
  const voteEndMin = 0
  const voteCountEnd = moment.utc().hour('22').minute('0').valueOf()

  //winner livestream starts at 10:30pm UTC (6:30pm EDT)
  const winnerStreamStartHr = 22
  const winnerStreamStartMin = 30
  const winnerStreamCountStart = moment.utc().hour('22').minute('30').valueOf()

  //winner livestream ends at 11:00pm UTC (7:00pm EDT)
  const winnerStreamEndHr = 23
  const winnerStreamEndMin = 0
  const winnerStreamCountEnd = moment.utc().hour('23').minute('0').valueOf()


  //function to change countdown clock to match current activity
  const incrementTimeSlot = () => {

    const currentHr = moment.utc(Date.now()).format('HH');
    const currentMin = moment.utc(Date.now()).format('mm');


    //game is still going for today (including livestream)
    if (currentHr < winnerStreamEndHr ) {

      //game has already begun
      if (currentHr === startSubHr && currentHr >= currentMin || currentHr > startSubHr) {

        //submission time
        if (currentHr < endSubHr) {
          console.log('submission time');
          setCurrent(0);
          setCountdown(routes[0].end);
        }
        //deliberation
        if (currentHr >= endSubHr && currentHr < voteStartHr || currentHr >= endSubHr && currentHr === voteStartHr && currentMin <= voteStartMin) {
          setCurrent(1);
          setCountdown(routes[1].end);
        }
        //voting time
        else if (currentHr === voteStartHr && currentMin >= voteStartMin || currentHr > voteStartHr && currentHr < voteEndHr) {
          console.log('voting time');
          setCurrent(2);
          setCountdown(routes[2].end);
          //livestream happening
        } else if (currentHr >= voteEndHr) {
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
