import React, { Component } from 'react'
import Calendar from '../../components/calendar/calendar.component.js'
import Schedule from '../../components/calendar/schedule.component.js'
import SmallCards from '../../components/calendar/smallCards.component.js'

class SchedulePage extends Component {
	render() {
		return (
			<React.Fragment>
				<Schedule />
			</React.Fragment>
		)
	}
}

export default SchedulePage
