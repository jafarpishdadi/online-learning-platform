import React, { Component } from 'react'
import Calendar from '../../components/calendar/calendar.component.js'
import Schedule from '../../components/calendar/schedule.component.js'
import SmallCards from '../../components/calendar/smallCards.component.js'
import Header from '../../components/headerbar/HeaderTaskbar.js'
import profile from '../../assets/profile.png'
import Sidebar from '../..//components/sidebar/sidebar.component.js'
import classes from '../../assets/classes.png'
import scheduling from '../../assets/scheduling.png'
import community from '../../assets/community.png'
import mailbox from '../../assets/mailbox.png'
import achievements from '../../assets/achievements.png'
import socialInitiatives from '../../assets/Welfare.png'
import settings from '../../assets/settings.png'
import dashboard from '../../assets/dashboard.png'

let headerItems = {link: '/sidebar', title: 'Schedule', profileImg: profile }

let navItems = [
    {id: 1, link: "/dashboard", imgSrc: dashboard, title: "Dashboard" },
    {id: 2, link: "", imgSrc: classes, title: "Classes" },
    {id: 3, link: "/schedule", imgSrc: scheduling, title: "Scheduling" },
    {id: 4, link: "", imgSrc: community, title: "Community" },
    {id: 5, link: "", imgSrc: mailbox, title: "Mailbox" },
    {id: 6, link: "", imgSrc: achievements, title: "Achievements" },
    {id: 7, link: "", imgSrc: socialInitiatives, title: "Social Initiatives" },
    {id: 8, link: "", imgSrc: settings, title: "Settings" }
    ]

class SchedulePage extends Component {
	render() {
		return (
			<React.Fragment>
				<Sidebar books={navItems}/>
				<Header icons={headerItems}/>
				<div class="d-flex flex-row p-2">
					<div class="d-flex flex-column">
						<Calendar />
					</div>
					<Schedule />
				</div>
				
			</React.Fragment>
		)
	}
}

export default SchedulePage
