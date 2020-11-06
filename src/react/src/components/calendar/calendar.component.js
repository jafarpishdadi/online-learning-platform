import React, { Component } from 'react'
import './calendar.css'
import Calendar, { MonthView } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios'
import { Redirect } from 'react-router-dom';
import TitleImage from '../../assets/schedule.png'

class CalendarComponent extends Component {

	state = {
		date: new Date(),
		selectedDay: String,
		email: String,
	  }

	onChange = date => this.setState({ date })

	componentDidMount() {
		axios.post('http://127.0.0.1:8103/api/db_get_user_email', {'username': localStorage.getItem('username')})
			.then(res => {
				this.state.email = res.data;
			})
	}

	clickDay(date) {
		this.state.selectedDay = (date.getFullYear() + ", " + date.getMonth() + ", " + date.getDate()).toString();
		window.localStorage.setItem('date', date.toDateString());
		axios.post('http://127.0.0.1:8103/api/db_get_schedule', {'date': this.state.selectedDay, 'email': this.state.email})
			.then(res => {
				console.log(res);
				// if it works print new schedule
			});
			// .catch((error) => {
			// 	axios.post('http://127.0.0.1:8103/api/db_create_event', {'class': null, 'start_time': null, 'end_time': null, 'section': null, 'lesson': null, 'location': null, 'lable': null, 'link': null, 'date': this.state.selectedDay, 'email': this.state.email})
			// 		.then(res => {
			// 			console.log(res);
			// 		})
			// });
	}

	render () {

		const { value } = this.state;

		if(!localStorage.getItem('token')) {
			return <Redirect to="/login" />
		}

		return (
			
			<div className="custom-div d-flex flex-row">
				
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
				<div class="d-flex flex-column p-2 custom-div">
				<div class="card card-header d-flex flex-row schedule-card">
					<span class="dot pt-1">
						<img class="rounded mx-auto my-auto d-block" src={TitleImage}></img>
					</span>
					<h4 class="p-1 custom-header">{localStorage.getItem('date')}</h4>
				</div>
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
						<li class="list-group-item d-flex justify-content-between align-items-center custom-time border-light">
							Learn React
							<span class="badge badge-light badge-pill">Workshop</span>
						</li>
						<li class="list-group-item d-flex justify-content-between align-items-center custom-time border-light">
							-
						</li>
						<li class="list-group-item d-flex justify-content-between align-items-center custom-time border-light">
							-
						</li>
						<li class="list-group-item d-flex justify-content-between align-items-center custom-time border-light">
							-
						</li>
						<li class="list-group-item d-flex justify-content-between align-items-center custom-time border-light">
							-
						</li>
						<li class="list-group-item d-flex justify-content-between align-items-center custom-time border-light">
							Meeting with Instructor
							<span class="badge badge-warning badge-pill">Meeting</span>
						</li>
						<li class="list-group-item d-flex justify-content-between align-items-center custom-time border-light">
							-
						</li>
						<li class="list-group-item d-flex justify-content-between align-items-center custom-time border-light">
							-
						</li>
						<li class="list-group-item d-flex justify-content-between align-items-center custom-time border-light">
							-
						</li>
						<li class="list-group-item d-flex justify-content-between align-items-center custom-time border-light">
							-
						</li>
						<li class="list-group-item d-flex justify-content-between align-items-center custom-time border-light">
							Do homework
							<span class="badge badge-primary badge-pill">Study</span>
						</li>
						<li class="list-group-item d-flex justify-content-between align-items-center custom-time border-light">
							-
						</li>
						<li class="list-group-item d-flex justify-content-between align-items-center custom-time border-light">
							-
						</li>
					</ul>
				</div>
			</div>

			</div>
			
		  );
	}
}

export default CalendarComponent