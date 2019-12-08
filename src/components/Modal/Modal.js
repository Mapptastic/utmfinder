import React from 'react';
import './Modal.scss';
const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal modal-display-block" : "modal modal-display-none";
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <button onClick={handleClose}>close</button>
        </section>
      </div>
    );
  };

export default Modal