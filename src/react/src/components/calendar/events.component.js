import React, { Component } from 'react'

let vals;

function compare(a, b) {
	if (parseInt(a.start_time, 10) < parseInt(b.start_time, 10)) return -1;
	if (parseInt(a.start_time, 10) > parseInt(b.start_time, 10)) return 1;
	return 0;
}

const EventItem = ({ name, eventType, eventInfo, time }) => {
	let start = parseInt(time);
	let str;
	
	if (start == 1) {
		str = "8 AM";
	} else if (start == 2) {
		str = "9 AM";
	} else if (start == 3) {
		str = "10 AM";
	} else if (start == 4) {
		str = "11 AM";
	} else if (start == 5) {
		str = "12 PM";
	} else if (start == 6) {
		str = "1 PM";
	} else if (start == 7) {
		str = "2 PM";
	} else if (start == 8) {
		str = "3 PM";
	} else if (start == 9) {
		str = "4 PM";
	} else if (start == 10) {
		str = "5 PM";
	} else if (start == 11) {
		str = "6 PM";
	} else if (start == 12) {
		str = "7 PM";
	} else if (start == 13) {
		str = "8 PM"
	}

	if (eventType == "Workshop") {
		return (
			<div class="card border-dark event-card m-3">
				<div class="card-header bg-white border-dark"><h2 class="event-header">{name} @ {str}</h2></div>
				<div class="card-body">
					<p class="card-text event-info-body">{eventInfo}</p>
				</div>
			</div>
		)
	}
	else if (eventType == "Meeting") {
		return (
			<div class="card border-warning event-card m-3">
				<div class="card-header bg-white border-warning"><h2 class="event-header">{name} @ {str}</h2></div>
				<div class="card-body">
					<p class="card-text event-info-body">{eventInfo}</p>
				</div>
			</div>
		)
	}
	else if (eventType == "Study") {
		return (
			<div class="card border-primary event-card m-3">
				<div class="card-header bg-white border-primary"><h2 class="event-header">{name} @ {str}</h2></div>
				<div class="card-body">
					<p class="card-text event-info-body">{eventInfo}</p>
				</div>
			</div>
		)
	}
	else if (eventType == "Class") {
		return (
			<div class="card border-info event-card m-3">
				<div class="card-header bg-white border-info"><h2 class="event-header">{name} @ {str}</h2></div>
				<div class="card-body">
					<p class="card-text event-info-body">{eventInfo}</p>
				</div>
			</div>
		)
	}
}

class Events extends Component {

	sortEvents() {
		vals = vals.sort(compare);
	}

	buildEvents() {
		vals = JSON.parse(window.localStorage.getItem('events'));
		if (vals) {
			this.sortEvents();
			return (
				vals.map((book) =>
					<EventItem
						name={book.name}
						eventType={book.event_type}
						eventInfo={book.event_info}
						time={book.start_time}
					/>
				)
			)
		} else {
			return (
				<div class="card border-light custom-no-events m-2">
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
