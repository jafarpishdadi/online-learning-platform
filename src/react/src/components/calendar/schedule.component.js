import React, { Component } from 'react'
import './calendar.css'
import TitleImage from '../../assets/schedule.png'

function compare (a, b) {
	if (parseInt(a.start_time, 10) < parseInt(b.start_time, 10)) return -1;
	if (parseInt(a.start_time, 10) > parseInt(b.start_time, 10)) return 1;
	return 0;
}

const NoEvent = ({}) => {
	return (
		<ul class="list-group">
				<li class="list-group-item d-flex justify-content-between align-items-center custom-timeTwo border-light">
					-
					<span class="badge badge-secondary">No event</span>
								{/* Learn React
								<span class="badge badge-light badge-pill">Workshop</span> */}
				</li>
				<li class="list-group-item d-flex justify-content-between align-items-center custom-timeTwo border-light">
					-
					<span class="badge badge-secondary">No event</span>
				</li>
				<li class="list-group-item d-flex justify-content-between align-items-center custom-timeTwo border-light">
					-
					<span class="badge badge-secondary">No event</span>
				</li>
				<li class="list-group-item d-flex justify-content-between align-items-center custom-timeTwo border-light">
					-
					<span class="badge badge-secondary">No event</span>
				</li>
				<li class="list-group-item d-flex justify-content-between align-items-center custom-timeTwo border-light">
					-
					<span class="badge badge-secondary">No event</span>
				</li>
				<li class="list-group-item d-flex justify-content-between align-items-center custom-timeTwo border-light">
					-
					<span class="badge badge-secondary">No event</span>
								{/* Meeting with Instructor
								<span class="badge badge-warning badge-pill">Meeting</span> */}
				</li>
				<li class="list-group-item d-flex justify-content-between align-items-center custom-timeTwo border-light">
					-
					<span class="badge badge-secondary">No event</span>
				</li>
				<li class="list-group-item d-flex justify-content-between align-items-center custom-timeTwo border-light">
					-
					<span class="badge badge-secondary">No event</span>
				</li>
				<li class="list-group-item d-flex justify-content-between align-items-center custom-timeTwo border-light">
					-
					<span class="badge badge-secondary">No event</span>
				</li>
				<li class="list-group-item d-flex justify-content-between align-items-center custom-timeTwo border-light">
					-
					<span class="badge badge-secondary">No event</span>
				</li>
				<li class="list-group-item d-flex justify-content-between align-items-center custom-timeTwo border-light">
					-
					<span class="badge badge-secondary">No event</span>
								{/* Do homework
								<span class="badge badge-primary badge-pill">Study</span> */}
				</li>
				<li class="list-group-item d-flex justify-content-between align-items-center custom-timeTwo border-light">
					-
					<span class="badge badge-secondary">No event</span>
				</li>
				<li class="list-group-item d-flex justify-content-between align-items-center custom-timeTwo border-light">
					-
					<span class="badge badge-secondary">No event</span>
				</li>
			</ul>
	)
}

const EventTime = ({}) => {
	let size = 0;
	let times = [];
	if (window.localStorage.getItem('events') != null) {
		try {
			let vals;
			vals = JSON.parse(window.localStorage.getItem('events'));
			size = vals.length;
			console.log(size)
			vals = vals.sort(compare);
			console.log(vals);
			for (let i = 0; i < size; i++) {
				times.push(parseInt(vals[i].start_time));
			}
		} catch (Exception) {

		}
	}
	if (size == 0) {
		return (
			<NoEvent />
		)
	} else {
		return (
			<React.Fragment>
				{times.map(
					(event) => 
					<React.Fragment>
						
					</React.Fragment>
				)}
			</React.Fragment>
		)
	}

	return (
		<React.Fragment>

		</React.Fragment>
	)
}

class Schedule extends Component {

	constructor(props) {
		super(props) 
		this.state = {

		}
	}

	render() {
		return (
			<React.Fragment>
				<div class="d-flex flex-column p-2 custom-div">
					<div class="d-flex flex-row justify-content-center">
						<ul class="list-group time-box">
							<li class="list-group-item text-secondary custom-time border-light">
								8 AM
							</li>
							<li class="list-group-item custom-time border-light">
								9 AM
							</li>
							<li class="list-group-item custom-time border-light">
								10 AM
							</li>
							<li class="list-group-item custom-time border-light">
								11 AM
							</li>
							<li class="list-group-item custom-time border-light">
								12 PM
							</li>
							<li class="list-group-item custom-time border-light">
								1 PM
							</li>
							<li class="list-group-item custom-time border-light">
								2 PM
							</li>
							<li class="list-group-item custom-time border-light">
								3 PM
							</li>
							<li class="list-group-item custom-time border-light">
								4 PM
							</li>
							<li class="list-group-item custom-time border-light">
								5 PM
							</li>
							<li class="list-group-item custom-time border-light">
								6 PM
							</li>
							<li class="list-group-item custom-time border-light">
								7 PM
							</li>
							<li class="list-group-item custom-time border-light">
								8 PM
							</li>
						</ul>
						<EventTime />
					</div>
				</div>

			</React.Fragment>
		)
	}
}

export default Schedule
