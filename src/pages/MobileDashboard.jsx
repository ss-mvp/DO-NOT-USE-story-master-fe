import React, { useState, useEffect } from 'react';
import { useHistory, useParams, useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import Countdown from 'react-countdown';
import moment from 'moment';
import { AxiosWithAuth } from '../utils/AxiosWithAuth';

export function MobileDashboard() {
  const [time, setTime] = useState();
  const [end, setEnd] = useState();
  const [newGame, setNewGame] = useState();
  const [now, setNow] = useState(Date.parse(new Date()));
  const [current, setCurrent] = useState(0);
  const history = useHistory();
  const [countdown, setCountdown] = useState(Date.now());
  const [nextSlot, setNextSlot] = useState(false);

  // const subEndVoteStart = moment(Number(end)).subtract({ hours: 3 });
  // const voteStartTime = moment(Number(end)).subtract({ hours: 3 });
  // const voteEndTime = moment(Number(end)).subtract({ minutes: 30 });
  // const winnerTime = Number(end);

  const subEndVoteStart = moment(Number(end)).subtract({
    hours: 10,
    minutes: 25,
  });
  const voteEndTime = moment(Number(end)).subtract({ hours: 10, minutes: 0 });
  const winnerTime = Number(end);

  useEffect(() => {
    AxiosWithAuth()
      .get('upload/time')
      .then((response) => {
        setTime(response.data.time.start.time);
        setEnd(response.data.time.end.end);
        setNewGame(response.data.time.newGame.newGame);
        console.log('end from server', response.data.time.end.end);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (time && end) {
      incrementTimeSlot();
    }
  }, [time, end]);

  const incrementTimeSlot = () => {
    console.log('from increment time slot');
    let currentTime = Date.now();
    console.log(currentTime, Number(end));
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

  // incrementTimeSlot();
  const routes = [
    {
      btnText: 'Submit your story',
      route: '/submission',
      subtitle: 'left to submit!',
      start: Number(time),
      end: subEndVoteStart,
    },
    {
      btnText: 'Rank your favorites',
      route: '/ranking',
      subtitle: 'left to vote!',
      start: subEndVoteStart,
      end: voteEndTime,
    },
    {
      btnText: "Watch winners' livestream",
      route: '/announcement',
      subtitle: '',
      start: Number(end),
    },
    {
      btnText: 'Check back tomorrow for the next prompt!',
      route: '/mobiledash',
      subtitle: '',
    },
  ];

  //navigate to different page depending on button text
  const navigate = () => {
    history.push(routes[current].route);
  };

  const Completionist = () => {
    incrementTimeSlot();
    return <Countdown date={Number(subEndVoteStart)} renderer={renderer} />;
  };

  const renderer = ({ hours, minutes, seconds, completed }) => {
    // console.log(completed)
    if (completed) {
      console.log('completed!');
      // incrementTimeSlot();
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
  console.log(routes[current].btnText);
  return (
    <div className="custom-bg d-flex flex-column justify-content-center align-items-center">
      <h1 className="dashboard-title">
        What's Happening <span style={{ color: '#429CB5' }}>Now</span>?
      </h1>
      <button className="now" onClick={navigate}>
        {routes[current].btnText}
      </button>
      {current < 3 && (
        <div className="countDiv d-flex justify-content-center align-items-center flex-column">
          {time && end && newGame ? (
            <Countdown date={Number(routes[current].end)} renderer={renderer} />
          ) : null}
          <p className="currentInstruction">{routes[current].subtitle}</p>
        </div>
      )}
      <p style={{ marginTop: '4%' }}>
        Check out the most recent winners <Link to="/winners">here.</Link>{' '}
      </p>
    </div>
  );
}
