import './Modal.css'
import React from 'react'

let Modal;

export default Modal = ({ handleClose, show, children }) => {
	const showHideClassName = show ? "modal display-block" : "modal display-none";
  
	return (
	  <div className={showHideClassName}>
		<section className="modal-main">
		  {children}
		  <button onClick={handleClose}>close</button>
		</section>
	  </div>
	);
  };
  
  