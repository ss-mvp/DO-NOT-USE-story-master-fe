import React, { useState, useEffect } from 'react';
import { useHistory, useParams, useLocation } from 'react-router-dom';
import axios from 'axios';

export function MobileDashboard() {
  const [now, setNow] = useState('Submit Your Story');

  useEffect(() => {}, []);

  return (
    <div className="custom-bg d-flex flex-column justify-content-center align-items-center">
      <h1 className="dashboard-title">
        What's Happening <span style={{ color: '#429CB5' }}>Now</span>?
      </h1>
      <button className="now">{now}</button>
      <div>
        <h2>01 hr 23 min</h2>
        <p>left to submit!</p>
      </div>
    </div>
  );
}
