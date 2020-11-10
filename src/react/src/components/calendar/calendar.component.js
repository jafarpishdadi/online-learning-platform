import React, { Component } from 'react'
import './calendar.css'
import Calendar, { MonthView } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

class CalendarComponent extends Component {

	state = {
		date: new Date(),
	  }

	onChange = date => this.setState({ date })

	render () {

		const { value } = this.state;

		return (
			<div className='custom-div'>
				<div className='react-component'>
						<Calendar
						onChange={this.onChange}
						value={value}
						locale={'en-US'}
						returnValue={'start'}
						maxDetail={'month'}
						minDetail={'year'}
						calendarType={'US'}
						showDoubleView={false}
						/>
				</div>
			</div>
		  );
	}
}

export default CalendarComponent