import React, { Component } from 'react'
import Sidebar from '../../components/sidebar/sidebar.component.js'
import Profile from '../../components/profile/profile.component.js'
import './profile.css'

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

class ProfilePage extends Component {
	render() {
		return(
			<div>
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
		)
	}
}
export default ProfilePage