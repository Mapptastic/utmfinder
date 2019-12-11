import React, { useState } from 'react';
import './Modal.scss';

const Modal = ({ handleClose, show, children, handleLocationPermission }) => {
  const [locationPermissionHoverState, setLPHoverState] = useState({ hover: false });
  const showHideClassName = show ? "modal" : "modal modal-hide";
  return (
    <div className={showHideClassName}>
      <section className="modal-main notification">
        {children}
        <button
          type="button"
          className="button is-primary modal-btn"
          onClick={handleLocationPermission}
          onMouseOut={() => setLPHoverState({ hover: false })}
          onMouseOver={() => setLPHoverState({ hover: true })}
          onFocus={() => void 0}
          onBlur={() => void 0}>
          <span role="img" aria-label="emo">{locationPermissionHoverState.hover ? `🙉` : `🙈`} Allow Location</span>
        </button>
        <button id="close" className="modal-btn-close" type="button" onClick={handleClose} />
      </section>
    </div>
  );
};

export default Modal;