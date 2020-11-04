import React, { Component } from 'react'
import Profile from '../../components/profile/profile.component.js'
import './profilePage.css'
import { Redirect } from 'react-router-dom';
import axios from 'axios';
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
    "University of Toronto Scarbrough Undergraduate",
    "Demo element 2",
    "Demo element 3"
]
let skills = [
    "Demo element 1",
    "Demo element 2",
    "Demo element 3",
    "Demo element 4"
]
let completedCourses = [
    "Demo element 1",
    "Demo element 2"
]
let languages = [
    "English (Native)",
    "French (Second)"
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

let headerItems = {link: '/sidebar', title: 'Profile', profileImg: profile }

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
    state = {
        educations: [],
        skills: [],
        completedCourses:[],
        languages: [],
        name: '',
        description: '',
        timeJoin: '',
        firstName: '',
        lastName: '',
        email:  '',
        phoneNumber: '',
    };
    componentDidMount() {
        axios.post('http://127.0.0.1:8103/api/db_get_profile', {'username': 'osman2'})
            .then(response => {
                console.log(response);
                this.setState({educations: response.data['educations']})
                this.setState({skills: response.data['skills']})
                this.setState({completedCourses:response.data['completed_courses']})
                this.setState({languages: response.data['languages']})
                this.setState({name: response.data['name']})
                this.setState({description: response.data['educations']})
                this.setState({timeJoin: response.data['time_join']})
                this.setState({firstName: response.data['first_name']})
                this.setState({lastName: response.data['last_name']})
                this.setState({email: response.data['phone_number']}) //Change this later XD no EMAIL yet
                this.setState({phoneNumber: response.data['phone_number']})
            })
			.catch((error) => {
			console.log(error)
        });
    }

	render() {
        
		return(
			<React.Fragment>
                <Sidebar books={navItems}/>
                <Headerbar icons={headerItems}/>
                <div className = "profileBox">
                    <Profile 
                        educations = {this.state.educations} 
                        skills = {this.state.skills} 
                        completedCourses = {this.state.completedCourses} 
                        languages = {this.state.languages}
                        name = {this.state.name}
                        description = {this.state.description}
                        timeJoin = {this.state.timeJoin}
                        firstName = {this.state.firstName}
                        lastName = {this.state.lastName}
                        email =  {this.state.email}
                        phoneNumber = {this.state.phoneNumber}
                        />
                </div>
                    
            </React.Fragment>
			
		)
	}
}
export default ProfilePage
