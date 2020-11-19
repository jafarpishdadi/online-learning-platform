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

	
    function handleChangeName(event) {
        let value = event.target.value;
        state.eventName = value;
        console.log(state.eventName);
    }


	 function submit(e) {
		e.preventDefault();
		let user = window.localStorage.getItem('username');
		console.log(window.localStorage.getItem('username'))
        axios.post('http://127.0.0.1:8103/api/db_add_student_to_course', {'student': user, 'course_name': state.eventName})
            .then(response => {
				console.log(window.localStorage.getItem('username'))
				console.log(response.data);
				alert("Class joined successfully");
			})
			.catch((error) => {
				alert("Class does not exist");
			console.log(error)
		});
    }
  
	return (
	  <div className={showHideClassName}>
		<section className="modal-main p-2">
			<div class="d-flex flex-column">
				<div class="p-2">
					<p>Please type the Name of the Course you would like to enroll in:</p>{children}
					</div>
					<form>
                    <div class="form-group pt-0 pl-2 pr-2">
                        <label for="inputEmail" class="text-dark font-weight-bold"></label>
                        <input type="text" class="form-control" name='eventName' onChange={handleChangeName}/>
                    </div>
					</form>
				</div>
			<div class="text-right p-2">
				<button type="button" class="btn btn-outline-success mr-2" onClick={submit}>Enroll</button>
				<button type="button" class="btn btn-outline-danger" onClick={handleClose}>Cancel</button>
			</div>
		</section>
	  </div>
	);

	
  };
  
  