import React, { useState, useEffect, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import './index.css';
import white from './whiteChevron.png';
import teal from './tealChevron.png';
import dark from './darkChevron.png';
import { AxiosWithAuth } from '../../utils';
import ThreeWinnersNeededModal from './ThreeWinnersNeededModal';

export const ProgressBar = ({ current }) => {
  const history = useHistory();
  const [winners, setWinners] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const date = new Date();
  const today = date.getDate();
  // const [today] = useMemo(() => [new Date().getDate()])

  useEffect(() => {
    let isSubscribed = true;
    AxiosWithAuth()
      .get('/ranking')
      .then((res) => {
        if (isSubscribed) {
          let response = res.data;
          // console.log("RESPONSE", response)
          if (response.length > 0) {
            // setIsDisabled(false)
            setWinners(response);
          }
        }
      })
      .catch((err) => {
        console.log(err);
        isSubscribed = false;
      });
    return () => (isSubscribed = false);
  }, []);

  // Allow access to Rank Your Favorites only when winners === 3
  const handleAllowAccess = () => {
    // winners.length = 3
    // IF winners.length < 3 => history.push("/dashboard")
    // keep users from going to ranking page
    // present user with MODAL telling them that we are still waiting on 3 top submissions
    if (winners.length < 3 && showModal === false) {
      // console.log("WINNERS is < 3!", winners)
      setShowModal(true);
      // history.push("/dashboard")
    }
    // IF winners.length is 3
    // send users to the ranking page
    if (winners.length === 3) {
      history.push('/ranking');
      // console.log("Winners is === 3", winners)
    }
  };

  const voteReroute = () => {
    if (localStorage.getItem('submit') != today) {
      history.push('/submission');
    }
  };

  const colors = [
    {
      chevron: white,
      text: 'black',
    },
    {
      chevron: white,
      text: 'black',
    },
    {
      chevron: white,
      text: 'black',
    },
    {
      chevron: white,
      text: 'black',
    },
    {
      chevron: white,
      text: 'black',
    },
  ];
  const [colorMemo] = useMemo(() => [colors], []);

  const [chevColors, setChevColors] = useState(colors);

  useEffect(() => {
    const changeColors = () => {
      let newChevColors = colorMemo.map((color, i) => {
        if (i < current) {
          color.chevron = dark;
          color.text = 'white';
        } else if (i === current) {
          color.chevron = teal;
          color.text = 'white';
        } else if (i > current) {
          color.chevron = white;
          color.text = 'black';
        }
        return color;
      });
      setChevColors(newChevColors);
    };
    changeColors();
  }, [current, colorMemo]);

  const closeModal = (e) => {
    e.preventDefault();
    setShowModal(false);
    // console.log("showModal", showModal)
  };

  return (
    <div className="progress-container">
      <div
        onClick={voteReroute()}
        className="chevronDiv"
        style={{
          backgroundImage: `url('${chevColors[0].chevron}')`,
          cursor:
            localStorage.getItem('submit') == today ? 'not-allowed' : 'pointer',
        }}
      >
        <p style={{ color: chevColors[0].text }}>
          Submit
          <br />
          your
          <br />
          story
        </p>
      </div>
      <div
        className="chevronDiv"
        style={{
          backgroundImage: `url('${chevColors[1].chevron}')`,
          cursor: 'not-allowed',
        }}
      >
        <p style={{ color: chevColors[1].text }}>
          Await
          <br />
          top 3<br />
          selection
        </p>
      </div>
      <div
        onClick={handleAllowAccess}
        className="chevronDiv"
        style={{ backgroundImage: `url('${chevColors[2].chevron}')` }}
      >
        {showModal ? (
          <>
            <ThreeWinnersNeededModal closeModal={closeModal} />
          </>
        ) : (
          <p style={{ color: chevColors[2].text }}>
            Rank
            <br />
            your
            <br />
            favorites
          </p>
        )}
      </div>

      <div
        onClick={() => history.push('/announcement')}
        className="chevronDiv"
        style={{ backgroundImage: `url('${chevColors[3].chevron}')` }}
      >
        <p style={{ color: chevColors[3].text }}>
          Watch
          <br />
          winners'
          <br />
          livestream
        </p>
      </div>
      <div
        onClick={() => history.push('/winners')}
        className="chevronDiv"
        style={{ backgroundImage: `url('${chevColors[4].chevron}')` }}
      >
        <p style={{ color: chevColors[4].text }}>
          See
          <br />
          the
          <br />
          top 3
        </p>
      </div>
    </div>
  );
};
