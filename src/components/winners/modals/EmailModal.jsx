import React from 'react';

export default function EmailModal({ username, id, btnText, disabled, type, className }) {
  
  return (
    <>
    {/* TRIGGER MODAL */}
      <button
        className="btn btn-warning btn-lg m-3 p-2 px-5"
        data-toggle="modal"
        data-target={`#storyModal ${id}`}
        type={type}
        disabled={disabled}
      >
       {btnText}
      </button>
      
      {/* <div
        className="modal fade"
        id={`storyModal ${id}`}
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      > */}
        {/* <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="title bg-primary text-white">
              <h4 className="p-3">Email Modal</h4> */}
              {/* <form action="" className="email-modal-form">
                  <label  className="email-modal-label">
                      email
                  </label>
                  <input type="email" className="email-modal-input"/>
                  <button
                  
                  >
                      send
                  </button>
              </form> */}
            {/* </div>
          </div>
        </div> */}
      {/* </div> */}
    </>
  );
}
