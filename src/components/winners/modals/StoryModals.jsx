import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AxiosWithAuth } from "../../../utils";

export default function StoryModal({ username, image, id }) {
  let [SubData, sSubData] = useState();
  useEffect(() => {
    async function GetIt(_id) {
      AxiosWithAuth()
        .get(`upload/image/${_id}`, { responseType: "arraybuffer" })
        .then(response => {
          let image = btoa(
            new Uint8Array(response.data).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ""
            )
          );
          sSubData(
            `data:${response.headers[
              "content-type"
            ].toLowerCase()};base64,${image}`
          );
        })
        .catch(err => {
          console.log(err);
          return;
        })
        .catch(console.error);
    }
    GetIt(image);
  }, []);

  if (!SubData) return <>Loading...</>;

  return (
    <>
      <button
        className='btn btn-outline-primary m-2 px-4'
        data-toggle='modal'
        data-target={`#storyModal ${id}`}
      >
        {`${username}'s Story`}
      </button>

      <div
        className='modal fade'
        id={`storyModal ${id}`}
        tabIndex='-1'
        role='dialog'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <div className='title bg-primary text-white'>
              <h4 className='p-3'>Story</h4>
            </div>
            <div className='modal-body'>
              <img src={SubData} alt='submission' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
