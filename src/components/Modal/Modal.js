/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react';
import './Modal.scss';

const Modal = ({ handleClose, show, children, handleLocationPermission }) => {
  const [locationPermissionHoverState, setLPHoverState] = useState({ hover: false });
  const showHideClassName = show ? "modal modal-display-block" : "modal modal-display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button
          type="button"
          className="modal-btn"
          onClick={handleLocationPermission}
          onMouseOut={() => setLPHoverState({ hover: false })}
          onMouseOver={() => setLPHoverState({ hover: true })}>
          <span role="img" aria-label="emo">{locationPermissionHoverState.hover ? `🙉` : `🙈`} Allow Location</span>
        </button>
        <button className="modal-btn" type="button" onClick={handleClose}>Close</button>
      </section>
    </div>
  );
};

export default Modal;