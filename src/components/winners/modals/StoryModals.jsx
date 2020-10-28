import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AxiosWithAuth } from '../../../utils';

export default function StoryModal({ username, image, id }) {
  const [imgRotation, setImgRotation] = useState(0);

  let [SubData, sSubData] = useState();

  const rotateRight = () => setImgRotation((cur) => (cur >= 3 ? 0 : cur + 1));
  const rotateLeft = () => setImgRotation((cur) => (cur <= 0 ? 3 : cur - 1));

  useEffect(() => {
    async function GetIt(_id) {
      AxiosWithAuth()
        .get(`upload/image/${_id}`, { responseType: 'arraybuffer' })
        .then((response) => {
          let image = btoa(
            new Uint8Array(response.data).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ''
            )
          );
          sSubData(
            `data:${response.headers[
              'content-type'
            ].toLowerCase()};base64,${image}`
          );
        })
        .catch((err) => {
          console.log(err);
          return;
        })
        .catch(console.error);
    }
    GetIt(image);
  }, [image]);

  if (!SubData) return <>Loading...</>;

  return (
    <>
      <button
        className="btn btn-outline-primary m-2 px-4"
        data-toggle="modal"
        data-target={`#storyModal ${id}`}
      >
        {`${username}'s Story`}
      </button>

      <div
        className="modal fade"
        id={`storyModal ${id}`}
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="title bg-primary text-white">
              <h4 className="p-3">Story</h4>
            </div>
            <div className="modal-body">
              <img
                src={SubData}
                alt="submission"
                style={{ transform: `rotate(${imgRotation * 90}deg)` }}
              />
            </div>
            <div
              className="modal-controls"
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <img
                src={require('../../../assets/rotate-left.png')}
                alt="rotate left"
                style={{
                  width: '50px',
                  zIndex: '200',
                  padding: '10px',
                  cursor: 'pointer',
                }}
                onClick={rotateLeft}
              />
              <img
                src={require('../../../assets/rotate-right.png')}
                alt="rotate right"
                style={{
                  width: '50px',
                  zIndex: '200',
                  padding: '10px',
                  cursor: 'pointer',
                }}
                onClick={rotateRight}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
