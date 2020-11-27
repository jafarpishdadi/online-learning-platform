import React, { Component } from 'react'
import './calendar.css'
import TitleImage from '../../assets/schedule.png'

let theEvents;

const EventItem = ({name, eventType}) => {
	if (eventType == null) {
		return (
			<li class="list-group-item d-flex justify-content-between align-items-center custom-timeTwo border-light">
				-
				<span class="badge badge-secondary">No event</span>
			</li>
		)
	}
	else if (eventType == "Workshop") {
		return (
			<li class="list-group-item d-flex justify-content-between align-items-center custom-timeTwo border-light">
				{name}
				<span class="badge badge-light badge-pill">Workshop</span>
			</li>
		)
	}
	else if (eventType == "Meeting") {
		return (
			<li class="list-group-item d-flex justify-content-between align-items-center custom-timeTwo border-light">
				{name}
				<span class="badge badge-warning badge-pill">Meeting</span>
			</li>
		)
	}
	else if (eventType == "Study") {
		return (
			<li class="list-group-item d-flex justify-content-between align-items-center custom-timeTwo border-light">
				{name}
				<span class="badge badge-primary badge-pill">Study</span>
			</li>
		)
	}
	else if (eventType == "Class") {
		return (
			<li class="list-group-item d-flex justify-content-between align-items-center custom-timeTwo border-light">
				{name}
				<span class="badge badge-info badge-pill">Class</span>
			</li>
		)
	}
}



class Schedule extends Component {

	constructor(props) {
		super(props) 
		this.state = {
			
		}
	}

	render() {
		const { books } = this.props
		return (
			<React.Fragment>
				<div class="d-flex flex-column p-2 custom-div shadow-me">
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
						<ul class="list-group">
							{books.map(
								(book) =>
								<EventItem
									name={book.name}
									eventType={book.event_type}
								/>
							)}
						</ul>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default Schedule
