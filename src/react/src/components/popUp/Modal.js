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
	
	function handleChangeTime(event) {
		let value = event.target.value;
		state.time = value;
		console.log(state.time);
	}

	function handleChangeType(event) {
        let value = event.target.value;
		state.eventType = value;
		console.log(state.eventType);
	}

	function handleChangeName(event) {
        let value = event.target.value;
		state.eventName = value;
		console.log(state.eventName);
	}

	function onclick(event){
		let name = event.target.name;
		let value = event.target.value;
		console.log(name,value)
		let data ={};
		data[name] = value;

		this.setState(data)
	}

	 function submit(e) {
		e.preventDefault();
		let email = window.localStorage.getItem('email');
        axios.post('http://127.0.0.1:8103/api/db_create_event', {'email': email, 'start_time': state.time, 'event_type': state.eventType, 'name': state.eventName, 'date': window.localStorage.getItem('selectedDay')})
            .then(response => {
				console.log(response.data);
				alert("Event joined successfully");
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
					<p>Selected Date is:</p>{children}
				</div>
				<form>
					<div class="form-group pt-0 pl-2 pr-2">
						<label for="inputEmail" class="text-dark font-weight-bold">Event Name</label>
						<input type="text" class="form-control" name='eventName' onChange={handleChangeName}/>
					</div>
					<div class="form-group pt-0 pl-2 pr-2">
					<label class="text-dark font-weight-bold">Start Time</label>
						<select class="form-control" name='time' onChange={handleChangeTime}>
							<option>8 AM</option>
							<option>9 AM</option>
							<option>10 AM</option>
							<option>11 AM</option>
							<option>12 PM</option>
							<option>1 PM</option>
							<option>2 PM</option>
							<option>3 PM</option>
							<option>4 PM</option>
							<option>5 PM</option>
							<option>6 PM</option>
							<option>7 PM</option>
							<option>8 PM</option>
						</select>
					</div>
					<div class="form-group pt-0 pl-2 pr-2">
					<label class="text-dark font-weight-bold">Event Type</label>
						<select class="form-control" name='eventType' onChange={handleChangeType}>
							<option>Workshop</option>
							<option>Meeting</option>
							<option>Study</option>
							<option>Class</option>
						</select>
					</div>
				</form>
			</div>
			<div class="text-right p-2">
				<button type="button" class="btn btn-outline-success mr-2" onClick={submit}>Add Event</button>
				<button type="button" class="btn btn-outline-danger" onClick={handleClose}>Close</button>
			</div>
		</section>
	  </div>
	);

	
  };
  
  