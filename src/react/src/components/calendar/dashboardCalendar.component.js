import React, { Component } from 'react'
import './dashboardCalendar.css'
import Card from 'react-bootstrap/Card'
import Calendar, { MonthView } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

class DashboardCalendarComponent extends Component {

	state = {
		date: new Date(),
	  }

	onChange = date => this.setState({ date })

	render () {

		const { value } = this.state;

		return (
            <Card className="dashCardStyle overflow-auto">
            <Card.Body>
                <Card.Title className="classCardTitleStyle">Upcoming Events</Card.Title>
                <div className="calendarTab">
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
						/>
				</div>
			</div>
            <div class="card-subheading">Today</div>
                <button className="btn btn-class">4pm | Class-Web Design</button>
                <button className="btn btn-class-2">9pm | Class-Web Design</button>
                <div class="card-subheading-2">Tommorow</div>
                <div class="card-subheading-3">No event</div>
                </div>
            </Card.Body>
            </Card>

		  );
	}
}

export default DashboardCalendarComponent