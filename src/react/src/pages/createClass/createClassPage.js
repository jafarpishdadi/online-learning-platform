import React, { Component } from 'react'
import './createClassPage.css'
import Classes from '../..//components/yourClasses/yourClasses.component.js'
import Events from '../..//components/events/events.component.js'
import News from '../..//components/news/news.component.js'
import Headerbar from  '../..//components/headerbar/HeaderTaskbar.js'
import Sidebar from '../..//components/sidebar/sidebar.component.js'
import DashboardCalendarComponent from '../..//components/calendar/dashboardCalendar.component.js'
import Picture from '../../assets/createPicture.png'
import profile from '../../assets/profile.png'
import Laptop from '../../assets/laptoplady.png'
import classes from '../../assets/classes.png'
import scheduling from '../../assets/scheduling.png'
import community from '../../assets/community.png'
import mailbox from '../../assets/mailbox.png'
import achievements from '../../assets/achievements.png'
import socialInitiatives from '../../assets/Welfare.png'
import settings from '../../assets/settings.png'
import dashboard from '../../assets/dashboard.png'
import bookclass from '../../assets/book-class.png'
import { Redirect } from 'react-router-dom';
import CreateClass from '../..//components/createClass/createClass.component.js'

let headerItems = {link: '/profile', title: 'Create a New Course', profileImg: profile }

let navItems = [
    {id: 1, link: "/dashboard", imgSrc: dashboard, title: "Dashboard" },
    {id: 2, link: "/allclasslist", imgSrc: classes, title: "Classes" },
    {id: 3, link: "/schedule", imgSrc: scheduling, title: "Scheduling" },
    {id: 4, link: "", imgSrc: community, title: "Community" },
    {id: 5, link: "/messageuser", imgSrc: mailbox, title: "Messaging" },
    {id: 6, link: "", imgSrc: achievements, title: "Achievements" },
    {id: 7, link: "", imgSrc: socialInitiatives, title: "Social Initiatives" },
    {id: 8, link: "", imgSrc: settings, title: "Settings" }
    ]

class CreateClassPage extends Component {
	render() {
        if (!localStorage.getItem('token')) {
            return <Redirect to='/login' />
        }
		return(
			<React.Fragment>
            <Sidebar books={navItems}/>
            <Headerbar icons={headerItems}/>
            <div class= "box-2">
                <div class="picture-book"><img src={bookclass} alt="Map"></img>
                <h1 class="header-create-class">Create the Course</h1></div>
                <div>
                <p>Use the form below to create a class that students can register in for UImpactify</p>
                <div class="picture"> <img src={Laptop} alt="Map"></img></div>
                </div>
            <CreateClass/></div>
			</React.Fragment>
		)
	}
}


export default CreateClassPage
