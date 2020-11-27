import React, { Component } from 'react'
import './dashboard.css'
import Classes from '../..//components/yourClasses/yourClasses.component.js'
import Events from '../..//components/events/events.component.js'
import News from '../..//components/news/news.component.js'
import Headerbar from '../..//components/headerbar/HeaderTaskbar.js'
import Sidebar from '../..//components/sidebar/sidebar.component.js'
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
import { Redirect } from 'react-router-dom';


let headerItems = { link: '/profile', title: 'Dashboard', profileImg: profile }

let navItems = [
    { id: 1, link: "/dashboard", imgSrc: dashboard, title: "Dashboard" },
    { id: 2, link: "/allclasslist", imgSrc: classes, title: "Classes" },
    { id: 3, link: "/schedule", imgSrc: scheduling, title: "Scheduling" },
    { id: 4, link: "", imgSrc: community, title: "Community" },
    { id: 5, link: "/messageuser", imgSrc: mailbox, title: "Messaging" },
    { id: 6, link: "", imgSrc: achievements, title: "Achievements" },
    { id: 7, link: "", imgSrc: socialInitiatives, title: "Social Initiatives" },
    { id: 8, link: "", imgSrc: settings, title: "Settings" }
]

class DashPage extends Component {
    render() {
        if (!localStorage.getItem('token')) {
            return <Redirect to='/login' />
        }
        return (

            <React.Fragment>
                <Sidebar books={navItems} />
                <Headerbar icons={headerItems} />
                <section class="container-dash">
                    <div class="left-half">
                        <article>
                        <div><DashboardCalendarComponent/></div>
                        <div class='classesbox'><Classes/></div>
                        </article>
                    </div>
                    <div class="right-half">
                        <article>
                        <div><Events/></div>
                        <div><News/></div>
                        </article>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default DashPage
