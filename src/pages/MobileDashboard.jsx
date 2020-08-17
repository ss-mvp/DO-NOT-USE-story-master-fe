import React, { useState, useEffect } from 'react';
import { useHistory, useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import Countdown from 'react-countdown';
import moment from 'moment';
import { AxiosWithAuth } from '../utils/AxiosWithAuth';

export function MobileDashboard() {
  const [time, setTime] = useState();
  const [end, setEnd] = useState();
  const [newGame, setNewGame] = useState();
  const [now, setNow] = useState(Date.parse(new Date()));
  const [current, setCurrent] = useState('Submit your story');
  const history = useHistory();

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

  const routes = {
    'Submit your story': '/submission',
    'Rank your favorites': '/ranking',
    "Watch winners' livestream": '/announcement',
    "See today's top 3": '/winners',
  };

  //navigate to different page depending on button text
  const navigate = () => {
    history.push(routes[current]);
  };

  const Completionist = () => <span>Game is over until 10:30PM.</span>;

  const renderer = ({ hours, minutes, seconds, completed }) => {
    // console.log(completed)
    if (completed) {
      return <Completionist />;
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
    <div className="custom-bg d-flex flex-column justify-content-center align-items-center">
      <h1 className="dashboard-title">
        What's Happening <span style={{ color: '#429CB5' }}>Now</span>?
      </h1>
      <button className="now" onClick={navigate}>
        {current}
      </button>
      <div className="countDiv d-flex justify-content-center align-items-center flex-column">
        {time && end && newGame ? (
          <Countdown date={parseInt(end)} renderer={renderer} />
        ) : null}
        <p className="currentInstruction">left to submit!</p>
      </div>
    </div>
  );
}
