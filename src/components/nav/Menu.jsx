import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { AxiosWithAuth } from '../../utils';

export default function Menu({ loc }) {
  // const history = useHistory();
  const [winners, setWinners] = useState([]);
  const [submitEnabled, setSubmitEnabled] = useState(false);

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      if (
        localStorage.getItem('Submitted Boolean') === 'True' ||
        localStorage.getItem('submit') === new Date().getDate()
      )
        setSubmitEnabled(false);
      else setSubmitEnabled(true);
    }
    AxiosWithAuth()
      .get('/ranking')
      .then((res) => {
        if (isSubscribed) {
          let response = res.data;
          // console.log("RESPONSE", response)
          if (response.length > 0) {
            setWinners(response);
          }
        }
      })
      .catch((err) => {
        isSubscribed = false;
        console.log(err);
      });
    return () => (isSubscribed = false);
  }, []);

  if (!loc) {
    return (
      <>
        <Link to="/dashboard" className="nav-item nav-link">
          <h4 className="ss-title h4-nav">My Dashboard</h4>
        </Link>
        {submitEnabled && (
          <Link to="/submission" className="nav-item nav-link">
            <h4 className="ss-title h4-nav">Submit your story</h4>
          </Link>
        )}
        <Link to="/winners" className="nav-item nav-link">
          <h4 className="ss-title h4-nav">Top 3 Stories</h4>
        </Link>
        {/* if winners.length === 3 allow access else Modal */}
        <Link
          to={winners.length === 3 ? '/ranking' : '/submission'}
          className="nav-item nav-link"
        >
          <h4 className="ss-title h4-nav">Rank your favorites</h4>
        </Link>

        <Link to="/announcement" className="nav-item nav-link">
          <h4 className="ss-title h4-nav">Winner Announcement</h4>
        </Link>
        <Link
          to="/signin"
          onClick={() => {
            localStorage.removeItem('username');
            window.localStorage.removeItem('token');
            // setUsername('');
          }}
          className="nav-link"
        >
          <h4 className="ss-title text-secondary">Logout</h4>
        </Link>
      </>
    );
  } else {
    return (
      <>
        <Link
          to="/signin"
          onClick={() => {
            localStorage.removeItem('username');
            window.localStorage.removeItem('token');
            // setUsername('');
          }}
          className="nav-link"
        >
          <h4 className="ss-title text-secondary">Logout</h4>
        </Link>
      </>
    );
  }
}
