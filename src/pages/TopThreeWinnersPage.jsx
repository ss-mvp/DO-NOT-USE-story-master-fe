import React, { useEffect, useState } from 'react';
import { WinnerBoard, Navbar } from '../components';
import { AxiosWithAuth, SEO } from '../utils';
import Modal from '../components/modal/Modal';
import Histogram from '../components/histogram/Histogram';

export function TopThreeWinnersPage(props) {
  const [showModal, setShowModal] = useState(false);
  const [histogram, setHistogram] = useState({});

  useEffect(() => {
    let mounted = true;
    AxiosWithAuth()
      .get('/ranking/histogram')
      .then((res) => {
        if (mounted) setHistogram(res.data);
      })
      .catch((err) => console.log(err));
    return () => (mounted = false);
  }, []);

  return (
    <div className="custom-bg d-flex justify-content-center align-items-center">
      <SEO title="Winners" path={props.match.path} />
      <section className="topthreewinner text-center container-sm">
        <Modal
          component={Histogram}
          visible={showModal}
          setVisible={setShowModal}
          data={histogram.data}
          layout={histogram.layout}
        />
        <Navbar />
        <h2 className="text-center">Top Three Winners</h2>
        <WinnerBoard />
        <p>
          <button
            style={{ marginTop: '10px' }}
            onClick={() => setShowModal(true)}
          >
            View Your Score
          </button>
        </p>
      </section>
    </div>
  );
}
