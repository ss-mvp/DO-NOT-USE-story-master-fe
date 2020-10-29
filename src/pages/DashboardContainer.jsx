import React, { useState, useEffect } from 'react';
import { MobileDashboard } from './MobileDashboard';
import DesktopDashboard from './DesktopDashboard';
import { useHistory } from 'react-router-dom';
// import axios from 'axios';
// import Countdown from 'react-countdown';
// import moment from 'moment';
// import { AxiosWithAuth } from '../utils/AxiosWithAuth';
// import DynamicCountdown from '../components/clock/DynamicCountdown';

export function DashboardContainer({ setUsername, username }) {
  const [current, setCurrent] = useState(0);
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem('username') && username === '') {
      setUsername(localStorage.getItem('username'));
    }
  }, [username, setUsername]);

  const routes = [
    {
      btnText: 'Submit your story',
      route: '/submission',
      subtitle: 'left to submit!',
    },
    {
      btnText: 'Submission Scoring',
      route: '/announcement',
    },
    {
      btnText: 'Rank your favorites',
      route: '/ranking',
      subtitle: 'left to vote!',
    },

    {
      btnText: "Watch winners' livestream",
      route: '/announcement',
    },
    {
      btnText: 'Check back at 10:30pm EST for the next prompt!',
      route: '/dashboard',
    },
  ];

  //navigate to different page depending on button text
  const navigate = () => {
    history.push(routes[current].route);
  };

  return (
    <>
      <div className="desktopDash">
        <DesktopDashboard
          current={current}
          setCurrent={setCurrent}
          navigate={navigate}
          routes={routes}
        />
      </div>
      <div className="mobileDash">
        <MobileDashboard
          current={current}
          setCurrent={setCurrent}
          navigate={navigate}
          routes={routes}
        />
      </div>
    </>
  );
}
