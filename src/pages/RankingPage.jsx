import React from 'react';
import { Ranking, Navbar } from '../components';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

export function RangkingPage(props) {
  const token = localStorage.getItem('token');
  const history = useHistory();

  const redirectToSignup = () => {
    history.push('/');
  };

  const redirectToSignin = () => {
    history.push('/signin');
  }

  return (
    <>
      <div className="custom-bg d-flex justify-content-center align-items-center">
        <section className="topthreewinner text-center container-sm">
          {token ? <Navbar /> : <></>}
          <h2 className="text-center m-5">Rank the Stories</h2>
          <Ranking props={props} />
          {!token ? (
            <div className="m-3" style={{ cursor: 'pointer' }}>
              <p style={{ fontSize: '1.2rem' }}>
                <span className="text-primary" onClick={redirectToSignup}>Sign up</span> or <span className="text-primary" onClick={redirectToSignin}>Sign In</span> to see today's
                winners
              </p>
            </div>
          ) : null}
        </section>
      </div>
    </>
  );
}
