import React from 'react';
import { Link } from 'react-router-dom';
import DynamicCountdown from '../components/clock/DynamicCountdown';

export function MobileDashboard({ current, setCurrent, navigate, routes }) {
  return (
    <div className="custom-bg d-flex flex-column justify-content-center align-items-center">
      <h1 className="dashboard-title">
        What's Happening <span style={{ color: '#429CB5' }}>Now</span>?
      </h1>
      <button className="now" onClick={navigate}>
        {routes[current].btnText}
      </button>
      <DynamicCountdown current={current} setCurrent={setCurrent} />
      <p style={{ marginTop: '4%' }}>
        Check out the most recent winners <Link to="/winners">here.</Link>{' '}
      </p>
    </div>
  );
}
