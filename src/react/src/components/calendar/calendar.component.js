import React, { Component } from 'react'
import './calendar.css'
import Calendar, { MonthView } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios'
import { Redirect } from 'react-router-dom';
import TitleImage from '../../assets/schedule.png'
import Schedule from './schedule.component';

let events;

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
				window.localStorage.setItem('email', this.state.email);
			});
	}

	clickDay(date) {
		this.state.selectedDay = (date.getFullYear() + ", " + date.getMonth() + ", " + date.getDate()).toString();
		window.localStorage.setItem('date', date.toDateString());
		window.localStorage.setItem('selectedDay', this.state.selectedDay);
		axios.put('http://127.0.0.1:8103/api/db_get_schedule', {'date': this.state.selectedDay, 'email': this.state.email})
			.then(res => {
				window.localStorage.setItem('events', JSON.stringify(res.data));
			})
			.catch((error) => {
				window.localStorage.setItem('events', null);
			});
			
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
					<Schedule />
				</div>
			</div>

			</div>
			
		  );
	}
}

export default CalendarComponent