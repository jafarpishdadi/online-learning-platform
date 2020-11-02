import React, { Component } from 'react'
import './dashboard.css'
import Classes from '../..//components/yourClasses/yourClasses.component.js'
import Events from '../..//components/events/events.component.js'
import News from '../..//components/news/news.component.js'
import Headerbar from  '../..//components/headerbar/HeaderTaskbar.js'
import Sidebar from '../..//components/sidebar/sidebar.component.js'
<<<<<<< Updated upstream
import Picture from '../../assets/createPicture.png'
=======
import DashboardCalendarComponent from '../..//components/calendar/dashboardCalendar.component.js'
import Picture from '../../assets/createPicture.png'
import profile from '../../assets/profile.png'
import classes from '../../assets/classes.png'
import scheduling from '../../assets/scheduling.png'
import community from '../../assets/community.png'
import mailbox from '../../assets/mailbox.png'
import achievements from '../../assets/achievements.png'
import socialInitiatives from '../../assets/Welfare.png'
import settings from '../../assets/settings.png'
import dashboard from '../../assets/dashboard.png'

let headerItems = {link: '/sidebar', title: 'Dashboard', profileImg: profile }

let navItems = [
    {id: 1, link: "", imgSrc: dashboard, title: "Dashboard" },
    {id: 2, link: "", imgSrc: classes, title: "Classes" },
    {id: 3, link: "", imgSrc: scheduling, title: "Scheduling" },
    {id: 4, link: "", imgSrc: community, title: "Community" },
    {id: 5, link: "", imgSrc: mailbox, title: "Mailbox" },
    {id: 6, link: "", imgSrc: achievements, title: "Achievements" },
    {id: 7, link: "", imgSrc: socialInitiatives, title: "Social Initiatives" },
    {id: 8, link: "", imgSrc: settings, title: "Settings" }
    ]
>>>>>>> Stashed changes

class DashPage extends Component {
	render() {
		return(

			<React.Fragment>
<<<<<<< Updated upstream
                <div className="d-flex align-items-end flex-row">
               
               <div class="order-1 p-2">
                <Classes/>
                </div>
                
                <div class="order-2 p-2">
                <Events/>
                </div>
				</div>
				<div className="d-flex align-items-end flex-row">
               
               <div class="order-1 p-2">
                <Classes/>
                </div>
                
                <div class="order-2 p-2">
                <News/>
                </div>
				</div>
=======
            <Sidebar books={navItems}/>
            <Headerbar icons={headerItems}/>
            <div class= "box">
            <div><Classes/></div>
            <div><News/></div>
            </div>

            <div class= "tophalf">
            <DashboardCalendarComponent/>
            <div><Events/></div>

            </div>
>>>>>>> Stashed changes
			</React.Fragment>
		)
	}
}
export default DashPage
