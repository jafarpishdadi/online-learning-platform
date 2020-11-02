import React, { Component } from 'react'
import Profile from '../../components/profile/profile.component.js'
import './profilePage.css'
import { Redirect } from 'react-router-dom';
// Bunch of pictures
import Headerbar from  '../..//components/headerbar/HeaderTaskbar.js'
import Sidebar from '../..//components/sidebar/sidebar.component.js'
import profile from '../../assets/profile.png'
import classes from '../../assets/classes.png'
import scheduling from '../../assets/scheduling.png'
import community from '../../assets/community.png'
import mailbox from '../../assets/mailbox.png'
import achievements from '../../assets/achievements.png'
import socialInitiatives from '../../assets/Welfare.png'
import settings from '../../assets/settings.png'
import dashboard from '../../assets/dashboard.png'
// End of pictures


let educations = [
    {id:1, text: "University of Toronto Scarbrough Undergraduate"},
    {id:2, text: "Demo element 2"},
    {id:3, text: "Demo element 3"}
]
let skills = [
    {id:1, text: "Demo element 1"},
    {id:2, text: "Demo element 2"},
    {id:3, text: "Demo element 3"},
    {id:4, text: "Demo element 4"}
]
let completedCourses = [
    {id:1, text: "Demo element 1"},
    {id:2, text: "Demo element 2"}
]
let languages = [
    {id:1, text: "English (Native)"},
    {id:2, text: "French (Second)"}
]
let description = "According to all known laws of aviation, \
    there is no way a bee \
    should be able to fly. \
    Its wings are too small to get \
    its fat little body off the ground. \
    The bee, of course, flies anyway \
    because bees don't care \
    what humans think is impossible."
let name = "Lingfeng Su"
let timeJoin = "August 2020"
let firstName = "Lingfeng"
let lastName = "Su"
let email =  "Ling.Su@mail.utoronto.ca"
let phoneNumber = "416-731-9960"

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

class ProfilePage extends Component {
	render() {
		return(
			<React.Fragment>
                <Sidebar books={navItems}/>
                <Headerbar icons={headerItems}/>
                <div className = "profileBox">
                    <Profile 
                        educations = {educations} 
                        skills = {skills} 
                        completedCourses = {completedCourses} 
                        languages = {languages}
                        name = {name}
                        description = {description}
                        timeJoin = {timeJoin}
                        firstName = {firstName}
                        lastName = {lastName}
                        email =  {email}
                        phoneNumber = {phoneNumber}
                        />
                </div>
                    
            </React.Fragment>
			
		)
	}
}
export default ProfilePage