import React, { useState } from 'react';
import { MobileDashboard } from './MobileDashboard';
import { useHistory, useParams, useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import Countdown from 'react-countdown';
import moment from 'moment';
import { AxiosWithAuth } from '../utils/AxiosWithAuth';
import DynamicCountdown from '../components/clock/DynamicCountdown';

export default function DashboardContainer() {
  const [current, setCurrent] = useState(0);
  const history = useHistory();

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
      btnText: 'Check back tomorrow for the next prompt!',
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
        {/* desktop dashboard should replace the paragraph below */}
        <p>I am the desktop dashboard</p>
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
