import React, { Component } from 'react'

let vals;

const EventItem = ({ name, eventType, eventInfo }) => {
	if (eventType == "Workshop") {
		return (
			<div class="card bg-light m-2">
				<div class="card-header">{eventType}</div>
				<div class="card-body">
					<h5>Primary card title</h5>
					<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				</div>
			</div>
		)
	}
	else if (eventType == "Meeting") {
		return (
			<div class="card text-white bg-warning m-2">
				<div class="card-header">{eventType}</div>
				<div class="card-body">
					<h5>Primary card title</h5>
					<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				</div>
			</div>
		)
	}
	else if (eventType == "Study") {
		return (
			<div class="card text-white bg-primary m-2">
				<div class="card-header">{eventType}</div>
				<div class="card-body">
					<h5>Primary card title</h5>
					<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				</div>
			</div>
		)
	}
	else if (eventType == "Class") {
		return (
			<div class="card text-white bg-info m-2">
				<div class="card-header">{eventType}</div>
				<div class="card-body">
					<h5>Primary card title</h5>
					<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				</div>
			</div>
		)
	}
}

class Events extends Component {

	buildEvents() {
		vals = JSON.parse(window.localStorage.getItem('events'));
		if (vals) {
			return (
				vals.map((book) =>
					<EventItem
						name={book.name}
						eventType={book.event_type}
						eventInfo={book.event_info}
					/>
				)
			)
		} else {
			return (
				<div class="card border-light custom-no-events">
					<div class="card-body">
						No events scheduled
  					</div>
				</div>
			)
		}

	}

	render() {
		return (
			<React.Fragment>
				<div class="d-flex flex-column">
					{this.buildEvents()}
				</div>
			</React.Fragment>
		)
	}
}

export default Events
