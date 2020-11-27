import React, { Component } from 'react';
import './calendar.css';
import Calendar, { MonthView } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import TitleImage from '../../assets/schedule.png';
import Schedule from './schedule.component';
import Events from './events.component';
import SmallCards from './smallCards.component';

let size = 0;
let times = [];
let allTimes = [];

function compare(a, b) {
	if (parseInt(a.start_time, 10) < parseInt(b.start_time, 10)) return -1;
	if (parseInt(a.start_time, 10) > parseInt(b.start_time, 10)) return 1;
	return 0;
}

class CalendarComponent extends Component {

	state = {
		date: new Date(),
		selectedDay: String,
		email: String,
	}

	onChange = date => this.setState({ date })

	componentDidMount() {
		axios.post('http://127.0.0.1:8103/api/db_get_user_email', { 'username': localStorage.getItem('username') })
			.then(res => {
				this.state.email = res.data;
				window.localStorage.setItem('email', this.state.email);
			});
	}

	clickDay(date) {
		this.state.selectedDay = (date.getFullYear() + ", " + date.getMonth() + ", " + date.getDate()).toString();
		window.localStorage.setItem('date', date.toDateString());
		window.localStorage.setItem('selectedDay', this.state.selectedDay);
		axios.put('http://127.0.0.1:8103/api/db_get_schedule', { 'date': this.state.selectedDay, 'email': this.state.email })
			.then(res => {
				window.localStorage.setItem('events', JSON.stringify(res.data));
			})
			.catch((error) => {
				window.localStorage.setItem('events', null);
			});
		if (window.localStorage.getItem('events') != null) {
			try {
				allTimes = [];
				times = [];
				let vals;
				vals = JSON.parse(window.localStorage.getItem('events'));
				size = vals.length;
				vals = vals.sort(compare);
				for (let i = 0; i < size; i++) {
					times.push(parseInt(vals[i].start_time));
				}
				for (let i = 1; i <= 13; i++) {
					if (times.includes(i)) {
						allTimes.push(vals[0]);
						vals.shift();
					}
					else {
						allTimes.push({ "_id": null, "date": null, "email": null, "event_type": null, "name": null, "start_time": null });
					}
				}
			} catch (Exception) {
				allTimes = [];
				for (let i = 0; i < 13; i++) {
					allTimes.push({ "_id": null, "date": null, "email": null, "event_type": null, "name": null, "start_time": null });
				}
			}
		}
	}

	render() {

		const { value } = this.state;

		if (!localStorage.getItem('token')) {
			return <Redirect to="/login" />
		}

		return (

			<div className="custom-div2 d-flex flex-row">
				<div class="d-flex flex-column">
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
					<div class="move-small-cards"><SmallCards /></div>
					
				</div>
				<div class="d-flex flex-column p-2 ml-5 custom-div">
					<div class="card card-header d-flex flex-row schedule-card">
						<span class="dot pt-1">
							<img class="rounded mx-auto my-auto d-block" src={TitleImage}></img>
						</span>
						<h4 class="p-1 custom-header">{localStorage.getItem('date')}</h4>
					</div>
					<div class="d-flex flex-row justify-content-center">
						<Schedule books={allTimes} />
						<div>
							<div class="card card-header d-flex flex-row schedule-card move-title-up">
								<h4 class="p-1 custom-header">Details</h4>
							</div>
							<Events />
						</div>
					</div>
				</div>

			</div>

		);
	}
}

export default CalendarComponent