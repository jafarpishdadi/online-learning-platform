import React, { Component } from 'react'
import './dashboardCalendar.css'
import Card from 'react-bootstrap/Card'
import Calendar, { MonthView } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';

let vals;

function compare(a, b) {
	if (parseInt(a.start_time, 10) < parseInt(b.start_time, 10)) return -1;
	if (parseInt(a.start_time, 10) > parseInt(b.start_time, 10)) return 1;
	return 0;
}

const EventItem = ({ eventType, eventName, eventTime }) => {

	let start = parseInt(eventTime);
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
			<button type="button" class="btn btn-dark event-subheading text-left mt-1">{str} | Workshop-{eventName}</button>
		)
	} else if (eventType == "Meeting") {
		return (
			<button type="button" class="btn btn-warning event-subheading text-left mt-1">{str} | Meeting-{eventName}</button>
		)
	} else if (eventType == "Study") {
		return (
			<button type="button" class="btn btn-primary event-subheading text-left mt-1">{str} | Study-{eventName}</button>
		)
	} else if (eventType == "Class") {
		return (
			<button type="button" class="btn btn-info event-subheading text-left mt-1">{str} | Class-{eventName}</button>
		)
	}
}

class DashboardCalendarComponent extends Component {

	state = {
		date: new Date(),
		selectedDay: String,
		email: String,
	}

	componentDidMount() {
		axios.post('http://127.0.0.1:8103/api/db_get_user_email', { 'username': localStorage.getItem('username') })
			.then(res => {
				this.state.email = res.data;
				window.localStorage.setItem('email', this.state.email);
			});
	}

	buildEvents(events) {
		console.log(events);
		if (events != null) {
			events = events.sort(compare);
			return (
				events.map(
					(event) =>
						<EventItem
							eventType={event.event_type}
							eventName={event.name}
							eventTime={event.start_time}
						/>
				)
			)
		} else {
			return (
				<button type="button" class="btn btn-secondary event-subheading text-left mt-1">No events</button>
			)
		}
	}

	clickDay(date) {
		window.localStorage.setItem('date', date.toDateString());
		this.state.selectedDay = (date.getFullYear() + ", " + date.getMonth() + ", " + date.getDate()).toString();
		console.log(this.state.selectedDay);
		axios.put('http://127.0.0.1:8103/api/db_get_schedule', { 'date': this.state.selectedDay, 'email': this.state.email })
			.then(res => {
				window.localStorage.setItem('events', JSON.stringify(res.data));
				vals = JSON.parse(window.localStorage.getItem('events'));
			})
			.catch((error) => {
				vals = null;
				window.localStorage.setItem('events', null);
			});
	}

	onChange = date => this.setState({ date })

	render() {

		const { value } = this.state;

		return (
			<Card className="dashCardStyle overflow-auto">
				<Card.Body>
					<Card.Title className="classCardTitleStyle">Upcoming Events</Card.Title>
					<div className="calendarTab d-flex flex-row">
						<div className="custom-div">
							<div className="react-component">
								<Calendar
									onChange={this.onChange}
									value={value}
									locale={'en-US'}
									returnValue={"start"}
									maxDetail={"month"}
									minDetail={"year"}
									calendarType={"US"}
									showDoubleView={false}
									onClickDay={this.clickDay(this.state.date)}
								/>
							</div>
						</div>
						<div class="d-flex2 flex-column card-subheading mt-6">
							<div>{localStorage.getItem('date')}</div>
							{this.buildEvents(vals)}
						</div>
					</div>
				</Card.Body>
			</Card>

		);
	}
}

export default DashboardCalendarComponent