import React, { useState, useEffect } from 'react';
import { useHistory, useParams, useLocation } from 'react-router-dom';
import axios from 'axios';

export function MobileDashboard() {
  const [now, setNow] = useState('Submit your story');
  const history = useHistory();

  const routes = {
    'Submit your story': '/submission',
    'Rank your favorites': '/ranking',
    "Watch winners' livestream": '/announcement',
    "See today's top 3": '/winners',
  };

  //navigate to different page depending on button text
  const navigate = () => {
    history.push(routes[now]);
  };

  return (
    <div className="custom-bg d-flex flex-column justify-content-center align-items-center">
      <h1 className="dashboard-title">
        What's Happening <span style={{ color: '#429CB5' }}>Now</span>?
      </h1>
      <button className="now" onClick={navigate}>
        {now}
      </button>
      <div className="countDiv d-flex justify-content-center align-items-center flex-column">
        <h2 className="clock">01 hr 23 min</h2>
        <p className="currentInstruction">left to submit!</p>
      </div>
    </div>
  );
}
