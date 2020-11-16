import './Modal.css'
import React from 'react'
import axios from 'axios';

let Modal;


export default Modal = ({ handleClose, show, children }) => {
	const showHideClassName = show ? "modal display-block" : "modal display-none";

	let state = {
		time: '8 AM',
		eventName:' ',
		eventType: 'Workshop'
	};

	 function submit(e) {
		e.preventDefault();
		let email = window.localStorage.getItem('email');
        axios.post('http://127.0.0.1:8103/api/db_create_event', {'email': email, 'start_time': state.time, 'event_type': state.eventType, 'name': state.eventName, 'date': window.localStorage.getItem('selectedDay')})
            .then(response => {
				console.log(response.data);
				alert("Class joined successfully");
			})
			.catch((error) => {
			console.log(error)
		});
    }
  
	return (
	  <div className={showHideClassName}>
		<section className="modal-main p-2">
			<div class="d-flex flex-column">
				<div class="p-2">
					<p>Would you like to enroll in the course: </p>{children}
				</div>
				</div>
			<div class="text-right p-2">
				<button type="button" class="btn btn-outline-success mr-2" onClick={submit}>Yes</button>
				<button type="button" class="btn btn-outline-danger" onClick={handleClose}>No</button>
			</div>
		</section>
	  </div>
	);

	
  };
  
  